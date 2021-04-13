const express = require('express');
const { ObjectId } = require('mongodb')
const router = express.Router();

const ListItem = require('../models/ListItem');
const List = require('../models/List');

router.get('/:listID', async (req, res) => {
    // Make sure user can read list
    if(req.user === undefined || req.user === null) {
        return res.json({msg: "User not logged in"})
    }

    if(req.params.listID === undefined || req.params.listID === null) {
        return res.json({msg: "Invalid list"})
    }

    const list = await List.findOne({_id: ObjectId(req.params.listID), 'viewers.id': req.user._id.toString()})
    
    if(list === null) {
        return res.json({msg: "User does not have viewing authority."})
    }

    listItems = list.listItems.map(listItem => ObjectId(listItem))
    const items = await ListItem.find()

    return res.json({items})
})

router.post('/:listID', async (req, res) => {
    const {title, description, dueDate, recurring, categories} = req.body
    const author = req.user._id.toString()

    if (dueDate === ''){ dueDate === null}
    if (description === '') {description === null}
    if (recurring === '') {recurring === 'never'}
  
    if(req.user === undefined || req.user === null) {
        return res.json({msg: "User not logged in"})
    }

    if(req.params.listID === undefined || req.params.listID === null) {
        return res.json({msg: "Invalid list"})
    }

    const list = await List.findOne({_id: ObjectId(req.params.listID), 'authors': req.user._id.toString()})

    if(list === null) {
        return res.json({msg: "User does not have authoring authority."})
    }

    const listItem = new ListItem({title, author, description, dueDate, recurring, categories})
    await listItem.save()
    newItem = await List.findByIdAndUpdate(req.params.listID,
        {listItems: [...list.listItems, listItem._id]},
        {new: true})

    res.json(listItem)
})

router.put('/:listID/:itemID', async (req, res) => {
    const list = await List.findOne({_id: ObjectId(req.params.listID), 'authors': req.user._id.toString()})

    if(list === null) {
        return res.json({msg: "User does not have authoring authority."})
    }

    const updatedItem = await ListItem.findByIdAndUpdate(req.params.itemID, req.body, {new: true})
    res.json(updatedItem)
})

router.delete('/:listID', async (req, res) =>{
    const list = await List.findOne({_id: ObjectId(req.params.listID), 'authors': req.user._id.toString()})
    
    if(list === null) {
        return res.json({msg: "User does not have authoring authority."})
    }
    const data = await ListItem.deleteMany({_id: {$in: list.listItems}, 'checked': true})
})

module.exports = router;
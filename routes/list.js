const express = require('express');
const { ObjectId } = require('mongodb')
const router = express.Router();

const ListItem = require('../models/ListItem');
const List = require('../models/List');

router.get('/:listID?', async (req, res) => {
    const listID = req.params.listID
    if(listID === undefined || listID === null){


        if (req.user === null || req.user === undefined) {
            return res.json({msg: "Please log in"})
        }
    
        const lists = await List.find({'viewers.id': req.user._id.toString()})
        
        if(lists === null) {
            return res.json({msg: "No Lists"})
        }
    
        return res.json({lists})

    }

    let list;
    if (listID === null || listID === "null"){
        return res.json({msg: "Invalid List"})
    }else if (req.user === undefined || req.user === null) {
        list = await List.findOne({_id: ObjectId(listID), 'share': 1})
    }else{
        list = await List.findOne({_id: ObjectId(req.params.listID), 'viewers.id': req.user._id.toString()})
    }

    if(list === null) {
        return res.json({msg: "User does not have viewing authority."})
    }

    return res.json(list)

})

router.post('/', async (req, res) => {
    const {title, type, description} = req.body

    if (req.user === null || req.user === undefined) {
        return res.json({msg: "Please log in"})
    }

    const id = req.user._id.toString()

    const owner = {id, name: req.user.name}
    const authors = [id]
    const viewers = [
        {id, name: req.user.name}
    ]

    const newList  = new List({title, type, owner, authors, viewers, description})
    const savedList = await newList.save()

    res.json(savedList)

})

router.put('/:listID/:userID?', async (req, res) => {
    if (req.user === null || req.user === undefined) {
        return res.json({msg: "Please log in"})
    }

    if (req.params.userID === null || req.params.userID === undefined){

        
        const list = req.body.viewers ? await List.findOneAndUpdate({_id: ObjectId(req.params.listID), 'authors': req.user._id.toString()}, {$push: req.body}, {new: true}) : await List.findOneAndUpdate({_id: ObjectId(req.params.listID), 'authors': req.user._id.toString()}, req.body, {new: true})
        
        
        if(list === null) {
            return res.json({msg: "User does not have authoring authority."})
        }
        
        return res.json(list)
    }

    const list = await List.findOneAndUpdate({_id: ObjectId(req.params.listID), 'authors': req.user._id.toString()}, {$pull: req.body}, {new: true})
    
    if(list === null) {
        return res.json({msg: "User does not have authoring authority."})
    }

    return res.json(list)

})

router.delete('/:listID', async (req, res) => {
    if (req.user === null || req.user === undefined) {
        return res.json({msg: "Please log in"})
    }
    
    const list = await List.findOneAndDelete({_id: ObjectId(req.params.listID), 'owner.id': req.user._id.toString()})
    
    if(list === null) {
        return res.json({msg: "No Lists"})
    }

    await ListItem.deleteMany({_id: {$in: list.listItems}})
    return list

})

module.exports = router;
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

    const list = await List.findOne({_id: ObjectId(req.params.listID), viewers: req.user._id.toString()})
    
    if(list === null) {
        return res.json({msg: "User does not have viewing authority."})
    }
    listItems = list.listItems.map(listItem => ObjectId(listItem))
    const items = await ListItem.find()

    return res.json({items})
})



module.exports = router;
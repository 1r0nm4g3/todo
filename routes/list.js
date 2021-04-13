const express = require('express');
const { ObjectId } = require('mongodb')
const router = express.Router();

const ListItem = require('../models/ListItem');
const List = require('../models/List');

router.get('/', async (req, res) => {

    if (req.user === null || req.user === undefined) {
        return res.json({msg: "Please log in"})
    }
    const lists = await List.find({'viewers.id': req.user._id.toString()})
    
    if(lists === null) {
        return res.json({msg: "No Lists"})
    }

    return res.json({lists})
})


module.exports = router;
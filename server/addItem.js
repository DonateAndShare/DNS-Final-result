const express = require("express");
const cors = require("cors");

var router = express.Router();

const mongo = require("../database/addItem")

router.get('/test', (req, res) => {
    mongo.readData((result) => {
        res.json(result);
    })
});
router.put('/users',(req,res)=>{
    console.log('req.data', req.body)
    let newItem = req.body
    console.log("server put add item")
    mongo.additem(newItem , result =>{
        res.send(result);
    });
});
module.exports = router;
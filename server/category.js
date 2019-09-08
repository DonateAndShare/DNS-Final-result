const express = require("express");
const cors = require("cors");
let router = express.Router();
const mongo = require("../database/category");


router.get('/test', (req, res) => {
    mongo.readData((result) => {
        res.json(result);
    })
});
router.get('/search/:category', (req, res) => {
    let searchText = req.params.category
    console.log('req.body', searchText);
    mongo.getCategory(searchText, (result) => {
        let allItemsObj = [];
        let allItems = [];
        for (const key in result) {
            // console.log('key', key);
            // console.log('key.items', result[key].items);
            allItemsObj.push(result[key].items);
            // console.log('allItemsObj', allItemsObj);
        }
        // console.log('allitemsObj', allItemsObj)
        allItemsObj.map(elem => {
            elem.map(element => {
                allItems.push(element)
            })
        })
        res.json(allItems);
    })
});
module.exports = router;
const express = require("express");
const cors = require("cors");

var router = express.Router();

const mongo = require("../database/searchResult")

router.get('/search/:search', (req, res) => {
    let searchText = req.params.search
    console.log('');
    console.log('req.body', searchText);
    mongo.search(searchText, (result) => {
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
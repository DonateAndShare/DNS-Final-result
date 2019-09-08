const express = require("express");
const cors = require("cors");

var router = express.Router();

const mongo = require("../database/itemSlice")

router.get('/test', (req, res) => {
    mongo.readData((result) => {
        res.json(result);
    })
});
// router.get('/user', (req, res) => {
//     console.log('itemslice')
//     mongo.readData((result) => {
//         console.log('result', result)
//         console.log('result', result)
//         res.json(result);
//     })
// });
router.get('/allData', (req, res) => {
    mongo.allData((result) => {
        let allItemsObj = [];
        let allItems = [];
        for (const key in result) {
            console.log('key', key);
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
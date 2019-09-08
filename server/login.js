const express = require("express");
const cors = require("cors");

var router = express.Router();

const mongo = require("../database/login")

router.get('/:username/:password', (req, res) => {
    let username = req.params.username
    let password=req.params.password
    // console.log("req.body from server:", req.body)
    mongo.readData(username,password, (result) => {
        console.log("result:", result)
        // console.log("result:", result)

        res.json(result);
    })
});

module.exports = router;
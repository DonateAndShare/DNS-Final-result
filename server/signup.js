
const express = require("express");
const cors = require("cors");
// const app = express();

// app.use(express.json())

var router = express.Router();
const mongo = require("../database/signup")

router.post('/users', (req, res) => {
    // console.log('PSOT')
    let newUser = req.body;
    // console.log('PSOT USR:',newUser)

    mongo.addData(newUser, (result) => {
        // console.log(result)
        res.json(result);
    })
});

router.get('/checkUsers/:user', (req, res) => {
    console.log('checkUsers')
    // let user = req.par
    let user = req.params.user
    console.log('GET USER:',user)
    mongo.readDataIf(user, (result) => {
        // console.log("RESULT GET")
        res.send(result)
    })
})

module.exports = router;
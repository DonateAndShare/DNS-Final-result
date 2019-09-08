const db = require("../database")
let Users = db.Users


let readData = (username,password, cb) => {
    Users.find({username: username,password:password}, (err, data) => {
        console.log("username from database:", username)
        if (err) {
            cb(err)
        } else {
            // console.log('data:', data);
            cb(data)
        }
    })
}

module.exports = {
    readData
}
const db = require("../database")
let Users = db.Users


let readData = (cb) => {
    Users.find({}, (err, data) => {
        if (err) {
            cb(err)
        } else {
            console.log('data:', data);
            cb(data)
        }
    })
}

let readDataIf = (user, cb) => {
    Users.find({username: user}, (err, data) => {
        if (err) {
            cb(err)
        } else {
            // console.log('data:', data);
            cb(data)
        }
    })
}

let addData = (newUser, cb) => {
    Users.create(newUser, (err, data) => {
        if (err) {
            cb(err)
        } else {
            // console.log('data:', data);
            readData(cb)
        }
    })
}
module.exports = {
    readData,
    addData,
    readDataIf
}
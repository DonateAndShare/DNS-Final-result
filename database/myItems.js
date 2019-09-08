const db = require("../database")
let Users = db.Users


let readData = (cb) => {
    Users.find({}, (err, data) => {
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
const db = require("../database")
let Users = db.Users


let allData = (cb) => {
    Users.find({}, { items: [] }, (err, data) => {
        if (err) {
            cb(err)
        } else {
            // console.log('data:', data);
            cb(data)
        }
    })
 }

  
 

module.exports = {
    allData
}
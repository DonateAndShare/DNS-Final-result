const db = require("../database")
console.log('object', db)
let Users = db.Users;


let readData = (cb) => {
    Users.find({}, (err, data) => {
        if (err) {
            cb(err)
        } else {
            cb(data)
        }
    })
}
let getCategory = (searchtext, cb) => {
    let regex = new RegExp(`${searchtext}`);
    Users.find({}, { items: { $elemMatch: { category: { $regex: regex } } } }, (err, data) => {
        if (err) {
            cb(err)
        } else {
            // console.log('data:', data);
            cb(data)
        }
    })
}
module.exports = {
    readData,
    getCategory
}
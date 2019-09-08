const db = require("../database")
let Users = db.Users



let search = (searchtext, cb) => {
    regex = new RegExp(`${searchtext}`);
    Users.find({}, { items: { $elemMatch: { $or: [{ itemName: { $regex: regex } }, { itemDescription: { $regex: regex } }] } } }, (err, data) => {
        if (err) {
            cb(err)
        } else {
            // console.log('data:', data);
            cb(data)
        }
    })
}

module.exports = {
 
    search
}
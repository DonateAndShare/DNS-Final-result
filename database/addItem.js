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
let additem =(newItem,cb) =>{
Users.findByIdAndUpdate(newItem._id, newItem,(err,data)=>{
    if(err){
        cb(err)
    }else {
        cb(data)
    }
})

}

module.exports = {
    readData,
    additem
}
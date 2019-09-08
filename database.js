const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/DnSUsers', { useNewUrlParser: true });
const db = mongoose.connection;

db.on('error', function () {
  console.log('mongoose connection error');
  console.log('____________________________')
});

db.once('open', function () {
  console.log('mongoose connected successfully');
  console.log('____________________________')
});


let usersSchema = new mongoose.Schema({
  // _id: String,
  firstName: String,
  lasttName: String,
  username: String,
  phone: Number,
  email: String,
  birthday: Date,
  password: String,
  isLogin: Boolean,
  dateOfSignUp: { type: Date, default: Date.now },
  items: Array
  
});

let Users = mongoose.model('users', usersSchema);



module.exports = {
  Users
}




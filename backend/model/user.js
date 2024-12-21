// const mongoose = require("mongoose");
// const Schema = mongoose.Schema;
// const passportLocalMongoose = require('passport-local-mongoose');

// // When we use passport for user authentication and authorization so 
// // it automatically create user name and password fields so there is no need to 
// // create its model only we need to create the model of email
// // it also applies salting to the password and genrates the hashed from of our password
// const userSchema = new Schema({
//     email:{
//         type:String,
//         required:true,
//     },
// });
// User.plugin(passportLocalMongoose);
// module.exports = mongoose.model("User" , userSchema);
const mongoose = require('mongoose') 
const bcrypt = require('bcrypt')      //for salting and hashing the password before storing it into db

const UserSchema = new mongoose.Schema({     //creating & defining the schema 
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    }
})


// Encrypt the password
UserSchema.pre('save', function (next){               //pre is a middleware functtion used when before making any changes to db
    const saltRounds = 10
    this.password = bcrypt.hashSync(this.password, saltRounds)
    next()                                           //used for not to block the execution and carry forward to the next mongoose middleware
})

module.exports = mongoose.model("user",UserSchema)        //export from this file so other files can acess it this exported code
const express = require('express')
const logger = require('morgan')
const bodyParser = require('body-parser') 
const app = express() 
require("dotenv").config();
const userRoute = require('./app/api/routes/users')
const ToDoRoute = require('./app/api/routes/todo')
const mongoose = require('mongoose')   
const jwt = require('jsonwebtoken')
app.set('secretKey','abcdefghikhdk')

const userValidation = (req,res,next) => {
    jwt.verify(req.headers['x-access-token'], req.app.get('secretKey'),
    (err,decoded) =>{
        if(err){
            res.json({
                message:err
            })
        }
        next()
    })
}

app.use(logger('dev'))
app.use(bodyParser.json())
app.use('/user',userRoute)
app.use('/todo',userValidation,ToDoRoute)

app.get('/', (req,res) => {
    res.json({
        "APP": "JWT Based API Application ",
        "message": "Successfully Checked the Application"
    })
})

const mongoURI = "mongodb+srv://madhaoweb:Maddy123@cluster0.gllq4.mongodb.net/?retryWrites=true&w=majority"

mongoose.connect(mongoURI)
.then(() => {
    console.log("Succesfully Connected to DB...")
})
.catch((err) => {
    console.log(err)
})

app.listen(process.env.PORT || 5000,() => {
    
    console.log("Successfully Running on PORT: 5000")
})
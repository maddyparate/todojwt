const ToDoModel = require('../models/todo')

//Create a task
const createTask = (req,res,next) => {
    let {task,assigned_email} = req.body
    ToDoModel.create({
        task,
        assigned_email
    }), (err,result) => {
        if(err)
            next(err)
        res.json({
            status:"Success",
            message:"Added Task Successfully"
        })
    }
}

//Read a task
const readAllTask = (req,res,next) => {
    ToDoModel.find({}, (err,result) => {
        if(err)
        next(err)
        res.json({
            status:"Success",
            message:"Succesfully Retrieved all the Task.",
            data:{
                tasks: result
            }
        })
    })
}

//Read a task by Id
const readTaskById = (req,res,next) => {
    ToDoModel.findById(req.params.id, (err,result) => {
        if(err)
        next(err)
        res.json({
            status:"Success",
            message:"Succesfully Retrieved the Task by ID",
            data:{
                task: result
            }
        })
    })
}

// Update task By Id
const updateTaskById = (req,res,next) => {
    ToDoModel.findByIdAndUpdate(req.params.id,req.body,(err,result) => {
        if(err)
            next(err)
        res.json({
            status:"Success",
            message:"Successfully Updated a Task By ID",
            data:{
                movie: result
            }
        })
    })
} 

// Delete Task By Id
const deleteTaskById = (req,res,next) => {
    ToDoModel.findByIdAndRemove(req.params.id,(err,result) => {
        if(err)
            next(err)
        res.json({
            status:"Success",
            message:"Successfully Deleted Task By ID",
            data:{
                movie: result
            }
        })
    })
} 

module.exports = {createTask,readAllTask,readTaskById,updateTaskById,deleteTaskById}
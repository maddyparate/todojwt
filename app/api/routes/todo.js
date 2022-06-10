const express = require('express')
const router = express.Router()
const ToDoController = require('../controllers/todo')

//Create Task
router.post('/create',ToDoController.createTask)
//Read Task
router.get('/getAllTasks',ToDoController.readAllTask)
//Read Task by ID
router.get('/getTaskById/:id',ToDoController.readTaskById)
//Update Task by ID
router.put('/updateTaskById/:id',ToDoController.updateTaskById)
//Delete Task by ID
router.delete('/deleteTaskById/:id',ToDoController.deleteTaskById)


module.exports = router
const Task = require('../models/Task')

const getAllTasks = async (req, res) => {
  try {
    const tasks = await Task.find({})
    res.json({ tasks })
  } catch (error) {
    res.status(500).send({ msg: error.message })
  }
}

const createTask = async (req, res) => {
  try {
    const task = await Task.create(req.body)
    res.json({ task })
  } catch (error) {
    res.status(500).send({ msg: error.message })
  }
}

const getTask = async (req, res) => {
  try {
    const { id: taskID } = req.params
    const task = await Task.findOne({ _id: taskID })
    res.json({ task })
  } catch (error) {
    res.status(404).send({ msg: error.message })
  }
}

const deleteTask = async (req, res) => {
  try {
    const { id: taskID } = req.params
    const task = await Task.findOneAndDelete({ _id: taskID })
    if (!task) {
      return res.status(404).send({ msg: 'Task not found' })
    }
    res.json({ task })
  } catch (error) {
    res.status(500).send({ msg: error.message })
  }
}

const updateTask = async (req, res) => {
  try {
    const { id: taskID } = req.params
    const task = await Task.findOneAndUpdate({ _id: taskID }, req.body, {
      new: true,
      runValidators: true,
    })
    if (!task) {
      return res.status(404).send({ msg: 'Task not found' })
    }
    res.json({ task })
  } catch (error) {
    res.status(500).send({ msg: error.message })
  }
}

module.exports = {
  getAllTasks,
  createTask,
  getTask,
  updateTask,
  deleteTask,
}

import Task from '../models/Task.js'

export const renderTasks = async (req, res) => {
  const tasks = await Task.find().lean()
  res.render("index", { tasks: tasks })
}

export const addTasks = async (req, res) => {
  try {
    const task = Task(req.body);
    await task.save()
    res.redirect("/")
  }
  catch (e) {
    console.error(e)
  }
}

export const renderEditTask = async (req, res) => {
  try {
    const task = await Task.findById(req.params.id).lean()
    res.render("edit", { task })
  }
  catch (e) {
    console.error(e.message)
  }
}


export const deleteTask = async (req, res) => {
  const { id } = req.params;
  await Task.findByIdAndDelete(id);
  res.redirect("/")
}

export const taskToggleDone = async (req, res) => {
  const { id } = req.params;
  const task = await Task.findById(id)
  task.done = !task.done
  await task.save();
  res.redirect("/");
}
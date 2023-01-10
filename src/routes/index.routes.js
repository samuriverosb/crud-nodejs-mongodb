import { Router } from 'express';
import "../models/Task.js";
import { renderTasks, addTasks, renderEditTask, editTask, deleteTask, taskToggleDone } from '../controllers/tasks.controller.js';

const router = Router();

router.get("/", renderTasks);

router.post("/tasks/add", addTasks);

router.get("/edit/:id", renderEditTask);

router.post("/edit/:id", editTask);

router.get("/delete/:id", deleteTask);

router.get("/toggleDone/:id", taskToggleDone);

export default router;
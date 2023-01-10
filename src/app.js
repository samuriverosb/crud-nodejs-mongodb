import express from "express";
import indexRoutes from "./routes/index.routes.js";
import {engine} from 'express-handlebars';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url))

const app = express();

app.set('views', join(__dirname, "views"))

// Handlebars
app.engine(".hbs", engine({
  layoutDir: join(app.get("views"), "layouts"),
  defaultLayout: "main",
  extname: ".hbs"
}))

app.set("view engine", ".hbs")

// Middleware
// app.use(express.urlencoded({ extended: false }))

// Routes
app.use(indexRoutes);

// Static files
// app.use(express.static(join(__dirname, "public")));

export default app;
import './config.js';
import app from "./app.js"
import "./database.js"

const PORT = process.env.PORT || 5345;
app.listen(PORT)
console.log("Server listening on port", PORT)
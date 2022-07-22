import express from "express";
import notes from "./data/notes.js";
import dotenv from "dotenv";

dotenv.config();
const app = express();
app.get("/", (req, res) => {
    res.send("Api is running");
})
app.get("/api/notes", (req, res) => {
    res.send(notes);
})
app.get("/api/notes/:id", (req, res) => {
    const note = notes.find((n) => (n._id === req.params.id))
    res.send(note);
})

const PORT = process.env.PORT || 5000 ;
app.listen( PORT, console.log(`server is running at PORT ${PORT}`));
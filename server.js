const express = require("express");

const app = express();   //Creates Express application

const PORT = 3000;

app.get("/", (req, res) => {
    res.send("Smart Invoice Parser Backend Running");
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
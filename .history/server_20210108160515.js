const { constant } = require("async");

const express = require("express");
const PORT = process.env.PORT || 8080

const app = express();

app.get('/', (req, res) => {
    res.send("Crud Application");
})

app.listen(PORT, () => { console.log('Server is running on http://localhost:${PORT}') });
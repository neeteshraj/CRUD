const express = require('express');

const app = express();
const PORT = process.env.PORT || 8080

app.get('/', function(req, res) => {
    res.send("Crud Application");
});

app.listen(PORT, () => { console.log('Server is running on http://localhost:${PORT}') });
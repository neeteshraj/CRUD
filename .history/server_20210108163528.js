const express = require('express');

const app = express()
const PORT = process.env.PORT

app.get('/', (req, res) => {
    res.send("Crud Application")
})
app.listen(PORT, () => {
    console.log('Server is running on http://localhost:${PORT}')
})
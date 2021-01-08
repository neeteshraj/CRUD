const express = require('express');
const dotenv = require('dotenv');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();

dotenv.config({ path: 'config.env' })
const PORT = process.env.PORT || 8080

//log request
app.use(morgan('tiny'))

//parse request to body parser
app.use(bodyParser.urlencoded({ extended: true }))

//set view engine
app.set("view engine", "ejs")
app.set("views", path.resolve(__dirname, "views / ejs"))

//load assets
app.use('/css', express.static(path.resolve(__dirname, "assets/css")))
app.use('/css', express.static(path.resolve(__dirname, "assets/img")))
app.use('/css', express.static(path.resolve(__dirname, "assets/js")))



app.get('/', (req, res) => {
    res.send('Crud Application');
})
app.listen(PORT, () => {
    console.log('Server is running on http://localhost:${PORT}')
});
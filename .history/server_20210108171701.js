const express = require('express');
const dotenv = require('dotenv');
const morgan = require('morgan');
const bodyParser = require('body-parser');

const app = express();

dotenv.config({ path: 'config.env' })
const PORT = process.env.PORT || 8080

//log request
app.use(morgan('tiny'))

app.get('/', (req, res) => {
    res.send('Crud Application');
})
app.listen(PORT, () => {
    console.log('Server is running on http://localhost:${PORT}')
});
const express = require('express')
const app = express()
const port = 4000;
const mongoose = require('mongoose')

app.listen(port, () => {
    console.log(`Listening at http://localhost:${port}`);
});

mongoose.connect('mongodb://localhost:27017/node-api-101', { useNewUrlParser: true })
// respond with "hello world" when a GET request is made to the homepage
app.get('/', (req, res) => {
    res.send('hello world')
})
const express = require('express');
const cors = require('cors');
const { request, response } = require('express');

const bodyParser = require('body-parser');

const app = express();
app.use(express.json()) 
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/led', (request, response) => {
    const led = request.body.led;
    console.log(`O led está ${led}`);
})

app.listen('3030', () => console.log("The server is runing"));
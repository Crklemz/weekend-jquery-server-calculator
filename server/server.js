const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const PORT = 5000;

// let previousResults = [];
// let currentResult = [];

app.use(express.static('server/public')); 
app.use(bodyParser.urlencoded({extended : true}));

//taking in data from client.js from handleCalculate
app.post('/equationObjects', (req, res) => {
    equationObject = req.body
    console.log(equationObject);


    res.sendStatus(201);
})






app.listen(PORT, () => {
    console.log('RUNNING ON PORT:', PORT)
});
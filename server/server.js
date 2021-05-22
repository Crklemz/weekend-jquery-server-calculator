const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const PORT = 5000;

// let previousResults = [];
// let currentResult = [];

app.use(express.static('server/public')); 
app.use(bodyParser.urlencoded({extended : true}));

app.post('/equationObjects', (req, res) => {
    equationObject = req.body
    console.log(equationObject);
    
    
})




app.post('/guesses', (req, res) => {
    guesses = req.body;
    console.log(guesses); 
    checkGuesses(guesses);
    countRounds();
    res.sendStatus(201);
  }) //for posting guesses from client.js




app.listen(PORT, () => {
    console.log('RUNNING ON PORT:', PORT)
});
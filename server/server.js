const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const PORT = 5000;

let results = [];


app.use(express.static('server/public')); 
app.use(bodyParser.urlencoded({extended : true}));

app.listen(PORT, () => {
    console.log('RUNNING ON PORT:', PORT)
});

//taking in data from client.js from handleCalculate
app.post('/equationObjects', (req, res) => {
    equationObject = req.body
    console.log(equationObject);
    
    calculate(equationObject)
    
    res.sendStatus(201);
})

app.get('/results', (req, res) => {
    console.log('Got to /results');
  
  res.send(results);
})

function calculate() {
    let answer;

    if(equationObject.operator = '+') {
       answer = parseInt(equationObject.num1) + parseInt(equationObject.num2);

    } 
    
    if (equationObject.operator = '-') {
        answer = parseInt(equationObject.num1) - parseInt(equationObject.num2);

    } 
    
    if (equationObject.operator = '*') {
        answer = parseInt(equationObject.num1) * parseInt(equationObject.num2);

    } 
    
    if (equationObject.operator = '/') {
        answer = parseInt(equationObject.num1) / parseInt(equationObject.num2);
    }

    results.push(answer);
}//end calculate

console.log(results);






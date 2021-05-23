const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const PORT = 5000;

let results = [];




app.use(express.static('server/public'));
app.use(bodyParser.urlencoded({
    extended: true
}));

app.listen(PORT, () => {
    console.log('RUNNING ON PORT:', PORT)
});

//taking in data from client.js from handleCalculate
app.post('/equationObjects', (req, res) => {
    equationObject = req.body
    console.log('posting /equationObjects', equationObject);

    console.log('in app.post, running calculate with equationObject as an argument', calculate(equationObject));

    res.sendStatus(201);
})

app.get('/results', (req, res) => {
    console.log('Got to /results');
    console.log('in app.get /results, results has value of -->', results);
    

    res.send(results);
})

function calculate(object) {
    let answer;
    console.log('at beginning of calculate function', object);

    if (object.operator == '+') {
        console.log('in calculate function if +', object);
        answer = parseInt(object.num1) + parseInt(object.num2);

    } else if (object.operator == '-') {
        console.log('in calculate function if -', object);

        answer = parseInt(object.num1) - parseInt(object.num2);

    } else if (object.operator == '*') {
        console.log('in calculate function if *', object);

        answer = parseInt(object.num1) * parseInt(object.num2);

    } else if (object.operator == '/') {
        console.log('in calculate function if /', object);
        answer = parseInt(object.num1) / parseInt(object.num2);
    }

    results.push(answer);

} //end calculate

console.log(results);
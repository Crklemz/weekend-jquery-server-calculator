const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const PORT = 5000;

let 

app.use(express.static('server/public')); 
app.use(bodyParser.urlencoded({extended : true}));











app.listen(PORT, () => {
    console.log('RUNNING ON PORT:', PORT)
});
const express = require('express');
// const { stringify } = require('querystring');

const app = express();
const port = 5001;



app.use(express.static('server/public'));
app.use(express.urlencoded());

app.listen(port, () => {
    console.log('listening on port, ', port);
});


let newEquation = {};
let history = [];

app.post('/newEquation', function(req, res) {
    // console.log("newEquation object:", req.body);
    res.sendStatus(201);
    newEquation = req.body;
    // console.log("operation:", newEquation.operation);
    let operation = newEquation.operation;
    if (operation == '+'){
    let result = Number(newEquation.num1) + Number(newEquation.num2);
    // console.log('result:', result);
    newEquation.answer = result;
    history.push(newEquation);
    console.log("history", history);
    }
    if (operation == '-'){
        let result = Number(newEquation.num1) - Number(newEquation.num2);
        // console.log('result:', result)
        newEquation.answer = result;
        history.push(newEquation);
        console.log("history", history);
    }
    if (operation == '*'){
        let result = Number(newEquation.num1) * Number(newEquation.num2);
        // console.log('result:', result)
        newEquation.answer = result;
        history.push(newEquation);
        console.log("history", history);
    }
    if (operation == '/'){
        let result = Number(newEquation.num1) / Number(newEquation.num2);
        // console.log('result:', result)
        newEquation.answer = result;
        history.push(newEquation);
        console.log("history", history);
    }
    
});

app.get('/newEquation', function(req, res) {
    // console.log("request for /newEquation was made");
    let operation = newEquation.operation;
    if (operation == '+'){
        let result = Number(newEquation.num1) + Number(newEquation.num2);
        res.send(result.toString());
    }
    if (operation == '-'){
        let result = Number(newEquation.num1) - Number(newEquation.num2);
        res.send(result.toString());
    }
    if (operation == '*'){
        let result = Number(newEquation.num1) * Number(newEquation.num2);
        res.send(result.toString());
    }
    if (operation == '/'){
        let result = Number(newEquation.num1) / Number(newEquation.num2);
        res.send(result.toString());
    }
});

app.get('/history', function(req, res) {
    console.log("request for /history was made");
    res.send(history);
});
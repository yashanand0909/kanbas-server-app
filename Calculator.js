import e from "express";

function Calculator(app) {
    app.get('/a5/add/:num1/:num2', function(req, res) { 
        let num1 = parseInt(req.params.num1);
        let num2 = parseInt(req.params.num2);
        let sum = num1 + num2;
        res.send(`The sum of ${num1} and ${num2} is ${sum}`)
    });
}

function CalculatorQuery(app){
    app.get('/a5/calculator', function(req, res) {
        let num1 = parseInt(req.query.num1);
        let num2 = parseInt(req.query.num2);
        let operator = req.query.operator;
        switch(operator){
            case 'add':
                res.send(`The sum of ${num1} and ${num2} is ${num1 + num2}`);
                break;
            case 'subtract':
                res.send(`The difference of ${num1} and ${num2} is ${num1 - num2}`);
                break;
            case 'multiply':
                res.send(`The product of ${num1} and ${num2} is ${num1 * num2}`);
                break;
            case 'divide':
                res.send(`The division of ${num1} and ${num2} is ${num1 / num2}`);
                break;
            default:
                res.send('Invalid operator');
        }
    });
}

export {Calculator, CalculatorQuery};
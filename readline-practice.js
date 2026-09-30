const readline = require('readline-sync');
let name = readline.question("What is your name? ");
console.log("Greetings, " + name + "!");

let conversionQuestion = readline.question("name two types of javascript conversions? ");
let floatQuestion = readline.questionFloat("give me an example of a floating point number in javascript? ");
let booleanQuestion = readline.question("What is a potential value of a boolean? ");
let variableQuestion = readline.question("What is one keyword you can use to create a variable in javascript? ");
let directoryQuestion = readline.question("What does the mkdir command do? ");
let userAnswers = [conversionQuestion, floatQuestion, booleanQuestion, variableQuestion, directoryQuestion];
console.log("Below please find a record of your responses: " + userAnswers);

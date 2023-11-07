import { sum } from "./Operations/add.js";
import { sub } from "./Operations/sub.js";
import { mul } from "./Operations/mul.js";
import { div } from "./Operations/div.js";
import inquirer from "inquirer";
let answer = await inquirer.prompt([{
        message: "Enter your first Number : ",
        type: "number",
        name: "num1",
    },
    {
        message: "Enter your second Number : ",
        type: "number",
        name: "num2",
    },
    {
        message: "select operator : ",
        type: "list",
        choices: ["+", "-", "*", "/"],
        name: "operator"
    }]);
let { num1, num2, operator } = answer;
console.log(num1);
if (num1 && num2 && operator) {
    let result;
    if (operator === "+") {
        let result = sum(answer.num1, answer.num2);
        console.log("Result : ", result);
    }
    else if (operator === "-") {
        let result = sub(answer.num1, answer.num2);
        console.log("Result : ", result);
    }
    else if (operator === "*") {
        let result = mul(answer.num1, answer.num2);
        console.log("Result : ", result);
    }
    else if (operator === "/") {
        let result = div(answer.num1, answer.num2);
        console.log("Result : ", result);
    }
}

#! /usr/bin/env node

import inquirer from "inquirer";

const answer = await inquirer.prompt([
    { message: "Enter first number", type: "number", name: "firstNumber" },
    { message: "Enter second number", type: "number", name: "secondNumber" },
    {
      message: "Select one of the operator to perform operation",
      type: "list",
      name: "operator",
      choices: ["Addition", "Subtraction", "Multiplication", "Divison", 'Not Valid'],
    },
  ]);
  //Conditional statments
  if (answer.operator === "Addition") {
    console.log(answer.firstNumber + answer.secondNumber);
  } else if (answer.operator === "Subtraction") {
    console.log(answer.firstNumber - answer.secondNumber);
  } else if (answer.operator === "Multiplication") {
    console.log(answer.firstNumber * answer.secondNumber);
  } else if (answer.operator === "Divison") {
    console.log(answer.firstNumber / answer.secondNumber);
  } else console.log("Invalid Operator!\nPlease select Valid Operator NexT time,\nThank you;");
  // printing made by:
  console.log('\n"Made by Hmoavia.07"');
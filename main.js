#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
let exit = false;
do {
    console.log(chalk.yellow("\nSIMPLE CALCULATOR\n"));
    const answer = await inquirer.prompt([
        {
            message: chalk.green("Enter First Number: "),
            name: "firstNumber",
            type: "number",
            validate: input => !isNaN(input) || "Please enter a valid number"
        },
        {
            message: chalk.green("Enter Second Number: "),
            name: "secondNumber",
            type: "number",
            validate: input => !isNaN(input) || "Please enter a valid number"
        },
        {
            message: chalk.green("Select the Mathematical Operation: "),
            name: "operator",
            type: "list",
            choices: ["Addition", "Subtraction", "Multiplication", "Division"]
        }
    ]);
    let result;
    if (answer.operator === "Addition") {
        result = answer.firstNumber + answer.secondNumber;
        console.log(chalk.cyan.bold("Result:"), result);
    }
    else if (answer.operator === "Subtraction") {
        result = answer.firstNumber - answer.secondNumber;
        console.log(chalk.cyan.bold("Result:"), result);
    }
    else if (answer.operator === "Multiplication") {
        result = answer.firstNumber * answer.secondNumber;
        console.log(chalk.cyan.bold("Result:"), result);
    }
    else if (answer.operator === "Division") {
        if (answer.secondNumber !== 0) {
            result = answer.firstNumber / answer.secondNumber;
            console.log(chalk.cyan.bold("Result:"), result);
        }
        else {
            console.log(chalk.red.bold("Error: Please enter a non-zero number."));
            continue; // Skip the rest of the loop iteration
        }
    }
    let exitAnswer = await inquirer.prompt({
        name: "answer",
        message: chalk.yellow("Would you like to perform another operation?"),
        type: "list",
        choices: ["Yes", "No"]
    });
    if (exitAnswer.answer === "No") {
        exit = true;
        console.log(chalk.red("Exiting program."));
    }
} while (!exit);

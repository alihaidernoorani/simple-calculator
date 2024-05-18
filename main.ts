#!/usr/bin/env node

import inquirer from "inquirer";
import chalk from "chalk";

// Initialize flag to control program execution
let exit = false;

// Main program loop
do {
    // Display header for the simple calculator
    console.log(chalk.yellow("\nSIMPLE CALCULATOR\n"));

    // Prompt the user for input
    const answer = await inquirer.prompt([
        {
            message: chalk.green("Enter First Number: "),
            name: "firstNumber",
            type: "number",
        },
        {
            message: chalk.green("Enter Second Number: "),
            name: "secondNumber",
            type: "number",
        },
        {
            message: chalk.green("Select the Mathematical Operation: "),
            name: "operator", 
            type: "list",
            choices: ["Addition", "Subtraction", "Multiplication", "Division"]            
        }
    ]);

    // Variable to store the result of the calculation
    let result;

    // Check if both inputs are valid numbers
    if (!isNaN(answer.firstNumber) && !isNaN(answer.secondNumber)) {  
        // Perform the selected mathematical operation
        if (answer.operator === "Addition") {
            result = answer.firstNumber + answer.secondNumber;
            console.log(chalk.cyan.bold("Result:"), result);
        } else if (answer.operator === "Subtraction") {
            result = answer.firstNumber - answer.secondNumber;
            console.log(chalk.cyan.bold("Result:"), result);
        } else if (answer.operator === "Multiplication") {
            result = answer.firstNumber * answer.secondNumber;
            console.log(chalk.cyan.bold("Result:"), result);
        } else if (answer.operator === "Division") {
            // Check for division by zero
            if (answer.secondNumber !== 0) {
                result = answer.firstNumber / answer.secondNumber;
                console.log(chalk.cyan.bold("Result:"), result);
            } else {
                console.log(chalk.red.bold("Error: Please enter a non-zero number."));
                continue; // Skip the rest of the loop iteration
            }
        }
    } else {
        // Handle invalid number inputs
        console.log(chalk.red.bold("Please enter valid numbers for both inputs"));
        continue; // Skip the rest of the loop iteration
    }

    // Ask the user if they want to perform another operation
    let exitAnswer = await inquirer.prompt({
        name: "answer",
        message: chalk.yellow("Would you like to perform another operation?"),
        type: "list",
        choices: ["Yes", "No"]
    });

    // Check if the user wants to exit the program
    if (exitAnswer.answer === "No") {
        exit = true;
        console.log(chalk.red("Exiting program."));
    }
} while (!exit); // Repeat the loop until the user chooses to exit

#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
let initualQuestion = await inquirer.prompt({
    type: "input",
    name: "number",
    message: (chalk.redBright("how many number you input?"))
});
let sum = 0;
// Assuming that initualQuestion is accessible in the scope
for (let i = 0; i < initualQuestion.number; i++) {
    let answers = await inquirer.prompt([
        { type: "number",
            name: `number${i}`,
            message: (chalk.redBright("Enter your first number")) },
    ]);
    let enteredNumber = answers[`number${i}`];
    sum += enteredNumber;
}
console.log(chalk.greenBright(`The sum is ${sum}`));
console.log(chalk.blueBright(`The average is ${sum / initualQuestion.number}`));

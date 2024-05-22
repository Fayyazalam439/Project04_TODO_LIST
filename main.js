#! /usr/bin/env node
import inquirer from "inquirer";
let todos = [];
let condition = true;
while (condition) {
    let addNewtask = await inquirer.prompt([
        {
            name: "todo",
            type: "input",
            message: "What you want to add in your Todos?"
        },
        {
            name: "addMore",
            type: "input",
            message: "Do you want to add more?",
            default: "yes/No"
        },
        {
            name: "ProjectEnd",
            type: "input",
            message: "Congratulation Project Todo is Completed.",
        }
    ]);
    todos.push(addNewtask.todo);
    condition = addNewtask.addMore;
    condition = addNewtask.ProjectEnd;
    console.log(`${todos}`);
}
;

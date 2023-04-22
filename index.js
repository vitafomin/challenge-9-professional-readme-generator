// Packages needed for this application
const fs = require("fs");
const inquirer = require("inquirer");
const markdown = require("./utils/generateMarkdown.js");

// Prompt questions for the user to answer
const promptUser = () => {
    return inquirer.prompt([
    {
        type: "input",
        name: "title",
        message: "What would you like to title your README"
    },
    {
        type: "input",
        name: "description",
        message: "What wouold you like to include in your decription section?"
    },
    {
        type: "input",
        name: "installation",
        message: "What would you like to include in intallation section?" 
    },
    {
        type: "input",
        name: "usage",
        message: "What would you like to include in your usage section?" 
    },
    {
        type: "input",
        name: "credits",
        message: "Who would you like to include in your credits section?"
    },
    {
        type: "list",
        name: "license",
        message: "What license would you like to include?",
        choices: ["MIT", "Apache", "BSD", "Creative Commons", "GNU", "None"]
    },
    {
        type: "input",
        name: "test",
        message: "Please include testing insructions", 
    },
    {
        type: "input",
        name: "githubName",
        message: "please provide your github username" 
    },
    {
        type: "input",
        name: "email",
        message: "please provide your email address"
    }
  ])
}

// Function to initialize app function init()
const init = () => {
    promptUser()
    .then((answers) => {
        console.log(answers)
        let newMarkdownString = markdown(answers);
    fs.writeFile("README.md", markdown(answers), (err) => err ? console.log(err) : console.log("Professional README created!"))
    })
};
// Function call to initialize app
init();

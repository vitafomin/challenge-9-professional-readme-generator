// TODO: Include packages needed for this application
const fs = require("fs");
const inquirer = require("inquirer");
const markdown = require("./utils/generateMarkdown.js");

// TODO: Create an array of questions for user input
const questions = ["What is the title of your README?", "What wouold you like to include in your decription section?", "What would you like to include in intallation section?", "What would you like to include in your usage section?", "Who would you like to include in your credits section?", "What license would you like to include?", "Please include testing insructions", "Please include any questions"];

const generateReadMe = ({title, description, installation, usage, githubName, credits, license, test, email}) =>

`# ${title}

## Table of Contents
1. [Description](https://${githubName}.github.io/${title}##description) 
2. [Installation](https://${githubName}.github.io/${title}##installation)
3. [Usage](https://${githubName}.github.io/${title}##usage)
4. [Credits](https://${githubName}.github.io/${title}##credits) 
5. [License](https://${githubName}.github.io/${title}##license) 
6. [Test](https://${githubName}.github.io/${title}##test)
7. [Questions](https://${githubName}.github.io/${title}##questions)

## Description

${description}.   

## Installation

${installation}

## Usage

${usage}
https://${githubName}.github.io/${title}/

## Credits

${credits}

## License

${license}

## Test 

${test}

## Questions

${githubName}
https://github.com/${githubName}

Please contact me via email with any additional questions that you may have:
${email}
`

inquirer
  .prompt([
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
        choices: ["MIT", "Apache", "BSD", "Creative Commons", "GNU"]
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
  .then((answers) => {
    console.log(answers)
    fs.writeFile("README.md", generateReadMe(answers), (err) => err ? console.log(err) : console.log("Professional README created!"))
    // const readmePage = generateReadMe(answers);
  })
// TODO: Create a function to write README file
// function writeToFile(fileName, data) {
//     fs.writeFile("README.md", readmePage, (err) => 
//     err ? console.log(err) : console.log("Professional README created!"));
// };

// // TODO: Create a function to initialize app
// function init() {
//     prompt()
//     .then((answers) => writeFile("README.md", generateReadMe(answers)))
//     .then(() => console.log("Professional README created!"))
//     .catch((err) => console.error(err));
// };

// // Function call to initialize app
// init();

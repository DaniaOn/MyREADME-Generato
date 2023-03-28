// TODO: Include packages needed for this application
const fs = require("fs");
const inquire = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");
const path = require ("path");

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'checkbox', 
        name: 'license',
        choices: ["MIT", "GPLv3", "GPL"],
        message: 'Pick your License.'
    },
    {
        type:"input",
        name:"title",
        message:"Please enter your project title?",
    },
    {
        type:"input",
        name:"description",
        message:"Please enter the description of your project?",
    },
    {
        type:"input",
        name:"usage",
        message:"Please enter the dependencies used?",
    },
    {
        type:"input",
        name:"contribution",
        message:"Please enter colaborators usernames?",
    },
    {
        type:"input",
        name:"test",
        message:"Please enter steps required to test?",
    },
    {
        type:"input",
        name:"License",
        message:"Please enter your project License's message?",
    },
    {
        type:"input",
        name:"credintial",
        message:"Please enter your github username?",
    },
    {
        type:"input",
        name:"email",
        message:"Please enter your email address?",
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(process.cwd(),fileName),data);}

// TODO: Create a function to initialize app
function init() {
    
}

// Function call to initialize app
init();

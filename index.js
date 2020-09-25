var fs = require("fs");
var inquirer = require("inquirer");
const Choices = require("inquirer/lib/objects/choices");
const { type } = require("os");
var generateMarkdown = require("./utils/generateMarkdown");

// array of questions for user
const questions = [
  "What is the name of your app?",
  "Give a brief description of your app",
  "Does your app need an installation guide?",
  "Please give brief usage information for your app",
  "Would you like people to contribute to this app?",
  "Any tests you have put in for your app?",
  "Please choose from the following licenses.",
  "What is your GitHub username?",
  "What is your email address?",
];

// function to write README file

// function to initialize program
async function readmeDetails() {
  try {
    const data = await inquirer.prompt([
      {
        type: "input",
        message: questions[0],
        name: "title",
      },
      {
        type: "input",
        message: questions[1],
        name: "description",
      },
      {
        type: "input",
        message: questions[2],
        name: "installation",
      },
      {
        type: "input",
        message: questions[3],
        name: "usage",
      },
      {
        type: "input",
        message: questions[4],
        name: "contributing",
      },
      {
        type: "input",
        message: questions[5],
        name: "tests",
      },
      {
        type: "list",
        message: questions[6],
        choices: [
          "MIT",
          "BSD-3",
          "Apache",
          "Creative Commons",
          "GNU",
          "IBM",
          "ISC",
        ],
        name: "license"
      },
      {
        type: "input",
        message: questions[7],
        name: "github",
      },
      {
        type: "input",
        message: questions[8],
        name: "email",
      },
    ]);

    const readme = generateMarkdown(data);

    fs.writeFile("readme.md", readme, (err) => {
      if (err) throw console.log("write file went bad");
      console.log("You are in the system");
    });
    
  } catch (err) {
    console.log("Oops something went wrong");
    console.log(err);
  }
}
// function call to initialize program
readmeDetails();

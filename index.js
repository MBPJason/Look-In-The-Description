var fs = require("fs");
var inquirer = require("inquirer");
var generateMarkdown = require("./utils/generateMarkdown");

// array of questions for user
const questions = [
  "What is the name of your app?",
  "Give a brief description of your app",
  "Does your app need an installation guide?",
  "Please give brief usage information for your app",
  "Would you like people to contribute to this app?",
  "Any tests you have put in for your app?",
  "Please choose from the following licenses. One must be chosen.",
  "What is your GitHub username?",
  "What is your email address?",

  {
    repeatPrompts: [
      "Please enter the steps should they take",
      "Anymore steps?",
    ],
  },
];

// function to write README file
function writeToFile(fileName, data) {}

// function to initialize program
async function readmeDetails() {
  try {
  } catch (err) {
    console.log("Oops something went wrong");
    console.log(err);
  }
}
// function call to initialize program
init();

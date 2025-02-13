import inquirer from "inquirer"; // Import the inquirer module for prompting user input
import { writeReadme } from "./utils/generateMarkdown.js"; // Import the writeReadme function from the generateMarkdown.js file

// Function to collect data from the user using inquirer prompts
async function collectData() {
  return inquirer.prompt([
    {
      type: "input",
      name: "title",
      message: "What is the title of your project?",
      validate: (input) => (input ? true : "This field cannot be empty.") // Validate that the input is not empty
    },
    {
      type: "input",
      name: "description",
      message: "Provide a description of your project:",
      validate: (input) => (input ? true : "This field cannot be empty.") // Validate that the input is not empty
    },
    {
      type: "input",
      name: "installation",
      message: "Provide the installation instructions:",
      validate: (input) => (input ? true : "This field cannot be empty.") // Validate that the input is not empty
    },
    {
      type: "input",
      name: "usage",
      message: "Provide the usage information:",
      validate: (input) => (input ? true : "This field cannot be empty.") // Validate that the input is not empty
    },
    {
      type: "list",
      name: "license",
      message: "Choose a license for your project:",
      choices: [
        "MIT",
        "Apache 2.0",
        "GPL 3.0",
        "BSD 3-Clause",
        "BSD 2-Clause",
        "LGPL 3.0",
        "AGPL 3.0",
        "MPL 2.0",
        "EPL 2.0",
        "Unlicense",
        "None"
      ],
      validate: (input) => (input ? true : "This field cannot be empty.") // Validate that the input is not empty
    },
    {
      type: "input",
      name: "contributing",
      message: "Enter the contributing guidelines:",
      validate: (input) => (input ? true : "This field cannot be empty.") // Validate that the input is not empty
    },
    {
      type: "input",
      name: "tests",
      message: "Enter the test instructions:",
      validate: (input) => (input ? true : "This field cannot be empty.") // Validate that the input is not empty
    },
    {
      type: "input",
      name: "github",
      message: "Enter your GitHub username:",
      validate: (input) => (input ? true : "This field cannot be empty.") // Validate that the input is not empty
    },
    {
      type: "input",
      name: "email",
      message: "Enter your email for inquiries:",
      validate: (input) => (input ? true : "This field cannot be empty.") // Validate that the input is not empty
    }
  ]);
}

// Function to initialize the application
async function init() {
  try {
    const data = await collectData(); // Collect data from the user
    await writeReadme(data); // Write the collected data to a README.md file
    console.log("README.md has been generated successfully!"); // Log success message
  } catch (err) {
    console.error("Error generating README.md:", err); // Log error message if something goes wrong
  }
}

init(); // Call the init function to start the application

import fs from "fs";
import path from "path";
import licenseDescriptions from "./licenses.js";

// Function to generate README content
function generateReadme(data) {
  const licenseBadge =
    data.license !== "None"
      ? `![License](https://img.shields.io/badge/License-${encodeURIComponent(
          data.license
        )}-blue.svg)`
      : "";
  const licenseDescription = licenseDescriptions[data.license];
  const licenseSection =
    data.license !== "None"
      ? `## License\nThis project is licensed under the ${data.license} license.\n\n${licenseDescription}`
      : "";

  return `
# ${data.title}

${licenseBadge}

## Description
${data.description}

## Installation
${data.installation}

## Usage
${data.usage}

## Contributing
${data.contributing}

## Tests
${data.tests}

## Questions
If you have any questions, please feel free to contact me:

- GitHub: [${data.github}](https://github.com/${data.github})
- Email: [${data.email}](mailto:${data.email})

${licenseSection}
    `;
}

// Function to write README file
async function writeReadme(data) {
  const readmeContent = generateReadme(data);
  fs.writeFileSync(path.join(process.cwd(), "README.md"), readmeContent);
}

// Export the writeReadme function
export { writeReadme };

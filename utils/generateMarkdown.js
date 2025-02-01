import fs from 'fs';
import path from 'path';
import licenseDescriptions from './licenses.js';

function generateReadme(data) {
    const licenseBadge = data.license !== 'None' ? `![License](https://img.shields.io/badge/License-${encodeURIComponent(data.license)}-blue.svg)` : '';
    const licenseInfo = licenseDescriptions[data.license];
    const licenseSection = data.license !== 'None' ? `## License\nThis project is licensed under the ${data.license} license.\n\n**Description:** ${licenseInfo.description}\n\n**Uses:**\n${licenseInfo.uses.map(use => `- ${use}`).join('\n')}\n\n**Benefits:**\n${licenseInfo.benefits.map(benefit => `- ${benefit}`).join('\n')}\n\n**Cons:**\n${licenseInfo.cons.map(con => `- ${con}`).join('\n')}\n\n**Deployability:**\n${licenseInfo.deployability.map(deploy => `- ${deploy}`).join('\n')}` : '';

    return `
# ${data.title}

${licenseBadge}

## Table of Contents
- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)
- [License](#license)

## Description
${data.description}

## Installation
${data.installation.replace(/\\n/g, '\n')}

## Usage
${data.usage.replace(/\\n/g, '\n')}

## Contributing
${data.contributing.replace(/\\n/g, '\n')}

## Tests
${data.tests.replace(/\\n/g, '\n')}

## Questions
If you have any questions, please feel free to contact me:

- GitHub: [${data.github}](https://github.com/${data.github})
- Email: [${data.email}](mailto:${data.email})

${licenseSection}
    `;
}

async function writeReadme(data) {
    const readmeContent = generateReadme(data);
    fs.writeFileSync(path.join(process.cwd(), 'README.md'), readmeContent);
}

export { writeReadme };
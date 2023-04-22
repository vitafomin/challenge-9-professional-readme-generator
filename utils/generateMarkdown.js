// Function that returns a license badge based on which license is passed in, if there is no license, return an empty string
function renderLicenseBadge(license) {
  license = license.toUpperCase().trim();
  switch (license) {
    case "MIT":
      return `![MIT License](https://img.shields.io/badge/license-${license}-blue.svg)`;
    case "APACHE": 
      return `![Apache License](https://img.shields.io/badge/license-${license}-pink.svg)`;
    case "BSD": 
      return `![BSD License](https://img.shields.io/badge/license-${license}-green.svg)`;
    case "CREATIVE CCOMMONS": 
      return `![Creative Commons License](https://img.shields.io/badge/license-${license}-purple.svg)`;
    case "GNU": 
      return `![GNU License](https://img.shields.io/badge/license-${license}-red.svg)`;
    default:
      return "" 
      
  }}

// Function that returns the license section of README, if there is no license, return an empty string
function renderLicenseSection(license) {
  if(license == 'None') {
    return '';
  }
  return '## License';
}

// Function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
${renderLicenseBadge(data.license)}

## Table of Contents
* [Description](#description) 
* [Installation](#installation) 
* [Usage](#usage) 
* [Credits](#credits) 
* [License](#license) 
* [Test](#test) 
* [Questions](#questions) 

## Project Description

${data.description}

## Installation

${data.installation}

## Usage 

${data.usage}
https://${data.githubName}.github.io/${data.title}/

## Credits

${data.usage}

${renderLicenseSection(data.license)}

## Test 

${data.test}

## Questions

${data.githubName}
https://github.com/${data.githubName}

Please contact me via email with any additional questions that you may have:
${data.email}
`;
}
// Exporting the generateMarkdown to make available for the index.js file
module.exports = generateMarkdown;


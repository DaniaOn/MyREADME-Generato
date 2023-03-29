// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  let licenseType = license.license;
  let uLicense = ''
  if(licenseType === 'MIT') {
    uLicense = `![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)`
  } else if (licenseType === 'GPLv3') {
    uLicense = `![GPLv3 license](https://img.shields.io/badge/License-GPLv3-blue.svg)`
  } else if (licenseType === 'GPL') {
    uLicense = `![GPL license](https://img.shields.io/badge/License-GPL-blue.svg)`
  } else {
    license.license = "N/A"
  }
  return uLicense;
};

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
 if (license !== none){
  return `\n* [License](#license)\n`;
 } return "";
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license !== "none"){
    return `## License
      
        Licensed by ${license} license`;
  } return "";
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title} by ${renderLicenseBadge(data.license)}
#${title}

## Description
${description}

##Table of Content
* [Usage](#usage)
* [Testing](#testing)
* [Contributors:](#Contributors)
* [Contact:](#Contact)
* [License:](#License)

## Usage
${usage}

## Testing
${test}

## Contributors
${contribution}

## Contact
Information about creator:
* Name - ${data.name}
* Email - ${data.email}
* Github - ${data.credintial}

## License
${license}

${renderLicenseBadge(data.license)}
`;
}

module.exports = generateMarkdown;

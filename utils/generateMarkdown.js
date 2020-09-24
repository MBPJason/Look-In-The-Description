// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ## Description

  ${data.description}

  ## Table of Contents
  
  *[Installation](#installation)
  *[Usage](#uasge)
  *[License](#license)
  *[Contributing](#contributing)
  *[Tests](#tests)
  *[Questions](#questions)
  
  ## Installation

  ${data.installation}

  ## Usage

  ${data.usage}

  ## License

  ${data.license}

  ## Contributing

  ${data.contributing}

  ## Tests

  ${data.tests}

  ## Questions

  * To contact me for any additional questions:
    
    * My GitHub username is ${data.username}
    * The link to my page is [here](${data.link})
    * To email me my email is ${data.email}
`;
}

module.exports = generateMarkdown;
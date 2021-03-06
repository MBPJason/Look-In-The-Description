// function to generate markdown for README
function generateMarkdown(data) {
  let licenseBadge = "";
  if (data.license === "MIT") {
    licenseBadge = `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`;
  }
  if (data.license === "BSD-3") {
    licenseBadge = `[![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)`;
  }
  if (data.license === "Apache") {
    licenseBadge = `[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`;
  }
  if (data.license === "Creative Commons") {
    licenseBadge = `[![License: CC0-1.0](https://licensebuttons.net/l/zero/1.0/80x15.png)](http://creativecommons.org/publicdomain/zero/1.0/)`;
  }
  if (data.license === "GNU") {
    licenseBadge = `[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)`;
  }
  if (data.license === "IBM") {
    licenseBadge = `[![License: IPL 1.0](https://img.shields.io/badge/License-IPL%201.0-blue.svg)](https://opensource.org/licenses/IPL-1.0)`;
  }
  if (data.license === "ISC") {
    licenseBadge = `[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)`;
  }

  return `# ${data.title}

  ## Description

  ${licenseBadge}

  ${data.description}

  ## Table of Contents
  
  * [Installation](#installation)
  * [Usage](#uasge)
  * [License](#license)
  * [Contributing](#contributing)
  * [Tests](#tests)
  * [Questions](#questions)
  
  ## Installation

  ${data.installation}

  ## Usage

  ${data.usage}

  ## License

  ${licenseBadge}

  ## Contributing

  ${data.contributing}

  ## Tests

  ${data.tests}

  ## Questions

  * To contact me for any additional questions:
    
    * My GitHub username is ${data.github}
    * The link to my page is [here](https://www.github.com/${data.github})
    * To email me my email is ${data.email}
`
}

module.exports = generateMarkdown;
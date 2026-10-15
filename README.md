# AbleSpace Playwright Automation Testing

Automated end-to-end testing of the AbleSpace web application using **Playwright and TypeScript**.

## Project Overview

This project contains automated UI test cases for the AbleSpace staging environment. It uses Playwright to interact with web elements, perform user actions, and validate application behavior.

**Application Under Test:** [AbleSpace Staging](https://staging.ablespace.io/)

**Repository:** [testing_assignment](https://github.com/Hjibhakate/testing_assignment)

## Tech Stack

- **Language:** TypeScript
- **Automation Framework:** Playwright
- **Runtime:** Node.js
- **Package Manager:** npm
- **Test Runner:** Playwright Test
- **Version Control:** Git and GitHub

## Project Structure

```text
ablespace-playwright/
├── tests/                  # Automated test cases
├── playwright.config.ts    # Playwright configuration
├── package.json            # Project dependencies and scripts
├── package-lock.json       # Dependency lock file
├── tsconfig.json           # TypeScript configuration
├── .gitignore              # Ignored files and folders
└── README.md               # Project documentation
```

## Prerequisites

Make sure the following tools are installed:

- Node.js
- npm
- Git
- Visual Studio Code (recommended)

Verify your installation:

```bash
node -v
npm -v
git --version
```

## Installation

**1. Clone the repository**

```bash
git clone https://github.com/Hjibhakate/testing_assignment.git
```

**2. Navigate to the project directory**

```bash
cd testing_assignment
```

**3. Install dependencies**

```bash
npm install
```

**4. Install Playwright browsers**

```bash
npx playwright install
```

## Configuration

The tests target the AbleSpace staging environment:

```text
https://staging.ablespace.io/
```

If the project uses environment variables, create a local `.env` file containing the required configuration. Use the variable names expected by your test code.

**Security:** Never commit `.env`, authentication tokens, passwords, browser cookies, or saved browser sessions to GitHub.

## Running Tests

Run all Playwright tests:

```bash
npx playwright test
```

Run tests in headed mode to see the browser:

```bash
npx playwright test --headed
```

Run tests with the Playwright UI:

```bash
npx playwright test --ui
```

Run a specific test file:

```bash
npx playwright test tests/your-test-file.spec.ts
```

Replace `your-test-file.spec.ts` with the actual test filename.

## Test Reports

After executing the tests, generate or open the HTML report:

```bash
npx playwright show-report
```

The report provides details about test execution, including passed and failed tests.

## Testing Approach

The project uses Playwright's browser automation capabilities to execute UI workflows and validate expected application behavior.

The test suite can include:

- Navigation to the staging application
- Form interactions and button clicks
- Input field validation
- Authentication and onboarding workflows, where implemented
- Assertions for expected UI behavior
- Execution reports for identifying failures

Actual coverage depends on the test cases implemented in the `tests/` directory.

## Best Practices

- Use meaningful test names and assertions.
- Keep credentials and sensitive information outside version control.
- Use `.gitignore` to exclude generated reports, dependencies, and browser session data.
- Keep tests maintainable and easy to debug.
- Review failed tests and reports before submitting changes.

## Author

**Harshad Jibhakate**

GitHub: [@Hjibhakate](https://github.com/Hjibhakate)

## Disclaimer

This project is intended for software testing and learning purposes against the designated staging environment. Execute tests only with appropriate authorization.

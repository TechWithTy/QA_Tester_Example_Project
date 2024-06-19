### Updated README.md

```markdown
# Hacker News Newest Articles Sort Validator With API and Gherkin Feature Tests

This project includes a script that navigates to the Hacker News "newest" section and validates that the first 100 articles are sorted from newest to oldest. Additionally, it sets up an API using Express to fetch and validate the sorted articles.

## Table of Contents

- [Installation](#installation)
- [Running the Script](#running-the-script)
- [Setting Up and Running the Server](#setting-up-and-running-the-server)
- [Making API Requests](#making-api-requests)
- [Running Gherkin Tests](#running-gherkin-tests)
- [Project Structure](#project-structure)

## Installation

To get started, clone the repository and install the necessary dependencies:

```bash
git clone <repository-url>
cd <repository-directory>
npm install
```

## Running the Script

The script is located in the `index.js` file. To run the script and validate the sorted articles, execute the following command:

```bash
node index.js
```

This script will output whether the articles are sorted correctly and provide the list of articles.

## Setting Up and Running the Server

This project uses Express to set up an API server that fetches and validates the sorted articles from Hacker News.

1. Ensure all dependencies are installed:

    ```bash
    npm install
    ```

2. Run the server:

    ```bash
    node api/expressServer.js
    ```

    The server will start and listen on port 3000. You should see an output indicating that the server is running:

    ```plaintext
    Server running at http://localhost:3000
    ```

## Making API Requests

Once the server is running, you can make a GET request to the `/articles` endpoint to fetch and validate the sorted articles.

### Using Curl

To test the API endpoint using `curl`, execute the following command in your terminal:

```bash
curl http://localhost:3000/articles
```

This will return a JSON response with the validation result and the list of articles.

### Example Response

```json
{
  "isSorted": true,
  "articles": [
    {
      "rank": "1",
      "title": "Example Article Title",
      "url": "https://example.com",
      "site": "example.com",
      "age": "2024-06-19T19:46:45",
      "id": "40731731"
    },
    ...
  ]
}
```

## Running Gherkin Tests

This project uses Playwright and Cucumber to run Gherkin tests. The Gherkin tests are located in the `tests` directory.

1. Ensure all dependencies are installed:

    ```bash
    npm install
    ```

2. Run the tests:

    ```bash
    npx cucumber-js tests/gherkinTest.feature
    ```

    This will run the Gherkin tests and validate that the articles are sorted correctly.

## Project Structure

```
.
├── api
│   ├── expressServer.js
│   ├── honoServer.js
├── node_modules
├── index.js
├── NEWREADME.md
├── package-lock.json
├── package.json
├── playwright.config.js
├── README.md
├── why_qa_wolf.txt
└── tests
    ├── gherkinTest.feature
    ├── stepDefinitions.js
```

- `api/expressServer.js`: Express server setup to provide an API endpoint for fetching and validating sorted articles.
- `api/honoServer.js`: Hono server setup (not used in this README example).
- `index.js`: Script to validate sorted articles from Hacker News.
- `tests/gherkinTest.feature`: Gherkin feature file for testing.
- `tests/stepDefinitions.js`: Step definitions for Gherkin tests.
- `package.json`: Project configuration and dependencies.
- `package-lock.json`: Lock file for dependencies.
- `playwright.config.js`: Configuration for Playwright (if needed).
- `README.md`: Project documentation.

## Additional Notes

- The project uses Playwright to navigate and extract data from Hacker News.
- Zod is used for schema validation of the articles.
- The server is built using Express.js for simplicity and compatibility with Node.js environments.

For any further questions or issues, please contact the project maintainer [text](https://github.com/TechWithTy).
```

This `README.md` file now includes instructions for running the Gherkin tests with `npx cucumber-js tests/gherkinTest.feature`. This updated information should help users set up and run the tests as expected.
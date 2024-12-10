# Node.js API for CI/CD with Github Action

This repository contains the code for a Node.js API. The setup includes a CI/CD pipeline configured with GitHub Actions for linting, formatting, running tests, and deploying the app to AWS EC2 on merge to `master` branch.

## Prerequisites

Before running the project locally, make sure you have the following tools installed:

- [Node.js](https://nodejs.org/) (preferably the latest LTS version)
- [npm](https://www.npmjs.com/)

## Setup

Clone this repository to your local machine:

```bash
git clone git@github.com:tazbin/ci-cd-pipeline.git
cd ci-cd-pipeline
```

Install the dependencies

```bash
npm install
```

Run the app

```bash
npm run start
```

### Code Linting

Check code linting

```bash
npm run lint:check
```

Fix code linting

```bash
npm run lint:fix
```

### Code Formatting

Check code Format

```bash
npm run format:check
```

Fix code Formatting

```bash
npm run format:fix
```

## Run Test Cases

```bash
npm run test
```

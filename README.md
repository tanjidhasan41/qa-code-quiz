# QA Testing Quiz

### Scenario
The frontend team has developed a prototype login portal for an up and coming platform.
However, they have not implemented any testing yet and it is up to you to do so.

As the QA developer, what is tested and how it is tested is up to you.
Management simply asks that these tests provide as much evidence as possible of the platform's reliability.

### Notes
- Submission must include a link to a public fork/clone of this repository
- We typically use Jest for testing node.js/API related logic and Cypress for testing UI functionality, however, you are more than welcome to use any testing framework you desire so long as you are able to provide reasonable justification

# Test Procedure

### Testing Framework Used
- Playwright for e2e testing and api testing

Here, I used Playwright for end-to-end automation testing and API testing because,
- Multi-language support
- Parallel testing
- Version update issues
- Cypress does not support multi-tab and multi-window handling
- Mobile app automation
- Difficulty handling iframes in Cypress

## How to Run The Project
### 1. Clone the Repository
```
git clone <repository_url>
cd <repository_folder>
```
### 2. Install Dependencies
For npm
```
npm install
```
### 3. Install Playwright
```
npm init playwright@latest
```
### 4. Running Playwright End-to-End Tests
```
npm start
npx playwright test
```
### End-to-End Testing Report

https://github.com/user-attachments/assets/68d37ea7-22c2-4fa6-8207-5a26e2b2fb87

<img width="1992" height="1079" alt="image" src="https://github.com/user-attachments/assets/e5dd0737-90ff-4e8c-b4ae-1e665f73e5b6" />

<img width="1989" height="1447" alt="image" src="https://github.com/user-attachments/assets/16e1cab3-5b5f-4d34-87f4-372fc0aa7b12" />

### 5. Running Playwright API Tests
```
npm start
node ./mockedAPI/index.js
npx playwright test <file name>
```
### API Testing Report
<img width="1989" height="1351" alt="image" src="https://github.com/user-attachments/assets/0a2311a2-3b0b-4077-bb9e-83906df59926" />

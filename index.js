// this will bring all the functions together 
const fs = require('fs');
const inquirer = require('inquirer');

let managerArr = [];
let employeeArr = [];
let internArr = [];
let engineerArr = [];

const promptUser = () => {    
        return inquirer.prompt([
            {
                type: 'checkbox',
                name: 'Team',
                message: 'Which team member do you want to add nex',
                choices: ['Manager','Employee', 'Engineer', 'Intern', 'None']
              },
    ]);
    };
    promptUser()
    .then(function (answers) {
          if (answers.Team[0] === "Employee") {
            console.log("employee selected")
            promptEmp()
            .then(function (empInfo) {
                employeeArr.push(empInfo)
                    console.log(employeeArr)
                })
        }
        else if (answers.Team[0] === "Intern") {
            console.log("intern selected")
            promptIntern()
            .then(function (internInfo) {
                internArr.push(internInfo)
                console.log(internArr)
            })
        }
        else if (answers.Team[0] === "Manager") {
            console.log("intern selected")
              promptManager()
              .then(function (managerInfo) {
                  managerArr.push(managerInfo)
                 console.log(managerArr)
             })
        }
        else if (answers.Team[0] === "Engineer") {
            console.log("engineer selected")
            promptEng()
            .then(function (engInfo) {
                engineerArr.push(engInfo)
                console.log(engineerArr)
            })
        }
        else if (answers.Team[0] === "None") {
            // fs.writeFile("Index.html", generatePage(empInfo, engInfo, managerInfo, internInfo), err =>{
            // if (err) throw err
            // console.log("HTML created")
            // })
        }
        console.log(answers.Team[0])
    })
    // fs.writeFile("Index.html", generatePage(empInfo, engInfo, managerInfo, internInfo), err =>{
    // if (err) throw err
    // console.log("HTML created")
    // })

    const promptManager = () => {    
        return inquirer.prompt([
    //user name question
            {
                // what type of question is this? input means they will input something
                type: 'input',
                // where is the response being stored? as name = bob
                name: 'managerName',
                // what is the question?
                message: 'What is the managers name (Required)',
                // this will set the validation of the message making it a required field
                validate: nameInput => {
                    if (nameInput) {
                        return true;
                    }
                    else {
                        console.log("Please enter your managers name")
                        return false;
                    }
                } 
            },
            {
                // what type of question is this? input means they will input something
                type: 'input',
                // where is the response being stored? as name = bob
                name: 'managerEmail',
                // what is the question?
                message: 'What is the managers email (Required)',
                // this will set the validation of the message making it a required field
                validate: nameInput => {
                    if (nameInput) {
                        return true;
                    }
                    else {
                        console.log("Please enter your managers email")
                        return false;
                    }
                } 
            },
            {
                // what type of question is this? input means they will input something
                type: 'input',
                // where is the response being stored? as name = bob
                name: 'managerGitHub',
                // what is the question?
                message: 'What is the managers GitHub Username (Required)',
                // this will set the validation of the message making it a required field
                validate: nameInput => {
                    if (nameInput) {
                        return true;
                    }
                    else {
                        console.log("Please enter your managers github name")
                        return false;
                    }
                } 
            },
    ]);
    };
    const promptEmp = () => {    
        return inquirer.prompt([
    //user name question
            {
                // what type of question is this? input means they will input something
                type: 'input',
                // where is the response being stored? as name = bob
                name: 'empName',
                // what is the question?
                message: 'What is the employee name (Required)',
                // this will set the validation of the message making it a required field
                validate: nameInput => {
                    if (nameInput) {
                        return true;
                    }
                    else {
                        console.log("Please enter your employee name")
                        return false;
                    }
                } 
            },
            {
                // what type of question is this? input means they will input something
                type: 'input',
                // where is the response being stored? as name = bob
                name: 'empEmail',
                // what is the question?
                message: 'What is the employee email (Required)',
                // this will set the validation of the message making it a required field
                validate: nameInput => {
                    if (nameInput) {
                        return true;
                    }
                    else {
                        console.log("Please enter your employee email")
                        return false;
                    }
                } 
            },
            {
                // what type of question is this? input means they will input something
                type: 'input',
                // where is the response being stored? as name = bob
                name: 'empGitHub',
                // what is the question?
                message: 'What is the employee GitHub Username (Required)',
                // this will set the validation of the message making it a required field
                validate: nameInput => {
                    if (nameInput) {
                        return true;
                    }
                    else {
                        console.log("Please enter your employee github name")
                        return false;
                    }
                } 
            }
    ]);
    };
    const promptEng = () => {    
        return inquirer.prompt([
    //user name question
            {
                // what type of question is this? input means they will input something
                type: 'input',
                // where is the response being stored? as name = bob
                name: 'engName',
                // what is the question?
                message: 'What is the engineers name (Required)',
                // this will set the validation of the message making it a required field
                validate: nameInput => {
                    if (nameInput) {
                        return true;
                    }
                    else {
                        console.log("Please enter your engineers name")
                        return false;
                    }
                } 
            },
            {
                // what type of question is this? input means they will input something
                type: 'input',
                // where is the response being stored? as name = bob
                name: 'engEmail',
                // what is the question?
                message: 'What is the engineers email (Required)',
                // this will set the validation of the message making it a required field
                validate: nameInput => {
                    if (nameInput) {
                        return true;
                    }
                    else {
                        console.log("Please enter your engineers email")
                        return false;
                    }
                } 
            },
            {
                // what type of question is this? input means they will input something
                type: 'input',
                // where is the response being stored? as name = bob
                name: 'engGitHub',
                // what is the question?
                message: 'What is the engineers GitHub Username (Required)',
                // this will set the validation of the message making it a required field
                validate: nameInput => {
                    if (nameInput) {
                        return true;
                    }
                    else {
                        console.log("Please enter your engineers github name")
                        return false;
                    }
                } 
            }
    ]);
    };
    const promptIntern = () => {    
        return inquirer.prompt([
    //user name question
            {
                // what type of question is this? input means they will input something
                type: 'input',
                // where is the response being stored? as name = bob
                name: 'internName',
                // what is the question?
                message: 'What is the intern name (Required)',
                // this will set the validation of the message making it a required field
                validate: nameInput => {
                    if (nameInput) {
                        return true;
                    }
                    else {
                        console.log("Please enter your intern name")
                        return false;
                    }
                } 
            },
            {
                // what type of question is this? input means they will input something
                type: 'input',
                // where is the response being stored? as name = bob
                name: 'internEmail',
                // what is the question?
                message: 'What is the interns email (Required)',
                // this will set the validation of the message making it a required field
                validate: nameInput => {
                    if (nameInput) {
                        return true;
                    }
                    else {
                        console.log("Please enter your interns email")
                        return false;
                    }
                } 
            },
            {
                // what type of question is this? input means they will input something
                type: 'input',
                // where is the response being stored? as name = bob
                name: 'internGitHub',
                // what is the question?
                message: 'What is the interns GitHub Username (Required)',
                // this will set the validation of the message making it a required field
                validate: nameInput => {
                    if (nameInput) {
                        return true;
                    }
                    else {
                        console.log("Please enter your interns github name")
                        return false;
                    }
                } 
            }
    ]);
    };

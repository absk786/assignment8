// this will bring all the functions together 
const fs = require('fs');
const inquirer = require('inquirer');
const Manager = require('./lib/Manager')
const Intern = require('./lib/Intern')
const Engineer = require('./lib/Engineer')

let teamInfo = []

const promptUser = () => {
    return inquirer.prompt([
        {
            type: 'list',
            name: 'Team',
            message: 'Which team member do you want to add next',
            choices: ['Manager', 'Engineer', 'Intern', 'None']
        },
    ]);
};


function runApp  () {

    promptUser()
        .then(function (answers) {
            console.log(answers.Team)
            if (answers.Team === "Intern") {
                console.log("intern selected")
                promptIntern()
                    .then(function (internInfo) {
                    })
            }
            else if (answers.Team === "Manager") {
                console.log("intern selected")
                promptManager()
                    .then(function (managerInfo) {
                        const manager = new Manager(managerInfo.managerName, managerInfo.managerId, managerInfo.managerEmail, managerInfo.managerOfficeNumber)
                        teamInfo.push(manager)
                        console.log(manager)
                        runApp ()
                    })
            }
            else if (answers.Team === "Engineer") {
                console.log("engineer selected")
                promptEng()
                    .then(function (engInfo) {
                        runApp ()
                    })
            }
            else if (answers.Team === "None") {
                // fs.writeFile("Index.html", generatePage(empInfo, engInfo, managerInfo, internInfo), err =>{
                // if (err) throw err
                // console.log("HTML created")
                // })
            }
            console.log(answers.Team[0])
        })

}
runApp ()
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
            name: 'managerId',
            // what is the question?
            message: 'What is the managers ID (Required)',
            // this will set the validation of the message making it a required field
            validate: nameInput => {
                if (nameInput) {
                    return true;
                }
                else {
                    console.log("Please enter your managers ID")
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
            name: 'managerOfficeNumber',
            // what is the question?
            message: 'What is the managers office number',
            // this will set the validation of the message making it a required field
            validate: nameInput => {
                if (nameInput) {
                    return true;
                }
                else {
                    console.log("Please enter your managers office number name")
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

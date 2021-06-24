const fs = require('fs');
const inquirer = require('inquirer');

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
    promptIntern()
    .then(function (internInfo) {
        console.log(internInfo)
    })

    module.exports = {
        Intern: internInfo
    }
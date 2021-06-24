const fs = require('fs');
const inquirer = require('inquirer');

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
            }
    ]);
    };
    promptManager()
    .then(function (managerInfo) {
        console.log(managerInfo)
    })
    // fs.writeFile("Index.html", generatePage(answers), err =>{
    // if (err) throw err
    // console.log("HTML created")
    // })}}
    
    module.exports = {
        Managers: managerInfo
    }
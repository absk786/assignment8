const Employee = require("./Employee");
const inquirer = require('inquirer');

class Engineer extends Employee {
    constructor (name,id,email) {
        super (name,id,email)
    }
    getGitHub () {
        return this.gitHub
    }
    getRole () {
        return "Engineer"
    }
    // insert methodsß
}

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


module.exports = Engineer;
module.exports = promptEng;
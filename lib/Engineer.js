const Employee = require("./Employee");
const inquirer = require('inquirer');

class Engineer extends Employee {
    constructor (name,id,email,gitHub) {
        super (name,id,email)
        this.gitHub = gitHub
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
        //name question
        {
            type: 'input',
            name: 'engName',
            message: 'What is the engineers name (Required)',
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
        //id question
        {
            type: 'input',
            name: 'engId',
            message: 'What is the engineers Id (Required)',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                }
                else {
                    console.log("Please enter your engineers ID")
                    return false;
                }
            }
        },
        //email question
        {
            type: 'input',
            name: 'engEmail',
            message: 'What is the engineers email (Required)',
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
        //github question
        {
            type: 'input',
            name: 'engGitHub',
            message: 'What is the engineers GitHub Username (Required)',
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
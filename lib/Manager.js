const Employee = require("./Employee");
const inquirer = require('inquirer');
 
class Manager extends Employee {
    constructor (name,id,email, officeNumber) {
        super (name,id,email)
        this.officeNumber = officeNumber
        
    }
    getOfficeNumber () {
        return this.officeNumber
    }
    getRole () {
        return "Manager"
    }
}

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


module.exports = Manager;
module.exports = promptManager;
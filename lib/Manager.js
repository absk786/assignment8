const Employee = require("./Employee");
const inquirer = require('inquirer');
 
class Manager extends Employee {
    constructor (name,id,email,officeNumber) {
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
        //name question
        {
            type: 'input',
            name: 'managerName',
            message: 'What is the managers name (Required)',
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
        //Id question
        {
            type: 'input',
            name: 'managerId',
            message: 'What is the managers ID (Required)',
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
        //email question
        {
            type: 'input',
            name: 'managerEmail',
            message: 'What is the managers email (Required)',
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
        //office number question
        {
            type: 'input',
            name: 'managerOfficeNumber',
            message: 'What is the managers office number',
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
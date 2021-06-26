const Employee = require("./Employee");
const inquirer = require('inquirer');

class Intern extends Employee {
    constructor (name,id,email,schoolName) {
        super (name,id,email)
        this.schoolName = schoolName;
    }
    getSchool () {
        return this.schoolName
    }
    getRole () {
        return "Intern"
    }
}

const promptIntern = () => {
    return inquirer.prompt([
        //name question
        {
            type: 'input',
            name: 'internName',
            message: 'What is the intern name (Required)',
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
        //Id question
        {
            type: 'input',
            name: 'internID',
            message: 'What is the interns ID (Required)',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                }
                else {
                    console.log("Please enter your interns ID")
                    return false;
                }
            }
        },
        //email question
        {
            type: 'input',
            name: 'internEmail',
            message: 'What is the interns email (Required)',
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
         //School question
         {
            type: 'input',
            name: 'internSchool',
            message: 'What is the interns School name (Required)',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                }
                else {
                    console.log("Please enter your interns school name")
                    return false;
                }
            }
        },
    ]);
};

module.exports = {
    Intern,
    promptIntern
}
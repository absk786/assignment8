class Employee {
    constructor(name,id,email) {
        this.name = name;
        this.email = email;
        this.id = id;
    }
    getName() { 
        return this.name;
    }
    getEmail() { 
        return this.email;
    }
    getId() { 
        return this.id;
    }
    getRole() { 
        return "employee";
    }
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

module.exports = Employee;
// this will bring all the functions together 
const fs = require('fs');
const inquirer = require('inquirer');
const Manager = require('./lib/Manager')
const promptManager = require('./lib/Manager')
const promptIntern = require('./lib/Intern')
const promptEng = require('./lib/Engineer')

// let teamInfo = []

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
            if (answers.Team === "Manager") {
                console.log("intern selected")
                promptManager()
                    .then(function (managerInfo) {
                        console.log(managerInfo)
                        // const manager = new Manager(managerInfo.managerName, managerInfo.managerId, managerInfo.managerEmail, managerInfo.managerOfficeNumber)
                        // teamInfo.push(manager)
                        // console.log(manager)
                        runApp ()
                    })
            }
            else if (answers.Team === "Engineer") {
                console.log("engineer selected")
                promptEng()
                    .then(function (engInfo) {
                        console.log(engInfo)
                        runApp ()
                    })
            }
            else if (answers.Team === "Intern") {
                console.log("intern selected")
                promptIntern()
                    .then(function (internInfo) {
                        console.log(internInfo)
                        runApp ()
                    })
            }
            else if (answers.Team === "None") {
                // fs.writeFile("Index.html", generatePage(empInfo, engInfo, managerInfo, internInfo), err =>{
                // if (err) throw err
                // console.log("HTML created")
                // })
            }
            console.log("start printing of HTML")
            console.log(answers.Team[0])
        })
}
runApp ()
// fs.writeFile("Index.html", generatePage(empInfo, engInfo, managerInfo, internInfo), err =>{
// if (err) throw err
// console.log("HTML created")
// })

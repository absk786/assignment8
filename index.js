// this will bring all the functions together 
const fs = require('fs');
const inquirer = require('inquirer');
const {Manager,promptManager} = require('./lib/Manager')
const {Engineer,promptEng} = require('./lib/Engineer')
const {Intern,promptIntern} = require('./lib/Intern')
const generatePage = require('./lib/createHTML')
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
            if (answers.Team === "Manager") {
                console.log("manager selected")
                promptManager()
                    .then(function (managerInfo) {
                        console.log(managerInfo)
                        const manager = new Manager(managerInfo.managerName, managerInfo.managerId, managerInfo.managerEmail, managerInfo.managerOfficeNumber)
                        teamInfo.push(manager)
                        console.log(teamInfo)
                        runApp ()
                    })
            }
            else if (answers.Team === "Engineer") {
                console.log("engineer selected")
                promptEng()
                    .then(function (engInfo) {
                        console.log(engInfo)
                        const engineer = new Engineer(engInfo.engName, engInfo.engId, engInfo.engEmail, engInfo.engGitHub)
                        teamInfo.push(engineer)
                        console.log(teamInfo)
                        runApp ()
                    })
            }
            else if (answers.Team === "Intern") {
                console.log("intern selected")
                promptIntern()
                    .then(function (internInfo) {
                        console.log(internInfo)
                        const intern = new Intern(internInfo.internName, internInfo.internId, internInfo.internEmail, internInfo.internSchool)
                        teamInfo.push(intern)
                        console.log(teamInfo)
                        runApp ()
                    })
            }
            else if (answers.Team === "None") {
                fs.writeFile("Index.html", generatePage(), err =>{
                if (err) throw err
                console.log("HTML created")
                })
            }
        })
}
runApp ()

module.exports = teamInfo;
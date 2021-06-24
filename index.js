// this will bring all the functions together 
// const Manager = require('./lib/Manager')
const Employee = require('./lib/Employee')
// const Engineer = require('./lib/Engineer')
// const Intern = require('./lib/Intern')
const fs = require('fs');
const inquirer = require('inquirer');

const promptUser = () => {    
        return inquirer.prompt([
            {
                type: 'checkbox',
                name: 'Team',
                message: 'Which team member do you want to add nex',
                choices: ['Employee', 'Engineer', 'Intern', 'None']
              },
    ]);
    };
    promptUser()
    .then(function (answers) {
          if (answers.Team[0] === "Employee") {
            console.log("employee selected")
            Employee();
        }
        else if (answers.Team[0] === "Intern") {
            console.log("intern selected")
            // Intern();
        }
        else if (answers.Team[0] === "Engineer") {
            console.log("engineer selected")
            // Engineer();
        }
        else if (answers.Team[0] === "None") {
            // fs.writeFile("Index.html", generatePage(empInfo, engInfo, managerInfo, internInfo), err =>{
            // if (err) throw err
            // console.log("HTML created")
            // })
        }
        console.log(answers.Team[0])
    })
    // fs.writeFile("Index.html", generatePage(empInfo, engInfo, managerInfo, internInfo), err =>{
    // if (err) throw err
    // console.log("HTML created")
    // })

//     const generatePage = (empInfo, engInfo, managerInfo, internInfo) => `
//     // this is where the HTML layout will go.
//     //     <!DOCTYPE html>
// // <html lang="en">
// /* <head>
//     <meta charset="UTF-8">
//     <meta http-equiv="X-UA-Compatible" content="IE=edge">
//     <meta name="viewport" content="width=device-width, initial-scale=1.0">
//     <title>Document</title>
// </head>
// <body>

//     <div class="manager">
//         <p class="manager">${managerInfo.managerName}</p>
//         <p class="email">${managerInfo.managerEmail}</p>
//         <p class="github">${managerInfo.managerGitHub}</p>
//     </div>

//     <div class="intern">
//         <p class="name">${internInfo.internName}</p>
//         <p class="email">${internInfo.internEmail}</p>
//         <p class="github">${internInfo.internGitHub}</p>
//     </div>
    
//     <div class="engineer">
//         <p class="name">${engInfo.engName}</p>
//         <p class="email">${engInfo.engEmail}</p>
//         <p class="github">${engInfo.engGitHub}</p>
//     </div>

//     <div class="employee">
//         <p class="name">${empInfo.empname}</p>
//         <p class="email">${empInfo.empEmail}</p>
//         <p class="github">${empInfo.empGitHub}</p>
//     </div>

// </body>
// </html>
//     "
//      */
//     `;
    

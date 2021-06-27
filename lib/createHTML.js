const teamInfo = require('../index')

// let mainBodyTag = document.getElementById("bodyTag")

// for (var i = 0; i<teamInfo.length; i++) {
//     // let divTag = document.createElement('div')
//     let pTag = document.createElement('p')
//     // divTag.appendChild(pTag)
//     mainBodyTag.appendChild(pTag)
//     pTag.textContent = teamInfo[i]
// }
// console.log(teamInfo)
    const generatePage = (teamInfo) => `
    // this is where the HTML layout will go.
    //     <!DOCTYPE html>
// <html lang="en">
/* <head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>

    <div class="manager">
        <p class="manager">${teamInfo[0].managerName}</p>
        <p class="email">${managerInfo.managerEmail}</p>
        <p class="github">${managerInfo.managerGitHub}</p>
    </div>

    <div class="intern">
        <p class="name">${internInfo.internName}</p>
        <p class="email">${internInfo.internEmail}</p>
        <p class="github">${internInfo.internGitHub}</p>
    </div>
    
    <div class="engineer">
        <p class="name">${engInfo.engName}</p>
        <p class="email">${engInfo.engEmail}</p>
        <p class="github">${engInfo.engGitHub}</p>
    </div>

    <div class="employee">
        <p class="name">${empInfo.empname}</p>
        <p class="email">${empInfo.empEmail}</p>
        <p class="github">${empInfo.empGitHub}</p>
    </div>

</body>
</html>
    "
     */
    `;
    
module.exports = generatePage
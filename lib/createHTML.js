

    const generatePage = (empInfo, engInfo, managerInfo, internInfo) => `
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
        <p class="manager">${managerInfo.managerName}</p>
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
    
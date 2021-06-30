function generateCard (team) {
var newField = '';
     if (team.getRole() === "Manager") {
        newField = "office number: "+ team.getOfficeNumber()
     }
     if (team.getRole() === "Engineer") {
      
      gitHubLink = "https://github.com/"
      fullGitLink = gitHubLink+team.getGitHub()
      newField = `<a href="${fullGitLink}" target="_blank">GitHub</a>`
     }
     if (team.getRole() === "Intern") {
        newField = "School: "+ team.getSchool()
     }
    
    return `
       <div class="col">

                  <div class="card mb-5" style="width: 18rem;">
                    <div class="card-body">
                      <h5 class="card-title">${team.getName()}</h5>
                      <p class="card-text">${team.getRole()}</p>
                    </div>
                    <ul class="list-group list-group-flush">
                      <li class="list-group-item">ID: ${team.getId()}</li>
                      <li class="list-group-item"><a href="mailto:${team.getEmail()}" target="_blank">email</a></li>
                      <li class="list-group-item"> ${newField}</li>
                    </ul>
                  </div>
              </div>
    
    `
}

module.exports = generateCard;
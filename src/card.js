function generateCard (team) {
var newField = '';
     if (team.getRole() === "Manager") {
        newField = "office number: "+ team.getOfficeNumber()
     }
     if (team.getRole() === "Engineer") {
        newField = "GitHub Link: "+ team.getGitHub()
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
                      <li class="list-group-item">Email:${team.getEmail()}</li>
                      <li class="list-group-item"> ${newField}</li>
                    </ul>
                  </div>
              </div>
    
    `
}

module.exports = generateCard;
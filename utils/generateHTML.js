// const Engineer = require("../lib/Engineer");
// const Manager = require("../lib/Manager");
// const Intern = require("../lib/Intern");
// var team = []
// for (i=0; i<5;i++){
//     const engineer = new Engineer("Jim", (i+1), "Jim@gmail.com", "OwenMG")
//     team.push(engineer);
// }
// console.log(team);
// const teamContent = team.map((member)=>{
//     return member.renderHTML();
// })
// console.log(teamContent);
// const teamHTML = teamContent.join(`
// `);
// console.log(teamHTML);

function generateHTML(team) {
    const teamContent = team.map((member)=>{
        return member.renderHTML();
    })
    console.log(teamContent);
    const teamHTML = teamContent.join(`
    `);
    console.log(teamHTML);
    return `
    <!doctype html>
<html lang="en">
  <head>
    <title>Team Profile</title>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css"  integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
    <script src="https://kit.fontawesome.com/4456d94d83.js" crossorigin="anonymous"></script>

  </head>
  <body>
      <style>
          header {
              background-color: #FA846B;
              padding: 12px;
              display: flex;
              justify-content: center;
        };
      </style>

      <header>
          <h1>My Team</h1>
      </header>

      <section class="container" id="cardarea">
          <div class = "row">
              ${teamHTML}

          </div>
      </section>

    <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.9.2/dist/umd/popper.min.js" integrity="sha384-IQsoLXl5PILFhosVNubq5LC7Qb9DXgDA9i+tQ8Zj3iwWAwPtgFTxbJ8NT4GN1R8p" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.min.js" integrity="sha384-cVKIPhGWiC2Al4u+LWgxfKTRIcfu0JTxR+EQDz/bgldoEyl4H0zUF0QKbrJ0EcQF" crossorigin="anonymous"></script>
  </body>
</html>
    `
}

module.exports = generateHTML;
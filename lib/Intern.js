const Employee=require("./Employee");

class Intern extends Employee {
    constructor(name,id,email,school){
        super(name,id,email,);
        this.school=school;
    }

    getSchool() {
        return this.school;
    }

    getRole() {
        return "Intern"
    }

    renderHTML() {
        return `
        <div class = "col-12 col-md-4">
    <div class="card" style="width: 18rem; box-shadow: 2px 2px 2px black; margin: 8px auto;">
        <div class="card-body" style = "background-color: aqua;">
          <h4 class="card-title">${this.getName()}</h4>
          <h5 class="card-title"><i class="fa-solid fa-user-graduate"></i></i> Intern</h5>
        </div>
        <ul class="list-group list-group-flush">
          <li class="list-group-item">ID: ${this.getId()}</li>
          <li class="list-group-item">Email:  <a href="mailto:${this.getEmail()}">${this.getEmail()}</ahref></a></li>
          <li class="list-group-item">School: ${this.getSchool()}</li>
        </ul>
      </div>
  </div>
  `
    }
}

module.exports=Intern;
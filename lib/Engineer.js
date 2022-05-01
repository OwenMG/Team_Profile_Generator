const Employee=require("./Employee");

class Engineer extends Employee {
    constructor(name,id,email,github){
        super(name,id,email,);
        this.github=github;
    }

    getGithub() {
        return (`https://github.com/${this.github}`);
    }

    getRole() {
        return "Engineer";
    }

    renderHTML() {
        return `
        <div class = "col-12 col-md-4">
        <div class="card" style="width: 18rem; box-shadow: 2px 2px 2px black; margin: 8px auto;">
        <div class="card-body" style = "background-color: aqua;">
          <h4 class="card-title">${this.getName()}</h4>
          <h5 class="card-title"><i class="fa-solid fa-glasses"></i> Engineer</h5>
        </div>
        <ul class="list-group list-group-flush">
          <li class="list-group-item">ID: ${this.getId()}</li>
          <li class="list-group-item">Email:  <a href="mailto:${this.getEmail()}">${this.getEmail()}</ahref></a></li>
          <li class="list-group-item">GitHub: <a href="${this.getGithub()}">${this.github}</a></li>
        </ul>
      </div>
  </div>
        `
    }
}

module.exports=Engineer;
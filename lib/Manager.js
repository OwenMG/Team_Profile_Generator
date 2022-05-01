const Employee=require("./Employee");

class Manager extends Employee {
    constructor(name,id,email,officenum){
        super(name,id,email,);
        this.officenum=officenum;
    }

    getRole() {
        return "Manager";
    }

    renderHTML() {
        return `
        <div class = "col-12 col-md-4">
    <div class="card" style="width: 18rem; box-shadow: 2px 2px 2px black; margin: 8px auto;">
        <div class="card-body" style = "background-color: aqua;">
          <h4 class="card-title">${this.getName()}</h4>
          <h5 class="card-title"><i class="fa-solid fa-mug-hot"></i> Manager</h5>
        </div>
        <ul class="list-group list-group-flush">
          <li class="list-group-item">ID: ${this.getId()}</li>
          <li class="list-group-item">Email:  <a href="mailto:${this.getEmail()}">${this.getEmail()}</ahref></a></li>
          <li class="list-group-item">Office Number: ${this.officenum}</li>
        </ul>
      </div>
  </div>
        `
    }
}

module.exports=Manager;
// importing necessary modules
const inquirer = require("inquirer");
const fs = require("fs");
const Employee = require("./lib/Employee");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const generateHTML = require("./utils/generateHTML");

let team = [];
// defining the prompt messages for inquirer
const prompts = {
    welcome: "Welcome to the Team Profile Generator! creating a new team...",

    manager : {
        name: "Please enter the team manager's name: ",
        id: "Please enter the team manager's ID: ",
        email: "Please enter the team manager's email address: ",
        office: "Please enter the team manager's office number",
    },

    menu: {
        choose: "Please decide what you would like to do next:",
        engineer: "Add a new engineer to the team profile",
        intern: "Add a new intern to the team profile",
        finish: "Save team, generate HTML, and exit program"
    },

    engineer: {
        name: "Please enter the name of the engineer: ",
        id: "Please enter the id of the engineer: ",
        email: "Please enter the email of the engineer: ",
        github: "Please enter the GitHub username of the engineer: ",
    },
    intern: {
        name: "Please enter the name of the intern: ",
        id: "Please enter the id of the intern: ",
        email: "Please enter the email of the intern: ",
        school: "Please enter the school the intern is attending: ",
    },
    
};

// functions to turn user input into employee data
function addNewManager() {
    inquirer
        .prompt([
            {
                type: "input",
                name: "name",
                message: prompts.manager.name,
            },
            {
                type: "input",
                name: "id",
                message: prompts.manager.id,
            },
            {
                type: "input",
                name: "email",
                message: prompts.manager.email,
            },
            {
                type: "input",
                name: "office",
                message: prompts.manager.office,
            },
        ])
        .then((data)=>{
            const manager = new Manager(data.name,data.id,data.email,data.office)
            team.push(manager);
            runMenu();
        })
};
function addNewEngineer() {
    inquirer
        .prompt([
            {
                type: "input",
                name: "name",
                message: prompts.engineer.name,
            },
            {
                type: "input",
                name: "id",
                message: prompts.engineer.id,
            },
            {
                type: "input",
                name: "email",
                message: prompts.engineer.email,
            },
            {
                type: "input",
                name: "github",
                message: prompts.engineer.github,
            },
        ])
        .then((data)=>{
            const engineer = new Engineer(data.name,data.id,data.email,data.github);
            team.push(engineer);
            runMenu();
        })
};
function addNewIntern() {
    inquirer
    .prompt([
        {
            type: "input",
            name: "name",
            message: prompts.intern.name,
        },
        {
            type: "input",
            name: "id",
            message: prompts.intern.id,
        },
        {
            type: "input",
            name: "email",
            message: prompts.intern.email,
        },
        {
            type: "input",
            name: "school",
            message: prompts.intern.school,
        },
    ])
    .then((data)=>{
        const intern = new Intern (data.name,data.id,data.email,data.school);
        team.push(intern);
        runMenu();
    })
};

// defines UI menu function
function runMenu() {
    inquirer
        .prompt([
            {
                type: "checkbox",
                name: "selection",
                message: prompts.menu.choose,
                choices:[prompts.menu.engineer,prompts.menu.intern,prompts.menu.finish]
            }
        ])
        .then((data)=>{
            console.log(data.selection);
            if(data.selection == prompts.menu.engineer) {
                addNewEngineer();
            }
            if(data.selection == prompts.menu.intern) {
                addNewIntern();
            }
            if(data.selection == prompts.menu.finish) {
                console.log("Generating html...");
                console.log(team);
                const renderedHTML = generateHTML(team);
                fs.writeFile("./dist/index.html", renderedHTML,  (err) => 
                err ? console.error(err) : console.log ("Success!"));
                console.log("HTML has been generated, you may close the command line.");
            }
        })

}

// function to initialize the program
function Initialize() {
    console.log(prompts.welcome);
    addNewManager();
}

Initialize();
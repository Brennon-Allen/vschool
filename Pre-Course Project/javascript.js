var wallet = 0;
var goalList = [];
//let projectList = ["Name", "Due Date", "Status"];

document.getElementById("balance").innerHTML = "$" + wallet;
document.getElementById("addGoal").addEventListener("click", newGoal);
document.getElementById("costSim").addEventListener("click", costAnalysis);
document.getElementById("saveCalc").addEventListener("click", saveCalc);
document.getElementById("wallet").addEventListener("click", addFunds);
document.getElementById("capture").addEventListener("click", snapshot);
document.getElementById("income").addEventListener("click", updateIncome);
document.getElementById("subtract").addEventListener("click", subtractFunds);
//document.getElementById("goalsBox").addEventListener("click", newGoal);
//document.getElementById("goals").innerHTML = "<strong>Goals</strong><br>";
//document.getElementById("projectBox").innerHTML = "<strong>Projects</strong><br>" + projectList;

function addFunds(){
    var balance = prompt("Current balance:");
    wallet += Number(balance);
    console.log(wallet);
    document.getElementById('walletDisplay').innerHTML = "$" + wallet;
}


function showBalance(){
    console.log("$" + wallet);
    //document.write("$" + wallet);
}

function subtractFunds(){
    var balance = prompt("Cost $");
    wallet -= balance;
    console.log(wallet);
    document.getElementById('walletDisplay').innerHTML = "$" + wallet;
}

function updateIncome(){
    let income = prompt("Monthly income $");
    console.log(income);
}

function snapshot(){
    window.print();
}

function newGoal(){
    goalName = prompt("Goal name: ");
    priority = prompt("Priority Level (1= HIGHEST 2= MEDIUM 3= WISHLIST ");
    value = prompt("Value: ");
    goalList.push(goalName);
    console.log(goalList);
    document.getElementById("goals").innerHTML = "<strong>Goals</strong><br>" + goalList;
}

function costAnalysis(){
    var cost = prompt("Cost $");
    wallet -= cost;
    console.log(wallet);
    document.getElementById("showIt").innerHTML = "$" + wallet + " would remain.";
}

function saveCalc(){
    var itemCost = prompt("Cost of Item $");
    var saveRate = Number(itemCost) / Number(income);
    document.getElementById("showIt").innerHTML = "It would take " + Number(saveRate) + " full paychecks to purchase.";
}

//document.getElementById('message').innerHTML = "Jan 19, <br> 2024";

const d = new Date();
let lastLogin = d.getDay();
d.getFullYear();
document.getElementById("date").innerHTML = "Logged in " + d;

console.log(projects);
document.getElementById("addProject").addEventListener("click", addProject);

function getUserNumber(){
    prompt("Enter number: ");
    var getUserNumber = Number(getUserNumber);
    
    console.log(getUserNumber);
}

var projects = {
    title: "Move Apartment",
    completion: "1/26/2023",
    tatus: "Pending storage unit",
}

var projectTitles = [];
var projectComp = [];
var projectStat = [];

function addProject(){
    document.getElementById("projectBox").innerHTML = projects.title;
    projects.title = prompt("Project Title: ");
    projects.completion = prompt("Completion Date (dd/mm/yyyy");
    projects.status = prompt("Status: ");
    projectTitles.push(projects.title);
    projectComp.push(projects.completion);
    projectStat.push(projects.status);
    //document.getElementById("projectBox").innerHTML = "<strong>Projects</strong> <br>" + projectTitles[0];
}

const readline = require("readline-sync");

const playerName = readline.question("Hi! What's your name? ");

console.log(`Welcome to the ring, ${playerName}!`);

// function Character(name, healthPoints, attackPoints, inventory){
//     this.name = name;
//     this.healthPoints = healthPoints;
//     this.attackPoints = attackPoints;
//     this.inventory = inventory;
//     this.printInventory = function(){
//         console.log(`Name: ${this.name}`);
//         console.log(`Inventory: ${this.inventory}`);
//     }
// }

class Character {
    constructor(name, healthPoints, attackPoints, inventory){
        this.name = name;
        this.healthPoints = healthPoints;
        this.attackPoints = attackPoints;
        this.inventory = inventory;
    }
    printInventory(){
        console.log(this.name);
        console.log(this.inventory);
    }
}

let playerInventory = ["Long Bow", "Compound Bow", "Crossbow", "Sling-shot", "Stones"];

const hero = new Character(playerName, 100, 5, playerInventory);
const enemy1 = new Character("Jimmy", 100, 3, ["Hot Water", "Zapper"]);
const enemy2 = new Character("Brutis", 250, 10, ["Cannon", "Spikes"]);
const enemy3 = new Character("Martha", 500, 15, ["Poison", "Hammer Drone"]);

let enemies = [enemy1, enemy2, enemy3];

hero.printInventory();
enemy1.printInventory();
enemy2.printInventory();
enemy3.printInventory();
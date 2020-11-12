// Phase 1

let titleize = (names, printCB) => {
    titleized = names.map(name => {
        return name.charAt(0).toUpperCase() + name.toLowerCase().slice(1);
    })
    printCB(titleized)
}

let printCB = (arr) => {
    arr.forEach(el => {
        console.log(el);
    });
}

names = ['mX.', 'mary', 'jinglEheimer', 'scHmidt']

// titleize(names, printCB)

// Phase 2

function Elephant(name, height, tricks) {
    this.name = name;
    this.height = height;
    this.tricks = tricks;
}

Elephant.prototype.trumpet = function() { console.log(`${this.name} goes 'phrRRRRRRR!!!!'`) };
Elephant.prototype.grow = function() { this.height += 12 };
Elephant.prototype.addTrick = function(trick) { this.tricks.push(trick) };
Elephant.prototype.play = function() { 
    idx = Math.floor(Math.random() * this.tricks.length);
    console.log(this.tricks[idx]);
};

let dumbo = new Elephant('dumbo', 96, ["giving human friends a ride", "playing hide and seek"]);

// dumbo.trumpet();
// dumbo.grow();
// console.log(dumbo.height);
// dumbo.addTrick('Spraying water');
// for (let i = 0; i < 10; i++) {
//     dumbo.play();    
// }

// Phase 3

let ellie = new Elephant("Ellie", 185, ["giving human friends a ride", "playing hide and seek"]);
let charlie = new Elephant("Charlie", 200, ["painting pictures", "spraying water for a slip and slide"]);
let kate = new Elephant("Kate", 234, ["writing letters", "stealing peanuts"]);
let micah = new Elephant("Micah", 143, ["trotting", "playing tic tac toe", "doing elephant ballet"]);

let herd = [ellie, charlie, kate, micah];

Elephant.paradeHelper = (elephant) => {
    console.log(`${elephant.name} is trotting by!`);
}

// Elephant.paradeHelper(micah);

// herd.forEach(ele => Elephant.paradeHelper(ele));

// Phase 4

function dinerBreakfast() {
    let order = "I'd like cheesy scrambled eggs please";
    return function(addition) {
        if (addition) { order = order + ` and ${addition}`; }
        console.log(order);
    }
}

let bfastOrder = dinerBreakfast();

// bfastOrder();
// bfastOrder("chocolate chip pancakes");
// bfastOrder("grits");
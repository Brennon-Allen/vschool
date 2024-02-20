/*
You're starting your business as a strictly online DJ (DJ JS)
and you want to start by creating a website where people can change
the color of a square on the page by interacting with different HTML Events.

The square's color will change as follows:

- Blue when the mouse hovers over the square
- Red when the mouse button is held down over the square
- Yellow when the mouse button is let go over the square
- Green when the mouse is double clicked in the square
- Orange when the mouse scroll is used somewhere in the window (not just over the square).
- You should also be able to press the first letter of the colors (typing "r" on the keyboard for "red", for example) and have the box change to that color. Check out the key and keyCode property of `e.target`

Attempt these requirements. If you become discouraged, included are things to consider.

Take a minute to think through how you would implement all of these event listeners.

You will need a different event for each event. Keyboard events are triggered by any key.

`.addEventListener` will be called on your square 6 times.
*/

var divHTML = document.body.innerHTML = "<div id='square'></div>";

var square = document.getElementById("square");

square.style.width = "100px";
square.style.height = "100px";
square.style.margin = "auto";
square.style.marginTop = "20%";
square.style.backgroundColor = "black";

square.addEventListener("mouseover", turnBlue);
square.addEventListener("mousedown", turnRed);
square.addEventListener("mouseout", turnYellow);
square.addEventListener("dblclick", turnGreen);
window.addEventListener("mousewheel", turnOrange);
window.addEventListener("keypress", colorChanger);

function colorChanger(x){
    if(x.key === "r"){
        square.style.backgroundColor = "red";
    } else if (x.key === "g"){
        square.style.backgroundColor = "green";
    } else if (x.key === "y"){
        square.style.backgroundColor = "yellow";
    } else if (x.key === "o") {
        square.style.backgroundColor = "orange";
    } else if (x.key === "b"){
        square.style.backgroundColor = "blue";
    }
}

function turnBlue(){
    square.style.backgroundColor = "blue";
}

function turnRed(){
    square.style.backgroundColor = "red";
}

function turnYellow(){
    square.style.backgroundColor = "yellow";
}

function turnGreen(){
    square.style.backgroundColor = "green";
}

function turnOrange(){
    square.style.backgroundColor = "orange";
}


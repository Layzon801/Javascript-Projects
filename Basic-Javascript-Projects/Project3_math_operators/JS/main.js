window.alert(Math.random() * 10000); // displayed a random number times 10000 in a window alert // 

function add() { // naming a function and defining it //
    var addition = 53 + 189; // created var addition and gave it value of 53 plus 189 // 
    document.getElementById("plus").innerHTML = "53 + 189 = " + addition; // displaying a string and concatenating the variable 'addition' on to it at the element "plus" //
}

function sub() {
    var subtraction = 78 - 374; // created the var subtraction and gave it a value of 78 minus 374 // 
    document.getElementById("minus").innerHTML = "78 - 374 = " + subtraction;
}

function mul() {
    var multiply = 56 * 14; // created the var multiply and gave it a value of 56 times 14 // 
    document.getElementById("times").innerHTML = "56 * 14 = " + multiply;
}

function div() {
    var division = 13 / 68; // created the var division and gave it a value of 13 divided by 68 //
    document.getElementById("divide").innerHTML = "13 / 68 = " + division;
}

function allmath() {
    var mathoperations = (22 + 45) * 10 / 5 - 16; // created var mathoperations and gave it the value of (22 + 45) * 10 / 5 - 16 //
    document.getElementById("all").innerHTML = "22 plus 45 equals 67, times 10 is 670, divided by 5 is 134, minus 16 equals " + mathoperations;
} 

function mod() {
    var modulus = 23 % 5; // created var modulus and gave it the value of the remainder of 23 / 5 // 
    document.getElementById("rem").innerHTML = "When you divide 23 by 5 you get a remainder of: " + modulus;
}

function negation_operator() {
    var X = 10;
    document.getElementById("neg").innerHTML = -X; // using a negation operator to make X the opposite of what it is // 
}

function increase() {
    var X = 5;
    X++; // increasing var X by an increment of 1 //
    document.getElementById("add1").innerHTML = X;
}

function decrease() {
    var X = 6.2;
    X--; // decreasing var X by 1 //
    document.getElementById("minus1").innerHTML = X;
}

function round() {
    var X = 63.7;
    document.getElementById("roundX").innerHTML = (Math.round(X)); //I am using Math.round to round X to the nearest integar //
}

function power() {
    var X = 6;
    var Y = 3;
    var Z = (Math.pow(X, Y)); // I am using Math.pow to get the value of X to the Y power //
    document.getElementById("pow").innerHTML = Z;
}
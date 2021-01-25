function call_loop() { // Using a loop to count to ten
    var digit = "";
    var X = 1;
    while (X < 11) {
        digit += "<br>" + X;
        X++;
    }
    document.getElementById("loop").innerHTML = digit;
}

function stringLength() {
    var str = "This is a string."; // using stringlength to display the number of characters in the string.
    var X = str.length;
    document.getElementById("string").innerHTML = X;
}

var Instruments = ["Guitar", "Drums", "Piano", "Bass", "Violin", "Trumpet", "Flute"];
var Content = "";
var Y;
function for_Loop() { // Using a for Loop to display all of the instruments
    for (Y=0; Y < Instruments.length; Y++) {
        Content += Instruments[Y] + "<br>";
    }
    document.getElementById("List_of_Instruments").innerHTML = Content;
}

function array_Function() { // creating an array and displaying specific values of it
    var Dog_Picture = [];
    Dog_Picture[0] = "sleeping";
    Dog_Picture[1] = "playing";
    Dog_Picture[2] = "eating";
    Dog_Picture[3] = "whining";
    document.getElementById("Array").innerHTML = "In this picture, the dog is " +
    Dog_Picture[3] + ".";
}

function constant_function() { // creating a constant and changing the values of it
    const Musical_Instrument = {type:"Piano", brand:"Yamaha", color:"White"};
    Musical_Instrument.color = "Black";
    Musical_Instrument.price = "$500";
    document.getElementById("Constant").innerHTML = "The cost of the " + Musical_Instrument.type + " is "
    + Musical_Instrument.price + " while the color is " + Musical_Instrument.color + ".";
}

function let_function() { // Using the let function to create a variable that can only be accessed from within the block
    var X = 55;
    {
        let X = 38;
        document.getElementById("let1").innerHTML = X;
    }
    document.getElementById("let2").innerHTML = X;
}

function return_Function() {
    function return2() { // using return function to stop the function and display the value of X
        var X = 23;
        return X;
    }
    document.getElementById("return").innerHTML = return2()
}

let car = {
    make: "Nissan ", // creating an object and its properties
    model: "GTR ",
    year: "2019 ",
    color: "white ", 
    description : function() {
        return "The car is a " + this.year + this.color + this.make + this.model;
    }
};
document.getElementById("Car_Object").innerHTML = car.description();

function break_Function() { // using break to stop at number 4 on the counter
    var text = "";
    var X;
    for (X = 0; X < 10; X++) {
        if (X === 5) { break; }
        text += "The number is " + X + "<br>";
    }
    document.getElementById("break").innerHTML = text;
}

function continue_Function() { // using continue to skip number 7 on the counter
    var text = "";
    var X;
    for (X = 0; X < 10; X++) {
        if (X === 7) { continue; }
        text += "The number is " + X + "<br>";
    }
    document.getElementById("continue").innerHTML = text;
}
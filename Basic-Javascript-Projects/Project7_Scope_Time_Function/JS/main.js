var Y=54; // created a global variable // 
function myFunction() {
    var X=12; // created a local variable //
    document.getElementById("Local").innerHTML = Y + X;
}

function myFunction2() {
    var X=22; // created a local variable //
    document.getElementById("Global").innerHTML = X * Y ;
}

function myFunction3() {
    if (new Date().getHours() < 12) { // Using an if statement and retrieving the time on the user's computer //
        document.getElementById("IF").innerHTML = "Good Morning!"; 
    }
}

function myFunction4() {
    Age = document.getElementById("Age").value;
    if(Age >= 65) { // createdan if statement //
        Elderly = "You qualify for an elderly discount!";
    }
    else { // created an else statement//
        Elderly = "You do not qualify for an elderly discount!";
    }
    document.getElementById("how_old_are_you?").innerHTML = Elderly;

}

function Time_function() {
    var Time = new Date().getHours(); //Created a time variable //
    var Reply;
    if (Time < 12 == Time > 0) {
        Reply = "It is morning!"; // made three branching statements //
    }
    else if (Time > 12 == Time < 18) {
        Reply = "It is afternoon.";
    }
    else {
        Reply = "It is evening.";
    }
    document.getElementById("Time_of_day").innerHTML = Reply; // displaying the variable "Reply" //
}
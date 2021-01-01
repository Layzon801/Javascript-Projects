function ride_function() {
    var Height, Can_ride; // Created 2 variables // 
    Height = document.getElementById("Height").value; // getting the value of "Height" from the hmtl document //
    Can_ride = (Height < 52) ? "You are too short":"You are tall enough"; // creating a condition with the ? operator //
    document.getElementById("ride").innerHTML = Can_ride + " to ride."; // displaying "Can_ride" variable with the string " to ride." concatenated on. //
}

function voter_age() {
    var Age, Old_enough; // Created variables Age and Old_Enough //
    Age = document.getElementById("Age").value; // gave variable Age a value // 
    Old_enough = (Age < 18) ? "You aren't old enough to vote":"You are old enough to vote"; // Used a conditional statement to display one of two results dependant on Age // 
    document.getElementById("Vote").innerHTML = Old_enough; // display variable "Old_enough" in the html document //
}

function Vehicle(Make, Model, Year, Color) { // Created an object constructor //
    this.Vehicle_Make = Make;
    this.Vehicle_Model = Model;
    this.Vehicle_Year = Year;
    this.Vehicle_Color = Color;
}

var Jack = new Vehicle("Dodge", "Viper", 2020, "Red"); // created objects //
var Emily = new Vehicle("Jeep", "Trail Hawk", 2019, "White and Black");
var Erik = new Vehicle("Ford", "Pinto", 1971, "Mustard");

function myFunction() { // Displaying object elements //
    document.getElementById("Keywords_and_Constructors").innerHTML =
    "Erik drives a " + Erik.Vehicle_Color + "-colored " + Erik.Vehicle_Model +
    " manufactured in " + Erik.Vehicle_Year;
}
function Pokemon(Color, Type) { // Created an object constructor //
    this.Pokemon_Color = Color;
    this.Pokemon_Type = Type;
}
 
var Rayquaza = new Pokemon("Green", "Dragon and Flying"); // Created objects //
var Victini = new Pokemon("Tan and Orange", "Psychic and Fire");

function myPokemon() {
    document.getElementById("New_and_This").innerHTML = 
    "Rayquaza is " + Rayquaza.Pokemon_Color + " and is a " + Rayquaza.Pokemon_Type + " type. "
}

function squared_Function() { // Created a function //
    document.getElementById("NestedFunction").innerHTML = Squared();
    function Squared() { // Nested a function within a function // 
        var X=5;
        function Square() {X *= X;} 
        Square();
        return X;
    }
}

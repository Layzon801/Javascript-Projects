document.write(typeof "word"); // displaying what type of data "word" is // 

function my_function() {
    document.getElementById("test").innerHTML = 0/0 ; // displaying the result of 0 divided by 0 // 
}

function my_function2() {
    document.getElementById("test2").innerHTML = isNaN('this is a string'); // displaying whether or not the string is not a number //
}

function my_function3() {
    document.getElementById("test3").innerHTML = isNaN('147'); // displaying whether or not the number is not a number //
}

function infinity() {
    document.getElementById("inf").innerHTML = 2E500; // displaying the result of 2E500 (infinity) //
}

function neginfinity() {
    document.getElementById("-inf").innerHTML = -2E500; // displaying the result of -2E500 (-infinity) //
}

function boolean1() {
    document.getElementById("boo1").innerHTML = (5>2); // using boolean logic to determine if the statement is true //
}

function boolean2() {
    document.getElementById("boo2").innerHTML = (5<2); // using boolean logic to determine if the statement is true //
}

function consolelog() {
    document.getElementById("con").innerHTML = console.log(43-8); // logging the result of the equation in the console //
}

function typecoercion() {
    document.getElementById("coer").innerHTML = ("13" + 7); // adding 2 different types of data together //
}

function consoleboo() {
    document.getElementById("conboo").innerHTML = console.log(45<23); // using boolean logic to determine if the statement is true then, logging the result in the console //
}

function equality1() {
    document.getElementById("==1").innerHTML = (5 == 5); // using booleans to determine if 5 is equal to 5 //
}

function equality2() {
    document.getElementById("==2").innerHTML = (15 == 58); // using booleans to determine if 15 is equal 58 //
}     

function SuperEquality() {
    document.getElementById("Same").innerHTML = (12 === 12);           // Using booleans 
}                                                                      // to determine if  
                                                                       // the numbers are 
function SuperEquality2() {                                            // equal and are of 
    document.getElementById("DiffData").innerHTML = (5 === "5");       // the same data type. 
}

function SuperEquality3() {
    document.getElementById("DiffValue").innerHTML = (5 === 3);
}

function SuperEquality4() {
    document.getElementById("Diff").innerHTML = (5 === "9");
}

function And() {
    document.getElementById("&").innerHTML = (15===15 && 73>=45);      // Using Booleans to display true if both statements are correct //
    document.getElementById("&2").innerHTML = ((16===32) && 87<=12);
}

function OR() {
    document.getElementById("or1").innerHTML = (33*2==66 || 8<56);     // Using Booleans to display true if either of the statements are true // 
    document.getElementById("or2").innerHTML = (5<2 || 19==0);
}

function Not_function() {
    document.getElementById("not").innerHTML = !(10 > 5);              // Using NOT opertator to display true if the statement is false // 
    document.getElementById("not2").innerHTML = !(6 > 8);
}
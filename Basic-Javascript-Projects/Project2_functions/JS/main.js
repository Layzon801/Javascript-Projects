function myFunction() { // Naming a function and defining it. //
    var a = 12; // defined variable a and gave it a numerical value. // 
    var b = 5; // defined variable b and gave it a numerical value. //
    var c = a*b; // defined variable c and gave it a value equal to the result of variable a and b multiplied by each other. //
    document.getElementById("demo").innerHTML = c; // displayed the variable c in the html element with an Id of demo. //
}

function myFunction2() { // Named a function and defined it. //
    var sentence = 'I am learning'; // defined variable 'sentence' and gave it a string value. //
    sentence += ' a lot on this course.'; // concatenated this string to the end of variable 'sentence'. // 
    document.getElementById("concatenate").innerHTML = sentence; // displayed the variable 'sentence' in the html element with an Id of "concatenate."
}
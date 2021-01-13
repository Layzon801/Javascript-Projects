function full_sentence() {
    var part1 = "This is a ";
    var part2 = "full sentence."; // concatenating the variables together //
    var whole_sentence = part1.concat(part2);
    document.getElementById("concatenate").innerHTML = whole_sentence;
}

function slice_method() {
    var Sentence = "this is the sentence that I will slice.";
    var Section = Sentence.slice(33,38); // slicing the word "slice" out of the sentence and displaying it //
    document.getElementById("slice").innerHTML = Section;
}

function UppercaseFunction() {
    var Sentence = "This is going to be capitalized"; // using toUppercase to capitalize the sentence //
    var UP = Sentence.toUpperCase();
    document.getElementById("capital").innerHTML = UP;
}

function searchFunction() {
    var sentence = "This is sentence that will be searched"; // searching the sentence for the word "search" then displaying where it is in the sentence //
    var X = sentence.search("search");
    document.getElementById("ss").innerHTML = X;
}

function string_method() {
    var X = 345; // using toStringmethod to convert variable "X" to a string //
    document.getElementById("NumToStr").innerHTML = X.toString();
}

function precision_method() {
    var X = 52626.68282737;
    document.getElementById("precision").innerHTML = X.toPrecision(10);
}

function Fixed_method() {
    var Num = 5678.453980;
    document.getElementById("tofix").innerHTML = Num.toFixed(3); // rounding the number to the third decimal using toFixed //
}

function Valueof_method() {
    var str = "This is a sentence.";
    var res = str.valueOf();
    document.getElementById("value").innerHTML = res; // using Valueof to display the primitive value of the string //
}
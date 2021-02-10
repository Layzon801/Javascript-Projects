function Color_Function() {
    var Color_Output;
    var Colors = document.getElementById("Color_Input").value;
    var Color_String = " is a great color!";
    switch(Colors) { // using a switch function to display what color is chosen by the user + "Color_String"
        case "Red":
            Color_Output = "Red" + Color_String;
        break;
        case "Yellow":
            Color_Output = "Yellow" + Color_String;
        break;
        case "Green":
            Color_Output = "Green" + Color_String;
        break;
        case "Blue":
            Color_Output = "Blue" + Color_String;
        break;
        case "Pink":
            Color_Output = "Pink" + Color_String;
        break;
        case "Purple":
            Color_Output = "Purple" + Color_String;
        break;
        default:
        Color_Output = "Please enter a color exactly as written on the list.";
    }
    document.getElementById("Output").innerHTML = Color_Output;
}

function changeText() {
    var A = document.getElementsByClassName("change"); // using getElementByClassName to change the text with a class name of "change" at index 0.
    A[0].innerHTML = "The text has changed";
}

var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");

// Create gradient
var grd = ctx.createLinearGradient(0,0,170,0);
grd.addColorStop(0,"red");
grd.addColorStop(1,"black");

// fill with gradient
ctx.fillStyle = grd;
ctx.fillRect(20,20,150,100);
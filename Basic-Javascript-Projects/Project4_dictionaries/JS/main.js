function Mydictionary() { // Creating a dictionary function //
    var Animal = { // Adding a object to the dictionary // 
        Species: "Dog", // creating key value pairs //
        Color: "Grey", 
        Breed: "Husky", 
        Age: 3, 
        Sound: "Bark!"
    };
    delete Animal.Species; // deleting the Species element from the Animal object // 
    document.getElementById("dictionary").innerHTML = Animal.Species; // Displaying the value of Animal.Species at the element "dictionary" in the html document.//
}

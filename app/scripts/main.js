'use strict';
(function () {
    // Step 01
    // Define the blueprint for a "Player" object
    function Player(name) {
        // Convention for Classes in OOP and javascript is to TitleCase them
        this.name = name;  // the only attribute for player class is 'name'
      }
    // define a function for this Player class that prints the player's name
    Player.print = function () {
        console.log(this.name);  // log the name of the player object
      };
    // create a new instance of a player object using the Player template
    var bran = new Player('Bran');
    // check that bran was created from the Player object
    console.log(bran instanceof Player);
    // use the print function the bran should have inherited
    try {
        // try to run the print function that bran 
      bran.print();
    } catch (e) {
        // log the error message
        console.log(e);
        // Uncaught TypeError: bran.print is not a function
      }
    // How do you make bran inherit the print() function?

    // SOLUTION
    // use the prototype to property to define a template for the Bran

    Player.prototype.print = function () {
        // use the prototype property to pass functions and attributes from the
        // prototype to the object instance
        console.log(this.name);
      };

    // run Player.prototype.print() again
    bran.print();  // works :)

    // ** notice: you can assign the print function even after you instantiated
    // the player class. Why is that? Javascript objects are Mutable

    // Step 02

    // lets create a new Class that will inherit from the abstract base class: Player
    function Mage() {}  // new Mage object
    // set the Mage objects prototype to a new instance of the Player class
    Mage.prototype = new Player('Maggie');  // this is a blue print so we don't want to be passing "name" option into it but we will say all mage are named Maggie for now
    // create a mage named Maggie
    var maggie = new Mage();
    // maggie can use the Player.prototype.print method
    maggie.print();



  }());
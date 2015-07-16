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

    // while the above solution works, you could have just defined the print
    // function inside the Player object
    function Player(name) {
        // Convention for Classes in OOP and javascript is to TitleCase them
        this.name = name;  // the only attribute for player class is 'name'
        this.print = function () {
            console.log('My name is ' + this.name);  // log the name of the player object
          };
      }

    // so why do we need the prototype property?
    // memory effecient! setting to prototype means all objects share the same
    // reference.

    // lets create a new Class that will inherit from the abstract base class: Player




  }());
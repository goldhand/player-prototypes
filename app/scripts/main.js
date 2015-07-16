'use strict';
(function () {
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
    var branObj = new Player('Bran');
    // use the print function the branObj should have inherited
    try {
      branObj.print();
    } catch (e) {
        console.log(e);
        // Uncaught TypeError: branObj.print is not a function
      }
    // How do you make branObj inherit the print() function?


  }());
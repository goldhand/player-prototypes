Player Prototypes
=================

The purpose of this course is to leave with a basic understanding of prototypes
in javascript.


Outline
-------

### Takeaways:
* Build "blueprints" of javascript objects using the prototype property
* Approach learning "Classes" in other object oriented languages with understanding
* Design modules using the concept of "inheritance"

### Target Audience:
* A beginner developer learning javascript or
* A developer experienced in another object oriented language, learning javascript
and used to using "Classes" to acheive inheritence
* A beginner frontend designer looking to add some javascript to their reptoire

### Prerequisits
* An understanding of javascript objects
* A basic familiarity with a text editor and terminal
* (Yeoman)[http://yeoman.io/] and the (VanillaJS generator)[https://libraries.io/npm/generator-vanillajs] or a basic understanding of git (for the live example)


### Preparation
* Laptop
* Follow along by creating a new vanilla js project or just review by forking the repository {{repo}}

If you are creating a new javascript project and plan on writing your own code 
while going through this:

..code-block: bash

  yo vanillajs 

and just follow instructions

If you are going to use the github and follow along from there you shold fork
or clone the {{repo}}

..code-block: bash

  git clone {{repo}}

Then checkout into the project start

..code-block: bash

  git checkout -f start


Lesson
------

### Step One

Goal: Create an object that can inherit from another object

if you are following along from the github repository, checkout into step one

..code-block: bash

  git checkout -f step01

otherwise just follow along

1. Open up `app/scripts/main.js` its the file we will be working on
2. Create a simple Player object that takes one argument, name, and assigns it 
to that objects `this` attribute.
3. Define a function called `print` that log's that objects name into the console
4. Create a new instance of the Player object named Bran
5. Try to have Bran print his name

There will be an exception when Bran tries to print his name. The exception explains
that Bran has no function called `print`.

We need to accomplish our goal though: to "Create an object that can inherit from another object"

__Problem__: How can you make Bran inherit the print method from his constructor class?








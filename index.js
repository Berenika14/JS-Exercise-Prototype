/*
  EXAMPLE TASK:
    - Write an Airplane constructor that initializes `name` from an argument.
    - All airplanes built with Airplane should initialize with an `isFlying` of false.
    - Give airplanes the ability to `.takeOff()` and `.land()`:
        + If a plane takes off, its `isFlying` property is set to true.
        + If a plane lands, its `isFlying` property is set to false.
*/

// EXAMPLE SOLUTION CODE:
function Airplane(name) {
  this.name = name;
  this.isFlying = false;
}
Airplane.prototype.takeOff = function () {
  this.isFlying = true;
};
Airplane.prototype.land = function () {
  this.isFlying = false;
};

const AA = new Airplane('American Airline')
console.log(AA.takeOff())

/*
// 👇 COMPLETE YOUR WORK BELOW 👇
// 👇 COMPLETE YOUR WORK BELOW 👇
// 👇 COMPLETE YOUR WORK BELOW 👇
*/

/*
  TASK 1
    - Write a Person Constructor that initializes `name` and `age` from arguments.
    - All instances of Person should initialize with an empty `stomach` array.
    - Give instances of Person the ability to `.eat("someFood")`:
        + When eating an edible, it should be pushed into the `stomach`.
        + The `eat` method should have no effect if there are 10 items in the `stomach`.
    - Give instances of Person the ability to `.poop()`:
        + When an instance poops, its `stomach` should empty.
    - Give instances of Person a method `.toString()`:
        + It should return a string with `name` and `age`. Example: "Mary, 50"
*/

function Person(name , age) {
  this.name = name,
  this.age = age,
  this.stomach= [];
  
}

Person.prototype.eat =function(edible){
  if (this.stomach.length < 10 ){
    this.stomach.push(edible);
  }
}
Person.prototype.poop=function(){
  this.stomach =[];
  
}


Person.prototype.toString =function(){
  return `${this.name}, ${this.age}`;
}

const nika = new Person(`Nika`, 25);
const orr = new Person('Orr', 35);
console.log(nika.toString());
//console.log(orr.toString());

nika.eat('🍕');
nika.eat('🍝');
nika.eat('🍣');
nika.eat('🍫');
nika.eat('🌮');
nika.eat('🥩');
nika.eat('🍿');
nika.eat('🍧');
nika.eat('🥯');
nika.eat('🍤');
nika.eat("🍮");
nika.eat('🍯')
console.log(nika)
nika.poop();
console.log(nika);



/*
  TASK 2
    - Write a Car constructor that initializes `model` and `milesPerGallon` from arguments.
    - All instances built with Car:
        + should initialize with an `tank` at 0
        + should initialize with an `odometer` at 0
    - Give cars the ability to get fueled with a `.fill(gallons)` method. Add the gallons to `tank`.
    - STRETCH: Give cars ability to `.drive(distance)`. The distance driven:
        + Should cause the `odometer` to go up.
        + Should cause the the `tank` to go down taking `milesPerGallon` into account.
    - STRETCH: A car which runs out of `fuel` while driving can't drive any more distance:
        + The `drive` method should return a string "I ran out of fuel at x miles!" x being `odometer`.
*/

function Car(model, milesPerGallon) {
  this.model = model;
  this.milesPerGallon =milesPerGallon;
  this.tank = 0;
  this.odometer= 0;
  
}

Car.prototype.fill = function(gallons){
   this.tank += gallons
   return this
}
Car.prototype.drive  = function(distance){
   this.odometer += distance;
   const tank = this.tank - distance / this.milesPerGallon

  if ( tank < 0){
    //console.log(tank)
    return ` I ran out of fuel at this ${this.odometer}`
  }
   this.tank = tank 
   return this
}


const tes = new Car('Tesla', 30).fill(20).drive(150)
const bent = new Car('Bentley', 25)

 //console.log(tes.fill(20))
 console.log(tes);




/*
  TASK 3
    - Write a Baby constructor subclassing Person.
    - Besides `name` and `age`, Baby takes a third argument to initialize `favoriteToy`.
    - Besides the methods on Person.prototype, babies have the ability to `.play()`:
        + Should return a string "Playing with x", x being the favorite toy.
*/
function Baby(name , age , favoriteToy) {
  Person.call(this, name , age)
  this.favoriteToy = favoriteToy;
 
}
Baby.prototype = Object.create(Person.prototype)
Baby.prototype.play = function(){
  return `Playing with ${this.favoriteToy}`
}

const baby1 = new Baby('Dua',2 , '🧸')

 console.log(baby1.toString())
console.log(baby1.play())

/* 
  TASK 4
  In your own words explain the four principles for the "this" keyword below:
  1. Window binding -   if we didn't give 'this' any context it will return the window,
   the global object in node or undefined if it is in a strict mode
  2. Implicit binding - 'this' applies to objects with method. when the function (method) is called 
  look on the left side after the dot ( that's what 'this' refers to)
  3. Explicit binding - we directly pass in what we want the 'this' keyword or (argument) to be ,
   by using .call .apply or .bind
  4. New binding - when a function is invoked as a constructor function (function that returns an object)
  'this' keyword points to the new object that is created.
*/


///////// END OF CHALLENGE /////////

/* 🛑🛑🛑🛑🛑🛑🛑🛑🛑🛑 Please do not modify anything below this line 🛑🛑🛑🛑🛑🛑🛑🛑🛑🛑 */
function foo(){
  console.log('its working!');
  return 'bar';
}
foo();
module.exports = {
  foo,
  Person, 
  Car,
  Baby
}
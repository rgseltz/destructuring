//Object Destructuring 1
let facts = { numPlanets: 8, yearNeptuneDiscovered: 1846};
//the following code creates individual variables for each property in the facts object, with the property value corresponding to it's variable value
let { numPlanets, yearNeptuneDiscovered } = facts;
console.log(numPlanets); //prints 8 to console
console.log(yearNeptuneDiscovered); //prints 1846 to console

//Object Destructuring 2
let planetFacts = {
    planets: 8,
    yearNeptuneDiscovered: 1846,
    yearMarsDiscovered: 1659
};
//the following code will declare planets as it's own variable, and spread the remaining properties into an object called discoveryYears
let { planets, ...discoveryYears } = planetFacts;
console.log(discoveryYears); //{ yearNeptuneDiscovered: 1846, yearMarsDicovered: 1659};
console.log("the number of planets are", planets);

//Object Destructuring 3

function getUserData({firstName, favoriteColor = "green"}) {
    return `Your name is ${firstName} and your favorite color is ${favoriteColor}`
};
getUserData({firstName: "Alejandro", favoriteColor: "purple"}); //prints to console "Your name is Alejandro and your favorite color is purple"
getUserData({firstName: "Melissa"})// prints to console "Your name is Melissa and your favorite color is green"
getUserData({});//prints to console "Your name is undefined and your favorite color is green"

//Array Destructuring 1
let [first, second, third] = ["Maya", "Marisa", "Chi"];
console.log(first);//prints "Maya" to console
console.log(second);//prints "Marisa" to console
console.log(third);//prints "Chi" to console

//Array Destructuring 2
let [raindrops, whiskers, ...aFewOfMyFavoriteThings] = [
    "Raindrops on roses",
    "whiskers on kittens",
    "Bright copper kettles",
    "warm woolen mittens",
    "Brown paper packages tied up with strings"
  ];

console.log(raindrops); //prints to console "Raindrops on roses"
console.log(whiskers); // prins to console "whiskers on kittens"
console.log(aFewOfMyFavoriteThings); // returns array of ["Bright copper kettles","warm woolen mittens","Brown paper packages tied up with strings"]

//Array Destructuring 3
let numbers = [10, 20, 30];
[ numbers[1], numbers[2] ] = [ numbers[2], numbers[1] ]; //swaps the position of the second and third values in the array called numbers. new array is [10, 30, 20];
console.log(numbers);

//ES2015 Refactoring
  //Assigning Variables to object properties: 
  var obj = {
      number: {
        a: 1,
        b: 2
      }
    };
    // var a = obj.number.a;
    // var b = obj.number.b;

//ES2015 version below
const { number: { a, b } } = obj

//ES5 Array Swap
var arr = [1, 2];
// var temp = arr[0];
// arr[0] = arr[1];
// arr[1] = temp;

[arr[0], arr[1]] = [arr[1], arr[0]];
console.log(arr);

//Function refactoring
const raceResults = (([first, second, third, ...rest]) => ( 
{ first, second, third, rest }));
let placement = ["Tom", "Margeret", "Allison", "David", "Pierre"];



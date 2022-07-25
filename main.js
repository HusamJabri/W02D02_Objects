console.log(arrowTitle)
/* START CODE UNDER THIS LINE */
/*
//                                  Pulse Practice
console.log("-----------------------------Q1-----------------------------")

const colors = ["blue", "red" , "black" ]

const negativeNumbers  = [ -1, -2, -3, -4, -5]

const food = ["burger", "pizza" , "falafl" ]

const numbers  = [
    [3, 5, 7]
    [2, 4, 6, 8]
]

console.log("-----------------------------Q2-----------------------------")

const orderedPlanets = ["Mercury", "Venus", "Earth", "Mars", "Jupiter"];
const unorderedPlanets = ["Mars", "Earth", "Mercury", "Jupiter", "Venus"];

console.log(orderedPlanets[3])
console.log(unorderedPlanets[0])

const animals = ["Cat", "Dog", "Dolphin", "Squirrel", "Koala"];
console.log(animals[animals.length -1])

console.log("-----------------------------Q3-----------------------------")

// a- use the `length` property
const orderedPlanets = ["Mercury", "Venus", "Earth", "Jupiter"]; 
orderedPlanets[orderedPlanets.length] = "mars"

// b- don't use the `length` property (use the index)
const unorderedPlanets = ["Mars", "Earth", "Mercury"];
unorderedPlanets.push("mars");

const animals = ["Cat", "Dog", "Dolphin", "Squirrel"];
animals[0] = "Koala";

console.log("-----------------------------Q4-----------------------------")

const reptiles = ["Snake", "Lizard", "Turtle"];
reptiles[3] = "Dinosaur";
reptiles.shift()

const fish = ["Swordfish", "Clownfish", "Shark"];
fish.unshift("Goldfish");
fish.pop()

console.log("-----------------------------Q5-----------------------------")

const date =[1, 9, 9, 3];
console.log(date.join(""))
const name = ["John", "Doe", "The Third"];
console.log(name.join(" "))
const graeet = ["hello", "world"];
console.log(graeet.join("' , '"))
const num = [1, 2, 3, 4];
console.log(num.reverse())

//                                           Practice


console.log("-----------------------------Q1-----------------------------")

const addToArray = function (array, string) {
  // TODO: Your code here
  return array.push(string)
};

addToArray(["Hello", "i", "am"], "John"); // => ["Hello", "i", "am", "John"]
addToArray(["Hello", "John", "i", "am"], "Jane"); // => ["Hello", "John", "i", "am", "Jane"]


console.log("-----------------------------Q2-----------------------------")

const convertToString = function (array) {
  // TODO: Your code here
  return array.join(" ")
};

convertToString(["Hello", "i", "am", "John"]); // => "Hello i am John"
convertToString(["Hello", "John", "i", "am", "Jane"]); // => "Hello John i am Jane"


console.log("-----------------------------Q3-----------------------------")

const accessElement = function (array, index) {
  // TODO: Your code here
  if (array.includes(index) === true) {
    return array[index]
  }
  else {
  return ("No element at index " + index)     
    }
};

console.log(accessElement([1, 2, 3, 4, 5], 0)); // => 1   // why cant find 0 ??? 
console.log(accessElement([1, 2, 3, 4, 5], 3)); // => 4           
console.log(accessElement([1, 2, 3, 4, 5], 10)); // => "No element at index 10"  

console.log("-----------------------------Q4-----------------------------")

const isInArray = function (array, string) {
  // TODO: Your code here
  if (array.includes(string) === true) {                    //why indexOf not working ??
    return "true"
  }
  else {
  return "false"     
    }
};

console.log(isInArray(["John", "Jane", "Mark"], "Jane")); // => true
console.log(isInArray(["John", "Jane", "Mark"], "Mark")); // => true
console.log(isInArray(["John", "Jane", "Mark"], "Smith")); // => false
console.log(isInArray(["John", "Jane", "Mark"], "Doe")); // => false
*/
console.log("-----------------------------Q5-----------------------------")

// split: is a string method that is used to convert a string into an array and the values will be separated depending on the
// argument passed into the split method (opposite of join)
const word = "Hello";
// if an empty string is passed as an argument then the string will be split on every character
word.split(""); // => ["H", "e", "l", "l", "o"]
// if we pass the letter "e" as an argument, it will split the string on every "e" in that string. Since there is only one "e", the string has split into an array with two elements
word.split("e"); // => ["H", "llo"]
// if an empty space (" ") is passed as an argument, the string will be split on every empty space
const words = "This is a string that contains words";
words.split(" "); // => ["This", "is", "a", "string", "that", "contains", "words"]

const reverseWords = function (string) {
  // TODO: Your code here
  if (string.includes(" "))
  return //string.reverse() 
  else { 
    return string   // not working
  }
};

reverseWords("Hello"); // => "Hello"
reverseWords("Hello World"); // => "World Hello"

console.clear()
console.log("-----------------------------Q6-----------------------------")

// do not use `push` or array assignments, only `unshift`
const addToLast = function (array, value) {
  // TODO: Your code here
  array.reverse()
  array.unshift(value)
  return array.reverse()
};

console.log(addToLast([1, 2, 3], 4)); // => [1, 2, 3, 4]
console.log(addToLast([10, 6], 1)); // => [10, 6, 1]



console.log("-----------------------------Q7-----------------------------")
// write a function `getLength` that accepts an array and returns the
// length of the array without using the array's attribute `length`
const getLength = function (array) {
  // do not use array.length
  // TODO: Your code here

    return array.push()
};

getLength([1, 2, 3, 4]); // => 4
getLength([10, 22, 30]); // => 3

// write a function `getFirstVal` that accepts an array and returns the
// first value of the array without using the index to access the value
const getFirstVal = function (array) {
  // do not use array[0]
  // TODO: Your code here
  return array.shift();
  // return array.indexOf(0);       //why i got -1 ??

};

getFirstVal([1, 2, 3, 4]); // => 1
getFirstVal([51, 3, 3, 4]); // => 51

console.log("-----------------------------Q8-----------------------------")

const updateOrCreate = function (array, value, index) {
  // TODO: Your code here
  array[index] = value

  return array

};

updateOrCreate([10, 20, 30], 50, 1); // => [10, 50, 30]
updateOrCreate([10, 20, 30], 40, 3); // => [10, 20, 30, 40]
updateOrCreate([10, 20, 30], 100, 10); // => [10, 20, 30, empty * 7, 100]

console.log("-----------------------------Q9-----------------------------")

const sliceArray = function (array, startVal, endVal) {
  // TODO: Your code here
  array.slice(startVal, endVal)
  
  return array

};
sliceArray([10, 20, 30, 40, 50, 60], 10, 60); // => [10, 20, 30, 40, 50, 60]
sliceArray([10, 20, 30, 40, 50, 60], 20, 40); // => [20, 30, 40]
sliceArray([10, 20, 30, 40, 50, 60], 20, 20); // => []
sliceArray([10, 20, 30, 40, 50, 60], 50, 20); // => []

console.log("-----------------------------Q10-----------------------------")

const randomFruit = function (array) {
  // TODO: Your code here
  //  array = fruits
  //  array[Math.floor(Math.random() * fruits.length)]
  return  fruits[Math.floor(Math.random() * fruits.length)]
};
const fruits = ["Apple", "Banana", "Strawberry", "Mango"];
randomFruit(fruits); // => "Apple"
randomFruit(fruits); // => "Apple"
randomFruit(fruits); // => "Strawberry"
randomFruit(fruits); // => "Banana"


//                                Extra Practice

console.log("-----------------------------Q1-----------------------------")

// a palindrome is when a string is read the same backwards
const isPalindrome = function (string) {
  // TODO: Your code here
  if (string == string.split('').reverse().join('')) {
        return true
    }
    else {
        return false
    }

};

isPalindrome("dad"); // => true
isPalindrome("was it a car or a cat i saw"); // => true
isPalindrome("a santa at nasa"); // => true
isPalindrome("John doe"); // => false

console.log("-----------------------------Q2-----------------------------")

const removeElement = function (array, index) {
  // TODO: Your code here
     array.shift(index)
    return array

};

removeElement([1, 2, 3], 1); // => [1, 3]
removeElement(["Hello", "John", "how", "are", "you"], 0); // => ["John", "how", "are", "you"]

console.log("-----------------------------Q3-----------------------------")

const combineArrays = function (arrayOne, arrayTwo) {
  // TODO: Your code here
  return arrayOne.concat(arrayTwo)
};

combineArrays([1, 2, 3], [4, 5]); // => [1, 2, 3, 4, 5]
combineArrays([1, 1], [1, 1]); // => [1, 1, 1, 1]

console.log("-----------------------------Q4-----------------------------")

const arrayMiddle = function (array) {
  // TODO: Your code here
  return array[Math.round(array.length / 2) ] 
};
  // add the even equation
arrayMiddle([1, 2, 3, 4, 5]); // => 3
arrayMiddle([1, 2, 3, 4, 5, 6]); // => 3.5
arrayMiddle([10, 52, 2, 10, 31]); // => 2
arrayMiddle([10, 52, 2, 10, 31, 7]); // => 6

console.log("-----------------------------Q5-----------------------------")

const hasNestedArray = function (array) {
  // TODO: Your code here
  if (array[array.flat()] === true) {
return true
  }
    else {
return false
    }
    
};

hasNestedArray([1, 2, 3, 4, 5]); // => false
hasNestedArray([1, 2, 3, [4, 5]]); // => true
hasNestedArray([1, 2, 3, 4, 5, 6, 7]); // => false
hasNestedArray([1, 2, 3, [4, 5, [6, 7]]]); // => true

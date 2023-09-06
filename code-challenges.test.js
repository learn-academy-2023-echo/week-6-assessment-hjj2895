// ASSESSMENT 6: JavaScript Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// --------------------1) Create a function that takes in an array of objects and returns an array with a sentence about each person with their name capitalized.

// a) Create a test with an expect statement using the variable provided.

//input: array of objects
//output: array of sentences
describe("sentence", () => {
  it("returns an array of sentences", () => {
    const hitchhikersCharacters = [
      { name: "ford prefect", occupation: "a hitchhiker" },
      { name: "zaphod beeblebrox", occupation: "president of the galaxy" },
      { name: "arthur dent", occupation: "a radio employee" }
    ]
    expect(sentence(hitchhikersCharacters)).toEqual(["Ford Prefect is a hitchhiker.", "Zaphod Beeblebrox is president of the galaxy.", "Arthur Dent is a radio employee."]
    )
  })
})

// ReferenceError: sentence is not defined

const hitchhikersCharacters = [
  { name: "ford prefect", occupation: "a hitchhiker" },
  { name: "zaphod beeblebrox", occupation: "president of the galaxy" },
  { name: "arthur dent", occupation: "a radio employee" }
]
// Expected output: ["Ford Prefect is a hitchhiker.", "Zaphod Beeblebrox is president of the galaxy.", "Arthur Dent is a radio employee."]

// b) Create the function that makes the test pass.

// Pseudo code:
// Create a function and pass in array as parameter
// Using map method, pass in value as parameter
// Convert object name to an array using .split(' ') and store it to a variable
// Convert first letter of first name and first letter of last name into uppercase
// Return new array by adding the appropriate strings and variables together

const sentence = (arr) => {
  return arr.map((value) => {
    let splitWord = value.name.split(' ')
     return splitWord[0][0].toUpperCase() + splitWord[0].slice(1) + ' ' + splitWord[1][0].toUpperCase() + splitWord[1].slice(1) + ' ' + 'is' + ' ' + value.occupation + '.'
  })
}

// Test Suites: 1 passed, 1 total
// Tests:       1 passed, 1 total

// --------------------2) Create a function that takes in a mixed data array and returns an array of only the REMAINDERS of the numbers when divided by 3.

// a) Create a test with an expect statement using the variables provided.

//input: array of mixed data
//output: array of only the remainders of numbers divided by 3

describe("numRemainder", () => {
  it("returns an array of only remainders of the numbers divided by 3", () => {
    const hodgepodge1 = [23, "Heyyyy!", 45, -10, 0, "Yo", false]
    expect(numRemainder(hodgepodge1)).toEqual([ 2, 0, -1, 0 ])
    const hodgepodge2 = [5, "Hola", 43, -34, "greetings", true]
    expect(numRemainder(hodgepodge2)).toEqual([ 2, 1, -1 ]
      )
  })
})

// ReferenceError: numRemainder is not defined

const hodgepodge1 = [23, "Heyyyy!", 45, -10, 0, "Yo", false]
// Expected output: [ 2, 0, -1, 0 ]
const hodgepodge2 = [5, "Hola", 43, -34, "greetings", true]
// Expected output: [ 2, 1, -1 ]

// b) Create the function that makes the test pass.

// Pseudo code:
// Create a function and pass in array as parameter
// Use the filter method to filter out elements that meet the condition
// Use the condition of typeof element is a number
// Use the map method and use the modulo operator to get the remainder when divided by 3
// Return new array

const numRemainder = (arr) => {
  return arr.filter((value) => typeof value === 'number')
  .map((value) => value % 3)
}

// Test Suites: 1 passed, 1 total
// Tests:       2 passed, 2 total

// --------------------3) Create a function that takes in an array of numbers and returns the sum of all the numbers cubed.

// a) Create a test with an expect statement using the variables provided.

//input: array of numbers
//output: sum of all numbers cubed

describe("cubedSum", () => {
  it("returns the sum of all numbers cubed", () => {
    const cubeAndSum1 = [2, 3, 4]
    expect(cubedSum(cubeAndSum1)).toEqual(99)
    const cubeAndSum2 = [0, 5, 10]
    expect(cubedSum(cubeAndSum2)).toEqual(1125)
  })
})

// ReferenceError: cubedSum is not defined

const cubeAndSum1 = [2, 3, 4]
// Expected output: 99
const cubeAndSum2 = [0, 5, 10]
// Expected output: 1125

// b) Create the function that makes the test pass.

// Pseudo code:
// Create a function and pass in an array as a parameter
// Create a sum variable and assign it to 0
// Loop through the array
  //cube each num and add it to the sum
// return sum

const cubedSum = (arr) => {
  let sum = 0
  for (let i = 0; i < arr.length; i++){
    sum += arr[i] ** 3
  }
  return sum
}

// Test Suites: 1 passed, 1 total
// Tests:       3 passed, 3 total
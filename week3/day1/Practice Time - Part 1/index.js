//Challenge 1:
// Create two variables, firstName and lastName
// Concatenate the two variables into a third variable called fullName
// Log fullName to the console
let firstName = "Omar";
let lastName = " Abdelaziz";
let fullName = firstName + lastName;
console.log(fullName);

//Challenge 2:
// Create a function that logs out "Hi there, Linda!" when called
let name = "Linda";
let greeting = "Hi there";
function greater() {
  console.log(greeting + " " + name + "!");
}

greater();

//Challenge 3:
// Create two functions, add3Points() and remove1Point(), and have them
// add/remove points to/from the myPoints variable
// Call the functions to that the line below logs out 10
let myPoints = 3;

function add3Points() {
  myPoints += 3;
}
function remove1Point() {
  myPoints -= 1;
}

console.log(myPoints);
add3Points();
add3Points();
add3Points();
remove1Point();
remove1Point();
console.log(myPoints);

//Challenge 4:
// Try to predict what each of the lines will log out
console.log("2" + 2); // "22"
console.log(11 + 7); // 19
console.log(6 + "5"); // "65"
console.log("My points: " + 5 + 9); //"My points: 59"
console.log(2 + 2); // 4
console.log("11" + "14"); // "1114"

//Challenge 5:
// When the user clicks the purchase button, render out
// "Something went wrong, please try again" in the paragraph
// that has the id="error".
function errorHandler() {
  document.getElementById("error").textContent =
    "Something went wrong, please try again";
}

//Challenge 6:
// Create four functions: add(), subtract(), divide(), multiply()
// Call the correct function when the user clicks on one of the buttons
// Perform the given calculation using num1 and num2
// Render the result of the calculation in the paragraph with id="sum-el"

let num1 = 3;
let num2 = 2;
let pText = document.getElementById("sum-el");
function add() {
  let sum = num1 + num2;
  pText.textContent = "Sum: " + sum;
}
function subtract() {
  let sum = num1 - num2;
  pText.textContent = "Sum: " + sum;
}
function divide() {
  let sum = num1 / num2;
  pText.textContent = "Sum: " + sum;
}
function multiply() {
  let sum = num1 * num2;
  pText.textContent = "Sum: " + sum;
}
document.getElementById("num1-el").textContent = num1;
document.getElementById("num2-el").textContent = num2;

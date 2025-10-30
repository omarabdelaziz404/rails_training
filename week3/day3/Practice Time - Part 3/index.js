//Challenge 1:
// Go through all variables and decide if they should be let or const
// Change the console logs to use template strings instead of double quote
const player = "Per";
const opponent = "Nick";
const game = "AmazingFighter";
let points = 0;
let hasWon = false;
points += 100;
hasWon = true;

if (hasWon) {
  console.log(`${player} got ${points} point and won the ${game} game!`);
} else {
  console.log(`The winner is ${opponent}! ${player} lost the game`);
}

//Challenge 2:
// Create a function that takes a single parameter, an array,
// and logs all the items of the array to the console.
// Call the function while passing in myCourses as an argument
let myCourses = [
  "Learn CSS Animations",
  "UI Design Fundamentals",
  "Intro to Clean Code",
];
function arrayLogger(arr) {
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
  }
}
arrayLogger(myCourses);

//Challenge 3:
// Save a value to localStorage
// Delete your code and refresh the page
// Fetch your value from localStorage and log it out
//localStorage.setItem("name", "Omar");
console.log(localStorage.getItem("name"));

//Challenge 4:
// Fetch the button from the DOM, store it in a variable
// Use addEventListener() to listen for button clicks
// Log Jane's score when the button is clicked (via data)
let data = [
  {
    player: "Jane",
    score: 52,
  },
  {
    player: "Mark",
    score: 41,
  },
];
let scoreEl = document.getElementById("score-btn");
scoreEl.addEventListener("click", function () {
  console.log(data[0].score);
});

//Challenge 5:
// The generateSentence(desc, arr) takes two parameterer: a description and an array.
// It should return a string based upon the description and array.
// Example: if you pass in "largest countries",and ["China", "India", "USA"],
// it should return the string: "The 3 largest countries are China, India, USA"
// Use both a for loop and a template string to solve the challenge
function generateSentence(desc, arr) {
  let baseString = `The ${arr.length} ${desc} are `;
  for (let i = 0; i < arr.length; i++) {
    if (i === arr.length - 1) {
      baseString += arr[i];
    } else {
      baseString += arr[i] + " ,";
    }
  }
  return baseString;
}
console.log(generateSentence("largest countries", ["China", "India", "USA"]));

//Challenge 6:
// Create a function that renders the three team images
// Use a for loop, template strings (``), plus equals (+=)
// .innerHTML to solve the challenge.
const imgs = ["images/hip1.jpg", "images/hip2.jpg"];
let containerEL = document.getElementById("container");
function imgRender() {
  let imgsDOM = "";
  for (let i = 0; i < imgs.length; i++) {
    imgsDOM += `<img alt="Employee in the company" class="team-img" src="${imgs[i]}">`;
  }
  containerEL.innerHTML = imgsDOM;
}
imgRender();

//Challenge 7:
// Round the price in the button down to two decimal places.
const totalPrice = 420.69235632455;
const btn = document.getElementById("purchase-btn");
btn.textContent = `Buy €${totalPrice.toFixed(2)}`;

//Challenge 8:
// The toFixed() method doesn't work anymore. Can you make it work?
// Google the error message if you're unsure about how to do it
const totalPrice = "420.69235632455";
const btn = document.getElementById("buy-btn");
btn.textContent = `Buy €${Number(totalPrice).toFixed(2)}`;

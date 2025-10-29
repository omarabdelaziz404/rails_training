//Challenge 1:
// Create a person object that contains three keys: name, age, and county.
// Create a function, logData(), that uses the person object to create a
// string in the following format:
// "Per is 35 years old and lives in Norway"
// Call the logData() function to verify that it works
let person = { name: "omar", age: 22, country: "Egypt" };
function logData() {
  console.log(
    person.name +
      " is " +
      person.age +
      " years old and lives in " +
      person.country
  );
}
logData();

//Challenge 2:
// less than 6 years old -> free
// 6 to 17 years old     -> child discount
// 18 to 26 years old    -> student discount
// 27 to 66 years old    -> full price
// over 66 years old     -> senior citizen discount
// Create a conditional statement (if/else/else if) that logs out the discount
// the passenger will get based upon the value of the age variable
let age = 18;
if (age < 6) {
  console.log("free");
} else if (age < 18) {
  console.log("child discount");
} else if (age < 27) {
  console.log("student discount");
} else if (age < 67) {
  console.log("full price");
} else {
  console.log("senior citizen discount");
}

//Challenge 3:
/* Use a for loop to log the following to the console:
The 5 largest countries in the world:
- China
- India
- United States
- Indinesia
- Pakistan
*/
let largeCountries = ["China", "India", "USA", "Indonesia", "Pakistan"];
for (i = 0; i < largeCountries.length; i++) {
  console.log(largeCountries[i]);
}

//Challenge 4:
// You need to help me fixup the largeCountries array so that
// China and Pakistan are added back into their respective places
// Use push() & pop() and their counterparts unshift() & shift()
// Google how to use unshift() and shift()
let largeCountries = ["Tuvalu", "India", "USA", "Indonesia", "Monaco"];
largeCountries.pop();
largeCountries.push("Pakistan");
largeCountries.shift();
largeCountries.unshift("China");
console.log(largeCountries);

//Challenge 5:
// If it is Friday the 13th, log out this spooky face: 😱
// Use the logical "AND operator" -> &&
let dayOfMonth = 13;
let weekday = "Friday";
if (dayOfMonth === 13 && weekday === "Friday") {
  console.log("😱");
}

//Challenge 6:
// Create a function that returns a random item from the array
let hands = ["rock", "paper", "scissor"];
function randomItem() {
  let rand = Math.floor(Math.random() * 3);
  return hands[rand];
}
console.log(randomItem());

//Challenge 7:
let fighters = [
  "🐉",
  "🐥",
  "🐊",
  "💩",
  "🦍",
  "🐢",
  "🐩",
  "🦀",
  "🐝",
  "🤖",
  "🐘",
  "🐸",
  "🕷",
  "🐆",
  "🦕",
  "🦁",
];
let stageEl = document.getElementById("stage");
let fightButton = document.getElementById("fightButton");
fightButton.addEventListener("click", function () {
  let randNumOne = Math.floor(Math.random() * 16);
  let randNumTwo = Math.floor(Math.random() * 16);
  stageEl.textContent = fighters[randNumOne] + "VS " + fighters[randNumTwo];
});

//Challenge 8:
// Create a function that puts the apples onto the appleShelf
// and the oranges onto the orangeShelf. Use a for loop,
// a conditional statement, and the textContent property.
let fruit = ["🍎", "🍊", "🍎", "🍎", "🍊"];
let appleShelf = document.getElementById("apple-shelf");
let orangeShelf = document.getElementById("orange-shelf");
function sortFruit() {
  for (i = 0; i < fruit.length; i++) {
    if (fruit[i] === "🍎") {
      appleShelf.textContent += fruit[i] + " ";
    } else if (fruit[i] === "🍊") {
      orangeShelf.textContent += fruit[i] + " ";
    }
  }
}
sortFruit();

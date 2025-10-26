let countEl = document.getElementById("count-el");
let saveEl = document.getElementById("save-el");
let count = 0;

function increment() {
  count += 1;
  countEl.textContent = count;
}

function save() {
  let countSave = count + " - ";
  saveEl.textContent += countSave;
  count = 0;
  countEl.textContent = 0;
}

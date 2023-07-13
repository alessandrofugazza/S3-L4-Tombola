const tombolaCellCount = 76;
const playerCellCount = 24;
const tombolaSheet = document.getElementById("tombolaSheet");
const playerSheet = document.getElementById("playerSheet");
const customPlayerSheet = document.getElementById("customPlayerSheet");

const numbersToDrow = [];
let remainingNumbers = tombolaCellCount;

const createTombolaSheet = () => {
  for (let i = 0; i < tombolaCellCount; i++) {
    numbersToDrow.push(i + 1);
    const newCell = document.createElement("div");
    newCell.classList.add("cell");
    newCell.classList.add(`cell${i}`);
    const number = document.createElement("p");
    number.innerText = i + 1;
    newCell.appendChild(number);
    newCell.addEventListener("click", addToCustomSheet);
    tombolaSheet.appendChild(newCell);
  }
};

const draw = () => {
  const numberIndexToRemove = Math.floor(Math.random() * remainingNumbers);
  console.log(numberIndexToRemove);
  let numberDrawn = numbersToDrow.splice(numberIndexToRemove, 1);
  console.log(numbersToDrow);
  numberDrawn = numberDrawn[0];
  const cells = document.getElementsByClassName(`cell${numberDrawn - 1}`);
  for (let i = 0; i < cells.length; i++) {
    cells[i].style.backgroundColor = "pink";
  }
  remainingNumbers--;
  if (remainingNumbers === 0) {
    setTimeout(() => alert("game over"), 0);
    return;
  }
};

const createPlayerSheet = () => {
  for (let i = 0; i < playerCellCount; i++) {
    const numberIndexToRemove = Math.floor(Math.random() * remainingNumbers);
    remainingNumbers--;
    numberDrawn = numbersToDrow.splice(numberIndexToRemove, 1);
    numberDrawn = numberDrawn[0];
    const newCell = document.createElement("div");
    newCell.classList.add("cell");
    newCell.classList.add(`cell${numberDrawn - 1}`);
    const number = document.createElement("p");
    number.innerText = numberDrawn;
    newCell.appendChild(number);
    playerSheet.appendChild(newCell);
  }
  numbersToDrow.length = 0;
  for (let i = 0; i < tombolaCellCount; i++) {
    numbersToDrow.push(i + 1);
  }
  remainingNumbers = tombolaCellCount;
};

let chosenNumbersCount = 1;

const addToCustomSheet = e => {
  if (chosenNumbersCount > playerCellCount) {
    alert("your sheet is full");
    return;
  }
  const isChosen = e.currentTarget.classList.contains("chosen");
  if (isChosen) {
    alert("cannot choose the same number twice!");
    return;
  }
  e.currentTarget.classList.add("chosen");
  const number = e.target.innerText;
  const newCell = document.createElement("div");

  newCell.classList.add("cell");
  newCell.classList.add(`cell${number - 1}`);
  const cellContent = document.createElement("p");
  cellContent.innerText = number;
  newCell.appendChild(cellContent);
  customPlayerSheet.appendChild(newCell);
  chosenNumbersCount++;
};

createTombolaSheet();
createPlayerSheet();
console.log(numbersToDrow);

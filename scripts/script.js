const tombolaCellNum = 76;
const playerCellNum = 24;
const tombolaSheet = document.getElementById("tombolaSheet");
const playerSheet = document.getElementById("playerSheet");
const customPlayerSheet = document.getElementById("customPlayerSheet");

const createTombolaSheet = () => {
  for (let i = 0; i < tombolaCellNum; i++) {
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

let drawnNumbers = [];

const randCell = () => {
  const randNum = Math.floor(Math.random() * tombolaCellNum);
  drawnNumbers.forEach(number => {
    if (number === randNum) {
      randCell();
    }
  });
  drawnNumbers.push(randNum);
  return randNum;
};

const draw = () => {
  const randNum = randCell();
  const cells = document.getElementsByClassName(`cell${randNum}`);
  for (let i = 0; i < cells.length; i++) {
    cells[i].style.backgroundColor = "pink";
  }
};

const createPlayerSheet = () => {
  for (let i = 0; i < playerCellNum; i++) {
    const cellNum = randCell();
    const newCell = document.createElement("div");
    newCell.classList.add("cell");
    newCell.classList.add(`cell${cellNum}`);
    const number = document.createElement("p");
    number.innerText = cellNum + 1;
    newCell.appendChild(number);
    playerSheet.appendChild(newCell);
  }
};

const addToCustomSheet = e => {
  const newCell = document.createElement("div");
  const cellNum = e.target.innerText;
  newCell.classList.add("cell");
  newCell.classList.add(`cell${cellNum - 1}`);
  const number = document.createElement("p");
  number.innerText = cellNum;
  newCell.appendChild(number);

  customPlayerSheet.appendChild(newCell);
};

createTombolaSheet();
createPlayerSheet();
drawnNumbers = [];

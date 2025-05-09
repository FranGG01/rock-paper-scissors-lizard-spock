const choices = ["Rock", "Paper", "Scissors", "Lizard", "Spock"];
const playerImg = document.getElementById("Seleccion_Usuario").querySelector("img");
const cpuImg = document.getElementById("Seleccion_Pc").querySelector("img");
const resultText = document.getElementById("Resultado");

const imageMap = {
    Rock: "https://rasnerdev.github.io/piedrapapeltijeraslagartospock/img/piedra.png",
    Paper: "https://rasnerdev.github.io/piedrapapeltijeraslagartospock/img/papel.png",
    Scissors: "https://rasnerdev.github.io/piedrapapeltijeraslagartospock/img/tijeras.png",
    Lizard: "https://rasnerdev.github.io/piedrapapeltijeraslagartospock/img/lagarto.png",
    Spock: "https://rasnerdev.github.io/piedrapapeltijeraslagartospock/img/spock.png"
  };

function _randomChoice() {
  const randomChoice = Math.floor(Math.random() * choices.length);
  return choices[randomChoice];
}
function _getPlayerChoice() {
  choices.forEach((choice) => {
    const button = document.getElementById(choice);
    button.addEventListener("click", () => {
        const playerChoice = choice;
        console.log("Jugador eligio:", playerChoice);
        playerImg.src = imageMap[playerChoice];
        playerImg.alt = playerChoice;
      
        const cpuChoice = _randomChoice()
        console.log("CPU eligio:", cpuChoice);
        cpuImg.src = imageMap[cpuChoice];
        cpuImg.alt = cpuChoice;

        const winner = _getWinner(playerChoice,cpuChoice);
        resultText.innerText = winner;
    });
  });
}
function _getWinner(playerChoice, cpuChoice) {
  if (playerChoice === cpuChoice) {
    return "This is a Draw!!!"
    }
 const rules = {    
    Rock: ["Scissors", "Lizard"],
    Paper: ["Rock", "Spock"],
    Scissors: ["Paper", "Lizard"],
    Lizard: ["Spock", "Paper"],
    Spock: ["Scissors", "Rock"]
  };

  if (rules[playerChoice].includes(cpuChoice)) {
    return "WINNER!!!"
  } else {
    return "Losing like always...?"
  }
  }
  _getPlayerChoice();
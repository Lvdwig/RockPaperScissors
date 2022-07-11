var rock = document.getElementById("rock")
var paper = document.getElementById("paper")
var scissors = document.getElementById("scissors")
var winner = document.getElementById("winner")
//var history = document.getElementById("history")

var pChoice = ""
var pcChoice = ""
var move = ""

var counterP = 0
var counterPC = 0

// Function to create a random number.
function randomNumber(min, max) {
  return Math.round((Math.random() * (max - min) + min));
}

function pcMove() {
  random = randomNumber(0, 2)
  console.log("Random number is:", random)
  if (random == 0) {
    pcChoice = "rock"
  } else if (random == 1) {
    pcChoice = "paper"
  } else {
    pcChoice = "scissors"
  }

  return pcChoice
}

function historyMoves() {

  var history = document.getElementById("history")
  var lastMoveH = document.createElement("tr")
  var lastMoveP = document.createElement("td")
  var lastMovePC = document.createElement("td")
  var pScore = document.createElement("td")
  var pcScore = document.createElement("td")
 
  lastMoveP.innerHTML = pChoice
  lastMovePC.innerHTML = pcChoice
  pScore.innerHTML = counterP
  pcScore.innerHTML = counterPC
 
  history.appendChild(lastMoveH)
  lastMoveH.appendChild(lastMoveP)
  lastMoveH.appendChild(lastMovePC)
  lastMoveH.appendChild(pScore)
  lastMoveH.appendChild(pcScore)
}

function playerMove(value) {
  pChoice = value
  pcChoice = pcMove()
  move = pChoice + pcChoice

  //console.log(pChoice)
  //console.log(pcChoice)
  //console.log(move)
  
  if (counterP <= 5 || counterPC <= 5) {
    if (move == "rockscissors" || move == "paperrock" || move == "scissorspaper") {
      winner.innerHTML = "PLAYER WINS"
      counterP += 1
      //console.log(counterPC)
      //console.log(counterP)

      historyMoves()
    } else if (move == "rockpaper" || move == "paperscissors" || move == "scissorsrock") {
      winner.innerHTML = "PC WINS"
      counterPC += 1
      //console.log(counterPC)

      historyMoves()
    } else {
      //console.log("TIE")
      winner.innerHTML = "TIE"

      historyMoves()
    }
    console.log(counterP)
    console.log(counterPC)
  }
}

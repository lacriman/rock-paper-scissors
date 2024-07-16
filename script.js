// Loop
// Computer returns a random number from 1 to 3
// User write a rock, paper or scissors
// If user write a rock and computer 1 - tie .....
// Write result
// Repeat


function getComputerChoice() {
   let randomNumber = Math.random()

   if (randomNumber <= .333) {
      return('rock') 
   } else 
   if (randomNumber > .333 && randomNumber <= .666) {
      return('paper') 

   } else {
      return('scissors') 
   }
}

function getHumanChoice() {
   return prompt('Rock, paper or scissors?').trim().toLowerCase()
}

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
   humanChoice = getHumanChoice()
   computerChoice = getComputerChoice()

   if (humanChoice === computerChoice) {
      console.log('Tie')
      console.log(`Current score: You won ${humanScore} times, computer ${computerScore} times`)
   } else 
   
   /////////// Rock ////////////
   if (humanChoice === 'rock' && computerChoice === 'paper') {
      computerScore++
      console.log('Computer choose paper and you lost :(')
      console.log(`Current score: You won ${humanScore} times, computer ${computerScore} times`)
   } else 
   
   if (humanChoice === 'rock' && computerChoice === 'scissors') {
      humanScore++
      console.log('Computer choose scissors and you won :)')
      console.log(`Current score: You won ${humanScore} times, computer ${computerScore} times`)
   } else 

   /////////// Paper ////////////
   if (humanChoice === 'paper' && computerChoice === 'rock') {
      humanScore++
      console.log('Computer choose rock and you won :)')
      console.log(`Current score: You won ${humanScore} times, computer ${computerScore} times`)
   } else 
   if (humanChoice === 'paper' && computerChoice === 'scissors') {
      computerScore++
      console.log('Computer choose scissors and you lost :(')
      console.log(`Current score: You won ${humanScore} times, computer ${computerScore} times`)
   } else 

   /////////// Scissors ////////////
   if (humanChoice === 'scissors' && computerChoice === 'paper') {
      humanScore++
      console.log('Computer choose paper and you won :)')
      console.log(`Current score: You won ${humanScore} times, computer ${computerScore} times`)
   } else 
   if (humanChoice === 'scissors' && computerChoice === 'rock') {
      computerScore++
      console.log('Computer choose rock and you lost :(')
      console.log(`Current score: You won ${humanScore} times, computer ${computerScore} times`)
   } 
}

while (humanScore + computerScore <= 10) {
   if (humanScore > computerScore) {
      console.log(`The end, total score is ${humanScore} : ${computerScore}, you won 🎉`)
   } else 
   if (humanScore < computerScore) {
      console.log(`The end, total score is ${humanScore} : ${computerScore}, you lost 😔`)
   } else {
      console.log(`The end, total score is ${humanScore} : ${computerScore}, it's a tie`)
   }
}
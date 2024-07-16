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

// Loop
// while (true) {
// // Computer returns a random number from 1 to 3

// // User write a rock, paper or scissors
// // If user write a rock and computer 1 - tie .....
// // Write result
// // Repeat
// }

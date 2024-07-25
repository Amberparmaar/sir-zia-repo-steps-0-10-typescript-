/*Switch statement TypeScript mein ek conditional statement hai jo ek variable ya expression ko evaluate karta hai
 aur uske mutabiq alag-alag cases ko handle karta hai. Har case mein specific actions define kiye jate hain jo us 
 variable ya expression ke value ke sath match karte hain. Switch statement mein ek default case bhi hota hai jo
  execute hota hai agar koi bhi upper cases match nahi karte hain. 

  syntex

switch (expression) {
  case value1:
    // Statements executed when expression matches value1
    break;
  case value2:
    // Statements executed when expression matches value2
    break;
  // Add more cases as needed
  
  default:
    // Statements executed when none of the above cases match
}
  */


// let day : number = 3;
// let dayName : string;

// switch (day){
//   case  1:
//     dayName = "Monday";
//     break;

//   case 2:
//     dayName = "Tuesday";
//     break;
  
//   case 3: 
//  dayName = " Wednesday";
//     break; 

//   case 4:
//     default:
//       dayName = "Not know"  
    

// }
// console.log(`Today is ${dayName}`);


/*Practice Example 1: Animal Sounds
Write a TypeScript program that takes an animal name ("Dog", "Cat", "Cow", "Sheep", "Duck") as input from 
the user and prints the sound the animal makes using a switch case statement. If the input doesn't match any 
of these animals, print "Unknown animal". */

// // Function to get animal sound
// function getAnimalSound(animal: string): string {
//   switch (animal.toLowerCase()) {
//       case 'dog':
//           return 'Woof Woof';
//       case 'cat':
//           return 'Meow';
//       case 'cow':
//           return 'Moo';
//       case 'sheep':
//           return 'Baa';
//       case 'duck':
//           return 'Quack';
//       default:
//           return 'Unknown animal';
//   }
// }

// // Function to simulate user input and output in a Node.js environment
// function main() {
//   const animalName: string | null = prompt("Enter an animal name (Dog, Cat, Cow, Sheep, Duck):");
  
//   if (animalName) {
//       const sound: string = getAnimalSound(animalName);
//       console.log(sound);
//   } else {
//       console.log("No animal name entered.");
//   }
// }

// // Function to simulate the browser prompt (for Node.js environment)
// function prompt(question: string): string | null {
//   const readline = require('readline-sync');
//   return readline.question(question);
// }

// // Call the main function
// main();



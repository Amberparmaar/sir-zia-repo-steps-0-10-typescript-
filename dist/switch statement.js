"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
let weekDays = "Thursday";
switch (weekDays) {
    case "wednesday":
        console.log(`Today is wednesday`);
        break;
    case "Friday":
        console.log(`Today is friday`);
        break;
    case "thursday":
        console.log(`Today is thursday`);
        break;
    default:
        console.log(`Sunday`);
}
console.log(weekDays);

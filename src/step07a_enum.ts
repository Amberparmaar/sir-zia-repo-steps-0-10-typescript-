/* enum => enumuration
TypeScript mein enum (short for enumerations) ek special type hota hai jo ek group of related constants ko represent karta hai. Enums ko aap numerical ya string values assign kar sakte hain. Yeh code ko more readable aur maintainable banate hain, especially jab aapko specific sets of values ko represent karna hota hai.

Types of Enums
Numeric Enums
String Enums
Heterogeneous Enums
Numeric Enums
Numeric enums default se 0 se shuru hote hain aur automatically increment hote hain.

typescript
Copy code
enum Direction {
  Up,
  Down,
  Left,
  Right
}

let move: Direction = Direction.Up;
console.log(move); // Output: 0

// Manual initialization
enum Status {
  Active = 1,
  Inactive,
  Pending
}

console.log(Status.Active);   // Output: 1
console.log(Status.Inactive); // Output: 2
console.log(Status.Pending);  // Output: 3
String Enums
String enums mein aapko har member ko manually string value assign karni padti hai.

typescript
Copy code
enum Color {
  Red = "RED",
  Green = "GREEN",
  Blue = "BLUE"
}

let favoriteColor: Color = Color.Green;
console.log(favoriteColor); // Output: GREEN
Heterogeneous Enums
Heterogeneous enums mein aap numeric aur string values dono ko mix kar sakte hain. Lekin yeh practice often discourage ki jati hai kyunki yeh readability aur maintainability ko impact kar sakti hai.

typescript
Copy code
enum Result {
  Success = 1,
  Failure = "FAIL"
}

console.log(Result.Success); // Output: 1
console.log(Result.Failure); // Output: FAIL
Enum Member Accessibility
Aap enum members ko name se ya value se access kar sakte hain.

typescript
Copy code
enum Direction {
  Up,
  Down,
  Left,
  Right
}

let directionName: string = Direction[0];
console.log(directionName); // Output: Up

let directionValue: Direction = Direction.Up;
console.log(directionValue); // Output: 0
Use Case Example
Enums ka use karte waqt ek practical example dekhte hain jahan aapko days of the week ko represent karna ho.

typescript
Copy code
enum DaysOfWeek {
  Sunday,
  Monday,
  Tuesday,
  Wednesday,
  Thursday,
  Friday,
  Saturday
}

function isWeekend(day: DaysOfWeek): boolean {
  switch (day) {
    case DaysOfWeek.Sunday:
    case DaysOfWeek.Saturday:
      return true;
    default:
      return false;
  }
}

console.log(isWeekend(DaysOfWeek.Sunday)); // Output: true
console.log(isWeekend(DaysOfWeek.Wednesday)); // Output: false
Key Points Summary
Enums:

Group of related constants ko represent karte hain.
Readability aur maintainability ko improve karte hain.
Numeric Enums:

Default se 0 se shuru hote hain aur increment hote hain.
Members ko manually initialize bhi kiya ja sakta hai.
String Enums:

Har member ko manually string value assign karni padti hai.
Heterogeneous Enums:

Numeric aur string values mix ki ja sakti hain.
Accessibility:

Enum members ko name ya value se access kiya ja sakta hai*/

// enum Color {Red, Green, Blue};//starts with 0
// var c: Color = Color.Green;

// enum Color1 {Red = 1, Green, Blue};
// var colorName: string = Color1[2];
// console.log(colorName);

enum Color2 {Red = 1, Green = 2, Blue = 4};//can assign values to all
var colorIndex = Color2["Blue"];
console.log(colorIndex);
/*Structural Typing with Object Literals in TypeScript (Roman Urdu Explanation)
Structural typing TypeScript mein objects ko unke members ke mutabiq pehchanta hai. Agar do objects ke members same hain, to unhe same type ke samjha jata hai, bhale hi wo alag alag interfaces se declare kiye gaye hon.




Example:

typescript
Copy code
interface Ball {
    diameter: number;
}

interface Sphere {
    diameter: number;
}
  
let ball: Ball = { diameter: 10 };
let sphere: Sphere = { diameter: 20 };
  
sphere = ball;  // valid
ball = sphere;  // valid
Yahan ball aur sphere ke members same hain (sirf diameter property), is liye yeh ek doosre ko assign ho sakte hain.

Advanced Example with Additional Members:

typescript
Copy code
interface Tube {
    diameter: number;
    length: number;
}

let tube: Tube = { diameter: 12, length: 3 };

//tube = ball;  // Error: 'ball' mein 'length' property nahi hai
ball = tube;  // valid: 'tube' mein 'diameter' property hai
Tube mein Ball ke members hain, is liye Tube type ko Ball variable mein assign kar sakte hain. Magar ulta nahi kar sakte kyunki Ball mein Tube ke saare members nahi hain.

Fresh vs. Stale Object Literals
TypeScript mein "fresh" aur "stale" object literals ke concept bhi hain.

Fresh Object: Abhi abhi create kiya gaya aur unchanged object.
Stale Object: Pehle se existing object jo modify ho chuka ho.

Fresh Object Literals
Fresh object literals wo hain jo direct assignment mein use hote hain aur unmein extra ya missing properties allowed nahi hoti.

typescript
Copy code
let myType = { name: "Zia", id: 1 };

//Case 1
myType = { id: 2, name: "Tom" };  // valid

//Case 2a
myType = { id: 2, name_person: "Tom" };  // Error: property name misspelled

//Case 2b
let x: { id: number, [key: string]: any };
x = { id: 1, fullname: "Zia" };  // valid: index signature allows extra properties

//Case 3
myType = { id: 2, name: "Tom", age: 22 };  // Error: extra property 'age'
Stale Object Literals
Stale object literals wo hain jo variables mein assign hote hain aur phir unhe assign kiya jata hai.

typescript
Copy code
let myType2 = { id: 2, name: "Tom" };
myType = myType2;  // valid

let myType3 = { id: 2, name_person: "Tom" };
myType = myType3;  // Error: property name misspelled

let myType4 = { id: 2, name: "Tom", age: 22 };
myType = myType4;  // valid: extra properties allowed in stale object
Yahan myType4 jo stale object hai, usme extra properties allowed hain jabke fresh object literals mein nahi hoti.

Summary
Structural Typing: Objects ko unke structure (members) se pehchana jata hai.
Fresh Object Literals: Direct assignments mein extra ya missing properties allowed nahi hoti.
Stale Object Literals: Variables ke through assignments mein extra properties allowed hoti hain. */
export {};
/*difference b/w enum and const enum
typeScript mein enum aur const enum kaafi similar lagte hain, lekin inke beech kuch important
 differences hain. Dono ka use values ko group karne ke liye kiya jata hai jo ek dusre se related
  hoti hain. Aayiye inke differences dekhte hain:

enum
Run-time Object: enum compile hone ke baad JavaScript code mein ek object ban jata hai.

enum Color {
    Red,
    Green,
    Blue
}
console.log(Color.Red); // Output: 0

Ye JavaScript mein kuch is tarah banega:

javascript
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
console.log(Color.Red); // Output: 0
Memory Overhead: Isse kuch memory overhead hota hai kyunki ye run-time pe ek object create karta hai.

Reverse Mapping: enum dono ways mein mapping provide karta hai. Value se key aur key se value.

typescript
console.log(Color[0]); // Output: "Red"

const enum

Compile-time Optimization: const enum ko compile time pe hi replace kar diya jata hai aur isse koi
extra JavaScript code nahi generate hota.

typescript
Copy code
const enum Color {
    Red,
    Green,
    Blue
}
console.log(Color.Red); // Output: 0
Ye JavaScript mein directly value ke sath replace ho jata hai:

javascript

console.log(0 /* Red */ //); // Output: 0
/*No Reverse Mapping: const enum ke sath reverse mapping available nahi hoti.

typescript

const enum Color {
    Red,
    Green,
    Blue
}
console.log(Color[0]); // Error: Element implicitly has an 'any' type because index expression is not of type 'number'.
Better Performance: Kyunki const enum compile time pe replace hota hai, iski performance better hoti hai aur run-time pe koi extra memory use nahi hoti.

Summary
enum ek run-time object banata hai, jo reverse mapping aur extra JavaScript code generate karta hai.
const enum compile-time optimization provide karta hai aur directly values se replace ho jata hai, isse better performance milti hai lekin reverse mapping nahi hoti.

*/ 

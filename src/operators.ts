
//Typescript mein operators woh symbols hain jo values pe operations perform karte hain. Aayein kuch important
// operators ko samajhte hain:
/*Arithmetic Operators
Yeh operators mathematical operations ke liye use hote hain.

Addition (+):

Dou values ko add karne ke liye.
Example: let result = 5 + 3; // result will be 8
Subtraction (-):

Dou values mein se ek value minus karne ke liye.
Example: let result = 5 - 3; // result will be 2
Multiplication (*):

Dou values ko multiply karne ke liye.
Example: let result = 5 * 3; // result will be 15
Division (/):

Ek value ko doosri value se divide karne ke liye.
Example: let result = 6 / 3; // result will be 2
Modulus (%):

Division ke remainder ko return karta hai.
Example: let result = 5 % 2; // result will be 1


uranary operators

Increment aur decrement operators TypeScript aur doosri programming languages mein values ko 1 se increase ya
 decrease karne ke liye use hote hain. Yeh operators bohot common hain aur inko samajhna bohot zaroori hai. 
 Chaliye inko detail mein dekhte hain:

Increment Operator (++)
Increment operator kisi variable ki value ko 1 se badhata hai. Yeh do tarikon se use hota hai:

Postfix Increment (variable++):

Pehle current value return karta hai, phir increment karta hai.
Example:

 let a = 5;
 let b = a++; // Pehle b ko 5 assign karega, phir a ko 1 se increment karke 6 karega.
 console.log(a); // 6
 console.log(b); // 5
Prefix Increment (++variable):

Pehle increment karta hai, phir incremented value return karta hai.
Example:
typescript
Copy code
let a = 5;
let b = ++a; // Pehle a ko 1 se increment karke 6 karega, phir b ko 6 assign karega.
console.log(a); // 6
console.log(b); // 6
Decrement Operator (--)
Decrement operator kisi variable ki value ko 1 se ghataata hai. Yeh bhi do tarikon se use hota hai:

Postfix Decrement (variable--):

Pehle current value return karta hai, phir decrement karta hai.
Example:
typescript
Copy code
let a = 5;
let b = a--; // Pehle b ko 5 assign karega, phir a ko 1 se decrement karke 4 karega.
console.log(a); // 4
console.log(b); // 5
Prefix Decrement (--variable):

Pehle decrement karta hai, phir decremented value return karta hai.
Example:
typescript
Copy code
let a = 5;
let b = --a; // Pehle a ko 1 se decrement karke 4 karega, phir b ko 4 assign karega.
console.log(a); // 4
console.log(b); // 4
Examples in Detail:
Postfix Increment:

Jab aap a++ likhte hain, pehle variable a ki current value use hoti hai, phir a ko 1 se increment kiya jata hai.
Example:
typescript
Copy code
let a = 10;
console.log(a++); // 10 (pehle current value print hui, phir increment hua)
console.log(a);   // 11 (increment ke baad ki value print hui)
Prefix Increment:

Jab aap ++a likhte hain, pehle a increment hota hai, phir updated value use hoti hai.
Example:
typescript
Copy code
let a = 10;
console.log(++a); // 11 (pehle increment hua, phir updated value print hui)
console.log(a);   // 11 (increment ke baad ki value print hui)
Postfix Decrement:

Jab aap a-- likhte hain, pehle variable a ki current value use hoti hai, phir a ko 1 se decrement kiya 
jata hai.
Example:
typescript
Copy code
let a = 10;
console.log(a--); // 10 (pehle current value print hui, phir decrement hua)
console.log(a);   // 9 (decrement ke baad ki value print hui)
Prefix Decrement:

Jab aap --a likhte hain, pehle a decrement hota hai, phir updated value use hoti hai.
Example:
typescript
Copy code
let a = 10;
console.log(--a); // 9 (pehle decrement hua, phir updated value print hui)
console.log(a);   // 9 (decrement ke baad ki value print hui)
Practical Usage:
Increment aur decrement operators loop statements mein bohot zyada use hote hain, jese for loops:

typescript
Copy code
for (let i = 0; i < 5; i++) {
    console.log(i); // i ko 0 se 4 tak print karega
}
Is example mein i++ postfix increment use ho raha hai, jo har iteration ke baad i ko 1 se increment karta hai. 
Yeh loops aur counters mein kaam aate hain aur code ko zyada readable aur concise banate hain.

Is tarah se aap increment aur decrement operators ka istemal karke apne programs mein calculations aur iterations 
ko efficiently handle kar sakte hain.


Comparison Operators
Yeh operators do values ko compare karte hain.

Equal to (==):

Check karta hai ke do values barabar hain.
Example: 5 == 5 // true
Not equal to (!=):

Check karta hai ke do values barabar nahi hain.
Example: 5 != 3 // true
Strict equal to (===):

Check karta hai ke do values aur unki types barabar hain.
Example: 5 === 5 // true, 5 === '5' // false
Strict not equal to (!==):

Check karta hai ke do values aur unki types barabar nahi hain.
Example: 5 !== '5' // true
Greater than (>):

Check karta hai ke pehli value doosri se badi hai.
Example: 5 > 3 // true
Less than (<):

Check karta hai ke pehli value doosri se choti hai.
Example: 3 < 5 // true
Greater than or equal to (>=):

Check karta hai ke pehli value doosri se badi ya barabar hai.
Example: 5 >= 5 // true
Less than or equal to (<=):

Check karta hai ke pehli value doosri se choti ya barabar hai.
Example: 3 <= 5 // true

Logical Operators

ypeScript mein logical operators woh operators hain jo boolean expressions ko evaluate karte hain aur logical 
operations perform karte hain. 
Yeh operators logical operations ke liye use hote hain.

AND (&&):

Jab dono conditions true hoon.
Example: (5 > 3 && 2 < 4) // true
OR (||):

Jab kam az kam ek condition true ho.
Example: (5 > 3 || 2 > 4) // true
NOT (!):

Ek condition ko invert karta hai.
Example: !(5 > 3) // false

Assignment Operators
Yeh operators values ko variables mein assign karte hain.

Assignment (=):

Ek value ko variable mein assign karne ke liye.
Example: let x = 5;
Addition assignment (+=):

Ek value ko variable ke current value mein add karne ke liye.
Example: let x = 5; x += 3; // x will be 8
Subtraction assignment (-=):

Ek value ko variable ke current value se subtract karne ke liye.
Example: let x = 5; x -= 3; // x will be 2
Multiplication assignment (*=):

Ek value ko variable ke current value se multiply karne ke liye.
Example: let x = 5; x *= 3; // x will be 15
Division assignment (/=):

Ek value ko variable ke current value se divide karne ke liye.
Example: let x = 6; x /= 3; // x will be 2*/

// practice postfix increament


// let a = 5;
// let b = a++; // Pehle b ko 5 assign karega, phir a ko 1 se increment karke 6 karega.
// console.log(a); // 6
// console.log(b); // 5

// let a = 5;
// let b = 2;
// const c = --a + b++ * a++;
//        // 4 + 2 * 4 (bodmas rule)  2 * 4 = 8 +4 = 12

// console.log(a + b + c);
//      //  5 + 3 + 12 // 20


// let x = 10;
// let y = x++;   

// console.log(x); // 11
// console.log(y); // 10


// let x = 10;
// let y = ++x;

// console.log(x); // 11
// console.log(y); // 11

// let x = 10;
// let y = x--;

// console.log(x); // 9
// console.log(y); // 10

// let x = 10;
// let y = --x;
// console.log(x);// 9
// console.log(y); //9

// let a = 5;
// let b = 2;
// const c = a++ + --b;
// console.log(a);// 6
// console.log(b);//1
// console.log(c);//6

// let x = 7;
// x++;
// console.log(x);// 8

//Agar TypeScript mein variable num ki initial value 10 hai aur hum likhte hain num += ++num, toh num ki final 
//value kya hogi?

// let num = 10;
// num += ++num;
// //10 + 11 = 21
// console.log(num);













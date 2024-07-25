/* for loops: Used when you know how many times you want to iterate.

while loops: Used when you want to iterate based on a condition.

do...while loops: Similar to while loops but guarantees at least one execution of the loop body.

for...in loops: Used for iterating over the enumerable properties of an object.

for...of loops: Used for iterating over iterable objects like arrays, strings, maps, sets, etc


Loops programming mein aik ahem concept hain jo code ko baar baar run karne ki sahulat dete hain. 
Yeh humay repetitive tasks ko efficiently perform karne mein madad karte hain. Do tarah ke basic loops 
hain: for loop aur while loop. 

=== forloop ===
//syntex o
for(initialization; condition; increament ++/ --){}

For loop ka istemal tab hota hai jab hamein kisi specific number of times code ko run karna hota hai.
Yeh loop initial value se start hota hai aur specific condition tak chalta hai, aur har iteration
ke baad increment hota hai. Example dekhein:*/

// for (let i = 0; i < 5; i++) {
//     console.log("Hello, World!");
// }
// //Is code mein, for loop 5 dafa chalega aur har dafa "Hello, World!" print karega.

// let arr = ["Apple", 'mango', 'pineapple', 'banana'];
// for(let i = 0; i < arr.length; i++){
//     console.log(arr[i]);
    
// }

// print even num

// for(let i = 1; i <= 20; i++){

//         console.log(`2 * ${i} = ${2*i}`);
// }

// // sum element of array
//  let number = [20, 30, 40, 50,60];
//  let sum = 0;

//  for(let i = 0; i < number.length; i++){
//     sum += number[i];
//  }
//  console.log("sum:",sum);

//  // reversed loop

//  let arr = [ 1, 2,3, 4, 5,]
// for(let i = 0; i > 6; i--) {
//     console.log(arr[i]);
    
// };

"use strict";
//for of loop
// syntex
//for(let value of array){}
// let myarr = ['tomato', 'chilli', 'carrot', 'peas'];
// for(let vegetable of myarr){
//     console.log(vegetable);
// };
// let myString = "hello, world";
// for(let char of myString){
//     console.log(char);
// };
//creating obj from array of key value pair
//let myobj : [string,any][]= [['name' ,'ali'] ,['Age', '31'], ['city', 'karachi']];
//for(let [key,values] of myobj){
//console.log(key,values);
//}


/*Agar aap for...in loop ko TypeScript mein use karna chahtay hain, toh yeh loop object ke enumerable
 properties par iterate karne ke liye use hota hai. Yeh loop object ke keys (property names) par iterate
  karta hai. */

//   interface Person {
//     name: string;
//     age: number;
//     city: string;
// }

// const person: Person = {
//     name: 'Ali',
//     age: 25,
//     city: 'Karachi'
// };

// for (const key in person) {
//     if (person.hasOwnProperty(key)) {
//         console.log(`${key}: ${person[key as keyof Person]}`);
//     }
// }


// const car = {
//     make: 'Toyota',
//     model: 'Corolla',
//     year: 2020
// };

// for (const key in car) {
//     console.log(`${key}: ${car[key]}`);
// }



    //while loops: Ye tab istemal hotay hain jab aap ek condition ke mutabiq iterate karna chahte hain. Jab tak
// yeh condition true hai, tab tak loop chalta rehta hai. Jaise ke:


// let i = 0;
// while (i < 5) {
//     // Loop body
//     console.log(i);
    
//     i++;
// }
//Is example mein i ki value 5 se kam hone tak loop chalta rahega.


/* while loop ko tab tak execute kiya jata hai jab tak specified condition true rahti hai.

Basic syntax kuch is tarah hota hai:

while (condition) {}*/


// let num = 1;
// while(num < 11) {
//     console.log(num);
//     num++;
    
// }


// let num =1;
// let sum = 0;
// while(num <= 10) {
//     sum  += num; // sum = sum + num
//     num++;
    
// }
// console.log(sum); // out put 55

// print even numbr

// let num = 1;

// while( num <= 20) {
//     if(num % 3 === 0){
//         console.log(num);
        
//     }
//     num++;
// }


//reverse loop

// let reverse = 50;
// while(reverse >= 1){
//     console.log(reverse);
//     reverse--;
    
// }


//Ek while loop likho jo ek given number ke digits ka sum calculate kare. For example, 
//agar number 1234 hai, toh digits ka sum 1 + 2 + 3 + 4 = 10 hoga.

// let num = 1234;
// let sum = 0;

// while (num > 0) {
//     let digit = num % 10;  // Last digit ko extract karo
//     sum += digit;          // Sum mein add karo
//     num = Math.floor(num / 10);  // Last digit ko remove karo
// }

// console.log("Sum of digits is: " + sum);


// let  num1= 12345;
// let sum1 = 0;
// while(num1 > 0) {
//     let digit = num1 % 10;
//     sum1 += digit;
//     num1 = Math.floor( num1 / 10);
// }
// console.log(sum1);

/* Do-while loop ek aisa loop hai jo kam se kam ek baar toh execute hota hai, phir condition check hoti hai. Ismein pehle loop ka body execute hota hai, phir condition check hoti hai ki loop ko dobara chalana hai ya nahi.

Chaliye ek simple example dekh kar samajhte hain

Do-while loop ka use tab kiya jata hai jab aapko loop ke body ko kam se kam ek baar execute karna hai,
 phir condition check karna hai:*/


// let num: number = 10;

// do {
//     console.log(num);
//     num--;
// } while (num >= 1); 



/*Ek do-while loop likho jo 2 se lekar 20 tak ke even numbers (do se divide hone wale numbers) ko print kare.

Hints:

Ek variable ko initialize karo jismein starting value 2 ho.
do-while loop use karo jo tab tak chale jab tak yeh variable 20 se chota ya barabar ho.
Har iteration mein check karo ke current number even hai ya nahi.
Loop ke andar even numbers ko print karo.
Har iteration ke baad us variable ko increment karo.*/

//  let evenNum = 2;

// do{
//     if(evenNum % 2 === 0){
//         console.log(evenNum);   
//     }
//     evenNum++;
    
// }while(evenNum <= 20);

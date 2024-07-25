/*TypeScript mein modules code ko organize karne mein madad dete hain by splitting it into chote, reusable pieces.
 Har module classes, functions, variables, aur interfaces contain kar sakta hai. Modules ka istemal karke aap in
  components ki visibility ko control kar sakte hain aur naming conflicts ko avoid kar sakte hain*/
export {};
/*Modules: Modules code ko chote, reusable pieces mein organize karte hain. Har module classes, functions,
variables, aur interfaces contain kar sakta hai.

Exports: Aap modules se cheezen export karte hain taake unhe doosre modules mein use kiya ja sake.

Imports: Aap export ki gayi cheezen doosre modules mein import karte hain taake unhe use kiya ja sake.

Named Exports: Multiple cheezen ek module se export ki ja sakti hain aur unke names specify karke import kiya
jata hai.

Default Exports: Sirf aik cheez ko default export kiya jata hai aur import karte waqt koi bhi naam use kar
sakte hain.

*/
// exporting from module
// A
//Default Exports: Aik module se sirf aik cheez ko default export kiya jata hai aur import karte waqt aap
// koi bhi naam use kar sakte hain.
// export class Animal {
//     name:string;
//     legs: number;
//     food: string;
//     constructor(N:string, L:number, F:string){
//         this.name= N
//         this.legs= L
//         this.food= F
//     }
// };
//Ek module banaye jisme ek function ho jo do numbers ka sum return karta ho. Us function ko doosri file 
//mein import karke use karein
// export function sum(num1: number, num2: number): number{
//     return  num1 + num2;
// };
//Ek module banaye jisme ek Person class ho jo first name aur last name store kare. Us class ko doosri
// file mein import karke ek Person object create karein aur uska naam print karein.
// export class Person {
//     firstName: string;
//     lastName: string;
//     constructor(FName: string, LName: string){
//         this.firstName = FName;
//         this.lastName  = LName;
//     }
// };
//  export use default k sath === Ek module banaye jisme ek function ho jo ek string ko uppercase mein convert karta ho. Us function 
//ko as a default export define karein aur doosri file mein import karke use karein.
// export default function myName(name: string){
//     return `My name in uppercase: ${name.toUpperCase()}`;
// }
//reposting
// Do alag-alag modules banayein jisme kuch functions aur classes ho. Teesre module mein un dono modules 
//ko re-export karein aur phir unhe import karke use karein.

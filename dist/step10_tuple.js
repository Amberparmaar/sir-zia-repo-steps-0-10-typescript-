export {};
/*TypeScript mein tuple ek array ki tarah hota hai lekin ismein aap different types ke elements ko store
 kar sakte hain aur har element ka type specify kiya ja sakta hai. Array mein sirf ek hi type ke element
 s hote hain, jabke tuple mein multiple types ke elements store kiye ja sakte hain.

 key points

 Fixed Size and Types: Tuples ek fixed size array hote hain jisme har element ka type specify kiya ja sakta hai. Iska matlab hai ke tuple ki length aur elements ka type predefined hota hai.

Order Matters: Tuple mein elements ka order important hota hai. Pehla element wo type hoga jo aapne pehle specify kiya hai, doosra element wo type hoga jo aapne doosre position par specify kiya hai, aur isi tarah se.

Type Safety: Tuple ki typing ki wajah se aap specific types ke values ko safely store aur access kar sakte hain. Tuple ke elements ko unke types ke hisaab se access kiya jata hai, jo type safety ko ensure karta hai.

Destructuring: Tuple ko destructuring ki madad se individual elements mein break kiya ja sakta hai. Yeh feature aapko easily access aur manipulate karne ki suvidha deta hai.


let [name, age] = ["Alice", 25];
Rest Parameters: Tuples ke saath rest parameters ka use karke aap multiple elements ko handle kar sakte hain. Isse aap variable number of elements store kar sakte hain.


let myTuple: [string, ...number[]] = ["data", 1, 2, 3];
Optional Elements: Aap tuples mein optional elements bhi define kar sakte hain, jahan kisi element ka hona zaroori nahi hota.


let myTuple: [string, number?] = ["data"];
Immutability: Tuples ko immutable bhi banaya ja sakta hai, yani elements ko modify nahi kiya ja sakta. Lekin by default, TypeScript mein tuples mutable hote hain.

Index Access: Tuple elements ko index ke zariye access kiya ja sakta hai, aur index range tuple ki length se restricted hoti hai.


let myTuple: [string, number] = ["hello", 42];
console.log(myTuple[0]); // Output: hello
Return Types: Functions ke return types ko tuples ke form mein define kiya ja sakta hai, jahan ek function ek fixed set of values return karta hai.


function getTuple(): [string, number] {
    return ["hello", 42];
}
Use Cases: Tuples typically un scenarios mein use hota hai jahan aapko ek fixed number of items ki zaroorat hoti hai aur har item ka type different hota hai. Yeh aapko data ko group karne aur specify karne mein madad karta hai.
 
 
 */ 

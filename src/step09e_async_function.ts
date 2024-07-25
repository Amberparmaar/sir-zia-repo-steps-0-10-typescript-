/*synchronous

 Synchronous functions sequentially execute hoti hain, yani ek function ke execute hone ke baad hi next
  function execute hota hai. Iska matlab hai ke ek function ki execution poori hone tak program ke baaki
   part ko wait karna padta hai.

Example:


function synchronousFunction() {
    console.log("Step 1");
    console.log("Step 2");
    console.log("Step 3");
}

synchronousFunction();
// Output:
// Step 1
// Step 2
// Step 3

Explanation:

synchronousFunction me console.log statements sequentially execute hote hain.
Step 1 ke print hone ke baad Step 2 print hota hai, aur uske baad Step 3 print hota hai.
Har statement ka execution previous statement ke completion ke baad hota hai.

Asynchronous Functions
Definition: Asynchronous functions ek time pe execute hoti hain bina puri tarah se complete hue, code ke 
baaki part ko block kiye bina. Yeh function kisi time-consuming operation ko handle kar sakte hain, aur us 
operation ke complete hone ka intezar kiye bina baaki ka code execute hota hai.

Example:

function asynchronousFunction(): Promise<void> {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("Data fetched");
            resolve();
        }, 2000); // 2 seconds delay
    });
}

async function main() {
    console.log("Fetching data...");
    await asynchronousFunction(); // Wait for asynchronousFunction to complete
    console.log("Data processing complete");
}

main();
// Output:
// Fetching data...
// (After 2 seconds)
// Data fetched
// Data processing complete
Explanation:

asynchronousFunction ek Promise return karta hai jo 2 seconds baad resolve hota hai.
main function me await keyword ka use karke asynchronousFunction ke complete hone ka intezar kiya jata hai.
Fetching data... print hota hai, phir 2 seconds ke baad Data fetched print hota hai, aur uske baad Data
processing complete print hota hai.
await ki wajah se, main function ke baaki code ka execution asynchronousFunction ke completion ke baad 
hota hai.

Key Differences
Execution Order:

Synchronous: Sequential execution hota hai. Pehle ka function complete hone ke baad hi agla function execute
 hota hai.
Asynchronous: Parallel execution hota hai. Function ek side pe execute hota hai jabke baaki code continue 
rehta hai.

Blocking:

Synchronous: Code execution ko block karta hai jab tak ek function ka execution complete nahi hota.
Asynchronous: Code execution ko block nahi karta, dusre operations continue karte hain jab tak asynchronous 
operation complete nahi hota.

Usage:

Synchronous: Simple tasks ke liye jab execution order zaroori ho.
Asynchronous: Time-consuming tasks jaise network requests, file I/O, etc., ke liye jab aapko performance 
aur responsiveness improve karni ho.

Summary
Synchronous Functions: Sequentially execute hote hain, aur ek function ke complete hone ke baad hi next 
function execute hota hai.

Asynchronous Functions: Concurrently execute hote hain, aur Promise, async/await, ya callbacks ke through 
handle kiye jate hain, bina execution ko block kiye

Callback: A function passed as an argument to another function, executed after the completion of a task.

Promise: An object representing the eventual completion or failure of an asynchronous operation, allowing 
for chaining of actions using .then and .catch.

Async Function: A function declared with async that automatically returns a promise and allows the use 
of await.

Await Keyword: Used inside async functions to pause execution until a promise is resolved or rejected.

These tools help manage asynchronous operations and improve code readability and maintainability.*/




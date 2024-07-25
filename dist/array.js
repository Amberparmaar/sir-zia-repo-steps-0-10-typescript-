export {};
/*TypeScript mein arrays aik common data structure hain jo multiple values ko store karte hain. Yeh homogeneous
collection hoti hain,yaani ke yeh sirf ek type ke elements ko store kar sakti hain.

Declaring Arrays
Using Square Brackets ([])
Aap arrays ko square brackets ka use kar ke declare kar sakte hain:

typescript
Copy code
let numbers: number[] = [1, 2, 3, 4, 5];
let fruits: string[] = ["apple", "banana", "mango"];
Using the Array Generic Type
Aap arrays ko generic type Array<type> ka use kar ke bhi declare kar sakte hain:

typescript
Copy code
let numbers: Array<number> = [1, 2, 3, 4, 5];
let fruits: Array<string> = ["apple", "banana", "mango"];
Accessing Array Elements
Array elements ko access karne ke liye index use hota hai, jo zero-based hota hai:

typescript
Copy code
console.log(fruits[0]); // "apple"
console.log(numbers[2]); // 3
Adding and Removing Elements
push() and pop()
push() method array ke end mein elements add karta hai, aur pop() last element ko remove karta hai:

typescript
Copy code
numbers.push(6); // [1, 2, 3, 4, 5, 6]
let lastNumber = numbers.pop(); // lastNumber is 6, numbers is now [1, 2, 3, 4, 5]
unshift() and shift()
unshift() method array ke start mein elements add karta hai, aur shift() pehla element remove karta hai:

typescript
Copy code
numbers.unshift(0); // [0, 1, 2, 3, 4, 5]
let firstNumber = numbers.shift(); // firstNumber is 0, numbers is now [1, 2, 3, 4, 5]
Updating Elements
Aap specific index pe elements ko update kar sakte hain:

typescript
Copy code
numbers[2] = 10; // [1, 2, 10, 4, 5]
Iterating Over Arrays
Aap arrays par iterate karne ke liye different loops ka use kar sakte hain:

for Loop
typescript
Copy code
for (let i = 0; i < numbers.length; i++) {
    console.log(numbers[i]);
}
forEach Method
typescript
Copy code
numbers.forEach((number) => {
    console.log(number);
});
for..of Loop
typescript
Copy code
for (let number of numbers) {
    console.log(number);
}

Common Array Methods
concat()
Do ya zyada arrays ko concatenate karta hai:

typescript
Copy code
let moreNumbers: number[] = [6, 7, 8];
let allNumbers = numbers.concat(moreNumbers); // [1, 2, 10, 4, 5, 6, 7, 8]
slice()
Array ka ek portion return karta hai:

typescript
Copy code
let someNumbers = numbers.slice(1, 3); // [2, 10]
splice()
Array mein elements ko add/remove/update karta hai:

typescript
Copy code
numbers.splice(2, 1, 15); // Removes 1 element at index 2 and adds 15, numbers is now [1, 2, 15, 4, 5]
indexOf()
Element ka index return karta hai, agar element milta hai:

typescript
Copy code
let index = numbers.indexOf(15); // 2
includes()
Check karta hai agar element array mein mojood hai:


Array Destructuring
Array destructuring ka use kar ke aap arrays ke elements ko easily extract kar sakte hain:

typescript
Copy code
let [first, second, third] = numbers; // first = 1, second = 2, third = 15
Example
Ek complete example array operations ka:

typescript
Copy code
let fruits: string[] = ["apple", "banana", "mango"];

// Add a fruit
fruits.push("orange"); // ["apple", "banana", "mango", "orange"]

// Remove the last fruit
let lastFruit = fruits.pop(); // lastFruit is "orange", fruits is now ["apple", "banana", "mango"]

// Update an element
fruits[1] = "kiwi"; // ["apple", "kiwi", "mango"]

// Iterate through the array
fruits.forEach((fruit) => {
    console.log(fruit);
});

// Result:
// apple
// kiwi
// mango
Yeh TypeScript arrays ka detailed overview tha. Agar aapko kisi aur concept ya method ki detail chahiye ho, toh zaroor batayein!

tell me more array method
ChatGPT
TypeScript mein arrays ko handle karne ke liye bohot saare methods available hain. Yeh methods aapko arrays ke sath different operations karne mein madad karte hain. Chaliye kuch important aur commonly used array methods ko detail mein discuss karte hain.

map()
map() method array ke har element par ek function apply karta hai aur ek new array return karta hai jisme modified elements hote hain.

typescript
Copy code
let numbers: number[] = [1, 2, 3, 4, 5];
let squaredNumbers = numbers.map((num) => num * 2); // [2, 4, 6, 8, 10]
filter()
filter() method array ke elements ko filter karta hai jo given condition ko meet karte hain, aur ek new array return karta hai.

typescript
Copy code
let evenNumbers = numbers.filter((num) => num % 2 === 0); // [2, 4]
reduce()
reduce() method array ke elements ko ek single value mein reduce karta hai using a reducer function.

typescript
Copy code
let sum = numbers.reduce((total, num) => total + num, 0); // 15
find()
find() method array ke pehle element ko return karta hai jo given condition ko meet karta hai. Agar koi element nahi milta, to yeh undefined return karta hai.

typescript
Copy code
let firstEven = numbers.find((num) => num % 2 === 0); // 2
findIndex()
findIndex() method array ke pehle element ka index return karta hai jo given condition ko meet karta hai. Agar koi element nahi milta, to yeh -1 return karta hai.

typescript
Copy code
let index = numbers.findIndex((num) => num % 2 === 0); // 1
every()
every() method check karta hai ke kya array ke saare elements given condition ko meet karte hain. Yeh true ya false return karta hai.

typescript
Copy code
let allPositive = numbers.every((num) => num > 0); // true
some()
some() method check karta hai ke kya array ka koi bhi element given condition ko meet karta hai. Yeh true ya false return karta hai.

typescript
Copy code
let anyNegative = numbers.some((num) => num < 0); // false
sort()
sort() method array ke elements ko sort karta hai. Default sorting lexical order mein hoti hai, lekin aap custom comparison function bhi de sakte hain.

typescript
Copy code
let unsortedNumbers: number[] = [5, 3, 8, 1, 2];
let sortedNumbers = unsortedNumbers.sort((a, b) => a - b); // [1, 2, 3, 5, 8]
reverse()
reverse() method array ke elements ko reverse order mein arrange karta hai.

typescript
Copy code
let reversedNumbers = numbers.reverse(); // [5, 4, 3, 2, 1]
join()
join() method array ke elements ko concatenate karta hai aur ek single string return karta hai. Aap separator bhi specify kar sakte hain.

typescript
Copy code
let fruitString = fruits.join(", "); // "apple, kiwi, mango"
split()
split() method string ko array of substrings mein divide karta hai.

typescript
Copy code
let fruitArray = fruitString.split(", "); // ["apple", "kiwi", "mango"]
slice()
slice() method array ka ek portion return karta hai without modifying the original array.

typescript
Copy code
let someFruits = fruits.slice(1, 3); // ["kiwi", "mango"]
splice()
splice() method array ke elements ko add, remove, aur update karta hai. Yeh original array ko modify karta hai.

typescript
Copy code
fruits.splice(1, 1, "banana"); // Removes 1 element at index 1 and adds "banana", fruits is now ["apple", "banana", "mango"]
includes()
includes() method check karta hai ke kya array mein specified element mojood hai. Yeh true ya false return karta hai.

typescript
Copy code
let hasMango = fruits.includes("mango"); // true
indexOf()
indexOf() method specified element ka first index return karta hai. Agar element nahi milta, to yeh -1 return karta hai.

typescript
Copy code
let indexOfApple = fruits.indexOf("apple"); // 0
lastIndexOf()
lastIndexOf() method specified element ka last index return karta hai. Agar element nahi milta, to yeh -1 return karta hai.

typescript
Copy code
let lastIndexOfBanana = fruits.lastIndexOf("banana"); // 1
Example
Aik complete example jo different array methods ko use karta hai:

typescript
Copy code
let numbers: number[] = [1, 2, 3, 4, 5];

// Map
let doubled = numbers.map(num => num * 2); // [2, 4, 6, 8, 10]

// Filter
let evens = numbers.filter(num => num % 2 === 0); // [2, 4]

// Reduce
let total = numbers.reduce((sum, num) => sum + num, 0); // 15

// Find
let firstOdd = numbers.find(num => num % 2 !== 0); // 1

// Sort
let sorted = numbers.sort((a, b) => b - a); // [5, 4, 3, 2, 1]

// Reverse
let reversed = numbers.reverse(); // [1, 2, 3, 4, 5]

console.log(doubled, evens, total, firstOdd, sorted, reversed);
*/ 

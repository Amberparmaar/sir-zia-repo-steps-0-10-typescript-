 /*
Nested Objects in TypeScript 
TypeScript mein nested objects ko handle karna asaan hai. Nested objects wo objects hain jo kisi aur object 
ke andar properties ke taur pe hote hain. Isse hum complex data structures ko asaani se model kar sakte hain. */
 
 
 type Bookinfo = {
    name: string;
    pages: number;
    author: Author;


 };
 type Author = {
    fullName : string;
    lastName: string
 };

 let book : Bookinfo = {
    name : "Adventures of Tom Sawyer",
    author: {
        fullName: "Mark",
        lastName: "Tawain"
    },
    pages: 500,

 }
 console.log(book.name.toUpperCase());
 console.log(book.author.fullName.length);

 /*Nested Objects with Optional Properties
Agar aapke nested objects mein kuch properties optional hain, to aap unhe optional (?) mark kar sakte hain.

typescript
Copy code
interface Address {
    street: string;
    city: string;
    zipcode?: string;  // optional property
}

interface User {
    name: string;
    age: number;
    address: Address;
}

let user: User = {
    name: "Ali",
    age: 30,
    address: {
        street: "123 Main St",
        city: "Karachi"
    }
};
Is example mein, zipcode property optional hai.

Functions and Nested Objects
Nested objects ko functions mein as arguments pass karna aur unse return karna bhi mumkin hai.

typescript
Copy code
function getFullAddress(user: User): string {
    return `${user.address.street}, ${user.address.city}, ${user.address.zipcode}`;
}

let address = getFullAddress(user);
console.log(address);  // Output: 123 Main St, Karachi, undefined
Yahan, getFullAddress function ek User object ko accept karta hai aur uski nested address properties ko use 
karke ek string return karta hai.

Type Aliases and Nested Objects
TypeScript mein type aliases ka use karke bhi nested objects define kar sakte hain.

typescript
Copy code
type Address = {
    street: string;
    city: string;
    zipcode: string;
};

type User = {
    name: string;
    age: number;
    address: Address;
};

let user: User = {
    name: "Ali",
    age: 30,
    address: {
        street: "123 Main St",
        city: "Karachi",
        zipcode: "74500"
    }
};
Type aliases aur interfaces donon ka use karke aap nested objects define kar sakte hain, aur inka behavior 
almost similar hota hai.

Conclusion
Nested objects TypeScript mein complex data structures ko asaani se model karne ka tarika hain. Interfaces 
aur type aliases ke through aap structured data ko define aur use kar sakte hain, jo aapki code readability 
aur maintainability ko enhance karta hai.*/







 
 
 
 
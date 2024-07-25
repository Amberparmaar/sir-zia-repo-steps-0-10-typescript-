// type Student ={
//     name : string;
//     age: number;
//     interestedIn: string[];
//     isMale: boolean;
//     email:string;
//     phoneNo?:number;
// };
// let student1 : Student = {
//     name : "Ali",
//     age: 23,
//     interestedIn: ['swimimng', 'travelling', 'cycling'],
//     isMale: true,
//     email:'abc@email.com',
//     phoneNo:12345667, 
// };
// let student2 :Student = {
//     name: "Waheeda",
//     age: 24,
//     interestedIn: ['cooking', 'programming', 'travelling'],
//     isMale: false,
//     email:'def@gmail.com',
// }
// console.log(student1.age);
// console.log(student1.interestedIn[1]);
// console.log(student2.phoneNo);


// //readonly object

// type Employe = {
//    readonly height: number,
//     readonly weight : string,
//     colour : string;
//     greet() : string,
// }

// let person : Employe = {
//     height : 5.5,
//     weight : "78 kg",
//     colour : 'fair',
//     greet(){  // object literal syntex
//         return `Hello! My height is ${this.height}`;
        
//     }
// }


// console.log(person.height);
// console.log(person.weight);
// person.height;
// person.weight = "78kg" // becz its readonly property
// person.colour = 'dark';
// console.log(person.greet());


// object distrutting
let person1 = {
    name: "John",
    age: 30,
};

let {name, age} = person1

console.log(person1);







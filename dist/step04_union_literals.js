/*Union literals TypeScript mein aise types hain jo ek variable ko multiple specific values ya types ka
 union banata hain. Iska matlab yeh hai ke ek variable ek se zyada types ya values le sakta hai, magar sirf
 unki range mein jo define ki gayi ho.
  
  let direction: 'north' | 'south' | 'east' | 'west';

direction = 'north'; // Valid
direction = 'south'; // Valid
direction = 'up';    // Invalid, error: Type '"up"' is not assignable to type '"north" | "south" | "east" | "west"'


Example with Multiple Types
Aap union literals ko different types ke liye bhi use kar sakte hain.

let value: string | number;

value = 'Hello'; // Valid
value = 123;     // Valid
value = true;    // Invalid, error: Type 'boolean' is not assignable to type 'string | number'

Function Parameters
Union literals functions ke parameters mein bhi bohot useful hain.

function printStatus(status: 'success' | 'error' | 'pending') {
    console.log(`The status is ${status}`);
}

printStatus('success');  // Valid
printStatus('error');    // Valid
printStatus('pending');  // Valid
printStatus('completed'); // Invalid, error: Argument of type '"completed"' is not assignable to parameter of type '"success" | "error" | "pending"'


Advantages
Type Safety: Union literals se aap galat values ko assign karne se bach sakte hain, jis se runtime errors kam hotay hain.
Code Readability: Yeh code ko zyada readable banata hain kyun ke aapki values clearly defined hoti hain.
Error Prevention: Yeh aapko compile-time errors se bachata hai jo aapko run-time pe face ho sakte hain.


Complex Example
Aap union literals ko complex types ke sath bhi use kar sakte hain, jaise ki objects ke sath.

type SuccessResponse = {
    status: 'success';
    data: string;
};

type ErrorResponse = {
    status: 'error';
    message: string;
};

type Response = SuccessResponse | ErrorResponse;

function handleResponse(response: Response) {
    if (response.status === 'success') {
        console.log(`Data: ${response.data}`);
    } else {
        console.log(`Error: ${response.message}`);
    }
}

handleResponse({ status: 'success', data: 'All good!' }); // Valid
handleResponse({ status: 'error', message: 'Something went wrong' }); // Valid
handleResponse({
status: 'pending', message: 'Still processing' }); // Invalid, error: Type '"pending"' is not assignable
to type '"success" | "error"'

Union literals TypeScript mein ek powerful tool hain jo aapko fixed set of values ya types mein restrict
karke zyada control aur safety dete hain. Yeh aapke code ko maintainable, readable, aur reliable banate hain.


*/
// let status: 'active' | 'inactive';
// status = 'active';   // Valid assignment
// status = 'inactive'; // Valid assignment
// // Incorrect assignments
// status = 'pending';  // Error: Type '"pending"' is not assignable to type '"active" | "inactive"'
// status = 'completed';// Error: Type '"completed"' is not assignable to type '"active" | "inactive"'
// let direction : 'north' | 'west' |'south';
// direction = 'north';
// direction = 'south';
// direction = 'west';
// direction = 'east';
// console.log(direction);
// type person = 'amber'| 'Fahad' |'shoukat';
// let p : person;
// p = 'Fahad';
// p = 'Faizan';
// let myname: string | null;
// myname = null;
// console.log(myname);
// myname = "zia";
// console.log(myname);
let myVar;
myVar = " dont know";
console.log(myVar.toString);
export {};
// myVar = 23;
// console.log(myVar);

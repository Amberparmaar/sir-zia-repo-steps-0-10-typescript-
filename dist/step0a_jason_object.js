export {};
/*JSON (JavaScript Object Notation) ek text-based data format hai jo data ko store aur transfer karne ke liye
use hota hai.

JSON Syntax

{

  "name": "Vipin",
  "age": 21,
  "gender": "male"

}
//Kya JSON JavaScript objects jaisa hai?
//Jawab: Nahi.

JavaScript objects functions contain kar sakte hain, lekin JSON nahi.
JavaScript objects sirf JavaScript mein use ho sakte hain, lekin JSON ko doosre programming languages mein bhi

create aur use kiya ja sakta hai.
JSON Data
JSON data key/value pairs se milkar banta hai, jo JavaScript object properties jaisa hota hai. Key aur values double quotes mein likhe jate hain aur : se separate hote hain.

Example:

json

"name": "Vipin"
JSON data ke liye key mein double quotes hona zaroori hai.

JSON Object
JSON object curly braces {} ke andar likha jata hai. JSON objects multiple key/value pairs contain kar sakte hain.

Example:

json

{ "name": "Vipin", "age": 21 }
JSON Array
JSON array square brackets [] ke andar likha jata hai.

Example:

json

[ "Vipin", "Ankit", "Raj" ]
Accessing JSON Data
Hum JSON data ko dot notation ka use karke access kar sakte hain.

Example:

javascript

const detail = { "name": "Vipin", "age": 21 };
console.log(detail.name); // Vipin
Hum square bracket syntax [] ka bhi use kar sakte hain JSON data ko access karne ke liye.

Example:

javascript

const detail = { "name": "Vipin", "age": 21 };
console.log(detail["age"]); // 21
Use of JSON
JSON data transmission ke liye commonly use hota hai, server se client aur vice-versa.
JSON data ko parse aur use karna bahut easy hai.
JSON language independent hai, yani hum JSON ko doosre programming languages mein bhi create aur use kar sakte hain.
Examples of JSON
package.json
tsconfig.json
JSON ka istemal aaj kal web development aur APIs mein bahut common hai, kyunki yeh lightweight aur easily
 readable format hai.*/ 

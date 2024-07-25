/*A function in programming is a block of code designed to perform a particular task. It can take inputs,
 process them, and return an output. Functions help in organizing code, reusing code, and making programs
  more modular and readable.

//Named function
function add(x: number, y: number): number {
    return x+y;
}

// lambda function/ function literals/ Anonymous function wo function hota hai jo bina kisi naam ke hota
hai. Yeh temporary tasks ke liye use hota hai jahan function ko turant aur ek baar ke liye use karna 
hai.

 let myAdd1 = function(x: number, y: number): number { 
				return x+y; 
};


//Anonymous function with explict type
let myAdd2: (x:number, y:number)=>number = 	function(x: number, y: number): number { 
												return x+y; 
											};

//type names dont matter
let myAdd3: (baseValue:number, increment:number)=>number = 	function(x: number, y: number): number { 
																return x+y; 
															};
//Lambda functions															
let myAdd4 = (a : number, b : number) => a + b;
//output will be: var myAdd4 = function(a : number, b : number) {return a + b};

type GreetFunction = (a: string) => void;
function greeter(fn: GreetFunction) {
	//....
}
 */






// 6. Type Inference

let x = 10; 
x = 20; 
let y = "Hello"; 

let z: number; 
z = 20; 


let a: number = 10; 
let b: string = "Hello"; 
let c: boolean = true; 
let d: any = 10; 


let e: any = "Hello"; 
let f: any = true; 
let g: number[] = [1, 2, 3]; 
let h: string[] = ["Hello", "World"]; 
let i: boolean[] = [true, false]; // boolean array
let j: any[] = [1, "Hello", true]; 
let k: [string, number] = ["Hello", 10]; // tuple
let l: object = { name: "John", age: 30 ,
    emailIds :
    {
        email:"e@e.com",
    },
    preferences: ["sports", "music"]
}; 
// object


console.log(`a: ${typeof a}`);
console.log(`b: ${typeof b}`);
console.log(`c: ${typeof c}`);
console.log(`d: ${typeof d}`);
console.log(`e: ${typeof e}`);
console.log(`f: ${typeof f}`);
console.log(`g: ${typeof g}`);
console.log(`h: ${typeof h}`);
console.log(`i: ${typeof i}`);
console.log(`j: ${typeof j}`);
console.log(`k: ${typeof k}`);
console.log(`l: ${typeof l}`);


console.log(`a: ${a}`);
console.log(`b: ${b}`);
console.log(`c: ${c}`);
console.log(`d: ${d}`);
console.log(`e: ${e}`);
console.log(`f: ${f}`);
console.log(`g: ${g}`);
console.log(`h: ${h}`);
console.log(`i: ${i}`);
console.log(`j: ${j}`);
console.log(`k: ${k}`);
console.log(`l: ${l}`);
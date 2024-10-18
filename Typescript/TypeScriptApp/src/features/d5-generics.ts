// 4. Generics

function identity1<T>(arg: T): T {
    return arg;
}

const num1 = identity1<number>(42);
const str1 = identity1<string>("Hello");

console.log(num1); 
console.log(str1); 
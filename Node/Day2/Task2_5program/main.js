import fs from "fs";


// File 1 - Fibonacci program 
const fibonacci = `
let n =10;
let a=0, b=1;
let result = "";
for (let i = 0; i < n; i++) {
    result += a + "";
    let next = a + b;
    a = b;
    b = next;
}
console.log("Fibonacci:", result)
`;

fs.writeFile("fibonacci.js", fibonacci, (err)=>{
    if(err) console.log(`Error: ${err}`);
    else console.log(`fibonacci.js created`)
})

fs.readFile("fibonacci.js", (err)=>{
    if(err) console.log(err);
    else console.log(`fibonacci.js is readed`);
})

//File2 - Factorial 
const factorial = `
let num = 5;
let fact = 1;
for(let i=1;i<= num; i++) {
    fact *=i;
}
console.log("Factorial:", fact);
`;

fs.writeFile("factorial.js", factorial, (err) => {
    if(err) console.log(`Error: ${err}`);
    else console.log(`factorial.js created`);
})

fs.readFile("factorial.js", (err)=>{
    if(err) console.log(err);
    else console.log(`factorial.js is readed`);
})

//File3 - Prime no check
const primeNum = `
let num = 17;
let isPrime = true;
for (let i=2; i<=Math.sqrt(num); i++) {
    if (num % i === 0) isPrime = false;
}
console.log(isPrime ? "Prime" : "Not Prime");
`;

fs.writeFile("primeNum.js", primeNum, (err)=>{
    if(err) console.log(`Error: ${err}`);
    else console.log(`primeNum.js created`)
})

fs.readFile("primeNum.js", (err)=>{
    if(err) console.log(err);
    else console.log(`primeNum.js is readed`);
})

//File - 4 Sum of even numbers
const sumOfEven = `
let num = 10
let sum = 0;
for(let i=1; i<= num; i++) {
    if( i % 2 === 0) {
        sum +=i;
    }
}
console.log("Sum of even numberts 1 to", n ,"is:",sum);
`;

fs.writeFile("sumOfEvenNum.js", sumOfEven, (err) =>{
    if (err) console.log(`Error ${err}`);
    else console.log(`sumOfEvenNum.js created`);
})

fs.readFile("sumOfEvenNum.js", (err)=>{
    if(err) console.log(err);
    else console.log(`sumOfEvenNum.js is readed`);
})

// file5 - palindrome
const palindrome = `
let num = 121;
let original = num;
let reversed = 0;
while(num > 0) {
    let digit = num % 10;
    reversed = reversed * 10 + digit;
    num = Math.floor(num/10);
}
if(original === reversed){
    console.log(original, "is a palindrome number");
}
else {
    console.log(original,"is not a palindrome number")
}
`;

fs.writeFile("palindrome.js",palindrome, (err)=>{
    if(err) console.log(`Error ${err}`);
    else console.log(`palindrome.js created`)

})

fs.readFile("palindrome.js", (err)=>{
    if(err) console.log(err);
    else console.log(`palindrome.js is readed`);
})
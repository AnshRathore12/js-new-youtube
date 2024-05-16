const name = "hitesh";
const repoCount = 50;
// console.log(name+repoCount+"Value");

console.log(`Hello my name is ${name} and my repo count count is ${repoCount}`);//string interpolation

const gameName = new String("hitesh-hc-com");

console.log(gameName[0]);
console.log(gameName.__proto__);

console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));

console.log(gameName.indexOf("t"));
const newString = gameName.substring(-8, 4);
console.log(newString);

const anotherString = gameName.slice(-8, 4);
console.log(anotherString);

const newStringOne = "  hitesh  ";
console.log(newStringOne);
console.log(newStringOne.trim());
// trim-> used to trim whitespace and line terminators(\n)

const url = "https://hitesh.com/hitesh%20choudhary";

console.log(url.replace("%20", "_"));
//replace-> used to find and replace 

console.log(url.includes("sundar"));
//include->used to search keyword
console.log(gameName.split("-"));
// split->used to split a string on the basis of whitespace or '-' etc

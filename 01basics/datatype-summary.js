// Primitive(Call by value)

// 7 type:String,Number,Boolean,null,undefined,Symbol,BigInt

// JavaScript is a dynamically typed language.

const score = 100
 const scoreValue=100.3

 const isLoggedIn =false
 const outsideTemp = null
 let userEmail;

 const id=Symbol('123')
 const anotherId = Symbol('123')
 console.log(id===anotherId)

 const bigNumber = 344384297923283720988389n
// Reference (Non primitive)

// Array,Objects,Functions

const heros = ["shaktiman","naagraj","doga"];
let myObj={
  name:"hitesh",
  age:22,
}
const myFunction=function(){
  console.log("Hello World");
}

console.log(typeof bigNumber)
 
// non primitive data type usally of object type

// +++++++++++++++++++++++++++++++++++++

// Stack(Primitive),Heap(Non-Primitive)


let myYoutubename = "hiteshchoudharydotcom"

let anothername = myYoutubename
anothername="chaiaurcode"

console.log(myYoutubename)
console.log(anothername)

let userOne ={
  email:"user@google.com",
  upi :"user@ybl"

}
let userTwo=userOne
userTwo.email="hitesh@google.com"
console.log(userOne.email);
console.log(userTwo.email);
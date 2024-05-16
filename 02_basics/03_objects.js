// singleton 
// Object.create

// object literals
const mysym = Symbol("key1")

const JsUser={
  name: "Hitesh",
  "full name":"Hitesh Choudhary",
  [mysym]:"mykey1",
  age:18,
  location:"Jaipur",
  email:"hitesh@google.com",
  isLoggedIn:false,
  lastLoginDays:["Monday","Saturday"]
}
// console.log(JsUser.email)
// console.log(JsUser["email"])
// console.log(JsUser["full name"])
// console.log(JsUser[mysym])

JsUser.email="hitesh@chatgpt.com"
// Object.freeze(JsUser)
JsUser.email="hitesh@microsoft.com"
// console.log(JsUser)

JsUser.greeting=function(){
  console.log("Hello JS user")
}

JsUser.greetingTwo=function(){
  console.log(`Hello Js User, ${this.name}`)
}
console.log(JsUser.greeting())
console.log(JsUser.greetingTwo());



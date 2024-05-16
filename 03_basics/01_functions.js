
function sayMyName(){
  console.log("H");
  console.log("I");
  console.log("T");
  console.log("E");
  console.log("S");
  console.log("H");
}
// sayMyName()

// function addTwoNumbers(number1,number2)//parameters
// {
//   console.log(number1+number2);
//  }

function addTwoNumbers(number1,number2)//parameters
{
  // let result =number1+number2;
  // return result
  return number1+number2
}
const result=addTwoNumbers(3,4);
// addTwoNumbers(3,4)//arguements
// console.log("Result: ",result);

function loginUserMessage(username="sam"){
  // if(username===undefined){
  //   console.log("Please enter a username")
  //   return
  // }
  if(!username){
    console.log("Please enter a username")
    return
  }

    return `${username} just logged in`
  
  
}
// console.log(loginUserMessage("hitesh"))

function calculateCartPrice(val1,val2,...num1){
  return num1
}
// console.log(calculateCartPrice(200,400,500,600,700))

const user={
  username:"hitesh",
  prices:199
}
function handleObject(anyobject){
  console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`)
}
// handleObject(user)
handleObject({
  username:"sam",
  price:399
})

const myNewArray=[200,400,100,500]

function returnSecondValue(getArray){
  return getArray[1]
}
console.log(returnSecondValue(myNewArray))
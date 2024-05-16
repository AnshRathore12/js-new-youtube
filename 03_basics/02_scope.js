var c=300
let a=300 
if(true){
let a=10;
const b=20;
var c=30
}


// console.log(a); 
// console.log(b);
// console.log(c);

function one(){
  const username="hitesh"
  function two(){
    const website="youtube"
    console.log(username)

  }
  // console.log(website) 
  two()
}
// one()

if(true){
  const username="hitesh"
  if(username==="hitesh"){
    const website=" youtube"
    // console.log(username+website);
  }
  // console.log(website)
}
// console.log(username);


// ++++++++++++++++++++++++ isteresting ++++++++++++++++++

addone(5) // can access
function addone(num){//function
  return num+1
}

addTwo(5)//cannot access
const addTwo=function(num){//expression
  return num+2
}
// for

for(let index=0;index<10;index++){
  const element =index;
  // console.log(element)

}

// console.log(element)

for(let i=1;i<=10;i++){
  // console.log(`Outer loop value: ${i}`);
  for(let j=1;j<=10;j++){
    // console.log(`Inner loop value ${j} and outer loop ${i}/`); 
    // console.log(i+'*'+'='+ i*j);
  }
}
let myArray=["Flash","batman","superman"]
for(let index=0;index<myArray.length;index++){
  const element = myArray[index]
  console.log(myArray[index])
}

//  break and continue
// for(let index=1;index<=20;index++){
//   if(index==5){
//     console.log(`Detected 5`)
//     break;
//   }
//   console.log(`Value of i is ${index}`)
// }

for(let index=1;index<=20;index++){
  if(index==5){
    // console.log(`Detected 5`)
    continue;
  }
  // console.log(`Value of i is ${index}`)
}
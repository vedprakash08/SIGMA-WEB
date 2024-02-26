console.log("Tutorial on loops")
// for(let i=0; i<10; i++){
//     console.log(i+1);
// }
// let i=0;
// while(i!=10){
//     i++;
//     console.log(i+1);
// }
// do{
//     console.log(i+1);
// }while(i<10)

let obj={
    "name":"vipin",
    "roll No": "63",
    company: "vipinAi"
}

// for in loop for objects
for(let key in obj){
    let element=obj[key];
    console.log(key,element);
}
// for(const key in obj){
//     const element=obj[key];
//     console.log(key,element);
// }

//  for of loops for array
for(let c of "vipin"){
    console.log(c);
}

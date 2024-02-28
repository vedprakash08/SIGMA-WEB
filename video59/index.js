// let a=8;
// if(a%2==0 && a%3==0){
//     console.log("The number is divisible by 2 and 3 ")
// }
// else{
//     console.log("The number is not divisible by 2 and 3 ")
// }
// const age =26;
// age>18? console.log("you can drive"):console.log("you can not drive");

// let sum=(a,b)=>{
//     c=a+b;
//     return c;
// }
// sum=sum(5,6);
// console.log(sum);

// const obj={
//     "name":"ved prakash sharma",
//     "roll": "63",
//     "class":"MCA"
// }

// for(let key in obj){
//     let Element=obj[key];
//     console.log(key,Element);
// }

// for(let i of "1jsiwkwq"){
//     console.log(i);
// }


//faulty calculator
// 
let x=prompt("Enter the value of x");
let y=prompt("Enter the value of y");
let z=prompt("Enter the operation to perform")

let obj={
    "+":"-",
    "-":"/",
    "*":"+",
    "/":"**"
}
let random=Math.random();

if(random>0.1){
    alert(`The result is ${eval(`${x} ${z} ${y}`)}`)
}
else{
    z=obj[z];
    alert(`The result is ${eval(`${x} ${z} ${y}`)}`);
}


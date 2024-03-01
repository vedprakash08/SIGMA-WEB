console.log("Factorial Program")

// const arr=[1,2,3,4,5,6];
let num=6;
let arr=Array.from(Array(num+1).keys())
console.log(arr.slice(1,))
let fact=arr.slice(1,).reduce((a,b)=>{
    return a*b;
})
console.log(fact)

// let mul=(a,b)=>{
//     return a*b;
// }
// console.log(arr.reduce(mul))
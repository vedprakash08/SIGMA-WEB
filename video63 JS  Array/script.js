// console.log("This is tutorial 63")

// let a=func=(x,y)=>x*y;
// console.log(`The value of a is ${a(4,5)}`);
// let st="vipin sharma";
// console.log(st.toUpperCase());
// let p="Vipin";
// let q="Sharma";
// console.log(p.concat(" ",q));


//array are mutable while string are not
let arr=[1,2,4,3,5,5];
console.log(arr);
console.log(arr.length)
console.log(typeof arr);
 
let a1=[1,2,4,4];
let a2=[3,5,7,7];
let a3=[9,7,4];
console.log(a1.concat(a2,a3));
console.log(a1)
console.log(a2)
console.log(a3)

console.log(a1.join(" and "))
console.log(a1.pop())
console.log(a1.push(200))
console.log(a1.shift())
console.log(a1.unshift(3));
console.log(a1)
delete a1[1];
console.log(a1)

console.log(arr.splice(2,3,100,200))
console.log(arr)

arr.forEach((value,index,array)=>{
    console.log(index,value,array);
})
console.log(arr)
arr.forEach((value)=>{
    console.log(value**2)
})
console.log(arr)
for(let i of arr){
    console.log(i)
}

// to create newArr
let newArr=arr.map((e,value,array)=>{
    return e**2;
})
console.log(newArr)

const greaterThanThree=(e)=>{
    if(e>3){
        return true;
    }
    return false;
}
console.log(arr)
console.log(arr.filter(greaterThanThree))


function add(a,b){
    return a+b;
}
function mul(a,b){
    return a*b;
}
const num=[5,4,8,3,9];
let sum=num.reduce(add)
let multiply=num.reduce(mul)
console.log(sum)
console.log(multiply)

const n=Array.from("vipin");
console.log(n)
console.log("Hey mukul how are you?");

function nice(name){
    console.log("Hey "+name+" how are you?");
}


nice("vipin");

function sum(a, b, c=3){
    // console.log(a + b);
    return a+b; 
}

let result=sum(8,3);
console.log(result);

const func=(a,b)=> a*b;
console.log(func(4,5));

const a=(a)=>a+100;
console.log(a(6));
console.log("The value of a is "+a(6));
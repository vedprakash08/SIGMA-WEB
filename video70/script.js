let a={
    1: "red",
    2: "green",
    3: "purple",
    4: "orange",
    5: "blue"
}


// function getRandomColor(){
//     //a+r(b-a)
//     let val1=Math.floor(255*Math.random())
//     let val2=Math.floor(255*Math.random())
//     let val3=Math.floor(255*Math.random())
//     return `rgb(${val1},${val2},${val3})`
// }
// let f=document.getElementsByClassName("box")
// Array.from(f).forEach(g=>{
//     g.style.backgroundColor = getRandomColor();
// })


// let e= document.body.firstElementChild.querySelectorAll(".box");
// e.forEach(b => {
//     b.style.backgroundColor = a[Math.floor(5*Math.random())]
// });


function getRandomColor(){
    // 16777215 is a white color in decimal
    return "#"+ Math.floor(Math.random()*16777215).toString(16);
}
let f=document.getElementsByClassName("box")
Array.from(f).forEach(g=>{
    g.style.backgroundColor = getRandomColor();
})




// various method of console
console.assert(50>70, "This is very good")

function person(firstName,lastName){
    this.firstName=firstName,
    this.lastName=lastName
}

const me = new person("Vipin","Sharma")
const brother= new person("Mukul", "Sharma")
console.table(me);
console.table(brother)
console.log("hdg")
console.log(typeof document)
console.log(typeof window)

document.body.childNodes;
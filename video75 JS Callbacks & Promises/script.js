console.log("I am vipin")
console.log("checking asynchronous capability of javascript")


// asynchronous function
setTimeout(()=>{
    console.log("I am inside set timeout")
} ,2000)
setTimeout(()=>{
    console.log("I am inside of another set timeout")
} ,1000)
console.log("THE END")


const myCallback=(arg)=>{
    console.log("This is "+ arg)
}
const loadScript=(src,myCallback)=>{
    let sc= document.createElement("script")
    sc.src=src
    sc.onload=myCallback("VIPIN")
    document.head.append(sc);
}

loadScript("https://cdnjs.cloudflare.com/ajax/libs/prism/9000.0.1/prism.min.js",myCallback)
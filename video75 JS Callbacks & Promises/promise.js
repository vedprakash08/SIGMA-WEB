console.log(`This is promise lecture`)

let prom1= new Promise((resolve,reject)=>{
    let a=Math.random()
    if(a<0.5){
        reject("No random number is not supporting you")
    }
    else{

        setTimeout(()=>{
            console.log("Yes I am done")
            resolve("vipin")
            // reject("vipin")
        },3000)
    }
})

let prom2= new Promise((resolve,reject)=>{
    let a=Math.random()
    if(a<0.5){
        reject("No random number is not supporting you 2")
    }
    else{

        setTimeout(()=>{
            console.log("Yes I am done 2")
            resolve("vipin 2")
            // reject("vipin")
        },1000)
    }
})
// prom1.then((a)=>{
//     console.log(a)
// }).catch((a)=>{
//     console.log(a)
// })

let p3= Promise.any([prom1,prom2])
p3.then((a)=>{
    console.log(a)
}).catch((a)=>{
    console.log(a)
})
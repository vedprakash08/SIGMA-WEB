let a=prompt("Enter the number")
let b= prompt("Enter the number")
// let sum=a+b

if(isNaN(a) || isNaN(b)){
        // console.log("It is not a number")
        throw SyntaxError("Sorry this is not allowed")
}

// a=parseInt(a)
// b=parseInt(b)
function main(){
    try{
        // setTimeout(()=>{
        //     let sum = parseInt(a)+parseInt(b)
        //     console.log("The sum is ",sum*x)
        // },3000)
        console.log("the sum is ",(a+b)*x)
        return
    } catch(error){
        console.log(error.name)
        console.log("Error aa gaya bhai sahb")
        return
    }
    finally{// ye function ke case mei kaam aata hai function in between return bhi krde but ye chalega
        console.log("The files are being closed and db connecton is closed")
    }
}

let z=main()
console.log("try synchrolously work krta hai")
// console.log("The sum is ",sum)
// console.log("The number you entered is ",a)
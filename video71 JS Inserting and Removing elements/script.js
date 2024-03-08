console.log(document.body.getElementsByClassName("box"))
// document.body.querySelectorAll(".container")[0].innerHTML="vipin"
document.body.getElementsByClassName("box")[0].innerHTML="mukul"

console.dir(document.body.getElementsByClassName("box"))
console.log(document.querySelectorAll(".box")[0].tagName)   
console.log(document.querySelectorAll(".box")[0].textContent)


// inserting 

let div= document.createElement('div')
div.className= "newClass"
div.innerHTML= "this is my first element that is created by the javaScript"
// document.body.append(div)
// document.body.prepend(div)

// document.body.after(div)

// document.querySelectorAll(".container")[0].append(div)
// document.querySelectorAll(".container")[0].after(div)

// document.querySelectorAll(".box1")[0].replaceWith(div)

let cont=document.body.querySelector(".container")
cont.insertAdjacentHTML("afterend","i am inserting <b>html dynamically</b>")

cont.insertAdjacentElement("afterend",div)
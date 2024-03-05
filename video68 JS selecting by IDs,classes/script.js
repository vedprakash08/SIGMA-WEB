let a=document.getElementsByClassName("box")
console.log(a)
a[1].style.backgroundColor = "red";

document.getElementById("red").style.backgroundColor = "green"
document.querySelector(".box").style.backgroundColor = "yellow";
console.log(document.querySelectorAll(".box"))
document.querySelectorAll(".box").forEach(e=>{
    e.style.backgroundColor= "pink"
})

document.getElementsByTagName("div")

a[2].matches("red");

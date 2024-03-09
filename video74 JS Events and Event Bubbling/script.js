let button = document.querySelector(".btn")
button.addEventListener("dblclick", ()=>{
    document.querySelector(".box").innerHTML="<b>Hey! you clicked the button and change the content</b> Enjoy it!"
})
button.addEventListener("contextmenu", ()=>{
    alert("Don't right click pls")
})

document.addEventListener("keydown",(e)=>{
    console.log(e.key,e.keyCode);
})
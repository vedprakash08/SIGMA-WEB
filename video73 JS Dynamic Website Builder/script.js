function createCard(title, cName, views, monthsOld, duration, thumbnail){
    var viewsCal;
    if(views>1000000){
        viewsCal=`${views/1000000}M`
    }
    else if(views>1000){
        viewsCal=`${views/1000}K`
    }
    else{
        viewsCal=views
    }
    let html=`<div class="card">
    <div class="image">
        <img src="${thumbnail}" alt="">
        <div class="time">${duration}</div>
    </div>
    <div class="content">
        <div class="title">${title}</div>
        <div class="channel">${cName} . ${viewsCal} views . ${monthsOld} months ago</div>
    </div>
</div>`
document.body.querySelector(".container").innerHTML=document.body.querySelector(".container").innerHTML+html
}


createCard("Introduction to Backend | Sigma Web Dev video #2", "CodeWithHarry", 560000000, 7, "31:22", "https://i.ytimg.com/vi/tVzUXW6siu0/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLACwWOixJVrKLFindK92kYMgTcQbw")
createCard("Introduction to Backend | Sigma Web Dev video #2", "CodeWithHarry", 560000, 7, "31:22", "https://i.ytimg.com/vi/tVzUXW6siu0/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLACwWOixJVrKLFindK92kYMgTcQbw")
createCard("Introduction to Backend | Sigma Web Dev video #2", "CodeWithHarry", 56, 7, "31:22", "https://i.ytimg.com/vi/tVzUXW6siu0/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLACwWOixJVrKLFindK92kYMgTcQbw")
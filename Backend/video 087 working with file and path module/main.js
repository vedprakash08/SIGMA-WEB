// console.log("hudb");

import fs from "fs";
// const fs = require("fs");
console.log("starting");
fs.writeFile("vipin.txt","vipin is still confuse", ()=>{
    console.log("data");
    // fs.readFile("vipin.txt",(error,data)=>{
    //     console.log(error,data.toString());
    // })

    fs.appendFile("vipin.txt", "\nsharma",(e,d)=>{
        console.log(d);
    })
})
console.log("ending");
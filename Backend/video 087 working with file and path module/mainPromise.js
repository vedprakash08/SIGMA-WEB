import { rejects } from "assert"
import { error } from "console"
import fs from "fs/promises"
import { resolve } from "path"

// let a= await fs.readFile("vipin.txt");
// console.log(a.toString());


function readFileAysnc(filePath){
    return new Promise((resolve,reject)=>{
        fs.readFile(filePath, 'utf8',(error,data)=>{
            if(error){
                reject(error);
            }
            else {
                resolve(data);
            }
        })
    })
};

readFileAysnc("vipin.txt")
.then(data=>{
    console.log("File Content:", data);
})
.catch(error=>{
    console.log("Error occured" ,error);
});

console.log("jscvjv")

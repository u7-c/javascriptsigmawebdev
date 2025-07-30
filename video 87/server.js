const fs = require("fs")
console.log(fs);

console.log("starting");
// fs.writeFileSync("aryan.txt","aryan is a good boy")
//this is not a good practice for javascript so we use the following

fs.writeFile("aryan2.txt","aryan is a good boy",()=>{//this shit gets scheduled and gets run after running of all the clogs
    console.log("done");
    fs.readFile("aryan.txt",(error,data)=>{
        console.log(error,data.toString());//it give value in default as buffer
    })
})
//to append a file we use append and it takes three arguments as a callback fxn
//they are file path,what to actually append, and then same error and data
fs.appendFile("aryan.txt","harry",(e,d)=>{
    console.log(d);//so it actually append harry in my txt file which is aryan.txt
})
console.log("ending");

//also u can also change the type to module so that u can use import and keywords like await
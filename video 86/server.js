// import aryan from "./mymodule.js"
// console.log(aryan);

//important thing to note that we when we write type which is commonjs
//which is also default 
//it helps us to use require fxn 
//wheras when we use type : module
//we can use the keywords as shown above such as import and export as well

const a = require ("./module2.js")
console.log(a,__dirname,__filename)//shows the name of directory and file name too
//jitne bhi modern syntax hai unme import hi use kiya jaata hai
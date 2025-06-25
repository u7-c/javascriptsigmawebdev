console.log("this is promises")

let prom1=new Promise((reject,resolve)=>{
    let a=Math.random()
    if(a<0.5){
        reject("this random number is not supporting you")
    }
    else{
        setTimeout(()=>{
            console.log("yes i am done")
            resolve("harry")
        },3000)
    }
})
let prom2=new Promise((reject,resolve)=>{
    let a=Math.random()
    if(a<0.5){
        
        reject("his random number is not supporting you 2")
    }
    else {
        setTimeout(() => {
            console.log("Yes I am done 2")
            resolve("Harry 2")
        }, 4000);
    }
})
let p3=Promise.race([prom1,prom2])
p3.then((a)=>{
    console.log(a)
}).catch(err=>{
    console.log(err)
})
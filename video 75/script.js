setTimeout(() => {
    console.log("my name is kavish")
}, 1000);

console.log("my name is aryan")
console.log("my name is gurkiran")

const loadscript = (callback,src)=>{
    let sc=document.createElement("script")
    sc.src=src
    sc.onload=()=>callback("harry")
    document.head.append(sc)
}
const callback=(a)=>{
    console.log(a)
}
loadscript("https://cdnjs.cloudflare.com/ajax/libs/prism/9000.0.1/prism.min.js", callback )
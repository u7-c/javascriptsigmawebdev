let button=document.getElementById("btn")
button.addEventListener("dblclick",()=>{
    document.querySelector(".box").innerHTML="aryan is god"
})
document.addEventListener("keydown", (e)=>{
    console.log(e, e.key, e.keyCode)
})
let a = prompt("what is the first number")
let b= prompt("what is the second number")
let c= prompt("enter the operation")

let random=Math.random()
console.log(random)

let obj={
    "+":"-",
    "*": "+",
    "-": "/",
    "/": "**",
}
if (random > 0.1){
    //performing correct calculation
    console.log(`the result is ${a} ${c} ${b}`)
    alert(`the result is ${eval(`${a} ${c} ${b}`)}`)
}
else {
    // Perform wrong calculation
    c = obj[c]
    alert(`The result is ${eval(`${a} ${c} ${b}`)}`) 

}
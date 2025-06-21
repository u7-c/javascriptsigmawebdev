let a = [1,2,3,4]
console.log(a[0])
console.log(a.toString())
console.log(a.join(" and "))

let obj={
    a:1,
    b:2,
    c:3
}
for(const key in obj){
    if(Object.hasOwnProperty.call(obj,key)){
        const element = obj[key];
        console.log(key,element)
    }
}
for(const value of a){
    console.log(value)
}
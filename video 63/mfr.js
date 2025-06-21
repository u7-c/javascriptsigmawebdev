let arr=[1,13,5,7,11];
//square values
let newarr=[];
for(let index=0;index<arr.length;index++){
    const element = arr[index];
    newarr.push(element**2);
}
console.log(newarr)

//or you can cchose the other method
let newArr=arr.map((e,index,array)=>{
    return e**2;
})
const greaterthanseven=(e)=>{
    if(e>7){
        return true;
    }
    return false
}
console.log(arr.filter(greaterthanseven));
let arr2=[1,2,3,4];
const sum1 =(a,b)=>{
    return a+b
}
console.log(arr2.reduce(sum1));

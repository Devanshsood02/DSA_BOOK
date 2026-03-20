let a = Number(prompt("Enter the first value"));
let b = Number(prompt("Enter the second value"));
let c = Number(prompt("Enter the third value"));

//sm=semiperimeter
const triangle=(a,b,c)=>{
let sm= (a+b+c)/2;
let Area=Math.sqrt(sm*(sm-a)*(sm-b)*(sm-c))
console.log(Area)
}

triangle(a,b,c)
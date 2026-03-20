let a = Number(prompt("Enter the lenght of rectangle"));
let b = Number(prompt("Enter the width of rectangle"));

const rectangle=(a,b)=>{
let area=a*b
let perimeter=2*(a+b)
console.log("area = ",area)

console.log("perimeter = ",perimeter)
}
rectangle(a,b)
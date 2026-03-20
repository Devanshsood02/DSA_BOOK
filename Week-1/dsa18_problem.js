const input=prompt("Enter the three Numbers Separated by Space")

const arr = input.split(" ").map(Number)

const a =arr[0];
const b=arr[1];
const c=arr[2]

if(isNaN(a)|| isNaN(b)|| isNaN(c)){
    console.log("plz enter a valid number")
}
else if(a>b && a>c){
    console.log(`a is greatest`)
}
else if(b>a &&  b>c ){
    console.log(`b is the greatest`)
}
else{
    console.log("c is the greatest")
}

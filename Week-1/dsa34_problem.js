let num = Number(prompt("Enter number"));

if (isNaN(num) || num < 0) {
    console.log("Invalid input");
} else {

while(num>0){
    let digit=num%10;
    console.log(digit)
    num= Math.floor(num/10)
}

}
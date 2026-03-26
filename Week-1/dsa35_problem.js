let no=Number(prompt("Enter the no"))

let sum=0;
while (no > 0) {
    let digit = no % 10;
    sum = sum + digit;
    no = Math.floor(no / 10);
}

console.log(sum)
const num = Number(prompt("Enter a number"));

const factorial = (num) => {

    if (isNaN(num) || num < 0) {
        console.log("Invalid input");
        return;
    }

let result =1;
for(let i=1;i<=num;i++){

    result *=i;
  
  
}  console.log(`Factorial = ${result}`)
};

factorial(num);
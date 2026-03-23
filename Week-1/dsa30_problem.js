let num = Number(prompt("Enter number"));

for (let i = 1; i <= Math.sqrt(num); i++) {

    if (num % i === 0) {
        console.log(i);

        if (i !== num / i) {
            console.log(num / i);
        }
    }
}
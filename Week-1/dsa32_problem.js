let num = Number(prompt("Enter number"));

const checking = (num) => {
  if (isNaN(num) || num <= 1) {
    console.log("Plz enter a valid no or greater than 1");
    return;
  }

  let count = 0;

  for (let i = 1; i <= num; i++) {
    if (num % i === 0) {
      count++;
    }
  }

  if (count === 2) {
    console.log(`${num} is a prime no`);
  } else {
    console.log(`${num} is a not a prime no`);
  }
};

checking(num);

let num = Number(prompt("Enter the table You want"));

const oddandeven = (num) => {
  if (isNaN(num) || num < 0) {
    console.log("Plz enter a valid no or greater than 0");
    return;
  }
  let sum1 = 0;
  let sum2 = 0;

  for (let i = 1; i <= num; i++) {
    if (i % 2 === 0) {
      sum1 += i;
    } else {
      sum2 += i;
    }
}
console.log(`sum of all even nos = ${sum1} `);
console.log(`sum of all odd nos = ${sum2} `);
};

oddandeven(num);

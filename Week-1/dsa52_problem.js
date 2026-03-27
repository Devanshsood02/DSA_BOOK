let n = 3;

for (let i = 1; i <= n; i++) {
  let row = "";

  for (let j = 1; j <= 2 * n - 1; j++) {
    if (j === i || j === (2 * n - i)) {
      row += "*";
    } else {
      row += " ";
    }
  }

  console.log(row);
}
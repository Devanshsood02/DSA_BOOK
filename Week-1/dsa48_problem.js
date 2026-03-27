let n = 4;

for (let i = 1; i <= n; i++) {
  let row = "";

  for (let j = 0; j < i; j++) {
    row += String.fromCharCode(65 + j);
  }

  console.log(row);
}
const year=Number(prompt("Enter the Year to check the leap Year"));


isNaN(year)?console.log("Please Enter a Valid  Number"):(year%4 ===0 && year%100!==0) ||(year%400===0)? console.log(`${year} is a Leap Year`) :console.log(`${year} is a not a Leap Year`)


// Note for Leap year-- (4 se divisible ho + 100 se nahi OR 400 se divisible ho)
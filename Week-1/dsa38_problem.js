// Automorphic no are those jinke entered no. aur uska sq ka last digit same ho 

let num = Number(prompt("Enter the Number to check the if its Automorphic or not"))


let sq = num * num;

// digits count
let digits = num.toString().length;

// dynamic modulus
let mod = Math.pow(10, digits);

let lastDigits = sq % mod;

if (lastDigits === num) {
  console.log(num + " is an Automorphic number");
} else {
  console.log(num + " is NOT an Automorphic number");
}
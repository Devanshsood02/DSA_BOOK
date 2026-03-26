// pallindrom logic -- Last digit nikaalo → reverse me jodo → number chhota karo → repeat


let num = Number(prompt("Enter the number"))

let original = num;
let reverse = 0;


while(num>0){

    let digit = num%10;
    reverse= reverse*10+ digit;
    num = Math.floor(num/10)
}


if(original===reverse){
    console.log(`${original} is  a pallindrome no`)
}
else{
   console.log(`${original} is not a pallindrome no`)
}




// One-Line Rule

// 👉 Multiply by 10 = jagah banao
// 👉 + digit = naya digit add karo

// 🔥 Final Intuition

// 👉 Reverse banane ke liye:

// har step pe number ko expand karo (×10)
// new digit chipkao (+digit)
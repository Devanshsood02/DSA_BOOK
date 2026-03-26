let num = Number(prompt("Enter number"));

const sumoffactors=(num)=>{
      if (isNaN(num) || num < 0) {
    console.log("Plz enter a valid no or greater than 0");
    return;
  }
  let sum=0;

  for(let i=1;i<=num;i++){
    if(num%i===0){
        sum+=i;
    }
  }
  console.log("sum is = ", sum)
}


sumoffactors(num)
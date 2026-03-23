const Numbr=Number(prompt("Enter the No "))

const checking=(Numbr)=>{
   if(isNaN(Numbr)||Numbr<0){
        console.log("plz enter a valid no")
        return
    }


for(let i=Numbr;i>=1;i--){
console.log(i)
}

}

checking(Numbr)
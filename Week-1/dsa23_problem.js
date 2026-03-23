const Numbr=Number(prompt("Enter the No to print N times of HELLO"))

const checking=(Numbr)=>{
   if(isNaN(Numbr)||Numbr<0){
        console.log("plz enter a valid no")
        return
    }


for(let i=1;i<=Numbr;i++){
console.log("Hello World ")
}

}

checking(Numbr)


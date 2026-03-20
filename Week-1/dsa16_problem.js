
const Name=prompt("Enter the Name").trim().toLowerCase()
const age =Number(prompt("Enter Your Age"));

const AgeChecker=(Name,age)=>{

    if(!isNaN(age)&& age>=18){
        console.log(`Valid - Hello ${Name} , You are a Valid Voter`)
    }
    else {
        console.log(`InValid - Sorry ${Name} , You are a InValid Voter`)
    }
}

AgeChecker(Name,age)
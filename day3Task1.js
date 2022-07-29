// day-3 Task-1
console.log("Shaik Reshma (B38)")

let reshma = {
  "firstName": "Reshma",
  "lastName": "Shaik",
  "age": 31,
  "eduQualification": "B.Tech",
  "state": "Andhra Pradesh",
  "country": "India"
}


var keyNames = Object.keys(reshma);

console.log("........................using for")
for (let k=0; k<keyNames.length;k++){
  console.log(reshma[keyNames[k]])
}


console.log("........................using for/in")
for(let i in reshma){
  console.log(reshma[i])
}

console.log("........................using for/of")
for (const h of keyNames) {
    console.log(reshma[h]);
} 


console.log("........................using forEach")
Object.keys(reshma).forEach(key => console.log(reshma[key]));

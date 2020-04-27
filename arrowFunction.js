const friends = ["Shakil", "Raihan", "Jony","Ashekur", "Abdul Halim", "Sumon"];

friends.map(friend=>{
    console.log(friend);
})


const dob =[1995,1998,1996,1994,1982];

const currentAge = dob.map((age,index)=>`${index+1} = ${2020-age}`);
console.log(currentAge);
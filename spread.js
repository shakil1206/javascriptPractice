const numbers = [1,2,3,4,5,6];

const calculation = (a,b,c,d,e,f)=>{
    console.log(a+b+c+d+e+f);
}

calculation(...numbers);

const num =["Shakil", "Akash","Abdul Halim"];
const num2 =["Sumon","Selim", "Raihan", "Siddique"];

const allName = num.concat(num2);

console.log(allName);

const allName2 = [...num,...num2];
console.log(allName2);
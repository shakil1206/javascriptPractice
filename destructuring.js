const information =['Shakil ahmed', 21, 'Student'];

var name = information[0];
var age = information[1];
var profession = information[2];

console.log(name, age, profession);

const [name1, age1, profession1] = information;
console.log(name1,age1, profession1);


const object={
    name2: "Shakil Ahmed",
    age2: 22,
    profession2: "Student",
    salary2: 25000
}

console.log(object);

const {name2, age2, profession2,salary2} = object;

console.log(name2, age2, profession2, salary2);
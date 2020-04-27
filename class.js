class Information{
    constructor(name, age,job){
        this.name = name;
        this.age = age;
        this.job = job;
    }
    basicInformation=()=>{
        console.log(`My Name is: ${this.name}, And I am ${this.age} my job is ${this.job}`);
    }
}

const shakil = new Information("Shakil Ahmed", 22, "Student");
console.log(shkail.name);
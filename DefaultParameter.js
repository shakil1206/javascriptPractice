defaultParams=(name, age)=>{
    name ? name = name : name = "Shakil Ahmed";
    age ? age = age : age = 22;
    console.log("My name is ", name, "And I am ",age, "Years Old");

}

defaultParams("Sinbad",21);

defaultParams6 =(name="Shakil Ahmed", age=22)=>{
    console.log("My name is: ", name,"And I am ", age, "Years old!");
}

defaultParams6("Sumon",22);

//Function constructor
//ES5

function functionConstructor(name,age){
    name ? name = name: name = "Shakil Ahmed";
    age ? age = age : age = 24;
    this.name=name;
    this.age=age;
}

var shakil = new functionConstructor();
console.log(shakil.name);
console.log(shakil.age);

var shakil2= new functionConstructor("Sinbad", 22);
console.log(shakil2.name);
console.log(shakil2.age);

//Function constructor ES6

function functionCon(name = "Shakil Ahmed", age = 22){
    this.name = name;
    this.age=age;
}

var shakil3 = new functionCon();
console.log(shakil3.name);
console.log(shakil3.age);


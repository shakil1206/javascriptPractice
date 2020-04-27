const shakil = new Map();

shakil.set('Full Name',"Shakil Ahmed");
shakil.delete("Full Name");
shakil.clear();

shakil.set('Full Name', "Shakil Ahmed");
shakil.set("Job", "Student");
shakil.set("Age",21);
shakil.set("Job Experience", "5 Years");
console.log(shakil);

shakil.forEach((value, key) => console.log(`Key is: ${key} and the value is: ${value}`));



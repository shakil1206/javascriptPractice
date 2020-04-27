const firstName = 'Md. Shakil',
      lastName = "Ahmed",
      age = "22",
      edcuation="BSc in CSE";

      console.log(firstName,lastName,age,edcuation);
      console.log(`My Name is: ${firstName} ${lastName} Age : ${age} Education : ${edcuation}`);

const letter = `My name is ${firstName} ${lastName}, Age is: ${age}, Education is: ${edcuation}, I am a simple person.`;

const result = letter.startsWith('My');
const result2 = letter.endsWith('person.');
const result3 = letter.includes('Shakil');
const result4 = letter.repeat(100);
console.log(result, result2, result3, result4);

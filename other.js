// Define the Person class
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  // Regular member function
  introduce() {
    return `Hi, I'm ${this.name} and I'm ${this.age} years old.`;
  }

  // Arrow function as a member function
  displayDetails = () => {
    const outputElement = document.getElementById("output-container");
    outputElement.innerHTML = `<p>${this.introduce()}</p>`;
  };
}

// Defined the Student class by inheriting from Person
class Student extends Person {
  constructor(name, age, rollNo) {
    super(name, age);
    this.rollNo = rollNo;
  }

  introduce() {
    return `Hi, I'm ${this.name}, age ${this.age} a student with roll number ${this.rollNo}.`;
  }
}

function createObject() {
  var age = 28;
  var name = "Aaqueeb";
  var rollno = 56;

  if (name == "") {
    console.log("Please enter Name");
    return;
  }

  if (age == 0) {
    console.log("Please enter age");
    return;
  }

  if (age > 0 && age < 20 && rollno == 0) {
    console.log("Please enter Roll no");
    return;
  }

  if (age > 0 && age < 21) {
    // Create a Student object
    try {
      const student1 = new Student(name, age, rollno);
      console.log(student1.introduce());
    } catch (error) {
      console.log(`Error: ${error.message}`);
    }
  } else {
    // Create a Person object and print details
    const person1 = new Person(name, age);
    console.log(person1.introduce());
  }
}
// Call the function
createObject();




// different ways to create object

// Creating an object using object literals
const person1 = {
  name: "Aaqueeb",
  age: 30,
  getInfo: function() {
      return `Name: ${this.name}, Age: ${this.age}`;
  }
};
console.log(person1.getInfo());

// Using the new keyword with Object Constructor:
const person2 = new Object();
person2.name = "Aaqueeb";
person2.age = 25;
person2.getInfo = function() {
    return `Name: ${this.name}, Age: ${this.age}`;
};
console.log(person2.getInfo());

// Using factory function 
function createPerson(name, age) {
  return {
      name: name,
      age: age,
      getInfo: function() {
          return `Name: ${this.name}, Age: ${this.age}`;
      }
  };
}
const person3 = createPerson("Aaqueeb", 19);
console.log(person3.getInfo());

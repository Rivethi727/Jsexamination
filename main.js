// var Name=any
// document.write(typeof Name);
// console.log(typeof Name);

// que02

// var person = {
//     name: "Rivethika",
//     age: 22,
//     introduceYou: function() {
//       console.log("Hello, my name is " + person.name );
//     }
//   };
//   person.introduceYou();

// que3
// function greenStudent(student) {
//     console.log("Hello " + student.name + ", welcome to the Coding School");
//   }
//   var student1 = {
//     name: "Rivethika",
//   };
//   greenStudent(student1);

// que04

// const obj = {
//     name: "Nivetha",
//     age: 22,
//     language: "javascript",
//   }
//   console.log(obj.name)
//   console.log(obj["name"])

//   que05
// var user1 = {
//     name: 'John',
//     email: 'james@gmail.com'
//   }
//   console.log(user1.email)

//   que06
const employee = {
    name: 'John Smith',
    position: 'Sales Manager'
  };
  
  delete employee.position;
  
  console.log(employee); 


//   que07
// var person = {
//     firstName: "John",
//     lastName: "Doe",
//     age: 30
//   };
  

//   if (person.hasOwnProperty("firstName")) {
//     console.log("firstName exists in the object.");
//   } else {
//     console.log("firstName does not exist in the object.");
//   }
  

//   if ("lastName" in person) {
//     console.log("lastName exists in the object.");
//   } else {
//     console.log("lastName does not exist in the object.");
//   }
  
// QUE08


// const person = {
//     name: 'Jack',
//     age:26
// }


// const student = {
//     gender: 'male'
// }

// const newObj = Object.assign(person, student);

// console.log(newObj)
  
// que09
// const myObject = {
//     name: "John",
//     age: 30
//   };
  
//   if (myObject.hasOwnProperty('address')) { 
//     console.log('address is there');
//   } else {
//     console.log('address not found');
//   }  


// que10
const book = {
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    year: 1960,
  };
  
  const bookJSON = JSON.stringify(book);
  console.log(bookJSON);

// que11
const students = [
    {
      name: "ram",
      age: 20,
      gpa: 3.5,
    },
    {
      name: "beem",
      age: 22,
      gpa: 3.8,
    },
    {
      name: "cheem",
      age: 19,
      gpa: 3.2,
    },
  ];
    console.log(students[0].name);
  console.log(students[1].age);
  console.log(students[2].gpa);
    



  
  
  

  

  
  
  
  
  

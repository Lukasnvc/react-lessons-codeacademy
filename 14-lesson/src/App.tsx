

const App = () => {

  // // Boolean
  // const isThisVideoDone: boolean = false;

  // //Numbers
  // const myNumber: number = 4;

  // //Text, String
  // const myName: string = 'Xavier';

  // //Template strings
  // const greeting: string = 'Hello, ' + myName;
  // const greeting2: string = `Hello, ${myName}`;

  // //Array
  // const count: number[] = [1, 2, 3, 4];

  // //Any
  // const dog: any = {
  //   name: 'brisius',
  //   age: 1
  // }

  // //functions

  // const addNumb = (num1:number, num2:number) => {
  //   return num1 + num2;
  // }

  // const addedNumbers = addNumb(1, 4);


  // //objects

  // const car: {
  //   make: string;
  //   color: string;
  // } = {
  //   make: 'volvo',
  //   color: ''
  // }

  // const response = true
  // if (response) {
  //   car.color = 'red';
  // }

  // const car1: {
  //   make: string;
  //   model?: string;
  // } = {
  //   make: 'BMW'
  // }

  // if (response) {
  //   car1.model = 'x5'
  // }

  // //Interface


  // type PPerson = {
  //   name: string,
  //   age: number,
  //   email?: string
  // }
    
  // // interface Person {
  // //   name: string;
  // //   age: number;
  // //   email?: string // ? optional field
  // // }

  // interface SuperPerson extends Person {
  //   power: string
  // }

  // const person: Person = {
  //   name: 'Lukas',
  //   age: 33
  // }

  // const person1: Person = {
  //   name: 'Tomas',
  //   age: 20,
  //   email: 'tomas@gmail.com'
  // }
 
//   //1.
//   const sentence = (name: string) => {
//     if (!name) {
//       name='you'
//     }
//     return `One for ${name}, one for me.`
//   }

//   console.log('Empty :', sentence(''))
//   console.log('With name :', sentence('Lukas'))

//   //2.
//   const howOld = (name: string, age: number) => {
//     return `${name}: age is - ${age/60/60/24/365}`
//   }

//   console.log(howOld('Lukas', 1000000000))


//   //3.
//   const acronyms = (sentence: string) => {
//     const x = sentence.split(' ').map(x => x[0].toUpperCase()).join('');
//     return x
//   }

//   console.log(acronyms('lukas novickas kaunas'))


//   //4.1
//   type User = {
//     name: string;
//     age: number;
//     occupation?: string
// };

//  const users: User[] = [
//     {
//         name: 'Max Mustermann',
//         age: 25,
//         occupation: 'Chimney sweep'
//     },
//     {
//         name: 'Kate Müller',
//         age: 23,
//         occupation: 'Astronaut'
//     }
// ];

//  function logPerson(user: User) {
//     console.log(` - ${user.name}, ${user.age}`);
// }

// console.log('Users:');
//   users.forEach(logPerson);
  
// //4.2
// interface User {
//   name: string;
//   age: number;
//   occupation: string;
// }

// interface Admin {
//   name: string;
//   age: number;
//   role: string;
// }

//   type Person = {
//     name: string;
//     age: number;
//     role?: string;
//     occupation?: string;
//   }

//  const persons:  Person[]  = [
//   {
//       name: 'Max Mustermann',
//       age: 25,
//       occupation: 'Chimney sweep'
//   },
//   {
//       name: 'Jane Doe',
//       age: 32,
//       role: 'Administrator'
//   },
//   {
//       name: 'Kate Müller',
//       age: 23,
//       occupation: 'Astronaut'
//   },
//   {
//       name: 'Bruce Willis',
//       age: 64,
//       role: 'World saver'
//   }
// ];

// function logPerson(user: Person) {
//   console.log(` - ${user.name}, ${user.age}`);
// }

//   persons.forEach(logPerson);
  

 


  return (
    <div>app</div>
  );
}

export default App;

//** ==== Variables ====  */
let fruit1;

//** ==== Execute ==== */
let lastName = 'Chris';
lastName = 'Velázquez';
console.log(lastName);

const people = 'Friends';
console.log(people);

const fruit = () => {
  const fruit2 = 'Banana';
  if (true) {
    //let fruit1 = 'Apple'; // Block Scope
    //const fruit2 = 'Banana'; // Block Scope
    // Var => Function Scope
    fruit1 = 'Apple';
  }
  console.log(fruit1);
  console.log(fruit2);
};

fruit();

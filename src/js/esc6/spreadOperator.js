//** === Spread Operator ==== (...) ==== */

//**! Spread Operator (...) */
const person = { names: 'Alma', age: 25, town: 'City Mex' };
const movies = { marvel: 'Iron Man', dc: 'Batman' };
const country = 'MX';

let { names } = person;
console.log(names);

let newPerson = { ...person, country, ...movies };
console.log(newPerson);

let data = { id: 4, ...person, country };
console.log(data);

//*! === Rest === Parameters === */
const sum = (num, ...values) => {
  console.log(values);
  console.log(num + values[0]);
  return num + values[0];
};
console.log(sum(5, 1, 2, 3, 4));

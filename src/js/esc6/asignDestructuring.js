//** === Assign Destructuring === Asignación de Destructuración === rest-spread ===  */
//**! === Array Restructuring === */
let fruits = ['Apple', 'Banana'];
let [a, b] = fruits;
console.log(a, b);
console.log(a, fruits[1]);
console.log(fruits[0], fruits[1]);

//**! Object Destructuring ===  */
const user = { userName: 'Pamela', age: 30, country: 'City Mex' };
let { userName, country } = user;
console.log(userName, country);
console.log(user.age);

(function () {
  let { country } = user;
  return console.log(`This is my country ${country}`);
})();

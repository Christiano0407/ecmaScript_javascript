//** === Enounced Object Literals ===  */
//**! ==== Before ==== */
function newUser(user, age, country, num) {
  return {
    user,
    age,
    country,
    id: num,
  };
}
/*
user: user,
age: age,
country:country,
num
*/
console.log(newUser('Leo', 25, 'Colombia', 4));

//**! ==== After ==== */
const newUserPlus = () => {};
console.log(newUserPlus);

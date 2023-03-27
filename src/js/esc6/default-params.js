//** ==== Default Params ==== ES6 */

//**? Before ECS6 */
function newParams(names, age, country) {
  var names = names || 'Oscar';
  var age = age || 25;
  var country = country || 'MX';
  console.log(names, age, country);
}

newParams();
newParams('David', 35, 'Colombia');

//**? After  */
const newUserParams = (town = 'City Mex', country = 'Mexico') => {
  return console.log(`It's my city ${town} and my country ${country}`);
};
newUserParams();
newUserParams('New York', 'United State');

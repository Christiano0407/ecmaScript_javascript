//** === Arrow Function === */
//**? === Function */
function square(num) {
  return num * num;
}
console.log(square(5));

//**? === Arrow Function */
const arrowFunction = (e) => {
  return console.log(e);
};
arrowFunction('Hello Arrow');

const arrowTwo = (num) => num + num;
console.log(arrowTwo(2));

//**? Call Function Anonymous */
(function () {
  console.log('Call NEW Function');
})();

(() => {})();

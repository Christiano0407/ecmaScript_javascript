//** === Strings === Template Literals + Concat ("+", "${}") =========  */
let names = 'Chris';
let lastName = 'Velázquez';
let friend = 'Mau';

//**? === Anonymous Function & Arrow Function === */
(function (event) {
  return console.log(names + ' ' + lastName);
})();

(() => {
  return console.log(`${names} and my friend ${friend}`);
})();

//** === Multi-Line Strings === */
(() => {
  return console.log(
    `My name ${names} \n it's my lastName ${lastName} \n and friend ${friend}`
  );
})();

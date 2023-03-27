//** === ==== Promises ==== === */
const playGames = () => {
  return new Promise((resolve, reject) => {
    if (true) {
      resolve(`Play, Winner!`); // True
    } else {
      reject(`Off, your Lose!`); // False
    }
  });
};

playGames()
  .then((response) => console.log(response))
  .catch((error) => console.log(error));

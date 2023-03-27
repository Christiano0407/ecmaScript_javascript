//** === POO =>  Class || Clases === Azúcar Sintáctica o Suggar Sintax === */
//*? === POO || Class */
class People {
  constructor(user, town, sport) {
    this.user = user;
    this.town = town;
    this.sport = sport;
  }
  // Method
  newPerson = () => {
    return console.log(`This person it's ${this.user} and fly of Argentina`);
  };

  practice = () => {
    return console.log(`In this town ${this.town}, practicing ${this.sport}`);
  };
}

//**? === Extends Class ===  */
class Travel extends People {
  constructor(country, money, transport, user, town) {
    super(user, town);
    this.country = country;
    this.money = money;
    this.transport = transport;
  }
  /* === Method () === */
  hello = () => {
    return 'Hello';
  };

  callTravel = () => {
    return console.log(`${this.hello()} and  This is my first travel with ${
      this.user
    }, a ${this.country}. It's very cost ${this.money} Dollars for ${
      this.town
    } and 
        transporting it's ${this.transport}`);
  };
}

//**? ==> INSTANCE oF Object */
const david = new People('David', '', '');
const luisa = new People('Luisa', 'New York', '');
const pamela = new People('Pamela', 'Buenos Aires', '');
const sportsPeople = new People(``, 'Chicago', 'Basketball');
sportsPeople.practice();

const alex = new Travel(`United State`, 500, 'Bus', 'Alex', ' Miami Florida');

//**! === Call Class === */
/* console.log(david);
console.log(luisa);
console.log(pamela);
pamela.newPerson();
console.log(sportsPeople);
sportsPeople.practice(); */
console.log(alex);
alex.callTravel();

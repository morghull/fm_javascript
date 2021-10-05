'use strict';

const cat = {
  name: 'Jirobasik',
  isMale: true,
  color: 'bandicoon',
  age: 3,
  weight: 6,
  isSleeping: false,
  say: function () {
    return 'meow meow';
  },
  run: function () {
    return 'walking';
  },
};

function Cat(name, isMale, color, age, weight) {
  this.name = name;
  this.isMale = isMale;
  this.color = color;
  this.age = age;
  this.weight = weight;
  this.say = function () {
    return 'meow';
  };
}

const catJira = new Cat(
  'Jirobasic',
  true,
  'bandicoon',
  3,
  6
);

function Customer(firstName, lastName, isMale, age) {
  this.name = firstName;
  this.sname = lastName;
  this.isMale = isMale;
  this.age = age;
  this.getFullName = function () {
    return (
      (this.isMale ? 'mr. ' : 'ms. ') +
      this.name +
      ' ' +
      this.sname
    );
  };
}

const backEndProgrammer = new Customer(
  'Andrey',
  'Pupkin',
  true,
  24
);
const frontEndProgrammer = new Customer(
  'Tetiana',
  'Vasutina',
  false,
  22
);
console.log(backEndProgrammer.getFullName());
console.log(frontEndProgrammer.getFullName());

function Country(name, population, area) {
  this.name = name;
  this.population = population;
  this.area = area;
  this.getDensity = function () {
    return this.population / this.area;
  };
  this.getOutputDensityString = function () {
    return (
      this.name +
      ' has ' +
      this.getDensity() +
      ' person/km2'
    );
  };
}

const usa = new Country('USA', 331449281, 9833520);
const germany = new Country('Germany', 83190556, 357022);
const ukraine = new Country('Ukraine', 41362393, 603628);
console.log(usa.getOutputDensityString());
console.log(germany.getOutputDensityString());
console.log(ukraine.getOutputDensityString());

function Vehicle(name, maxSpeed) {
  this.name = name;
  this.maxSpeed = maxSpeed;
  this.speed = 0;
  this.accelerate = function (value) {
    if (isNaN(value) || value < 0) {
      return false;
    }
    this.speed += value;
    if (this.speed > this.maxSpeed)
      this.speed = this.maxSpeed;
    return this.getSpeedometerInfo();
  };
  this.deaccelerate = function (value) {
    if (isNaN(value) || value < 0) {
      return false;
    }
    this.speed -= value;
    if (this.speed < 0) this.speed = 0;
    return this.getSpeedometerInfo();
  };
  this.stop = function () {
    this.speed = 0;
    return this.getSpeedometerInfo();
  };
  this.getSpeedometerInfo = function () {
    return this.name + ' have speed ' + this.speed;
  };
}
const car = new Vehicle('bmw', 120);
console.log(car.accelerate(50));
console.log(car.accelerate(50));
console.log(car.accelerate(50));
console.log(car.deaccelerate(70));
console.log(car.deaccelerate(70));

function CeffeeMachine(brand, maxVolume) {
  this.brand = brand;
  this.maxVolume = maxVolume;
  this.volume = 0;
  this.isOn = false;
  this.reportMessageLog = '';
  this.turnOn = function () {
    this.isOn = true;
    this.addMessageToLog(this.brand + ' is working now');
  };
  this.addWater = function (value) {
    if (isNaN(value) || value < 0) {
      this.addMessageToLog(
        'You trying add unrecognized or negative amount of water!'
      );
      return false;
    }
    this.addMessageToLog(
      `Trying to add ${value} water!`
    );
    this.volume += value;
    if (this.volume > this.maxVolume){
      this.addMessageToLog(
        `WARNING: Overflow. Max capacity of a tank is ${this.maxVolume} water!`
      );
      this.volume = this.maxVolume;
    }
    this.waterStatusReport();
  };
  this.makeCoffee = function (value) {
    if (isNaN(value) || value < 0) {
      this.addMessageToLog(
        'You trying add unrecognized or negative amount of water!'
      );
      return false;
    }
    if (!this.isOn) {
      this.addMessageToLog(
        'Machine is off. turn if on, please!'
      );
      return false;
    }
    if (this.volume < value) {
      this.addMessageToLog(
        'Not enought water for selected cup! Add water, please!'
      );
      return false;
    }
    this.addMessageToLog(
      'Making a coffe!'
    );
    this.volume -= value;
    if (this.volume < 0) this.volume = 0;
    this.waterStatusReport();
  };
  this.waterStatusReport = function () {
    this.addMessageToLog(this.volume + ' water left in tank');
    if (this.volume === 0)
      this.addMessageToLog(
        'WARNING: not enough water. add it please!'
      );
  };
  this.getReport = function () {
    const message = this.reportMessageLog;
    this.reportMessageLog = '';
    return message;
  };
  this.addMessageToLog = function (message) {
    this.reportMessageLog +=
      (this.reportMessageLog === '' ? '' : '\n') + message;
  };
}

const zanussi = new CeffeeMachine('Zanussi', 220);
zanussi.makeCoffee(50);
console.log(zanussi.getReport());
zanussi.turnOn();
console.log(zanussi.getReport());
zanussi.makeCoffee(50);
zanussi.addWater(-80);
zanussi.addWater(80);
zanussi.addWater(80);
zanussi.addWater(80);
zanussi.addWater('asdasd');
console.log(zanussi.getReport());
zanussi.makeCoffee(50);
console.log(zanussi.getReport());
zanussi.makeCoffee(50);
console.log(zanussi.getReport());
zanussi.makeCoffee(50);
zanussi.makeCoffee(50);
zanussi.makeCoffee(50);
console.log(zanussi.getReport());
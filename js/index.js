'use strict';

/*
Инкапсуляция
Наследование
ПОлиморфизм
 */

class Squirrel {
  constructor(name, color) {
    this.name = name;
    this.color = color;
  }
  get name() {
    return this._name;
  }
  set name(name) {
    this._name = name;
  }
  get color() {
    return this._color;
  }
  set color(color) {
    this._color = color;
  }
  jump() {
    return `${this.name} is jumping`;
  }
}

class FlyingSquirrel extends Squirrel {
  constructor(name, color, maxFlyDistance) {
    super(name, color);
    this.maxFlyDistance = maxFlyDistance;
  }
  get maxFlyDistance() {
    return this._maxFlyDistance;
  }
  set maxFlyDistance(distance) {
    this._maxFlyDistance = distance;
  }
  fly(distance) {
    if (distance > this.maxFlyDistance) throw new RangeError('This poor squirrel can\'t fly so far!');
    return `${this.name} is flying for ${distance} meters`;
  }
}

class PooshkinSquirrel extends FlyingSquirrel {
  constructor(name, color, maxFlyDistance, songs) {
    super(name, color, maxFlyDistance);
    this.songs = songs;
  }
  dance() {
    return `${this.name} is dancing`;
  }
  sing() {
    return this.songs.join(',');
  }
}

const sq1 = new Squirrel('sq1', 'red');
console.log(sq1.jump());
const sq2 = new FlyingSquirrel('sq2', 'brown', 25);
console.log(sq2.jump());
console.log(sq2.fly(14));
const sq3 = new PooshkinSquirrel('sq3', 'yellow', 30, ['lalala', 'dududud', 'nanana']);
console.log(sq3.jump());
console.log(sq3.fly(13));
console.log(sq3.sing());


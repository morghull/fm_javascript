'use strict';

/*
Инкапсуляция
Наследование
Полиморфизм
 */

class Figure {
  constructor(name) {
    this.name = name;
  }
  gerArea() { }
}

class Triangular extends Figure {
  constructor(a, b, angle) {
    super('Triangular');
    this.a = a;
    this.b = b;
    this.angle = angle;
  }
  gerArea() {
    return this.a * this.b * Math.sin(this.angle * (180 / Math.PI));
  }
}

class Circle extends Figure {
  constructor(r) {
    super('Circle');
    this.r = r;
  }
  gerArea() {
    return this.r * this.r * Math.PI;
  }
}

const t = new Triangular(3, 4, 45);
const c = new Circle(10);

function gerAreaFigure(figure) {
  return figure.gerArea();
}
function LadderPrototype() {
  this.up = function () {
    this.value ++;
    return this;
  };
  this.down = function () {
    this.value --;
    if (this.value <= 0) this.value = 0;
    return this;
  };
  this.showLevel = function () {
    return this.value;
  };
}
function Ladder() {
  this.value = 0;
  if (!new.target) return new Ladder();
}
Ladder.prototype = new LadderPrototype();

const ld = new Ladder();
console.log(ld.showLevel());
ld.up().up().up().up().up().down();
console.log(ld.showLevel());

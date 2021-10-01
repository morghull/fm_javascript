let count = 0;
const loop = function () {
  while (true) {
    count++;
    if (count % 2 === 1) continue;
    if (count > 10) break;
    console.log(count);
  }
};
loop();
console.log('end loop');

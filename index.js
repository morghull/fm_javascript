const t1 = 1;
const t2 = 2;

const obj1 = {
  test: 1,
};
const obj2 = {
  test: 2,
};

const link = obj1; //coping by link

console.log(obj1===link); //ture

link.prop2 = 44;
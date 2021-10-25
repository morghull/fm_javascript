'use strict';

// destructurisation

const user = {
  privatInfo: {
    id: 123,
    name: 'Elon',
    sname: 'Mask',
    bday: {
      day: 28,
      month: 6,
      year: 1971,
    },
  },
  contactInfo: {
    phone: '123-33-33',
    adress: {
      town: 'ZP',
      stree: 'Sobornii',
      house: 211,
    },
    mail: 'elom@gmail.com',
  },
  profession: 'director',
};

const {
  profession: frofUser,
  privatInfo: {
    name,
    sname,
    bday: { day },
  },
  contactInfo: {
    mail,
    adress: { house },
  },
} = user;

console.log(mail, house);

const getFUllName = ({ privatInfo: { name, sname } }) => {
  return `${name} ${sname}`;
};

const { profession, ...restObject } = user;

const nums = [1, 2, 3, 4, 5];
const [one, ...rest] = nums;

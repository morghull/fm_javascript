const tryToGetValidKey = function () {
  let count = 0;
  for (let i; i < MAX_COUNT_TRY; i++) {
    console.log(i);
    const promisKey = prompt('enter a key please');
    if(promisKey==SECRET_KEY){
      console.log('it\'s correct');
      break;
    }
  }
};

tryToGetValidKey();

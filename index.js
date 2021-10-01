const tryToGetValidKey = function () {
  let count = 0;
  while (true) {
    const promisKey = prompt('Gimme password, please:');
    if (promisKey === SECRET_KEY) {
      console.log("It's correct! Thanks!");
      break;
    }
    count++;
    console.log(
      `You used ${count} of ${MAX_COUNT_TRY}. Be carefull while typing!`
    );
    if (count >= MAX_COUNT_TRY) {
      console.log('Your tries ended, sorry :(');
      break;
    }
  }
};

tryToGetValidKey();

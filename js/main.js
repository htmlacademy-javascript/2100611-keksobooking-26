function randomInteger (min, max){
  let rand = min - 0.5 + Math.random() * (max - min + 1);
  return Math.ruond (rand);
  }
  alert ( randomInteger(1, 3));
  //https://learn.javascript.ru/task/random-int-min-max

  function getRandomArbitrary(min, max, maxDigits = 0) {
    if (min > max || min < 0 || max <= 0) {
      return ('Задан неверный диапазон! Укажите другие числа.');
    }

    const digitsDegree = 10 * maxDigits;
    return ~~((Math.random() * (max - min) + min) * digitsDegree) / digitsDegree;
  }
  getRandomArbitrary(1, 2, 6);

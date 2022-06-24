function randomInteger (min, max) {
  let rand = min - 0.5 + Math.random() * (max - min + 1);
  return Math.round (rand);
}
alert(randomInteger(1, 3));
function getRandomArbitrary (min, max, maxDigits = 0) {
  if (min > max || min < 0 || max <= 0) {
    throw new Error('Задан неверный диапазон! Укажите другие числа.');
  }
  let digitsDegree = 10 * maxDigits;
  return ~~((Math.random() * (max - min) + min) * digitsDegree) / digitsDegree;
}
getRandomArbitrary(1, 2, 6);

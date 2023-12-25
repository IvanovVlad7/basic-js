const { NotImplementedError } = require('../extensions/index.js');

function deleteDigit(n) {
  const digits = n.toString().split('').map(Number);
  
  // Инициализируем переменную для хранения максимального числа
  let maxNum = 0;

  // Перебираем каждую цифру числа и удаляем ее для получения нового числа
  for (let i = 0; i < digits.length; i++) {
    const newNum = parseInt(digits.filter((_, index) => index !== i).join(''));
    if (newNum > maxNum) {
      maxNum = newNum;
    }
  }

  return maxNum;
}

module.exports = {
  deleteDigit
};
//Функция проверки длинны строки
const getStringLength = (stringLength, maxLength) =>
  stringLength.length <= maxLength;

getStringLength('проверяемая строка', 20);
getStringLength('проверяемая строка', 18);
getStringLength('проверяемая строка', 10);

//Проверка Палиндрома
function isPalindrome(str) {
  str = str.toLowerCase().replace(/\s/g,'');
  return str === str.split('').reverse().join('');
}

isPalindrome('Лёша   на полке клопа      нашёл ');

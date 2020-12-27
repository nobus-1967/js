/* Задаем по отдельности строковые константы для букв, цифр и символов - и _ */
const ABC = "AaBbCcDdEeFfGgHhIiJiKkLlMmNnJjPpQqRrSsTtUuVvWwXxYyZz";
const NUMBERS = "0123456789";
const SIGNS = "-_";
/* Объединяем константы в две более крупные - буквы+цифры и буквы+цифры+знаки */
const LETTERS = ABC + NUMBERS;
const SYMBOLS = ABC + NUMBERS + SIGNS;
/* Пароль вначале пустой, его будущая длина - 8 символов */
let password = "";
let passwordSymbols = 8;
/* Первый символ пароля - всегда буква */
password += ABC[Math.floor(Math.random() * ABC.length)];
/* Следующие 6 символом могут быть любыми (буква, цифра, знак) */
while (password.length < 6) {
  password += SYMBOLS[Math.floor(Math.random() * SYMBOLS.length)];
}
/* Последний символ не может быть знаком - или _ */
password += LETTERS[Math.floor(Math.random() * LETTERS.length)];
/* Функция для кнопки генерации пароля */
function alertPassword() {
  console.log("Ваш пароль: " + password);
}

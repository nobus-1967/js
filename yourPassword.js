let abc = "abcdefghijklmnopqrstuvwxyz0123456789";
let password = "";
let passwordLetters = 8;
while (password.length < passwordLetters) {
  password += abc[Math.floor(Math.random() * abc.length)];
}
console.log("Ваш пароль: " + password);

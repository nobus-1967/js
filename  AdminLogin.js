let login = prompt('Ваш логин?', '');
if (login === 'admin') {
  let password = prompt('Введите пароль:', '');
  if (password === 'qwerty12345') {
    alert('Здравствуйте!');
  } else if (password === '' || password === null) {
    alert('Отменено');
  } else {
    alert('Неверный пароль!');
  }
} else if (login === '' || login === null) {
  alert('Отменено');
} else {
  alert('Нет такого пользователя!');
}
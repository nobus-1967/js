//Простой таймер с использованием метода setInterval

function logTimer(end) { 
  let current = 1;

  let intervalId = setInterval(function () {
    console.log(current);
    if (current === end) {
      clearInterval(intervalId);
    }
    current++;
  }, 1000);
}

logTimer(60);

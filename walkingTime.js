/*
Техническое задание
Мяу! Длительность прогулки зависит от нескольких условий.
Если идёт дождь, гулять я не хожу. В этом случае длительность прогулки равняется 0.
А вот если дождя нет, всё зависит от температуры на улице:
Во-первых, если температура от 10°C (включительно) до 15°C (не включая это значение), я гуляю 30 минут.
Во-вторых, если температура от 15°C (включительно) до 25°C (не включая значение), я гуляю 40 минут.
В-третьих, при температуре от 25°C (включительно) до 35°C (включительно), я гуляю 20 минут.
В остальных случаях я никуда не выхожу: либо очень холодно, либо очень жарко.
Результат программы – время прогулки. Его необходимо записать в переменную minutes.
*/

let temperature = 25;
let isRaining = false;
let minutes = 0;

if (isRaining) {
  minutes = 0;
  console.log('Идет дождь! Время прогулки: ' + minutes);
} else {
  if (temperature >= 10 && temperature < 15) {
    minutes = 30;
    console.log('Хорошая погода! Время прогулки: ' + minutes);
  }

  if (temperature >= 15 && temperature < 25) {
    minutes = 40;
    console.log('Хорошая погода! Время прогулки: ' + minutes);
  }

  if (temperature >= 25 && temperature <= 35) {
    minutes = 20;
    console.log('Хорошая погода! Время прогулки: ' + minutes);
  }

  // нет обработки этих случаев:
  if (temperature < 10 || temperature > 35) {
    minutes = 0;
    console.log('Сижу дома, гуляю ' + minutes + ' минут');
    // По ТЗ: "В остальных случаях я никуда не выхожу"
  }
}

// Улучшенная версия

if (isRaining) {
  minutes = 0;
  console.log('Идет дождь! Время прогулки: ' + minutes);
} else {
  if (temperature >= 10 && temperature < 15) {
    minutes = 30;
  } else if (temperature >= 15 && temperature < 25) {
    minutes = 40;
  } else if (temperature >= 25 && temperature <= 35) {
    minutes = 20;
  } else {
    minutes = 0; // очень холодно или очень жарко
  }
  console.log(minutes)
  // Один вывод для всех "не дождливых" случаев
  if (minutes > 0) {
    console.log('Хорошая погода! Время прогулки: ' + minutes);
  } else {
    console.log('Сегодня не гуляем: слишком холодно или жарко');
  }
}
// ещё один вариант

if (isRaining) {
  console.log('Идет дождь! Время прогулки: 0');
} else if (temperature >= 10 && temperature < 15) {
  minutes = 30;
  console.log('Хорошая погода! Время прогулки: ' + minutes);
} else if (temperature >= 15 && temperature < 25) {
  minutes = 40;
  console.log('Хорошая погода! Время прогулки: ' + minutes);
} else if (temperature >= 25 && temperature <= 35) {
  minutes = 20;
  console.log('Хорошая погода! Время прогулки: ' + minutes);
} else {
  console.log('Сегодня не гуляем: слишком холодно или жарко');
}
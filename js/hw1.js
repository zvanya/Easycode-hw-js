// Задание 1. Строки
let string = 'some test string';

// 1. Получить первую и последнюю буквы строки
console.log(string[0]);
console.log(string[string.length-1]);

// 2. Сделать первую и последнюю буквы в верхнем регистре
console.log(string[0].toUpperCase());
console.log(string[string.length-1].toUpperCase());

// 3. Найти положение слова ‘string’ в строке
console.log(string.indexOf('string') + 1); //номер символа по счету, с которого начинается слово string
console.log(string.indexOf('string')); //номер индекса, с которого начинается слово string

// 4. Найти положение второго пробела (“вручную” ничего не считать)
//Поиск номера символа второго пробела по счету
console.log(string.substr(string.indexOf(' ') + 1).indexOf(' ') + string.indexOf(' ') + 2); //решение в общем случае
console.log(string.lastIndexOf(' ') + 1); //решение для нашей строки
//Поиск индекса второго пробела
console.log(string.substr(string.indexOf(' ') + 1).indexOf(' ') + string.indexOf(' ') + 1); //решение в общем случае
console.log(string.lastIndexOf(' ')); //решение для нашей строки

// 5. Получить строку с 5-го символа длиной 4 буквы
console.log(string.substr(4, 4)); //с 5го символа
console.log(string.substr(5, 4)); //с 5го индекса

// 6. Получить строку с 5-го по 9-й символы
console.log(string.substring(4, 8)); //с 5го по 9й символ
console.log(string.substring(5, 9)); //с 5го по 9й индекс

// 7. Получить новую строку из исходной путем удаления последних 6-и символов
//    (то есть исходная строка без последних 6и символов)
let newString = string.slice(0, -6);
console.log(newString);

// 8. Из двух переменных a=20 и b=16 получить переменную string, в которой будет содержаться текст “2016”
let a = 20;
let b = 16;
console.log(`${a}${b}`);

// Задание 2. Числа

console.log("\n");

// 1. Получить число pi из Math и округлить его до 2-х знаков после точки
console.log(parseFloat((Math.PI).toFixed(2)));
console.log(Math.round(Math.PI * 100) / 100);

// 2. Используя Math, найти максимальное и минимальное числа из представленного ряда 15, 11, 16, 12, 51, 12, 13, 51
console.log(Math.max(15, 11, 16, 12, 51, 12, 13, 51));
console.log(Math.min(15, 11, 16, 12, 51, 12, 13, 51));

// 3. Работа с Math.random:
//     a. Получить случайное число и округлить его до двух цифр после запятой
//     b. Получить случайное целое число от 0 до X. X - любое произвольное число.
console.log(parseFloat(Math.random().toFixed(2)));
let min = 0;
let max = 100;
console.log(Math.floor(Math.random() * (max - min) + min));

// 4. Проверить результат вычисления 0.6 + 0.7 - как привести к нормальному виду (1.3)?
console.log(parseFloat((0.6 + 0.7).toFixed(1)));

// 5. Получить число из строки '100$'
console.log(parseInt("100$"));

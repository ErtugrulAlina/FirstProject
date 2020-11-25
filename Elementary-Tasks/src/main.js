// 1.	Шахматная доска
// Вывести шахматную доску с заданными размерами высоты и ширины, по принципу:
// *  *  *  *  *  *
//   *  *  *  *  *  *
// *  *  *  *  *  *
//   *  *  *  *  *  *

// Входные параметры: длина, ширина, символ для отображения.
// Выход: строка с представлением шахматной доски

function drawDesk(width, height, symbol) {
  let column = "";

  for (let i = 0; i < height; i++) {
    let row = "";
    for (let j = 0; j < width; j++) {
      row += symbol + " ";
    }
    if (i % 2 != 0) {
      column += " " + row + "\n";
    } else {
      column += row + "\n";
    }
  }
  return column;
}
console.log(drawDesk(10, 5, "*"));

// 2.	Анализ конвертов
// Есть два конверта со сторонами (a,b) и (c,d). Требуется определить, можно ли один конверт вложить в другой. Программа должна обрабатывать ввод чисел с плавающей точкой.

// Входные параметры: объекты конверт1 и конверт2
// Выход: номер конверта, если вложение возможно, 0 – если вложение невозможно.

let letter1 = {
  number: 1,
  width: 3,
  height: 3,
};

let letter2 = {
  number: 2,
  width: 4.5,
  height: 4,
};

function compareLetter(firstLetter, secondLetter) {
  if (
    firstLetter.width > secondLetter.width &&
    firstLetter.height > secondLetter.height
  ) {
    console.log("1");
  } else if (
    secondLetter.width > firstLetter.width &&
    secondLetter.height > firstLetter.height
  ) {
    console.log("2");
  } else {
    console.log("0");
  }
}
compareLetter(letter1, letter2);

// 3.	Сортировка треугольников
// Вывести треугольники в порядке убывания их площади.

// Входные параметры: массив объектов треугольник
// Выход: упорядоченный массив имён треугольников

// Примечание:
// •	Расчёт площади треугольника должен производится по формуле Герона.
// •	Каждый треугольник определяется именами вершин и длинами его сторон.
// •	Приложение должно обрабатывать ввод чисел с плавающей точкой:
// {
// vertices: ‘ABC’,
// a: 10,
// b: 20,
// c: 22.36
// }

// 4.	Палиндром
// Проверить является ли число или его часть палиндромом. Например, число 1234437 не является палиндромом, но является палиндромом его часть 3443. Числа меньшие, чем 10 палиндромом не считать.

// Входные параметры: число
// Выход: извлечённый из числа палиндром либо 0, если извлечение не удалось.

function getPalindrom(number) {
  function iter(indexI, indexJ) {
    if (number[indexI] === number[indexJ]) {
      return iter(indexI - 1, indexJ + 1);
    }
    return number.slice(indexI + 1, indexJ);
  }
  for (let i = 0; i < number.length; i++) {
    if (number[i] == number[i + 1]) {
      return iter(i - 1, i + 2);
      break;
    }
  }
  return 0;
}

console.log(getPalindrom("1234437"));

// Реализуйте тело функции smallestDivisor, используя итеративный процесс. Эта функция должна находить наименьший делитель заданного числа.

// Доп. условия: число, передаваемое в функцию, больше нуля; делитель должен быть больше единицы, за исключением случая, когда аргументом является единица (наименьшим делителем которой является также единица).

// Например, наименьший делитель числа 15 это 3.

// const smallestDivisor = (num) => {
//     const iter = (counter, acc) =>{
//         if(counter === 1){
//             return 1
//         }
//         if (counter % acc === 0){
//             return acc;
//         }
//         return iter(counter,acc+1)
//     };
//     return iter(num,2);
//    };

//    console.log(smallestDivisor(1))

// 3.	Сортировка треугольников
// Вывести треугольники в порядке убывания их площади.

// Входные параметры: массив объектов треугольник
// Выход: упорядоченный массив имён треугольников

// Примечание:
// •	Расчёт площади треугольника должен производится по формуле Герона.
// •	Каждый треугольник определяется именами вершин и длинами его сторон.
// •	Приложение должно обрабатывать ввод чисел с плавающей точкой:
// {
// vertices: ‘ABC’,
// a: 10,
// b: 20,
// c: 22.36
// }

let compareArea = (array) => {
  let trianglesList = [];
  let trianglesSquareFirst = 0;
  let trianglesSquareSecond = 0;
  for (value of array) {
    let item = value.name;
    trianglesSquareSecond = value.square;
    if (trianglesSquareSecond >= trianglesSquareFirst) {
      trianglesList.unshift(item + ":" + value.square);
    } else {
      trianglesList.push(item + ":" + value.square);
    }
    trianglesSquareFirst = trianglesSquareSecond;
  }

  return trianglesList;
};
// console.log(array[0].square)
// let TrianglesList = [];
// for (value of array) {
//   let item = value.name;
//   TrianglesList[item] = value.square;
// }
// TrianglesList.sort((a, b) => b[1] - a[1]);
//   return TrianglesList;
// };
class Triangle {
  constructor(name, a, b, c) {
    this.name = name;
    this.a = a;
    this.b = b;
    this.c = c;
    this.square = this.getSquare();
  }
  getSquare() {
    return (
      Math.sqrt(
        4 * this.a ** 2 * this.b ** 2 -
          (this.a ** 2 + this.b ** 2 - this.c ** 2) ** 2
      ) / 4
    );
  }
}

let triangl1 = new Triangle("Triangl1", 10, 20, 22.36);
let triangl2 = new Triangle("Triangl2", 7, 3, 6);
let triangl3 = new Triangle("Triangl3", 20, 30, 40);

let TrianglesArray = [triangl1, triangl2, triangl3];
console.log(compareArea(TrianglesArray).join(", "));

// 6.	Числовая последовательность
// Вывести через запятую ряд длиной n, состоящий из натуральных чисел, квадрат которых не меньше заданного m.

// Входные параметры: длина и значение минимального квадрата
// Выход: строка с рядом чисел

function getNaturalNumbrsStr(n, m) {
  if (Number.isInteger(m) && m >= 0) {
    let i = 1;
    let strNaturalNumbrs = [];
    while (strNaturalNumbrs.length < n) {
      if (i ** 2 >= m) {
        strNaturalNumbrs.push(i);
      }
      i++;
    }
    return strNaturalNumbrs.join(", ");
  }
  return "квадрат не число или меньше нуля";
}

console.log(getNaturalNumbrsStr(3, "nbv"));

//   7.	Ряд Фибоначчи для диапазона
// Вывести все числа Фибоначчи, которые удовлетворяют переданному в функцию ограничению: находятся в указанном диапазоне, либо имеют указанную длину.

// Входные параметры: объект context с полями min и max, либо с полем length
// Выход: массив чисел

function getFib1(n) {
  let a = 0;
  let b = 1;
  let fibStr = [1];
  for (let i = 1; i < n; i++) {
    let c = a + b;
    fibStr.push(c);
    a = b;
    b = c;
  }
  return fibStr;
}
function getFib2(min, max) {
  let a = 0;
  let b = 1;
  let fibStr = [];
  while (b <= max) {
    let c = a + b;
    if (b >= min && b <= max) {
      fibStr.push(b);
    }
    a = b;
    b = c;
  }
  return fibStr;
}
function getFib(obj) {
  if (obj.length) {
    return getFib1(obj.length);
  }
  return getFib2(obj.min, obj.max);
}

let context = {
  min: 3,
  max: 100,
  length: 1,
};
console.log(getFib(context).join(", "));

// 5.	Счастливые билеты
// Есть 2 способа подсчёта счастливых билетов:
// 1. Простой — если на билете напечатано шестизначное число, и сумма первых трёх цифр равна сумме последних трёх, то этот билет считается счастливым.
// 2. Сложный — если сумма чётных цифр билета равна сумме нечётных цифр билета, то билет считается счастливым.
// Определить программно какой вариант подсчёта счастливых билетов даст их большее количество на заданном интервале.

// Входные параметры: объект context с полями min и max
// Выход: объект с информацией о победившем методе и количестве счастливых билетов для каждого способа подсчёта.

let createTickets = function (min, max) {
  let ticketsArray = [];
  for (let i = min; i <= max; i++) {
    if (i >= 100000) {
      ticketsArray.push(String(i));
    } else if (i >= 1 && i < 10) {
      ticketsArray.push("00000" + i);
    } else if (i >= 10 && i < 100) {
      ticketsArray.push("0000" + i);
    } else if (i >= 100 && i < 1000) {
      ticketsArray.push("000" + i);
    } else if (i >= 1000 && i < 10000) {
      ticketsArray.push("00" + i);
    } else if (i >= 10000 && i < 10000) {
      ticketsArray.push("0" + i);
    }
  }
  return ticketsArray;
};

// console.log(createTickets(112112, 112115))

const sumSimplLucky = (arrayTickets) => {
  let sumLuckyTickets = 0;
  for (let i = 0; i < arrayTickets.length; i++) {
    let a = arrayTickets[i];
    let b = arrayTickets[i][5];
    if (
      arrayTickets[i][0] + arrayTickets[i][1] + arrayTickets[i][2] ==
      arrayTickets[i][3] + arrayTickets[i][4] + arrayTickets[i][5]
    ) {
      ++sumLuckyTickets;
    }
  }
  return sumLuckyTickets;
};

// console.log(sumSimplLucky(createTickets(000001, 999999 )))

const sumComplLucky = (arrayTickets) => {
  let sumLuckyTickets = 0;
  for (let i = 0; i < arrayTickets.length; i++) {
    let sumEvenLuckyTickets = 0;
    let sumOddLuckyTickets = 0;
    for (let j = 0; j < 6; j++) {
      if (arrayTickets[i][j] % 2 == 0) {
        sumEvenLuckyTickets += Number(arrayTickets[i][j]);
      } else {
        sumOddLuckyTickets += Number(arrayTickets[i][j]);
      }
    }
    if (sumEvenLuckyTickets == sumOddLuckyTickets) {
      ++sumLuckyTickets;
    }
  }
  return sumLuckyTickets;
};

// console.log(sumComplLucky(createTickets(000001, 999999)))

const getBestWayLuckyTickets = (object) => {
  let sumSimplLuckyTickets = sumSimplLucky(
    createTickets(ticketInterval.min, ticketInterval.max)
  );
  let sumComplLuckyTickets = sumComplLucky(
    createTickets(ticketInterval.min, ticketInterval.max)
  );
  let simplResultWin = `Победил простой метод с результатом: ${sumSimplLuckyTickets}`;
  let complResultWin = `Победил сложный метод с результатом: ${sumComplLuckyTickets}`;
  let theSameResultLuckyTickets =
    "Одинаковый результат у обоих методов:" + sumSimplLuckyTickets;
  if (sumSimplLuckyTickets == sumComplLuckyTickets) {
    return theSameResultLuckyTickets;
  } else if (sumSimplLuckyTickets > sumComplLuckyTickets) {
    return simplResultWin;
  } else {
    return complResultWin;
  }
};

let ticketInterval = {
  min: 000001,
  max: 999999,
};
console.log(getBestWayLuckyTickets(ticketInterval));

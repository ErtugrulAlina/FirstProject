// 1.	Шахматная доска
// Вывести шахматную доску с заданными размерами высоты и ширины, по принципу:
// *  *  *  *  *  *
//   *  *  *  *  *  *  
// *  *  *  *  *  *
//   *  *  *  *  *  *

// Входные параметры: длина, ширина, символ для отображения.
// Выход: строка с представлением шахматной доски

function desk(width, height, symbol){
    let column=""
    
    for(let i=0; i<height; i++){        
        let row= "";
        for(let i=0; i<width; i++){
        row+=(symbol+" ");
        }
        if (i%2!=0){
        column+=" "+row+"\n";
    }else{column+=row+"\n";}
    }
    return column
}
console.log(desk(10,5,"*"))

// 2.	Анализ конвертов
// Есть два конверта со сторонами (a,b) и (c,d). Требуется определить, можно ли один конверт вложить в другой. Программа должна обрабатывать ввод чисел с плавающей точкой. 

// Входные параметры: объекты конверт1 и конверт2 
// Выход: номер конверта, если вложение возможно, 0 – если вложение невозможно.

let letter1 = {
    number:1,
    width:5,
    height:5
};

let letter2 = {
    number:2,
    width:4.5,
    height:5
}

if(letter1.width>letter2.width && letter1.height>letter2.height){
    alert(letter1.number)
}else if(letter2.width>letter1.width && letter2.height>letter1.height){
    alert(letter2.number)
}else {
    alert("0")
};

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

function palindrom(numberIsString){
   let isPalindrom=""
    for(let i=0; i<numberIsString.length; i++){
        if(numberIsString[i]==numberIsString.split('').reverse().join('')[i]){
            isPalindrom+=+numberIsString[i]
        }
    }
    return isPalindrom
};

console.log(palindrom("1234437"));

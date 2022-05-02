'use strict'

console.log(getMathResult(10, 5));

// Место для первой задачи
function sayHello(name) {
    return "Привет, " + name;
}

// Место для второй задачи
function returnNeighboringNumbers(number) {
    return [number - 1, number, number + 1];
}

// Место для третьей задачи
function getMathResult(outputNumber, repeat) {
    let number = outputNumber;
    let result = '' + number;
    if(repeat <= 0 || typeof(repeat) == typeof("str") )
        return result;
    for( let i = 1; i < repeat; i++ ){
        number += outputNumber;
        result += "---" + number;
    }
    return result;
}

// function getMathResult(num, times) {
//     if (typeof(times) !== 'number' || times <= 0) {
//         return num;
//     }

//     let str = '';

//     for (let i = 1; i <= times; i++) {
//         if (i === times) {
//             str += `${num * i}`;
//             // Тут без черточек в конце
//         } else {
//             str += `${num * i}---`;
//             // Это тоже самое, что и
//             // str = str + num * i + "---"
//         }
//     }

//     return str;
// }
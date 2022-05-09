/*
Задача:
У вас есть список учеников, которые хотят поиграть в игру:
const students = ['Peter', 'Andrew', 'Ann', 'Mark', 'Josh', 'Sandra', 
'Cris', 'Bernard', 'Takesi', 'Sam'];
Но команд может быть только 3 по 3 человека. 
Напишите функцию sortStudentsByGroups, которая принимает в себя массив строк.

1. Внутри она сначала сортирует имена по алфавиту. 
2. Затем распределяет учеников по 3 человека в 3 группы по алфавитному порядку. 
3. Эти группы должны быть массивами. 
5. Как итог, функция возвращает новый массив с тремя командами и строкой с оставшиемся именами, как 4й элемент.

Пример:
sortStudentsByGroups(students)  =>
[
  [ 'Andrew', 'Ann', 'Bernard' ],
  [ 'Cris', 'Josh', 'Mark' ],
  [ 'Peter', 'Sam', 'Sandra' ],
  'Оставшиеся студенты: Takesi'
]
Если убрать одно студента из списка, то результат будет:
[
  [ 'Andrew', 'Ann', 'Bernard' ],
  [ 'Cris', 'Josh', 'Mark' ],
  [ 'Peter', 'Sam', 'Sandra' ],
  'Оставшиеся студенты: -'
]
А если добавить одного, то:
[
  [ 'Andrew', 'Ann', 'Bernard' ],
  [ 'Cris', 'Josh', 'Mark' ],
  [ 'Peter', 'Sam', 'Sandra' ],
  'Оставшиеся студенты: Takesi, Somebody'
]
То есть, меняется содержимое строки. Все оставшиеся ученики попадают туда.

Задача интересная, немного заковыристая, 
но все необходимое для неё мы уже проходили. 
Просто распишите логику действий строка за строкой.
*/


"use strict";

const students = ['Peter', 'Andrew', 'Ann', 'Mark', 'Josh', 'Sandra', 
'Cris', 'Bernard', 'Takesi' , 'Sam'];

let sortStudentsByGroups = (arr) => {
    let result = [[]];
    arr.sort();
    let numOfGroups = 3,
        numOfStudentsInGroup = 3;
        result[numOfGroups] = `Оставшиеся студенты:`;
        result[numOfGroups] += (numOfGroups * numOfStudentsInGroup >= arr.length) ? ' -' : '';
    for (let i = 0; i < arr.length; i++) {
        if (i < numOfGroups * numOfStudentsInGroup) {
            result[Math.floor(i/numOfStudentsInGroup)] = 
            ( Array.isArray(result[Math.floor(i/numOfStudentsInGroup)]) ) 
            ? [...result[Math.floor(i/numOfStudentsInGroup)],arr[i]]
            : [arr[i]];
        } else {
            result[numOfGroups] += (( i == numOfGroups * numOfStudentsInGroup) ? ' ' : ', ') + arr[i];
        }
    }
    return result;
};

console.log(sortStudentsByGroups(students));
//sortStudentsByGroups(students);
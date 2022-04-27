/* Задание на урок:

1) Автоматизировать вопросы пользователю про фильмы при помощи цикла

2) Сделать так, чтобы пользователь не мог оставить ответ в виде пустой строки,
отменить ответ или ввести название фильма длинее, чем 50 символов. Если это происходит - 
возвращаем пользователя к вопросам опять

3) При помощи условий проверить  personalMovieDB.count, и если он меньше 10 - вывести сообщение
"Просмотрено довольно мало фильмов", если от 10 до 30 - "Вы классический зритель", а если больше - 
"Вы киноман". А если не подошло ни к одному варианту - "Произошла ошибка"

4) Потренироваться и переписать цикл еще двумя способами*/

'use strict';

// Код возьмите из предыдущего домашнего задания

const minimumOfSymbols = 3;
const VIEWER_STATUS = {
    no_Status:{count: {begin: 0, end: 9}, statusName: "без статуса"},
    classic: {count: {begin: 10, end: 30}, statusName: "классический зритель"},
    kinoman: {count: {begin: 31, end: "-"}, statusName: "киноман"}
};


let personalMovieDB = {
    count: '0',
    movies: [],
    actors: {},
    genres: {},
    privat: false
}



while (1) {
    let answer = prompt('Сколько фильмов вы уже посмотрели?', "0");
    if(answer.length == 0 ){
        alert("Введите число");
        continue;
    } else {
        personalMovieDB['count'] = answer;
        break;
    }

}

while (1) {
    let answer = prompt('Один из последних просмотренных фильмов?', "");
    if(answer.length == 0 ){
        alert("Введите текст");
        continue;
    } else if(answer.length < minimumOfSymbols){
        alert("Текст должен содержать не меньше 3х символов");
        continue;
    } else {
        personalMovieDB.movies.push({"name": answer});
        break;
    }
        
}

if( personalMovieDB['count'] <= VIEWER_STATUS.no_Status.count.end)
    alert("Просмотрено довольно мало фильмов");
else if (personalMovieDB['count'] <= VIEWER_STATUS.classic.count.end) {
    alert(`Вы ` + VIEWER_STATUS.classic.statusName);
} else if (personalMovieDB['count'] >= VIEWER_STATUS.kinoman.count.begin) {
    alert(`Вы ` + VIEWER_STATUS.kinoman.statusName);
}


console.log(personalMovieDB); 
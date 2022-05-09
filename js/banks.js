'use district';
/* 1) У нас уже есть рабочее приложение, состоящее из отдельных функций. Представьте, что
перед вами стоит задача переписать его так, чтобы все функции стали методами объекта personalMovieDB
Такое случается в реальных продуктах при смене технологий или подхода к архитектуре программы

2) Создать метод toggleVisibleMyDB, который при вызове будет проверять свойство privat. Если оно false - он
переключает его в true, если true - переключает в false. Протестировать вместе с showMyDB.

3) В методе writeYourGenres запретить пользователю нажать кнопку "отмена" или оставлять пустую строку. 
Если он это сделал - возвращать его к этому же вопросу. После того, как все жанры введены - 
при помощи метода forEach вывести в консоль сообщения в таком виде:
"Любимый жанр #(номер по порядку, начиная с 1) - это (название из массива)"*/


const family = ['Peter', 'Ann', 'Alex', 'Linda'];

function showFamily(arr) {
    let result = "";
    if (arr.length === 0) {
        result = "Семья пуста";
    } else {
        result += `Семья состоит из: `;
        arr.forEach(element => {
            result += `${element} `;
        });
    }
    return result;
}

const favoriteCities = ['liSBon', 'ROME', 'miLan', 'Dublin'];

function standardizeStrings(arr) {
    arr.forEach(element => console.log(element.toLowerCase()));
}



const someString = 'This is some strange string';

function reverse(str) {
    let result = "";
    if (typeof(str) !== 'string') {
        result = "Ошибка!";
    } else {
        for(let i = str.length - 1; i >= 0; i--) {
            result += str[i];
        }
    }
    return result;
}

const baseCurrencies = ['USD', 'EUR'];/*['UAH', 'RUB', 'CNY']*/
const additionalCurrencies = ['UAH', 'RUB', 'CNY'];

function availableCurr(arr, missingCurr) {
    let result = "";
    let beginArr = [...baseCurrencies, ...additionalCurrencies];

    let removeEverythingExcept = (_arr, beginArr) => {
        let _result = [...[], ...beginArr];
        


        return _result;
    };

    let remove = (_str, _arr) => {
        let _result = [...[], ..._arr];
        _result.forEach((value, index, data) => {
            if (value.toLowerCase() === _str.toLowerCase()) {
                _result.splice(index, 1);
            }
        });
        
        return _result;
    };

    let resultArr = [...[], ...remove(missingCurr, arr)];
    

    if (arr.length === 0) {
        result = 'Нет доступных валют';
    } else {
        result = 'Доступные валюты:\n';
        resultArr.forEach(element => {
            result += `${element}\n`;
        });
    }

    return result;
}

//console.log(reverse(someString));

console.log(availableCurr(['UAH', 'RUB', 'CNY'], 'CNY'));
//availableCurr(['UAH', 'RUB', 'CNY'], 'CNY');
'use district';

console.log(getTimeFromMinutes(150));
console.log(getTimeFromMinutes(84));
console.log(getTimeFromMinutes(-50));
console.log(getTimeFromMinutes(0));
console.log(getTimeFromMinutes('150'));

console.log("_____");

console.log(findMaxNumber(1, 5, 6.6, 11));
console.log(findMaxNumber(1, 5, '6', '10'));




// Место для первой задачи
function getTimeFromMinutes(inputMinutes) {
    let result = "";
    let hours = 0,
        minutes = 0;

    function setCorrectName(number, name){
        let result = "";
        let lastDigit = ("" + number);
        lastDigit = (number > 20) ? lastDigit[lastDigit.length-1]: lastDigit;

        if (lastDigit == 1) {
            result = (name == "m") ? "минута" : (name == "h") ? "час" : name;
        } else if(lastDigit >= 2 && lastDigit <= 4){
            result = (name == "m") ? "минуты" : (name == "h") ? "часа" : name;
        } else if (lastDigit >= 5 || lastDigit == 0){
            result = (name == "m") ? "минут" : (name == "h") ? "часов" : name;
        }
        return result;
    }

    if(inputMinutes % 1 !== 0 || inputMinutes < 0 || typeof(inputMinutes) === typeof("str")){
        result = "Ошибка, проверьте данные";
    } else{
        hours = Math.floor(inputMinutes / 60);
        minutes = inputMinutes % 60;
        result = `Это ${hours} ${setCorrectName(hours, 'h')} и ${minutes} ${setCorrectName(minutes, 'm')}`;
    }
    return result;
}

// Место для второй задачи
function findMaxNumber(num1, num2, num3, num4) {
    let result = 0;
    if( typeof(num1) !== 'number' || 
        typeof(num2) !== 'number' || 
        typeof(num3) !== 'number' || 
        typeof(num4) !== 'number')
        {result = 0;}
    else {
        result = Math.max(num1, num2 , num3, num4);
    }
    return result;
}
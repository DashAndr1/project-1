'use district';

// Место для первой задачи
function calculateVolumeAndArea(side) {
    let result = "";
    if(!Number.isInteger(side) || typeof(side) == typeof("string") || side < 0 )
        result = "При вычислении произошла ошибка";
    else
        result = `Объем куба: ${side * side * side}, площадь всей поверхности: ${side * side * 6}`;
    return result;
}

// Место для второй задачи
function getCoupeNumber(number) {
    let result = "";
    if(!Number.isInteger(number) || typeof(number) == typeof("string") || number < 0)
        result = "Ошибка. Проверьте правильность введенного номера места";
    else if (number = 0 || number > 36) {
        result = "Таких мест в вагоне не существует";
    } else{
        result = Math.ceil((number / 4));
    }
    return result;
}

console.log(calculateVolumeAndArea(5));
console.log(calculateVolumeAndArea(15));
console.log(calculateVolumeAndArea(15.5));
console.log(calculateVolumeAndArea('15'));
console.log(calculateVolumeAndArea(-15));

console.log(calculateVolumeAndArea(5));
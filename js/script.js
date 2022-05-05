'use district';

console.log(fib(4));
console.log(fib(7));
console.log(fib('7'));
console.log(fib(""));
console.log(fib(0));

function fib(numOfDigits) {
    let result = "0 1";
    const arr = [+result[0], +result[2]];
    
    if (numOfDigits <= 0 || typeof(numOfDigits) != "number" || numOfDigits % 1 !== 0) {
        result = "";
    }else if (numOfDigits == 1) {
        result = "0";
    }else if (numOfDigits == 2) {
        result = "0 1";
    }else {
        for (let i = 2; i < numOfDigits; i++) {
            arr[i] = arr[i - 2] + arr[i - 1];
            result += ` ${arr[i]}`;
        }
    }

    return result;
}
'use district';



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

console.log(showFamily(family));
standardizeStrings(favoriteCities);

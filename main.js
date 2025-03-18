let arr = [2, 5, 9, 15, 0, 4];

for (let num of arr) {
    if (num > 3 && num < 10) {
        console.log(num);
    }
}


let numbers = [2, -5, 9, -15, 0, 4, -3, 8];

let sumPositive = numbers.reduce((sum, num) => num > 0 ? sum + num : sum, 0);

console.log("Сумма положительных элементов:", sumPositive);

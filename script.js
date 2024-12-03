// Исходный массив
let originalArray = [2, 4, 9, 10, 45, 67, 8, 90];

// Новый массив для чётных чисел
let evenNumbers = [];

// Перебираем элементы исходного массива с помощью цикла for
for (let i = 0; i < originalArray.length; i++) {
    if (originalArray[i] % 2 === 0) {
        // Если число чётное, добавляем его в новый массив
        evenNumbers.push(originalArray[i]);
    }
}

// Выводим новый массив чётных чисел в консоль
console.log(evenNumbers);
console.log(originalArray)
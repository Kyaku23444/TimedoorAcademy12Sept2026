let numbers = [111, 11, 1, 111, 1111, 11, 11, 111, 1, 111];

function findNumber(numbers) {
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] === 1111) {
            return numbers[i];
        }
    }
}

let numLocation = findNumber(numbers);
console.log(`1111 is located at index ${numLocation}`);

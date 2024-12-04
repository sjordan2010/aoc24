const fs = require('fs/promises');

const testInput = `xmul(2,4)&mul[3,7]!^don't()_mul(5,5)+mul(32,64](mul(11,8)undo()?mul(8,5))?`;

/// ---------- PART 1 ---------- ///
// remove the mul() part of each item... return an array of 2 numbers
const numbersRegex = /mul\((\d+),(\d+)\)/;
const getNums = (arr) => arr.map((el) => [+el.match(numbersRegex)[1], +el.match(numbersRegex)[2]]);

async function readFilePartOne() {
    try {
        // get raw data from .txt file
        const data = await fs.readFile('input.txt', 'utf-8');

        // parse out all the mul(num, num) using regex. Numbers must be 1-3 digits long
        const onlyMuls = data.match(/mul\(\d{1,3},\d{1,3}\)/g);

        // return an array of each pair of numbers using regex and convert them to numbers
        const numbers = getNums(onlyMuls);

        // multiply each set and sum all products for the total
        return numbers.reduce((acc, curr) => {
            return acc + curr[0] * curr[1];
        }, 0);
    } catch (error) {
        console.error('Error reading file:', error);
    }
}

// readFilePartOne().then((answer) => console.log('answer: ', answer));

/// ---------- PART 2 ---------- ///
// async function readFilePartTwo() {
//     try {
//         let isCounting = true;
//         let solution = 0;

//         // get raw data from .txt file
//         const data = await fs.readFile('input.txt', 'utf-8');

//         // parse out all the mul(), do(), and don't() 's using regex. Numbers must be 1-3 digits long
//         const mulsDosAndDonts = data.match(/(mul\(\d{1,3},\d{1,3}\)|do\(\)|don't\(\))/g);

//         mulsDosAndDonts.forEach((el, i) => {
//             if (el === "don't()") {
//                 isCounting = false;
//                 return;
//             }
//             if (el === 'do()') {
//                 isCounting = true;
//             }
//             if (isCounting && el.startsWith('mul(')) {
//                 const numbers = [+el.match(numbersRegex)[1], +el.match(numbersRegex)[2]];
//                 solution += numbers[0] * numbers[1];
//             }
//         });
//         return solution;
//     } catch (error) {
//         console.error('Error reading file:', error);
//     }
// }
async function readFilePartTwo() {
    try {
        let isCounting = true;
        let solution = 0;

        // get raw data from .txt file
        const data = await fs.readFile('input.txt', 'utf-8');

        // parse out all the mul(), do(), and don't() 's using regex. Numbers must be 1-3 digits long
        const mulsDosAndDonts = data.match(/(mul\(\d{1,3},\d{1,3}\)|do\(\)|don't\(\))/g);

        mulsDosAndDonts.forEach((el, i) => {
            if (isCounting && el.startsWith('mul(')) {
                const [_, num1, num2] = el.match(numbersRegex);
                return (solution += +num1 * +num2);
            }
            isCounting = el === 'do()';
        });
        return solution;
    } catch (error) {
        console.error('Error reading file:', error);
    }
}

readFilePartTwo().then((answer) => console.log('answer: ', answer));

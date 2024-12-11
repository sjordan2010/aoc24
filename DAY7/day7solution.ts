const testInput = `190: 10 19
3267: 81 40 27
83: 17 5
156: 15 6
7290: 6 8 6 15
161011: 16 10 13
192: 17 8 14
21037: 9 7 18 13
292: 11 6 16 20`
    .split('\n')
    .map((el) => el.split(':'))
    .map((el) => getNumbers(el));

/// ---------- PART ONE ---------- ///
function getNumbers(arr: string[]) {
    const target = +arr[0];
    const numbers = arr[1].trim().split(' ').map(Number);

    return [target, ...numbers];
}

const solve = (arr: number[]): boolean => {
    const target = arr[0];
    const numbers = arr.slice(1);

    const combinations = generateAllOperatorCombinations(arr.length - 1, ['+', '*']);

    for (let i = 0; i < combinations.length; i++) {
        let result: number = numbers[0];

        for (let j = 1; j < numbers.length; j++) {
            let currentOperation = combinations[i][j];

            if (currentOperation === '+') {
                result += numbers[j];
            }
            if (currentOperation === '*') {
                result *= numbers[j];
            }
        }
        if (result === target) return true;
    }

    return false;
};

// console.log(testInput.filter(solve).reduce((acc, curr) => acc + curr[0], 0));

/// ---------- PART TWO ---------- ///
function generateAllOperatorCombinations(length: number, operators: string[]) {
    if (length <= 0) return [];

    function generate(currentLength) {
        /// base case
        if (currentLength === 1) {
            return operators.map((el) => [el]);
        }

        const prevCombinations = generate(currentLength - 1);

        // Create new combinations by adding '+' or '*' to previous combinations
        const newCombinations: any[] = [];
        prevCombinations.forEach((combination) => {
            operators.forEach((el) => newCombinations.push([...combination, el]));
        });

        return newCombinations;
    }

    return generate(length);
}

function concatenateNumbers(num1: number, num2: number) {
    return num1 * Math.pow(10, Math.floor(Math.log10(num2) + 1)) + num2;
}

const solvePartTwo = (arr: number[]): boolean => {
    const target = arr[0];
    const numbers = arr.slice(1);

    const combinations = generateAllOperatorCombinations(arr.length - 1, ['+', '*', '||']);

    for (let i = 0; i < combinations.length; i++) {
        let result: number = numbers[0];

        for (let j = 1; j < numbers.length; j++) {
            let currentOperation = combinations[i][j];

            if (currentOperation === '||') {
                result = concatenateNumbers(result, numbers[j]);
            }
            if (currentOperation === '+') {
                result += numbers[j];
            }
            if (currentOperation === '*') {
                result *= numbers[j];
            }
        }
        if (result === target) return true;
    }

    return false;
};

// console.log(testInput.filter(solvePartTwo).reduce((acc, curr) => acc + curr[0], 0));

import { easyTest, input } from './input';

const isLeft = (i: number) => i % 2 === 1;

/// ---------- PART ONE ---------- ///
function findDiff(arr: number[]): number {    
    const leftArr: number[] = [];
    const rightArr: number[] = [];

    arr.forEach((el: number, i) => (isLeft(i) ? leftArr.push(el) : rightArr.push(el)));

    leftArr.sort((a, b) => a - b);
    rightArr.sort((a, b) => a - b);

    return leftArr.reduce((acc, curr, index) => {
        const higherNumber = Math.max(curr, rightArr[index]);
        const lowerNumber = Math.min(curr, rightArr[index]);
        return acc + (higherNumber - lowerNumber);
    }, 0);
}
console.log(findDiff(input));

/// ---------- PART TWO ---------- ///
function findSimilarityScore(arr: number[]): number {
    const leftArrayValues: Object = {};
    const rightArrayValues: Object = {};

    arr.forEach((el: number, i: number) => {
        if (i % 2 === 1) {
            rightArrayValues[el] ??= 0;
            rightArrayValues[el] += 1;
        } else {
            leftArrayValues[el] ??= 0;
            leftArrayValues[el] += 1;
        }
    });

    return Object.keys(leftArrayValues).reduce((acc, curr) => {
        return acc + +curr * leftArrayValues[curr] * (rightArrayValues[curr] || 0);
    }, 0);
}
console.log(findSimilarityScore(input));

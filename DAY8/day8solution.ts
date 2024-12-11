const antennaMap = `............
........0...
.....0......
.......0....
....0.......
......A.....
............
............
........A...
.........A..
............
............`
    .split('\n')
    .map((el) => el.split(''));

// console.log(antennaMap);

// [ '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.' ],
// [ '.', '.', '.', '.', '.', '.', '.', '.', '0', '.', '.', '.' ],
// [ '.', '.', '.', '.', '.', '0', '.', '.', '.', '.', '.', '.' ],
// [ '.', '.', '.', '.', '.', '.', '.', '0', '.', '.', '.', '.' ],
// [ '.', '.', '.', '.', '0', '.', '.', '.', '.', '.', '.', '.' ],
// [ '.', '.', '.', '.', '.', '.', 'A', '.', '.', '.', '.', '.' ],
// [ '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.' ],
// [ '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.' ],
// [ '.', '.', '.', '.', '.', '.', '.', '.', 'A', '.', '.', '.' ],
// [ '.', '.', '.', '.', '.', '.', '.', '.', '.', 'A', '.', '.' ],
// [ '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.' ],
// [ '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.' ]
//// 0,11
// [1, 8]
// [2, 5]
//// 3,2
// [3, 7]
// [4, 4]

// subtract from [3, 7] , add to [2,  5]  ...  [-1, -2]  ...  [4, 9] & [1, 3]
// add to [1, 8] , subtract from [2,  5]  ...  [-1, 3]  ...  [0, 11] & [3, 3]

// [1, 5]   [1, 8] => [0, 3]
// [1, 5]   [2, 5] => [1, 0]

// add to higher column antenna
// subtract from lower column antenna

// delta = [+-1, +-3]

const maxRow = antennaMap.length - 1;
const maxCol = antennaMap[0].length - 1;

console.log(maxRow, maxCol);

function findAntinodes() {
    let partOne = new Set();
    let partTwo = new Set();

    // find all the chars
    // const chars = {};
    // for (let i = 0; i < antennaMap.length; i++) {
    //     for (let j = 0; j < antennaMap[i].length; j++) {
    //         const char = antennaMap[i][j];
    //         if (char !== '.') {
    //             if (!chars[char]) {
    //                 chars[char] = [];
    //             }
    //             chars[char].push([i, j]);
    //         }
    //     }
    // }
    const chars = antennaMap.reduce((acc, row, i) => {
        row.forEach((char, j) => {
            if (char !== '.') {
                acc[char] = acc[char] || [];
                acc[char].push([i, j]);
            }
        });
        return acc;
    }, {});

    // console.log(chars)

    Object.values(chars).forEach((el: any) => {
        for (let i = 0; i < el.length - 1; i++) {
            for (let j = i + 1; j < el.length; j++) {
                checkWithDelta(el[i], el[j], findDelta(el[i], el[j])).forEach((el) => partOne.add(el!.toString()));
            }
        }
    });
    Object.values(chars).forEach((el: any) => {
        for (let i = 0; i < el.length - 1; i++) {
            for (let j = i + 1; j < el.length; j++) {
                part2CheckWithDelta(el[i], el[j], findDelta(el[i], el[j])).forEach((el) => partTwo.add(el!.toString()));
            }
        }
    });

    console.log(partTwo)

    return [partOne.size, partTwo.size];
}
function findDelta(first: [number, number], second: [number, number]): [number, number] {
    return [first[0] - second[0], first[1] - second[1]];
}
function checkWithDelta(indexOne: [number, number], indexTwo: [number, number], delta: [number, number]) {
    const higher = indexOne[0] > indexTwo[0] ? indexOne : indexTwo;
    const lower = higher === indexOne ? indexTwo : indexOne;

    let nextHigher: [number, number] = [higher[0] - delta[0], higher[1] - delta[1]];
    let nextLower: [number, number] = [lower[0] + delta[0], lower[1] + delta[1]];

    const possibleOne = isInBounds(nextHigher) ? nextHigher : null;
    const possibleTwo = isInBounds(nextLower) ? nextLower : null;

    return [possibleOne, possibleTwo].filter(Boolean);
}
function isInBounds(location: [number, number]): boolean {
    const [row, col] = location;
    return row >= 0 && row <= maxRow && col >= 0 && col <= maxCol;
}

// console.log(findAntinodes());

function part2CheckWithDelta(indexOne: [number, number], indexTwo: [number, number], delta: [number, number]) {
    let antennas: [number, number][] = [];
    
    const higher = indexOne[0] > indexTwo[0] ? indexOne : indexTwo;
    const lower = higher === indexOne ? indexTwo : indexOne;
    
    let nextHigher: [number, number] = [higher[0] - delta[0], higher[1] - delta[1]];
    let nextLower: [number, number] = [lower[0] + delta[0], lower[1] + delta[1]];
    
    
    while (isInBounds(nextHigher) || isInBounds(nextLower)) {
        antennas = [...antennas, nextHigher, nextLower];

        console.log(antennas)

        
        nextHigher = [nextHigher[0] - delta[0], nextHigher[1] - delta[1]];
        nextLower = [nextLower[0] + delta[0], nextLower[1] + delta[1]];
    }
    return antennas.filter(isInBounds);
}

console.log(findAntinodes());


// XX....X....X
// .X.X....0...
// ..X.X0....X.
// ..XX...0....
// ....0....X..
// .X...XA....X
// ...X..X.....
// X....X.X....
// ..X.....A...
// ....X....A..
// .X........X.
// ...X......XX

// X X
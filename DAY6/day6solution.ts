const patrolMap = `....#.....
.........#
..........
..#.......
.......#..
..........
.#..^.....
........#.
#.........
......#...`
    .split('\n')
    .map((el) => el.split(''));

// console.log(patrolMap);

const testPlaces = [
    [0, 4],
    [1, 9],
    [7, 8],
    [6, 3],
];

// Array(10) [
//    [ '.', '.', '.', '.', '#', '.', '.', '.', '.', '.' ],
//    [ '.', '.', '.', '.', '.', '.', '.', '.', '.', '#' ],
//    [ '.', '.', '.', '.', '.', '.', '.', '.', '.', '.' ],
//    [ '.', '.', '#', '.', '.', '.', '.', '.', '.', '.' ],
//    [ '.', '.', '.', '.', '.', '.', '.', '#', '.', '.' ],
//    [ '.', '.', '.', '.', '.', '.', '.', '.', '.', '.' ],
//    [ '.', '#', '.', '.', '^', '.', '.', '.', '.', '.' ],
//    [ '.', '.', '.', '.', '.', '.', '.', '.', '#', '.' ],
//    [ '#', '.', '.', '.', '.', '.', '.', '.', '.', '.' ],
//    [ '.', '.', '.', '.', '.', '.', '#', '.', '.', '.' ]
//   ]

let directions = ['^', '>', 'v', '<'];

const moves: [number, number][] = [
    [-1, 0],
    [0, 1],
    [1, 0],
    [0, -1],
];
// const moves = {
//     '^': [-1, 0],
//     v: [1, 0],
//     '>': [0, 1],
//     '<': [0, -1],
// };

function findSolution() {
    let visited = new Set();
    let dirIndex: number = 0;

    let currentLocation = findGuard();
    // let nextLocation = combineIndex(currentLocation, moves[dirIndex]);
    let nextLocation;

    const maxRow = patrolMap.length - 1;
    const maxColumn = patrolMap[0].length - 1;

    function outOfBounds(currentRow: number, currentCol: number) {
        return currentRow < 0 || currentRow > maxRow || currentCol < 0 || currentCol > maxColumn;
    }
    function combineIndex(curr: [number, number], dir: [number, number]) {
        return [curr[0] + dir[0], curr[1] + dir[1]];
    }

    while (!outOfBounds(currentLocation[0], currentLocation[1])) {
        visited.add(currentLocation.toString());

        nextLocation = combineIndex(currentLocation, moves[dirIndex]);

        if (patrolMap[nextLocation[0]]?.[nextLocation[1]] === '#') {
            dirIndex = (dirIndex + 1) % directions.length;
            nextLocation = combineIndex(currentLocation, moves[dirIndex]);
        }

        currentLocation = nextLocation;
    }

    return visited.size;
}

// function moveGuard(guard: [number, number], visited: Set<unknown>) {
//     const [row, col] = guard;

//     let dirIndex: number = 0;

//     visited.add(guard.toString());

//     const char = patrolMap[row][col];

//     let currentDir = moves[char];

//     dirIndex = directions.indexOf(char);

//     let nextIndex: [number, number] = [row + currentDir[0], col + currentDir[1]];

//     while (!outOfBounds(nextIndex[0], nextIndex[1], patrolMap.length, patrolMap[0].length)) {
//         // console.log('here')
//         // return visited + 1;
//         // let nextPositionVisited = patrolMap[nextIndex[0]][nextIndex[1]] === 'X';
//         const nextChar = patrolMap[nextIndex[0]][nextIndex[1]];

//         if (nextChar === '#') {
//             console.log('nextChar')
//             dirIndex = (dirIndex + 1) % directions.length;
//             let directionsChar = directions[dirIndex];

//             currentDir = moves[directionsChar];

//             nextIndex = [row + currentDir[0], col + currentDir[1]];

//             // patrolMap[nextIndex[0]][nextIndex[1]] = directionsChar;
//             // patrolMap[guard[0]][guard[1]] = 'X';

//             return moveGuard(nextIndex, visited);
//             // return
//         }
//         else {
//             // patrolMap[guard[0]][guard[1]] = 'X';

//             patrolMap[nextIndex[0]][nextIndex[1]] = char;
//             return moveGuard(nextIndex, visited);
//         }
//     }
// }

// function checkLocation(row, col, visited: Set<unknown>) {
//     if (patrolMap[row][col] !== '#') {
//         visited.add([row, col].toString);
//     }
// }

const findGuard = (): [number, number] => {
    for (let row = 0; row < patrolMap.length; row++) {
        for (let col = 0; col < patrolMap[row].length; col++) {
            if (directions.join('').includes(patrolMap[row][col])) {
                return [row, col];
            }
        }
    }
    return [0, 0];
};

// const outOfBounds = (nextRow, nextCol, totalRows, totalCols) =>
//     nextRow > totalRows - 1 || nextRow < 0 || nextCol > totalCols - 1 || nextCol < 0;

// console.log(findGuard());

// // console.log(moveGuard(0, [6, 4], 0));
// // console.log(moveGuard(0, [73,41], 0));
console.log(findSolution());





import { testInput } from './input';

/// ---------- HELPERS ---------- ///
const changeType = (curr: number, next: number) => (next > curr ? 'increasing' : next < curr ? 'decreasing' : 'none');
const validChange = (curr: number, next: number) => Math.abs(curr - next) > 0 && Math.abs(curr - next) < 4;

/// ---------- PART ONE ---------- ///
const safeReport = (report: number[]): boolean => {
    // initialize change as undefined
    let change: 'increasing' | 'decreasing' | 'none' | undefined = undefined;

    // early break conditions
    const totalDifference = Math.abs(report[0] - report[report.length - 1]);
    if (totalDifference < report.length - 1 || totalDifference > (report.length - 1) * 3) return false;
    if (report.length < 3) return true;

    for (let i = 0; i < report.length - 1; i++) {
        const curr = report[i];
        const next = report[i + 1];

        // check if the difference is between 1 & 3
        if (!validChange(curr, next)) return false;

        // set the change type after checking diff between first 2 numbers
        if (change === undefined) {
            change = changeType(curr, next);
        } else {
            if (change !== changeType(curr, next)) return false;

            change = changeType(curr, next);
        }
    }

    return true;
};

// /// ---------- PART TWO ---------- ///
const dampenerSafeReport = (report: number[]): boolean => {
    if (safeReport(report)) {
        return true;
    }

    for (let i = 0; i < report.length; i++) {
        // just slice each index out of the array and check each time
        const modifiedReport = [...report.slice(0, i), ...report.slice(i + 1)];
        if (safeReport(modifiedReport)) {
            return true;
        }
    }

    return false;
};

function howManyAreSafe(input: string[], withDampener: boolean): number {
    let t0 = performance.now();

    let solution = 0;

    const split = input.filter(Boolean).map((report) => report.split(' '));

    for (let i = 0; i < split.length; i++) {
        if (withDampener) {
            if (dampenerSafeReport(split[i].map(Number))) {
                solution += 1;
            }
        } else {
            if (safeReport(split[i].map(Number))) {
                solution += 1;
            }
        }
    }

    console.log(performance.now() - t0);
    return solution;
}

console.log(howManyAreSafe(testInput, true));

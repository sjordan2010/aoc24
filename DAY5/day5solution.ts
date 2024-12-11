const input = `47|53
97|13
97|61
97|47
75|29
61|13
75|53
29|13
97|29
53|29
61|53
97|53
61|29
47|13
75|47
97|75
47|61
75|61
47|29
75|13
53|13`
    .split('\n')
    .map((el) => el.split('|').map(Number));

// console.log(input);

const updates = `75,47,61,53,29
97,61,53,29,13
75,29,13
75,97,47,61,53
61,13,29
97,13,75,29,47`
    .split('\n')
    .map((el) => el.split(',').map(Number));

// console.log(updates);

/// ---------- PART ONE ---------- ///

const sortedPages = (page) =>
    input.every(
        ([a, b]) =>
            // page.indexOf(x) === -1 checks to see if that number exists in the current set of rules
            // if the number does not exist in the [a,b] pair, the return will be -1, and don't need to worry about that "rule"
            page.indexOf(a) === -1 ||
            page.indexOf(b) === -1 ||
            // indexOf(a) < indexOf(b) makes sure that the index of a from the [a,b] pair is lower than the index of b (thus sorted correctly)
            page.indexOf(a) < page.indexOf(b)
    );

// console.log(
//     updates
//         .filter(sortedPages)
//         .map((el) => el[Math.floor(el.length / 2)])
//         .reduce((a, b) => a + b)
// );

/// ---------- PART TWO ---------- ///

/// find the input arrays that fail the rules... sort that array based on the rules... return sum the middle index of each

const incorrectOnes = updates.filter((el) => !sortedPages(el));

console.log(incorrectOnes);

const part2 = incorrectOnes.map((page) => {
    let sorted = false;
    while (!sorted) {
        sorted = true;
        for (const [l, r] of input) {
            const a = page.indexOf(l);
            const b = page.indexOf(r);
            if (a !== -1 && b !== -1 && b < a) {
                sorted = false;
                [page[a], page[b]] = [page[b], page[a]];
            }
        }
    }
    return page;
});

console.log(part2.map((el) => el[Math.floor(el.length / 2)]).reduce((a, b) => a + b));

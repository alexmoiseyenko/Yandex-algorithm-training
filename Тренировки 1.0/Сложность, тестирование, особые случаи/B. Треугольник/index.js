const fs = require('fs');

fs.readFile("input.txt", "utf8", (err, data) => {
    const arr = data.trim().split('\n').map(Number);

    const [a, b, c] = arr;

    let isTriangle = a + b > c && a + c > b && b + c > a;

    const res = isTriangle ? 'YES' : 'NO';

    fs.writeFile("output.txt", res, () => {});
});

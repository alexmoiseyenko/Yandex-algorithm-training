const fs = require('fs');

fs.readFile("input.txt", "utf8", (err, data) => {
    const arr = data.split('\n');

    const d = Number(arr[0]);
    const [x, y] = arr[1].split(' ').map(Number);

    let res;
    if (x >= 0 && y >= 0 && x + y <= d) {
        res = 0;
    } else {
        const aDist = Math.sqrt(Math.pow(x, 2) + Math.pow(y, 2));
        const bDist = Math.sqrt(Math.pow(d - x, 2) + Math.pow(y, 2));
        const cDist = Math.sqrt(Math.pow(x, 2) + Math.pow(d - y, 2));

        if (aDist <= bDist && aDist <= cDist) {
            res = 1;
        } else if (bDist <= aDist && bDist <= cDist) {
            res = 2;
        } else {
            res = 3;
        }
    }

    fs.writeFile("output.txt", res.toString(), () => {});
});

const fs = require('fs');

fs.readFile("input.txt", "utf8", (err, data) => {
    const arr = data.split('\n');

    const N = Number(arr[0]);
    const coords = arr[1].split(' ').map(Number);

    const medium = Math.floor(N / 2);

    const res = coords[medium];

    fs.writeFile("output.txt", res.toString(), () => {});
});

const fs = require('fs');

fs.readFile("input.txt", "utf8", (err, data) => {
    const arr = data.trim().split(' ').map(Number);

    const firstDate = arr[0];
    const secondDate = arr[1];

    const canDetermine = firstDate === secondDate || firstDate > 12 || secondDate > 12;

    fs.writeFile("output.txt", canDetermine ? "1" : "0", () => {});
});

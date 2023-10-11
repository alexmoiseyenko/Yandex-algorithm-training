const fs = require('fs');

fs.readFile("input.txt", "utf8", (err, data) => {
    const arr = data.trim().split('\n');

    const [tRoom, tCond] = arr[0].split(' ').map(Number);
    const mode = arr[1];

    let res;

    switch (mode) {
        case 'freeze':
            if (tRoom < tCond) {
                res = tRoom;
            } else {
                res = tCond;
            }
            break;
        case 'heat':
            if (tRoom > tCond) {
                res = tRoom;
            } else {
                res = tCond;
            }
            break;
        case 'auto':
            res = tCond
            break;
        case 'fan':
            res = tRoom;
            break;
    }

    fs.writeFile("output.txt", res.toString(), () => {});
});

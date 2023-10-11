const fs = require('fs');

fs.readFile("input.txt", "utf8", (err, data) => {
    const arr = data.trim().split('\n').map(Number);

    const taskCompletionCode  = arr[0];
    const interactor = arr[1];
    const checker = arr[2];

    let res;

    switch (interactor) {
        case 0:
            if (taskCompletionCode === 0) {
                res = checker;
            } else {
                res = 3;
            }
            break;
        case 1:
            res = checker;
            break;
        case 4:
            if (taskCompletionCode === 0) {
                res = 4;
            } else {
                res = 3;
            }
            break;
        case 6:
            res = 0;
            break;
        case 7:
            res = 1;
            break;
        default:
            res = interactor;
    }

    fs.writeFile("output.txt", res.toString(), () => {});
});

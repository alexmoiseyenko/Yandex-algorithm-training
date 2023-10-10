const fs = require('fs');

fs.readFile("input.txt", "utf8", (err, data) => {
    const arr = data.trim().split(' ').map(Number);

    const numberOfAllStations = arr[0];
    const startStationNum = arr[1];
    const endStationNum = arr[2];

    const clockwiseStationsNum = Math.abs(endStationNum - startStationNum) - 1;
    const counterclockwiseStationsNum = startStationNum > endStationNum ? 
        numberOfAllStations - startStationNum + endStationNum - 1 :
        startStationNum - 1 + numberOfAllStations - endStationNum;

    const res = Math.min(clockwiseStationsNum, counterclockwiseStationsNum);

    fs.writeFile("output.txt", res.toString(), () => {});
});

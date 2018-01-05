let fs = require('fs');
let csvFile = fs.readFileSync('data.csv',{encoding: 'ascii'});
let parser = require('csv-parse/lib/sync');
let csvData = parser(csvFile);

let colors = {};

csvData.map(line => {
    if (!Object.keys(colors).find(val => {
        return val === line[0];
    })){
        colors[line[0]] = {};
    }

    if (!Object.keys(colors[line[0]]).find(val => {
        return val === line[2];
    })){
        let weight = isNaN(line[2]) ? line[2] : 'W' + line[2];
        colors[line[0]][weight] = {
            textClass: line[4], 
            colorClass: line[5],
            hex: line[6]
        };
    }
});

Object.keys(colors).forEach(color => {
    colors[color].textClass = colors[color]['W1'].textClass;
    colors[color].colorClass = colors[color]['W1'].colorClass;
    colors[color].hex = colors[color]['W1'].hex;
});

fs.writeFile("data.json",JSON.stringify(colors),err => {
    if(err){
        console.log(err);
    }
    else {
        console.log('looks like that may have worked');
    }
});

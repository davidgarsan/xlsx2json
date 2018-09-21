#!/usr/bin/env node

const path = require('path');
const _ = require('lodash');
const XLSX = require('xlsx-style');
const fs = require('fs');
const help = require('./help');
const utils = require('./utils');
let conf;

if (process.argv.length == 3 && process.argv.indexOf('-h') != -1) {
  return help.print();
}

conf = utils.getParams();
const absPath = path.resolve(conf.filePath);
let workbook;
let sheet;
const strings = {};

workbook = XLSX.readFile(absPath);
sheet = workbook.Sheets[workbook.SheetNames[0]];

for (let z in sheet) {
  if(z[0] !== '!' && z[0] !== 'A' && z.substr(1) !== '1') {
    _.set(strings, sheet[z[0] + 1].v + '.' + sheet['A' + z.substr(1)].v, sheet[z].v);
  }
}

for (let z in strings) {
  fs.writeFile(z + '.json', JSON.stringify(strings[z], 2, 2), 'utf8');
}

conf.quiet || utils.report();

module.exports = {
  strings
};

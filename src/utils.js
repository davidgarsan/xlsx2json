const fs = require('fs');
const path = require('path');
const chalk = require('chalk');
const log = console.log;

module.exports = {
  list: null,

  conf: null,

  getParams: function () {
    const filePath = process.argv[2];
    let quiet = false;

    if (filePath === undefined || !filePath.startsWith('https://docs.google.com/spreadsheets')) {
      throw new Error('Se debe pasar como primer parámetro la ruta a una hoja de cálculo de Google Drive.');
    }

    if (process.argv.indexOf('-q') != -1) {
      quiet = true;
    }

    this.conf = {
      filePath,
      quiet
    };

    return this.conf;
  },

  mkDirIfNot: function (filePath) {
    const dirname = path.dirname(filePath);
    if (fs.existsSync(dirname)) {
      return true;
    }
    this.mkDirIfNot(dirname);
    fs.mkdirSync(dirname);
  },

  report: function () {
    log(chalk`{bold JSON generado correctamente}`);
  }
};



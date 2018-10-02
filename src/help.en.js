const chalk = require('chalk');
const figlet = require('figlet');
const log = console.log;

module.exports = {
  print: function () {
    log(
      chalk.hex('#66cc10')(
        figlet.textSync('i18n-XLSX2JSON', { horizontalLayout: 'fitted'})
      )
    );

    log(chalk.bold('i18n-xlsx2json:'));

    log(`  This utility parses XLSX (Excel) documents with a specific format, extracting the keys and values from
multi-language texts and generates from these data JSON files for use in applications with i18n support.
  
  You will create as many JSON files as there are language columns defined in the incoming XLSX document.\n`);

    log(chalk.bold('Rules:'));

    log(chalk`  In order to generate these multi-language files, the XLSX spreadsheet must keep an specific format:
  {blue
  ╔═══╦════════════════╦════════════════╦═══════════╗
  ║   ║       A        ║       B        ║     C     ║
  ╠═══╬════════════════╬════════════════╬═══════════╣
  ║ 1 ║                ║ es             ║ en        ║
  ║ 2 ║ hi             ║ Hola           ║ Hello     ║
  ║ 3 ║ bye            ║ Adios          ║ Bye       ║
  ║ 4 ║ login.user     ║ Nombre usuario ║ User Name ║
  ║ 5 ║ login.password ║ Contraseña     ║ Password  ║
  ╚═══╩════════════════╩════════════════╩═══════════╝}
  
  - Only the first sheep will be parsed.
  - The data mus start in the coordinates origin (A1).
  - The first column (A) will define the keys of the JSON to generate, being able to have has many levels as needed.
  - The first row (1) will define the languages to translate, becoming each one a different JSON file.
  
  The previous table will generate the following JSON files:
 
  {italic.yellow es.json}                        {italic.yellow en.json}
  {blue
  \{                              \{                          
   "hi": "Hola",                   "hi": "Hello",           
   "bye": "Adiós",                 "bye": "Bye",            
   "login": \{                      "login": \{               
     "user": "Nombre Usuario",      "user": "User Name",    
     "password": "Contraseña"       "password": "Password"  
    \}                              \}                        
  \}                              \}  }
`);

    log(chalk.bold('Usage:'));

    log(chalk`  {italic i18n-xlsx2json -h}               Shows this help.
  {italic i18n-xlsx2json <path>}           Generates JSON files based in the spreadsheet path passed as parameter.
  `);

    log(chalk.bold('Parameters:'));

    log(chalk`  {italic path}                       Path to the spreadsheet file.`);

    log(chalk.bold.hex('#d13a82')('\nDone with \u2665 by davidgarsan\n'));
  }
};

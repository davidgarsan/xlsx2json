const chalk = require('chalk');
const figlet = require('figlet');
const log = console.log;

module.exports = {
  print: function () {
    log(
      chalk.hex('#66cc10')(
        figlet.textSync('Xlsx2JSON', { horizontalLayout: 'fitted'})
      )
    );

    log(chalk.bold('Xlsx2JSON:'));

    log(`  Esta utilidad parsea documentos XLSX (Excel) con un formato determinado, extrayendo las claves y valores de
  textos multiidioma y genera a partir de estos datos archivos JSON para su uso en aplicaciones con soporte i18n.
  
  Se generarán tantos archivos JSON como columnas de idiomas de hayan definido en el documento XLSX de entrada.\n`);

    log(chalk.bold('Convenciones:'));

    log(chalk`  Para generar estos archivos multiidioma, la tabla XLSX deberá cumplir con un determinado formato:
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
  
  - Se parseará solo la primera hoja del documento.
  - La tabla de datos deberá tener su origen en el origen de coordenadoas (A1).
  - La primera columna (A) definirá las claves del documento JSON a generar, pudiendo ser de varios niveles
    separados por puntos.
  - La primera fila (1) definirá los distintos idiomas y cada uno generará un archivo JSON diferente.
  
  La tabla anterior generará los siguientes JSON:
 
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

    log(chalk.bold('Uso:'));

    log(chalk`  {italic xlsx2json -h}               Imprime este mensaje.
  {italic xlsx2json <path>}           Genera unos archivos JSON a partir del archivo XLSX en el path.
  `);

    log(chalk.bold('Parámetros:'));

    log(chalk`  {italic path}                       Ruta al archivo XLSX.`);

    log(chalk.bold.hex('#d13a82')('\nHecho con \u2665 por davidgarsan\n'));
  }
};
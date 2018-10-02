# i18n-spreadsheet

Esta utilidad parsea documentos XLSX (Excel) con un formato determinado, extrayendo las claves y valores de
textos multi-idioma y genera a partir de estos datos archivos JSON para su uso en aplicaciones con soporte i18n.

Se crearán tantos archivos JSON como columnas de idiomas se hayan definido en el documento XLSX de entrada.

## Convenciones

Para generar estos archivos multi-idioma, la tabla XLSX deberá cumplir con un determinado formato:

|                | es             | en        |
|----------------|----------------|-----------|
| hi             | Hola           | Hello     |
| bye            | Adiós          | Bye       |
| login.user     | Nombre Usuario | User Name |
| login.password | Contraseña     | Password  |

  - Se parseará solo la primera hoja del documento.
  - La tabla de datos deberá iniciarse en el origen de coordenadas (A1).
  - La primera columna (A) definirá las claves del documento JSON a generar, pudiendo ser de varios niveles
    separados por puntos.
  - La primera fila (1) definirá los distintos idiomas, dando lugar cada uno a un archivo JSON diferente.
  
  La tabla anterior generará los siguientes JSON:
  
  ```
  // es.json
  {
    "hi": "Hola",
    "bye": "Adiós",
    "login": {
      "user": "Nombre Usuario",
      "password": "Contraseña"
    }
  }
  
  // en.json
  {
    "hi": "Hello",
    "bye": "Bye",
    "login": {
      "user": "User Name",
      "password": "Password"
    }
  }
  ```

## Instalación

1. Instalar el paquete i18n-spreadsheet globalmente:

  ```
  npm i -g i18n-spreadsheet
  ```
  
3. Una vez finalizada la instalación será posible ejecutarla desde cualquier directorio:

  ```
  i18n-spreadsheet -h   
  ```
 
## Uso

* **i18n-spreadsheet -h**                  Muestra la ayuda.
* **i18n-spreadsheet \<path>**  Genera unos archivos JSON a partir del archivo XLSX en el path.

### Parámetros

* **path**                  Ruta al archivo XLSX.

davidgarsan | 2017

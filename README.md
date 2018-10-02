# i18n-xlsx2json

This utility parses XLSX (Excel) documents with a specific format, extracting the keys and values from
multi-language texts and generates from these data JSON files for use in applications with i18n support.

You will create as many JSON files as there are language columns defined in the incoming XLSX document.

## Rules

In order to generate these multi-language files, the XLSX spreadsheet must keep an specific format:

|                | es             | en        |
|----------------|----------------|-----------|
| hi             | Hola           | Hello     |
| bye            | Adiós          | Bye       |
| login.user     | Nombre Usuario | User Name |
| login.password | Contraseña     | Password  |

  - Only the first sheet will be parsed.
  - The data mus start in the coordinates origin (A1).
  - The first column (A) will define the keys of the JSON to generate, being able to have has many levels as needed.
  - The first row (1) will define the languages to translate, becoming each one a different JSON file.
  
  The previous table will generate the following JSON files:
  
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

## Install

1. Install the i18n-xlsx2json package globally:

  ```
  npm i -g i18n-xlsx2json
  ```
  
3. Once the package is installed it will be possible use it from any directory:

  ```
  i18n-xlsx2json -h   
  ```
 
## Usage

* **i18n-xlsx2json -h**                  Shows this help.
* **i18n-xlsx2json \<path>**  Generates JSON files based in the spreadsheet path passed as parameter.

### Parameters

* **path**                  Path to the spreadsheet file.

davidgarsan | 2017

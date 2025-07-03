//  Lec1

 /***   
 * 1. Core Modules
 * Node.js provides built-in modules that can be used without installation. In this example, we use the fs (File System) module to perform file operations.
 * File System (fs) Module
 * The fs module allows interaction with the file system, enabling operations like creating, reading, and appending to files.
 * Example Usage:-
        - Creating and Writing to a File: The fs.writeFileSync method creates a file and writes data to it synchronously. If the file already exists, it overwrites the content.
        - Reading from a File: The fs.readFileSync method reads the file content and returns a Buffer. The toString() method converts the Buffer to a readable string.
        - Appending to a File: The fs.appendFileSync method appends data to an existing file without overwriting it.
*/ 
const fs = require("fs")
fs.writeFileSync("data4.txt" , "islam mohamed") // create file and add the first data 
 console.log(fs.readFileSync("data4.txt").toString()) // data is buffer we used tostring()  to turn the data from buffer to string 
fs.appendFileSync("data4.txt", " ,  mohamed saed  , zeezo ") // add data in the file
 console.log(fs.readFileSync("data4.txt").toString())

/////////////////////////////////////////////////
 /**
  * Custom Module Import
  * You can create and export custom modules in Node.js. In this example, a module named allData is imported, which presumably exports properties and functions.
  * Example Usag:-
        - Assume allData.js contains exported properties (fName, LName, age, city, country) and functions (fun1, fun2, fun3). The code imports and uses these exports.
  */
const x = require("./allData")
console.log(x.FN) //undefined
console.log(x.fName)
console.log(x.LName)
console.log(x.age)
console.log(x.city)
console.log(x.country)
console.log(x.fun1(4,7))
console.log(x.fun2(4,7))
console.log(x.fun3(5,9))

/***
 * Note: If x.FN returns undefined, ensure the property is correctly exported in allData.js or check for typos (e.g., FN vs. fName). 
*/


/**
 * 2. npm Modules
 * Node.js allows the use of third-party modules installed via npm. In this example, the validator module is used to validate various data types.
 * Validator Module
 * The validator module provides utility functions to validate strings, such as checking for valid emails, dates, or string equality.
 * Install the validator module using npm:==> npm install validator
 * Example Usage:-
        - Email Validation: The isEmail method checks if a string is a valid email address.
        - Date Validation: The isDate method checks if a string is a valid date (format must be recognizable).
        -String Equality: The equals method checks if two strings are identical.

 */


 const validator = require("validator")
 console.log(validator.isEmail("islam@gmail.com"))
 console.log(validator.isEmail("islam"))
 console.log(validator.isDate("22/5/2005"))
 console.log(validator.equals("Ahmed", "islam"))
 console.log(validator.equals("Ahmed", "Ahmed"))







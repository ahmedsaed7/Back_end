/**         Node.js Command-Line and JSON Handling Documentation
 * This document explains how to handle command-line arguments and JSON data in Node.js, based on the provided lecture code. It includes examples and additional information to help students understand the concepts of using process.argv, the yargs module for command-line parsing, and JSON handling with the fs module. The goal is to provide a comprehensive guide for beginners learning Node.js.
 * Table of Contents
 *      1-Command-Line Arguments with process.argv
 *      2-Using yargs for Command-Line Parsing
 *      3-JSON Data Handling
 *      4-Additional Examples
 *      5-Notes and Best Practices
 * 
 * 1. Command-Line Arguments with process.argv:-
 *      Node.js provides the process.argv array to access command-line arguments passed when running a script. The array contains:
 *          a-process.argv[0]: Path to the Node.js executable.
 *          b-process.argv[1]: Path to the script being executed.
 *          c-process.argv[2] and beyond: Arguments provided by the user.
 * Example:- (The following code checks a command-line argument to perform an action (e.g., "add" or "delete").)
*/

console.log(process.argv); // Outputs all command-line arguments
const command = process.argv[2];
console.log(command); // Outputs the first user-provided argument
if (command === "add") {
    console.log("You have added an item");
} else if (command === "delete") {
    console.log("You have deleted an item");
} else {
    console.error("Error: Invalid command");
}


/** 
 * How it Works:
 *  - Run the script with a command, e.g., node add.js add.
 *  - The script checks if the argument (process.argv[2]) is "add" or "delete" and logs the appropriate message.
 *  - If no valid command is provided, it logs an error.
 * Limitations:
 *  - process.argv is basic and lacks support for complex argument parsing (e.g., options, flags).
 *  - For more advanced command-line interfaces, use a library like yargs.
 *
 * 2. Using yargs for Command-Line Parsing:-
 * The yargs module simplifies command-line argument parsing by allowing you to define commands, options, and descriptions.
 * It provides a structured way to handle inputs and supports required/optional arguments with type validation.
 * Install yargs using npm ==> npm install yargs
 * 
 * Example 1: (Basic Command Definition)
 * Define a command (add) with a description and a handler function to execute when the command is used.
*/
const yargs = require("yargs");
yargs.command({
    command: "add",
    describe: "Add a new item",
    handler: () => {
        console.log("You have added an item");
    }
});
yargs.parse(); // Process the command-line arguments
/**
 * How to Run ==> Command: node add.js add
 * Output: You have added an item
 * 
 * Example 2: (Command with Options (Builder))
 * You can add options to a command using the builder property. Options can be required (demandOption: true) and have specific types (e.g., string, number).
 *
 **/

const yargs = require("yargs");
yargs.command({
    command: "add",
    describe: "Add a new item",
    builder: {
        FName: {
            describe: "First name for the item",
            demandOption: true, // Required argument
            type: "string" // Must be a string
        },
        LName: {
            describe: "Last name for the item",
            demandOption: false, // Optional argument
            type: "string"
        }
    },
    handler: (argv) => {
        console.log(`You have added an item: ${argv.FName} ${argv.LName || ''}`);
    }
});

yargs.command({
    command: "delete",
    describe: "Delete an item",
    builder: {
        Id: {
            describe: "ID of the item to delete",
            demandOption: true,
            type: "number" // Must be a number
        }
    },
    handler: (argv) => {
        console.log(`You have deleted an item with ID: ${argv.Id}`);
    }
});

yargs.parse();
/** 
 * How to Run ==> add command node add.js add --FName=Ahmed --LName=Mohamed
 * Output: You have added an item: Ahmed Mohamed
 * Delete command: node add.js delete --Id=123
 * Output: You have deleted an item with ID: 123
 * If a required option is missing (e.g., node add.js add), yargs will show an error.
 *  
 * Key Points:
 *  a- builder defines the options for a command (e.g., FName, LName, Id).
 *  b- demandOption: true makes an option mandatory.
 *  c- type enforces the data type of the argument.
 *  d- The handler function receives the parsed arguments in the argv object.
 * 
 * 3. JSON Data Handling:-
 * Node.js can handle JSON data using the built-in JSON object and the fs module for file operations.
 *  JSON is commonly used to store and exchange structured data.
 * Example: (Creating and Saving JSON Data)
 *  The code below demonstrates creating JavaScript objects, converting them to JSON, and saving them to files.
 * 
 **/
 
const fs = require("fs");

const person1 = {
    fname: "ahmed",
    LName: "mohamed"
};
const person2 = {
    fname: "ali",
    LName: "sammer"
};
const person3 = {
    fname: "saeed",
    LName: "Ragab",
    age: 23
};

// Convert objects to JSON strings
const person1Json = JSON.stringify(person1);
const person2Json = JSON.stringify(person2);

// Write JSON to files
fs.writeFileSync("data1.json", person1Json);
fs.writeFileSync("data2.json", person2Json);

// Read and log JSON data
console.log(fs.readFileSync("data1.json").toString()); // {"fname":"ahmed","LName":"mohamed"}

// Append another JSON object to data1.json
fs.appendFileSync("data1.json", JSON.stringify(person3));
/** 
 * Important Notes:
 *      1- JSON.stringify(obj) converts a JavaScript object to a JSON string.
 *      2- JSON.parse(json) converts a JSON string back to a JavaScript object.
 *      3- fs.writeFileSync creates or overwrites a file with the provided content.
 *      4- fs.appendFileSync adds content to the end of a file but does not ensure valid JSON structure.
 * 
 * Issue in the Code:
 * ==> Appending person3 to data1.json with fs.appendFileSync results in invalid JSON because it concatenates two JSON objects without proper formatting (e.g., {"fname":"ahmed","LName":"mohamed"}{"fname":"saeed","LName":"Ragab","age":23}). To store multiple objects, use an array or a proper JSON structure.
 * 
 * Improved Example (Fixing the JSON issue):
 * 
 * */

const fs = require("fs");

const people = [
    { fname: "ahmed", LName: "mohamed" },
    { fname: "ali", LName: "sammer" },
    { fname: "saeed", LName: "Ragab", age: 23 }
];

// Write the array as a JSON string
fs.writeFileSync("people.json", JSON.stringify(people, null, 2)); // Pretty-print with indentation

// Read and parse the JSON
const data = fs.readFileSync("people.json").toString();
console.log(JSON.parse(data)); // Outputs the array of objects

// Output (in people.json):
// [
//   {
//     "fname": "ahmed",
//     "LName": "mohamed"
//   },
//   {
//     "fname": "ali",
//     "LName": "sammer"
//   },
//   {
//     "fname": "saeed",
//     "LName": "Ragab",
//     "age": 23
//   }
// ]

/** 4.Additional Examples:
 * Example 1: Enhanced yargs Command with Multiple Options
*/
const yargs = require("yargs");

yargs.command({
    command: "create-user",
    describe: "Create a new user profile",
    builder: {
        username: {
            describe: "Username for the user",
            demandOption: true,
            type: "string"
        },
        age: {
            describe: "Age of the user",
            demandOption: false,
            type: "number"
        },
        email: {
            describe: "Email address of the user",
            demandOption: true,
            type: "string"
        }
    },
    handler: (argv) => {
        console.log(`User created: ${argv.username}, Age: ${argv.age || 'Not provided'}, Email: ${argv.email}`);
    }
});

yargs.parse();

/** 
 * Run: node app.js create-user --username=John --email=john@example.com --age=25Output: User created: John, Age: 25, Email: john@example.com
 * 
 * Example 2: Reading and Updating JSON Data
 * 
 * */

const fs = require("fs");

// Read existing JSON data
let people9 = [];
try {
    const data = fs.readFileSync("people9.json").toString();
    people9 = JSON.parse(data);
} catch (error) {
    console.log("No existing data, starting with empty array");
}

// Add a new person
const newPerson9 = { fname: "maryam", LName: "hassan", age: 30 };
people.push(newPerson9);

// Save updated data
fs.writeFileSync("people9.json", JSON.stringify(people9, null, 2));

console.log("Updated people:", people9 );

// Explanation:
/** 
 * Checks if people.json exists and reads its content.
 * Parses the JSON into an array and appends a new object.
 * Saves the updated array back to the file with proper formatting.
 * 
 * 5. Notes and Best Practices
 * 
 * ommand-Line Arguments:
 *      - Use process.argv for simple scripts with minimal arguments.
 *      - Use yargs for complex applications requiring structured commands and options.
 *      - Always validate user inputs to prevent errors.
 * 
 * JSON Handling:
 *      Store multiple objects in a JSON array to maintain valid JSON structure.
 *      Use JSON.stringify(obj, null, 2) for pretty-printed JSON with indentation.
 *      Handle file read/write errors using try-catch blocks to prevent crashes.
 * 
 * File Operations:
 *      Prefer asynchronous fs methods (e.g., fs.writeFile, fs.readFile) in production to avoid blocking the event loop.
 * 
 * Example: Replace fs.writeFileSync with fs.writeFile for better performance.
 * 
 * Error Handling:
 *      Check for invalid JSON when parsing with JSON.parse to avoid runtime errors.
 *      Provide clear error messages for invalid command-line inputs.
 * 
 * Learning Tips:
 *      Experiment with different yargs options (e.g., aliases, default values).
 *      Practice reading and writing JSON files to understand data persistence.
 *      Explore other Node.js core modules like path or http for more advanced projects.
 * 
 * 
 **/
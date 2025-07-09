# MongoDB Operations Documentation

This document provides a detailed explanation of MongoDB operations using the Node.js MongoDB driver. The code connects to a MongoDB database and demonstrates various CRUD (Create, Read, Update, Delete) operations on a `users` collection. Each operation is explained with its purpose, syntax, and example usage.

## Prerequisites

- **MongoDB**: Ensure MongoDB is installed and running locally on `mongodb://127.0.0.1:27017`.
- **Node.js**: Install Node.js to run the JavaScript code.
- **MongoDB Node.js Driver**: Install the MongoDB driver using `npm install mongodb`.

## Setup

The code establishes a connection to a MongoDB database named `proj-1` running on the local machine.

- **`mongodb`**: The MongoDB Node.js driver.
- **`MongoClient`**: The client used to connect to the MongoDB server.
- **`connectionUrl`**: The connection string for the MongoDB server (localhost, port 27017).
- **`databaseName`**: The name of the database (`proj-1`).

The connection is initiated using `MongoClient.connect`, with error handling and a callback to access the database.

## CRUD Operations

### 1. Create Operations

#### `insertOne`
Inserts a single document into the `users` collection.
- **Purpose**: Adds one document to the collection.
- **Parameters**:
  - Document object (e.g., `{name: 'Ahmed', age: 32}`).
  - Callback function to handle errors and return the inserted document's `_id`.
- **Output**: Logs the `_id` of the inserted document.

#### `insertMany`
Inserts multiple documents into the `users` collection.
- **Purpose**: Adds multiple documents in a single operation.
- **Parameters**:
  - Array of document objects.
  - Callback function to handle errors and return the number of inserted documents.
- **Output**: Logs the count of inserted documents.

### 2. Read Operations

#### `findOne`
Retrieves a single document matching the query.
- **Purpose**: Fetches one document by its `_id` or other query criteria.
- **Parameters**:
  - Query object (e.g., `{ _id: mongodb.ObjectId('...') }`).
  - Callback function to handle errors and return the document.
- **Output**: Logs the matching document or `null` if not found.

#### `find`
Retrieves multiple documents matching the query.
- **Purpose**: Retrieves all documents matching the query as an array.
- **Parameters**:
  - Query object (e.g., `{ age: 32 }`).
  - `.toArray()` converts the cursor to an array.
  - Callback function to handle errors and return the documents.
- **Output**: Logs an array of matching documents.

#### `find` with `count`
Counts the number of documents matching the query.
- **Purpose**: Returns the count of documents matching the query.
- **Parameters**:
  - Query object.
  - Callback function to handle errors and return the count.
- **Output**: Logs the number of matching documents.

#### `find` with `limit`
Limits the number of documents returned.
- **Purpose**: Restricts the number of documents returned by `find`.
- **Parameters**:
  - Query object.
  - `.limit(n)` specifies the maximum number of documents.
  - `.toArray()` converts the cursor to an array.
  - Callback function to handle errors and return the documents.
- **Output**: Logs up to 4 matching documents.

### 3. Update Operations

MongoDB provides several update operators:
- `$set`: Modifies field values.
- `$inc`: Increments numeric field values.
- `$mul`: Multiplies numeric field values.
- `$push`: Adds elements to an array.
- `$pop`: Removes elements from an array.
- `$pull`: Removes specific elements from an array.
- `$sort`: Sorts documents (used in aggregation).
- `$limit`: Limits documents (used in aggregation).
- `$upsert`: Inserts a document if no match is found.
- `$findAndModify`: Finds and updates/deletes a document atomically.

#### `updateOne`
Updates a single document matching the query.
- **Purpose**: Updates one document by its `_id` or other query.
- **Parameters**:
  - Query object to match the document.
  - Update object with operators (e.g., `$set`, `$inc`).
  - Returns a promise with the result (e.g., `modifiedCount`).
- **Output**: Logs the number of modified documents and the updated document.

#### `updateMany`
Updates multiple documents matching the query.
- **Purpose**: Updates all documents matching the query.
- **Parameters**:
  - Query object (e.g., `{}` matches all documents).
  - Update object with operators.
  - Returns a promise with the result (e.g., `modifiedCount`).
- **Output**: Logs the number of modified documents and all documents after the update.

### 4. Delete Operations

#### `deleteOne`
Deletes a single document matching the query.
- **Purpose**: Deletes one document by its `_id` or other query.
- **Parameters**:
  - Query object.
  - Returns a promise with the result (e.g., `deletedCount`).
- **Output**: Logs the number of deleted documents and verifies deletion.

#### `deleteMany`
Deletes multiple documents matching the query.
- **Purpose**: Deletes all documents matching the query.
- **Parameters**:
  - Query object.
  - Returns a promise with the result (e.g., `deletedCount`).
- **Output**: Logs the number of deleted documents.

#### Delete All Documents
Deletes all documents in the collection.
- **Purpose**: Removes all documents from the collection.
- **Parameters**:
  - Empty query object (`{}`) to match all documents.
  - Returns a promise with the result (e.g., `deletedCount`).
- **Output**: Logs the number of deleted documents.

## Notes

- **Error Handling**: Each operation includes error handling to ensure robust execution.
- **Promises vs Callbacks**: The code uses both callbacks (e.g., `insertOne`) and promises (e.g., `updateOne`, `deleteOne`) for asynchronous operations. Promises are more modern and allow chaining with `.then` and `.catch`.
- **ObjectId**: MongoDB uses `ObjectId` for unique document identifiers. Ensure valid `ObjectId` strings are used in queries.
- **Commented Code**: The provided code has commented-out operations for safety. Uncomment specific operations to test them.
- **Scalability**: For production, consider using `async/await` for cleaner promise handling and connection pooling for better performance.

## Usage

1. Save the code in a `.js` file (e.g., `mongodb_operations.js`).
2. Ensure MongoDB is running locally.
3. Install dependencies: `npm install mongodb`.
4. Uncomment the desired operation(s) to execute.
5. Run the script: `node mongodb_operations.js`.

This documentation and code provide a foundation for interacting with MongoDB using Node.js, suitable for learning or small-scale projects.
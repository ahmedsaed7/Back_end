/***
 * # MongoDB Operations Documentation

    This document provides a detailed explanation of MongoDB operations using the Node.js MongoDB driver. The code connects to a MongoDB database and demonstrates various CRUD (Create, Read, Update, Delete) operations on a `users` collection. Each operation is explained with its purpose, syntax, and example usage.

    ## Prerequisites

    - **MongoDB**: Ensure MongoDB is installed and running locally on `mongodb://127.0.0.1:27017`.
    - **Node.js**: Install Node.js to run the JavaScript code.
    - **MongoDB Node.js Driver**: Install the MongoDB driver using `npm install mongodb`.

    ## Setup

    The code establishes a connection to a MongoDB database named `proj-1` running on the local machine.

 */

    const mongodb = require('mongodb');
    const MongoClient = mongodb.MongoClient;
    const connectionUrl = 'mongodb://127.0.0.1:27017';
    const databaseName = 'proj-1';
    
    /*
     * Connects to the MongoDB server at localhost:27017 and selects the 'proj-1' database.
     * - mongodb: The MongoDB Node.js driver.
     * - MongoClient: The client used to connect to the MongoDB server.
     * - connectionUrl: The connection string for the MongoDB server.
     * - databaseName: The name of the database ('proj-1').
     */
    
    MongoClient.connect(connectionUrl, (error, res1) => {
        if (error) {
            return console.log('Unable to connect to database!');
        }
        console.log('All Perf');
        console.log('Connected to database!');
        const db = res1.db(databaseName);
    
        /*
         * Create Operations
         */
    
        // Insert a single document into the 'users' collection
        // db.collection('users').insertOne({
        //     name: 'Ahmed',
        //     age: 32
        // }, (error, data) => {
        //     if (error) {
        //         return console.log('Unable to insert user!');
        //     }
        //     console.log(data.insertedId);
        // });
    
        /*
         * Inserts multiple documents into the 'users' collection
         */
        // db.collection('users').insertMany([
        //     { name: 'islam', age: 20 },
        //     { name: 'adel', age: 30 },
        //     { name: 'reem', age: 24 },
        //     { name: 'tasneem', age: 24 },
        //     { name: 'zaki', age: 24 },
        //     { name: 'shika', age: 24 },
        //     { name: 'mahmoud', age: 24 },
        //     { name: 'esraa', age: 24 },
        //     { name: 'aya', age: 25 }
        // ], (error, data) => {
        //     if (error) {
        //         return console.log('Unable to insert user!');
        //     }
        //     console.log(data.insertedCount);
        // });
    
        /*
         * Read Operations
         */
    
        // Find a single document by _id
        // db.collection('users').findOne({ _id: mongodb.ObjectId('686e6e48147c7828a6bc384a') }, (error, data) => {
        //     if (error) {
        //         return console.log('Unable to fetch data!');
        //     }
        //     console.log(data);
        // });
    
        // Find multiple documents by age
        // db.collection('users').find({ age: 32 }).toArray((error, data) => {
        //     if (error) {
        //         return console.log('Unable to fetch data!');
        //     }
        //     console.log(data);
        // });
    
        // Count documents matching a query
        // db.collection('users').find({ age: 32 }).count((error, data) => {
        //     if (error) {
        //         return console.log('Unable to fetch data!');
        //     }
        //     console.log(data);
        // });
    
        // Limit the number of documents returned
        // db.collection('users').find({ age: 24 }).limit(4).toArray((error, data) => {
        //     if (error) {
        //         return console.log('Unable to fetch data!');
        //     }
        //     console.log(data);
        // });
    
        /*
         * Update Operations
         * Supported operators: $set, $inc, $mul, $push, $pop, $pull, $sort, $limit, $upsert, $findAndModify
         */
    
        // Update a single document
        // db.collection('users').updateOne({ _id: mongodb.ObjectId('686e6e48147c7828a6bc3850') }, {
        //     $set: { name: "abdelaziz" },
        //     $inc: { age: 4 }
        // })
        // .then((result) => {
        //     console.log('Modified count:', result.modifiedCount);
        //     return db.collection('users').findOne({ _id: mongodb.ObjectId('686e6e48147c7828a6bc3850') });
        // })
        // .then((updatedUser) => {
        //     console.log('Updated user:', updatedUser);
        // })
        // .catch((error) => {
        //     console.log(error);
        // });
    
        // Update multiple documents
        // db.collection('users').updateMany({}, {
        //     $inc: { age: 10 }
        // })
        // .then((result) => {
        //     console.log('Modified count:', result.modifiedCount);
        //     return db.collection('users').find({}).toArray();
        // })
        // .then((allUsers) => {
        //     console.log('All users after update:', allUsers);
        // })
        // .catch((error) => {
        //     console.log(error);
        // });
    
        /*
         * Delete Operations
         */
    
        // Delete a single document
        // db.collection('users').deleteOne({ _id: mongodb.ObjectId('686e6e48147c7828a6bc384c') })
        // .then((result) => {
        //     console.log('Deleted count:', result.deletedCount);
        //     console.log('Delete result:', result);
        //     return db.collection('users').findOne({ _id: mongodb.ObjectId('686e6e48147c7828a6bc384c') });
        // })
        // .then((deletedItem) => {
        //     if (deletedItem === null) {
        //         console.log('The user with _id = 686e6e48147c7828a6bc384c is deleted successfully');
        //     } else {
        //         console.log('The user with _id = 686e6e48147c7828a6bc384c was not deleted');
        //     }
        // })
        // .catch((error) => {
        //     console.log(error);
        // });
    
        // Delete multiple documents
        // db.collection('users').deleteMany({ age: 34 })
        // .then((data1) => {
        //     console.log(data1.deletedCount);
        // })
        // .catch((error) => {
        //     console.log(error);
        // });
    
        // Delete all documents
        db.collection('users').deleteMany({})
        .then((data1) => {
            console.log(data1.deletedCount);
        })
        .catch((error) => {
            console.log(error);
        });
    });
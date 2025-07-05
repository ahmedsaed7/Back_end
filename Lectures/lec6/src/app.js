/*** 
 * Node.js Express Web Server Documentation
 * This document provides a comprehensive guide to building a web server using Express, a popular Node.js framework for creating web applications and APIs. 
 * Based on the provided lecture code, this guide explains how to set up an Express server, define routes, serve static files, and handle HTTP requests.
 * It includes detailed explanations, additional examples, and best practices to help students learn Express and web development concepts effectively.
 * 
 * ##-Table of Contents:-
 *  1- Introduction to Express
 *  2- HTTP Methods Overview
 *  3- Setting Up an Express Server
 *  4- Defining Routes
 *  5- Serving Static Files
 *  6- Running the Server
 *  7- Additional Examples
 *  8- Notes and Best Practices
 * ************************************************************************************
 *
 *1. Introduction to Express:-
 * 
 *  Express is a minimal and flexible Node.js web application framework that simplifies the process of building web servers and APIs.
 *  It provides robust features for handling HTTP requests, defining routes, and serving static content.
 * 
 * ##-Key Concepts:
 *    
 *      - Routes: Define endpoints (e.g., /, /about) and specify how the server responds to client requests.
 *      - HTTP Methods: Common methods include GET (read), POST (create), PATCH (update), and DELETE (delete).
 *      - Port: The server listens on a specific port (e.g., 3000 or 5000) for incoming requests.
 *      - Static Files: Serve files like HTML, CSS, and images directly to clients.
 *
 *2. HTTP Methods Overview
 * The lecture code mentions the primary HTTP methods used in web applications:-
 *    - POST: Create new resources (e.g., submitting a form to add data).
 *    - GET: Retrieve resources (e.g., fetching a webpage or API data).
 *    - PATCH: Update existing resources partially.
 *    - DELETE: Remove resources.
 * These methods are used to define routes in Express, as shown in the examples below.
 * 
 *3. Setting Up an Express Server
 *      To create an Express server, you need to:
 *          1. Install Express.
 *          2. Initialize the Express application.
 *          3. Define a port for the server to listen on.
 * 
 * ### Installation
*   Create a project directory, initialize it, and install Express:
*       ```bash
*           mkdir express-app
*           cd express-app
*           npm init -y
*           npm install express
*       ```
*
*  ## Basic Setup (`app.js`)
**/

// const express = require("express");
// const app = express();
// const port = process.env.PORT || 3000;

// app.listen(port, () => {
//     console.log(`Example app listening on port ${port}`);
// });

/***
 * Explanation**:
 *  - `require("express")`: Imports the Express module.
 *  - `express()`: Creates an Express application instance.
 *  - `process.env.PORT || 3000`: Uses an environment variable for the port (useful for deployment) or defaults to 3000 locally.
 *  - `app.listen(port, callback)`: Starts the server and listens for requests on the specified port.
    **Note**: Port 3000 is commonly used for local development, but React applications often use 3000, so you may choose 5000 or another port to avoid conflicts.
**/

/**
 * ## 4. Defining Routes
 * Routes define how the server responds to client requests for specific endpoints. The lecture code includes several `GET` routes to demonstrate different response types.
 * ### Example Routes (`app.js`)
    * ```javascript
    * const express = require("express");
    * const app = express();
    * const port = process.env.PORT || 3000;
 * 
 */

const express = require("express");
const app = express();
const port = process.env.PORT || 3000;
// Home route
app.get("/", (req, res) => {
    res.send("Hello World!");
});

// About route
app.get("/about", (req, res) => {
    res.send("This is data in about Page");
});

// Service route
app.get("/service", (req, res) => {
    res.send("This is data in SERVICE PAGE");
});

// Team route with HTML
app.get("/team", (req, res) => {
    res.send("<h2>Islam Mohamed</h2><button>Send</button>");
});

// Data1 route with JSON
app.get("/data1", (req, res) => {
    res.send({
        name: "ahmed",
        age: 20,
        city: "Cairo"
    });
});

// Data2 route with JSON
app.get("/data2", (req, res) => {
    res.send({
        name: "Islam",
        age: 26,
        city: "Mansoura"
    });
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});


/***
 * **How it Works**:
    - `app.get(path, callback)`: Defines a route for GET requests to the specified path.
    - `req`: The request object, containing information about the client’s request (e.g., query parameters, headers).
    - `res`: The response object, used to send data back to the client.
    - `res.send()`: Sends a response (e.g., plain text, HTML, or JSON).
    - Example URLs:
    - `http://localhost:3000/` → "Hello World!"
    - `http://localhost:3000/team` → HTML with a heading and button.
    - `http://localhost:3000/data1` → JSON object `{ name: "ahmed", age: 20, city: "Cairo" }`.

    ---

    ## 5. Serving Static Files

    Express can serve static files (e.g., HTML, CSS, images) using `express.static`. The lecture code includes commented-out code for serving static files from a `public` directory.
 */


/**
 * 
 * **How it Works**:
- `path.join(__dirname, "../public")`: Creates an absolute path to the `public` directory.
  - `__dirname`: The directory of the current file (`app.js`).
  - `../public`: Navigates to the `public` directory one level up.
- `app.use(express.static(publicPath))`: Serves all files in the `public` directory.
- Accessing `http://localhost:3000/index.html` serves the `index.html` file.

---

## 6. Running the Server

1. **Setup**:
   - Ensure Node.js is installed.
   - Initialize a project: `npm init -y`.
   - Install Express: `npm install express`.
   - Create `app.js` with the code above.
   - Optionally, create a `public` directory with static files (e.g., `index.html`).

2. **Running the Server**:
   - Run: `node app.js`.
   - Open a browser and visit `http://localhost:3000` to see the responses.

3. **Using `nodemon`**:
   - `nodemon` automatically restarts the server when code changes are detected.
   - Install globally: `npm install -g nodemon`.
   - Run: `nodemon app.js`.

---

## 7. Additional Examples

### Example 1: Handling POST Requests

Add a `POST` route to handle form submissions or data creation.

```javascript
const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

// Middleware to parse JSON request bodies
app.use(express.json());

// POST route to create a user
app.post("/users", (req, res) => {
    const user = req.body;
    res.send({
        message: "User created successfully",
        user: user
    });
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
```

**How to Test**:
- Use a tool like Postman or `curl` to send a POST request:
  ```bash
  curl -X POST -H "Content-Type: application/json" -d '{"name":"Ali","age":25}' http://localhost:3000/users
  ```
- **Output**:
  ```json
  {
    "message": "User created successfully",
    "user": { "name": "Ali", "age": 25 }
  }
  ```

**Explanation**:
- `app.use(express.json())`: Parses incoming JSON request bodies.
- `req.body`: Contains the JSON data sent by the client.
- This simulates creating a user in a database.

### Example 2: Dynamic Routes with Parameters

Create routes that accept URL parameters for dynamic data retrieval.

```javascript
const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

// Dynamic route for user profiles
app.get("/users/:id", (req, res) => {
    const userId = req.params.id;
    res.send({
        id: userId,
        name: `User ${userId}`,
        city: "Cairo"
    });
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
```

**How it Works**:
- `:id` is a route parameter, accessible via `req.params.id`.
- Visit `http://localhost:3000/users/123` to get:
  ```json
  {
    "id": "123",
    "name": "User 123",
    "city": "Cairo"
  }
  ```

---

## 8. Notes and Best Practices

- **Port Management**:
  - Use `process.env.PORT` for compatibility with hosting platforms (e.g., Heroku, Vercel).
  - Avoid port conflicts (e.g., React uses 3000, so consider 5000 for Express).

- **Static Files**:
  - Organize static files in a `public` directory for clarity.
  - Use `express.static` for serving HTML, CSS, and JavaScript files.

- **Middleware**:
  - Use `express.json()` for parsing JSON request bodies (e.g., for POST requests).
  - Explore other middleware like `express.urlencoded` for form data or `morgan` for request logging.

- **Nodemon**:
  - Use `nodemon` during development to auto-restart the server on file changes.
  - Install locally (`npm install --save-dev nodemon`) for team projects to ensure consistency.

- **Error Handling**:
  - Add a global error-handling middleware for unhandled routes:
    ```javascript
    app.use((req, res) => {
        res.status(404).send("404: Page not found");
    });
    ```

- **Learning Tips**:
  - Experiment with different HTTP methods (POST, PATCH, DELETE) to build a full CRUD API.
  - Combine Express with a frontend (e.g., React) to create a full-stack application.
  - Explore Express middleware for authentication, logging, or CORS.

- **Security**:
  - Use the `helmet` middleware to secure HTTP headers: `npm install helmet`.
  - Sanitize user inputs to prevent injection attacks.
  - Deploy with HTTPS for secure communication.
 */
/**
    * # Node.js HTTP Requests with Weather APIs Documentation

        This document explains how to make HTTP requests in Node.js using the `request` module to interact with weather APIs. It covers fetching data, handling JSON responses, and implementing error handling. The examples are based on the provided lecture code, with additional explanations and examples to help students learn how to work with APIs in Node.js. This guide is designed to be beginner-friendly and useful for those looking to understand HTTP requests and API integration.

        ## Table of Contents
        1. [Introduction to HTTP Requests in Node.js](#1-introduction-to-http-requests-in-nodejs)
        2. [Using the `request` Module](#2-using-the-request-module)
        3. [Fetching Weather Data from APIs](#3-fetching-weather-data-from-apis)
        4. [Error Handling](#4-error-handling)
        5. [Running the Code](#5-running-the-code)
        6. [Additional Examples](#6-additional-examples)
        7. [Notes and Best Practices](#7-notes-and-best-practices)

        ---

        ## 1. Introduction to HTTP Requests in Node.js
  
        Node.js allows you to make HTTP requests to external APIs to fetch or send data.
        In this lecture, we use the `request` module to interact with weather APIs (WeatherAPI and Weatherstack) to retrieve current weather data for specific locations.
        The APIs return JSON data, which we parse and use to display information like location names and weather conditions.

        **Key Concepts**:

            - **HTTP Requests**: Used to communicate with APIs over the internet.
            - **JSON**: A common format for API responses, which can be parsed into JavaScript objects.
            - **Error Handling**: Essential for handling network issues or invalid API responses.

        ---

        ## 2. Using the `request` Module

            The `request` module is a third-party library for making HTTP requests in Node.js.
            It simplifies the process of sending requests and handling responses.

        ### Installation
            Install the `request` module using npm:
            ```bash
            npm install request
            ```
        ### Basic Usage

            The `request` module takes a configuration object (e.g., URL)
            and a callback function to handle the response.
            The callback receives three arguments:
                - `error`: Any error that occurred during the request (e.g., network failure).
                - `response`: The HTTP response object, including headers and status code.
                - `body`: The response data (e.g., JSON string or object).

        ---

        ## 3. Fetching Weather Data from APIs

        The lecture code demonstrates fetching weather data from two APIs:

            - **WeatherAPI** (`https://api.weatherapi.com`): Provides current weather data for a given location.
            - **Weatherstack** (`http://api.weatherstack.com`): Another weather API with similar functionality.

        ### Example 1: Basic Request with Manual JSON Parsing
            This example fetches weather data for China using WeatherAPI and manually parses the JSON response.

*/

        const request = require("request");

        const url = "https://api.weatherapi.com/v1/current.json?key=7f97e74ef23b418c97a155211230503&q=cairo";

        request({ url }, (error, response) => {
            console.log("**********************************EX1****************************************************");
            const data = JSON.parse(response.body); // Parse JSON string to object
            console.log(data.location.name); // Output: e.g., Beijing
            console.log(data.current.condition.text); // Output: e.g., Sunny
        });
        

/** 
        **How it Works**:

            - The `request` module sends a GET request to the WeatherAPI.
            - The response body is a JSON string, which is parsed into a JavaScript object using `JSON.parse`.
            - Specific fields (`location.name`, `current.condition.text`) are accessed and logged.

        **Drawback**:

            - Manual parsing with `JSON.parse` can throw errors if the response is not valid JSON.
*/

/*      ### Example 2: Automatic JSON Parsing
            By setting `json: true` in the request options, the `request` module automatically parses the JSON response into a JavaScript object.

*/
        
        // const request = require("request");

        // const url = "https://api.weatherapi.com/v1/current.json?key=7f97e74ef23b418c97a155211230503&q=Egypt";

        request({ url, json: true }, (error, response) => {
            console.log("**********************************EX2****************************************************");
            console.log(response.body.location.name); // Output: e.g., Beijing
            console.log(response.body.current.condition.text); // Output: e.g., Sunny
        });

/*

        **Key Improvement**:
            - `json: true` eliminates the need for `JSON.parse`, making the code simpler and safer.

        ---

        ## 4. Error Handling

            Proper error handling is crucial when working with APIs to manage network issues or invalid API responses.
            The lecture code demonstrates checking for errors in two scenarios:
            
                - **Network Errors**: When the request fails (e.g., no internet connection).
                - **API Errors**: When the API returns an error response (e.g., invalid query or API key).
*/

/*      ### Example: WeatherAPI with Error Handling
            This example fetches weather data for Egypt and includes error handling.

*/

        // const request = require("request");
        // const url = "https://api.weatherapi.com/v1/current.json?key=7f97e74ef23b418c97a155211230503&q=egypt";
        request({ url, json: true }, (error, response,body) => {
            console.log("**********************************EX3****************************************************");
            if (error) {
                console.log("ERROR HAS OCCURRED"); // Network or request failure
            } else if (response.body.error) {
                console.log(response.body.error.message); // API-specific error
            } else {
                console.log(response.body.location.name, response.body.current.condition.text); // Output: e.g., Cairo Sunny
            }
        });

/*

        **How it Works**:

            - `if (error)`: Handles low-level errors like network failures.
            - `else if (response.body.error)`: Checks for API errors (e.g., invalid location or API key).
            - `else`: Processes the successful response and logs the location name and weather condition.
*/
/*
        ### Example: Weatherstack with Error Handling

        This example fetches weather data for Germany using the Weatherstack API.
*/

        // const request = require("request");
        // const url = "http://api.weatherstack.com/current?access_key=aaf8d75230687617eaa10d75e38c7550&query=germany";
        request({ url, json: true }, (error, response) => {
            console.log("**********************************EX4****************************************************");
            if (error) {
                console.log("ERROR HAS OCCURRED");
            } else if (response.body.error) {
                console.log(response.body.error.message);
            } else {
                // console.log(response.body.location.name, response.body.current.weather_descriptions[0]);
            }
        });

/*

        **Note**:
            - The Weatherstack API uses `weather_descriptions[0]` instead of `condition.text` for the weather condition, highlighting the importance of understanding the API's response structure.


        ## 5. Running the Code

        1. **Setup**:
            - Ensure Node.js is installed.
            - Initialize a project: `npm init -y`.
            - Install the `request` module: `npm install request`.
            - Create a file (e.g., `index.js`) with the code above.

        2. **API Keys**:
            - Sign up for a free API key at [WeatherAPI](https://www.weatherapi.com/) or [Weatherstack](https://weatherstack.com/).
            - Replace the API key in the URL with your own key.

        3. **Run the Script**:
            - Example: `node app.js`
            - The script will fetch and display weather data or log errors if they occur.

        ---
*/
/*
        ## 6. Additional Examples

        ### Example 1: Fetching Weather for Multiple Locations

            This example fetches weather data for multiple locations using a reusable function.

*/
        // const request = require("request");
        function getWeather(location, callback) {
            const url = `https://api.weatherapi.com/v1/current.json?key=7f97e74ef23b418c97a155211230503&q=${location}`;
            
            request({ url, json: true }, (error, response) => {
                console.log("**********************************EX5****************************************************");
                if (error) {
                    callback("Network error occurred", null);
                } else if (response.body.error) {
                    callback(response.body.error.message, null);
                } else {
                    callback(null, {
                        location: response.body.location.name,
                        condition: response.body.current.condition.text
                    });
                }
            });
        }

        // Test the function
        getWeather("iran", (error, data) => {
            if (error) {
                console.log("Error:", error);
            } else {
                console.log(`Weather in ${data.location}: ${data.condition}`);
            }
        });

        getWeather("japan", (error, data) => {
            if (error) {
                console.log("Error:", error);
            } else {
                console.log(`Weather in ${data.location}: ${data.condition}`);
            }
        });

/*
       
        **Explanation**:
            - The `getWeather` function encapsulates the request logic and uses a callback to return errors or data.
            - It supports fetching weather for any location by passing the location as a parameter.
*/
/*
        ### Example 2: Using Promises Instead of Callbacks

        The `request` module is callback-based, but you can wrap it in a Promise for modern asynchronous handling.
*/
        // const request = require("request");
        function getWeatherPromise(location) {
            return new Promise((resolve, reject) => {
                const url = `https://api.weatherapi.com/v1/current.json?key=7f97e74ef23b418c97a155211230503&q=${location}`;
                request({ url, json: true }, (error, response) => {
                    if (error) {
                        reject("Network error occurred");
                    } else if (response.body.error) {
                        reject(response.body.error.message);
                    } else {
                        resolve({
                            location: response.body.location.name,
                            condition: response.body.current.condition.text
                        });
                    }
                });
            });
        }

        // Using async/await
        async function fetchWeather() {
            try {
                const egyptWeather = await getWeatherPromise("egypt");
                console.log(`Weather in ${egyptWeather.location}: ${egyptWeather.condition}`);
                
                const germanyWeather = await getWeatherPromise("germany");
                console.log(`Weather in ${germanyWeather.location}: ${germanyWeather.condition}`);
            } catch (error) {
                console.log("Error:", error);
            }
        }

        fetchWeather();
       
/*
     **Explanation**:
        - The `getWeatherPromise` function wraps the request in a Promise, making it compatible with `async/await`.
        - This approach improves code readability and error handling.

*/

/*
        ## 7. Notes and Best Practices
            - **Deprecation Warning**:
            - The `request` module is deprecated. For new projects, consider using modern alternatives like `axios` or the built-in `fetch` API (available in Node.js 18+). Example with `axios`:
            
*/            
            const axios = require("axios");
            async function getWeather(location) {
                try {
                    const response = await axios.get(
                        `https://api.weatherapi.com/v1/current.json?key=7f97e74ef23b418c97a155211230503&q=${location}`
                    );
                    return {
                        location: response.data.location.name,
                        condition: response.data.current.condition.text
                    };
                } catch (error) {
                    throw error.response?.data?.error?.message || "Network error";
                }
            }
/*

        - **API Keys**:
             - Never hardcode API keys in your code for production.
               Use environment variables (e.g., `process.env.API_KEY`) with a `.env` file and the `dotenv` package.

        - **Error Handling**:
            - Always check for both network errors (`error`) and API errors (`response.body.error`).
            - Provide meaningful error messages to help debug issues.

        - **Rate Limits**:
            - APIs like WeatherAPI and Weatherstack have rate limits on free plans. Avoid excessive requests to prevent being blocked.

        - **Learning Tips**:
            - Explore API documentation to understand available endpoints and response structures.
            - Practice with different APIs (e.g., OpenWeatherMap, REST Countries) to build confidence.
            - Experiment with Promises or `async/await` for cleaner asynchronous code.

        - **Security**:
            - Validate API responses to ensure they contain expected data.
        -    Use HTTPS URLs to secure data transmission.


**/

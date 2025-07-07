/***
 * # Weather and Geocoding API Integration Documentation

This document provides an overview and explanation of a Node.js application that integrates the **WeatherAPI** and **Mapbox Geocoding API** to fetch weather data for a specified location. The code demonstrates how to retrieve geographic coordinates for a location and use them to fetch current weather conditions.

## Table of Contents
1. [Overview](#overview)
2. [Dependencies](#dependencies)
3. [APIs Used](#apis-used)
4. [Code Structure](#code-structure)
   - [Geocoding with Mapbox](#geocoding-with-mapbox)
   - [Weather Data with WeatherAPI](#weather-data-with-weatherapi)
   - [Command-Line Integration](#command-line-integration)
5. [Error Handling](#error-handling)
6. [Usage](#usage)
7. [Example Output](#example-output)
8. [Setup Instructions](#setup-instructions)
9. [Notes](#notes)

## Overview
This application allows users to:
- Retrieve geographic coordinates (latitude and longitude) for a given location using the **Mapbox Geocoding API**.
- Fetch current weather conditions for the coordinates using the **WeatherAPI**.
- Accept a location as a command-line argument and output the weather information.

The code is modular, with separate functions for geocoding and weather forecasting, and includes error handling for network issues, invalid API keys, and invalid locations.

## Dependencies
- **Node.js**: The runtime environment for executing the JavaScript code.
- **request**: A Node.js library for making HTTP requests to external APIs. Install it using:
  ```bash
  npm install request
  ```

## APIs Used
1. **Mapbox Geocoding API**:
   - Endpoint: `https://api.mapbox.com/geocoding/v5/mapbox.places/{location}.json`
   - Purpose: Converts a location name (e.g., "Egypt") into geographic coordinates (latitude and longitude).
   - API Key: Required for authentication (included in the URL as `access_token`).
2. **WeatherAPI**:
   - Endpoint: `https://api.weatherapi.com/v1/current.json`
   - Purpose: Retrieves current weather conditions for a given latitude and longitude.
   - API Key: Required for authentication (included in the URL as `key`).

## Code Structure

### Geocoding with Mapbox
The `geocode` function retrieves the latitude and longitude for a given address using the Mapbox Geocoding API.

 * 
 * 
 */



const request = require("request")

// const url = "https://api.weatherapi.com/v1/current.json?key=7f97e74ef23b418c97a155211230503&q=Egypt"
//   request ({url} , (error , response) => {
//       // console.log(response.body)

//       const data1 = JSON.parse(response.body)
//       console.log(data1)

//       console.log(data1.location.name)
//       console.log(data1.current.condition.text)

       
//   })

/********************************************************************* */

// const url = "https://api.weatherapi.com/v1/current.json?key=7f97e74ef23b418c97a155211230503&q=china"

// request ({url , json : true  } , (error , response) => {

//     console.log(response.body.location.name)
//     console.log(response.body.current.condition.text)

// })

 //  json : true : Automaticlly convert json data to object 

/************************************************************************************ */

//  const url = "http://api.weatherstack.com/current?access_key=aaf8d75230687617eaa10d75e38c7550&query=germany"

// request ({url , json : true  } , (error , response) => {

//     // console.log(response.body.location.name)
//     // console.log(response.body.current.weather_descriptions[0])

//     if (error) {
//         console.log("ERROR HAS OCCURED")
//     } else if (response.body.error){
//         console.log(response.body.error.message)
//     }else {
//         console.log(response.body.location.name ,response.body.current.weather_descriptions[0] )
//     }

// })


/************************************************************************************ */

// const url = "https://api.weatherapi.com/v1/current.json?key=7f97e74ef23b418c97a155211230503&q=30.05,31.25"

// request ({url , json : true  } , (error , response) => {

//     if (error) {
//         console.log("ERROR HAS OCCURED")
//     } else if (response.body.error){
//         console.log(response.body.error.message)
//     }else {
//         console.log(response.body.location.name ,response.body.current.condition.text)
//     }
// })

/************************************************************************************ */


 // mapbox 

  // const geocodeUrl = "https://api.mapbox.com/geocoding/v5/mapbox.places/egypt.json?access_token=pk.eyJ1Ijoic2FlZG8iLCJhIjoiY21jdDhpMGV4MDE3azJrcXc4NHE4czI1NyJ9.JCQXfanOOt1Jq8jl5qULIg"
  
  // request ({url : geocodeUrl , json : true} , (error , response) => {
  //   console.log(response.body.features[0].center)
  //   if (error){
  //       console.log("unable to connect geocode service")
  //   }else if (response.body.message)  {  //token error 
  //       console.log(response.body.message)
  //   } else if (response.body.features.length == 0) { //name of country error (error in the location)
  //       console.log("Unable to find location")
  //   } else {
  //       const longtitude = response.body.features[0].center[0]  
  //       const latitude = response.body.features[0].center[1]
  //       console.log(latitude , longtitude)
  //   }
      
  // })
  
  
  /************************************************************************************ */



// const forecast = (latitude , longtitude , callback) => {

// const url = "https://api.weatherapi.com/v1/current.json?key=7f97e74ef23b418c97a155211230503&q=" + latitude + "," + longtitude

// request ({url , json : true  } , (error , response) => {

//     if (error) {
//         callback ( "unable to connect weather api service" , undefined )
//     } else if (response.body.error){
//          callback (response.body.error.message , undefined )
//     }else {
//         callback (undefined , response.body.location.name + " it is " + response.body.current.condition.text  )
//     }
// })
//   }

//   forecast(26.871903452398,29.4941838299718, (error , forecastData) => {
//     if (error){
//         console.log("Error" , error )
//     } else {
//         console.log("DATA",forecastData)
//     }
// })


//     const geocode = ( address , callback) => {

//     const geocodeUrl = "https://api.mapbox.com/geocoding/v5/mapbox.places/" + address +  ".json?access_token=pk.eyJ1IjoiaXNsYW0yODQiLCJhIjoiY2wwamEzNmFhMGFtNTNkb3pqaXk4bXNnYSJ9.qYlrWIqo41gXgNNc4h8yIw"

//   request ({url : geocodeUrl , json : true} , (error , response) => {
     
//     if (error){
//         callback ("unable to connect geocode service" , undefined)
//     }else if (response.body.message)  {
//         callback (response.body.message , undefined )
//     } else if (response.body.features.length == 0) {
//          callback("Unable to find location" , undefined)
//     } else {

//         callback(undefined , {
//              longtitude : response.body.features[0].center[0],
//              latitude : response.body.features[0].center[1]
//         } )
       
//     }
//   })
// }
/************************************************************************************ */


/***
   * - **Input**: A location name provided via the command line (e.g., `node app.js Egypt`).
  - **Process**: 
    1. The `geocode` function retrieves coordinates for the location.
    2. If successful, the `forecast` function retrieves weather data for those coordinates.

  ## Error Handling
  The application handles the following errors:
  1. **Network Errors**: When the API service is unreachable (`error` is truthy).
    - Example: "Unable to connect to geocode service" or "Unable to connect to weather API service".
  2. **API Key Errors**: When the API key is invalid or expired (`response.body.message` for Mapbox or `response.body.error` for WeatherAPI).
    - Example: "Invalid access token" or "API key has been disabled".
  3. **Invalid Location**: When the location cannot be found (`response.body.features.length === 0` for Mapbox).
    - Example: "Unable to find location".
  4. **WeatherAPI Errors**: When the WeatherAPI returns an error (e.g., invalid coordinates).
    - Example: "No matching location found".

  ## Usage
  1. Install Node.js and the `request` library.
  2. Save the code in a file (e.g., `app.js`).
  3. Run the application from the command line, providing a location as an argument:
    ```bash
    node app.js Egypt
    ```

  ## Example Output
  For the command `node app.js Egypt`:
  ```
  ERROR: null
  DATA: { longitude: 31.249, latitude: 30.062 }
  ERROR: null
  DATA: Cairo it is Sunny
  ```

  For an invalid location:
  ```
  ERROR: Unable to find location
  DATA: undefined
  ```

  For a network error:
  ```
  ERROR: Unable to connect to geocode service
  DATA: undefined
  ```
 * 
 * 
 */
   
 const forecast = require ("./data/forecast")

 const geocode = require("./data/geocode")


//  console.log(process.argv)

const country = process.argv[2]
// console.log(country)

geocode( country , (error , data) => {
    console.log("ERROR : " , error)
    console.log("DATA : "  , data)

    forecast( data.latitude , data.longtitude , (error , data) => {
        console.log("ERROR : " , error)
        console.log("DATA : " , data)
     } )
 })

 

 /***## Setup Instructions
1. **Install Node.js**: Download and install Node.js from [nodejs.org](https://nodejs.org).
2. **Install Dependencies**:
   ```bash
   npm install request
   ```
3. **API Keys**:
   - Replace the Mapbox `access_token` with your own key from [mapbox.com](https://www.mapbox.com).
   - Replace the WeatherAPI `key` with your own key from [weatherapi.com](https://www.weatherapi.com).
4. **Run the Application**:
   ```bash
   node app.js <location>
   ```
   Replace `<location>` with the desired location (e.g., `Egypt`, `Germany`).

## Notes
- The `request` library is deprecated. Consider using modern alternatives like `axios` or `node-fetch` for production applications.
- Ensure your API keys are valid and have not exceeded usage limits.
- The application assumes a single result from the Mapbox Geocoding API (`features[0]`). For more robust handling, consider allowing users to select from multiple results.
- Store API keys in environment variables or a configuration file for security in a production environment.

*/




  
  




const request = require("request")
const geocode = ( address , callback) => {
  
  const geocodeUrl = "https://api.mapbox.com/geocoding/v5/mapbox.places/"+ address +".json?access_token=pk.eyJ1Ijoic2FlZG8iLCJhIjoiY21jdDhpMGV4MDE3azJrcXc4NHE4czI1NyJ9.JCQXfanOOt1Jq8jl5qULIg";

  request ({url : geocodeUrl , json : true} , (error , response) => {
     
    if (error){
        callback ("unable to connect geocode service" , undefined)
    }else if (response.body.message)  {
        callback (response.body.message , undefined )
    } else if (response.body.features.length == 0) {
         callback("Unable to find location" , undefined)
    } else {

        callback(undefined , {
             longtitude : response.body.features[0].center[0],
             latitude : response.body.features[0].center[1]
        } )
       
    }
  })
}

module.exports = geocode
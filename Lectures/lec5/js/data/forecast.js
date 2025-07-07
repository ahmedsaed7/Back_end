
const request = require("request")
const forecast = (latitude , longtitude , callback) => {

    const url = "https://api.weatherapi.com/v1/current.json?key=d1d0d967c4924903917123943243107&q=" + latitude + "," + longtitude
    
    request ({url , json : true  } , (error , response) => {
    
        if (error) {
            callback ( "unable to connect weather api service" , undefined )
        } else if (response.body.error){
             callback (response.body.error.message , undefined )
        }else {
    
             callback (undefined , response.body.location.name + " it is : " + response.body.current.condition.text 
            + "and temp is : "  + response.body.current.temp_c )
        }
    })
      }

 module.exports = forecast


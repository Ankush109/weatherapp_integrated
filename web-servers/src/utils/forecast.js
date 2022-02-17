const request =  require('request')
const forecast =(latitude,longitude,callback)=>{
    const url ="http://api.weatherapi.com/v1/current.json?key=8dc47391dfd94db682f195310220202&q="+latitude +','+ longitude + "&aqi=no"
    request({url:url,json:true},(error,{body})=>{
        if(error){
            callback("unable to connect to weather service",undefined)
        }else if (body.error){
          callback("unable to find location",undefined)
        }else{
            callback("As of today which is " + body.location.localtime + " the weather in " + body.location.name + " is " + body.current.condition.text + "and the temperature is " + body.current.temp_c + "°C")
        }
    })


}
module.exports = forecast
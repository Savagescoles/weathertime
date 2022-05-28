// My API KEY from https://home.openweathermap.org/api_keys
// b686270c89bd1b7291dcac697927fc18

function weatherTime () {

    var cityInput = document.getElementById('yourInput');
    var bigCity = document.getElementById('yourInput');
// fetching openweather API and getting the users input with my API Key from openweather
 fetch('http://api.openweathermap.org/data/2.5/forecast?id=524901&appid='+cityInput.value+'b686270c89bd1b7291dcac697927fc18') 
 .then(respone => respone.json())  
}
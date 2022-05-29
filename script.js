// My API KEY from https://home.openweathermap.org/api_keys
// fa4f9a8f0b68c84289b7f6bdbef47750

/*
The following function will use the users input from the HTML, in the API call once the button is 
clicked to get the temp (min/max) from openweathermap.org via imperial units and will cycle through 5 days

*/
function weatherTime () {

    var cityInput = document.getElementById('yourInput');
    var bigCity = document.getElementById('bigCity');
    bigCity.innerHTML = cityInput.value;
  


//Setting bigCity.innerHTML into local storage under 'recent'

    localStorage.setItem('recent', bigCity.innerHTML);
    localStorage.getItem('recent');

// fetching openweather API and getting the users input with my API Key from openweather.org/appID documentation
// In the API call for degrees F you must include &units=imperial as part of your API call
 fetch('https://api.openweathermap.org/data/2.5/forecast?q='+cityInput.value+'&units=imperial&appid=fa4f9a8f0b68c84289b7f6bdbef47750') 
 .then(response => response.json())  
 .then(data => {

     //Getting the min and max temps for each day, top is Min and below that is the max.
     for(w = 0; w<5; w++){
        document.getElementById("day" + (w+1) + "Min").innerHTML = "Min: " + Number(data.list[w].main.temp_min).toFixed(1)+ "° Fahrenheit";
        
    }
    //Again it's important to note that from their website, using their API the default value is Kelvin, so you must change the
    //data request in the API call for the information you want. 

    for(w = 0; w<5; w++){
        document.getElementById("day" + (w+1) + "Max").innerHTML = "Max: " + Number(data.list[w].main.temp_max).toFixed(2) + "° Fahrenheit";
    }
    //------------------------------------------------------------

    //Getting Weather Icons
    // If you go to openweather.org/weather-conditions it will have all the information needed to include the icons. 
    // In the API in the JSON the data looks like
    /*
    "weather": [
        {
            "id": 500,
            "main": "Rain",
            "description": "light rain"
            "icon": "10d"
        }
    ]

    Since it's raining currently in Shelton, the icon will be 10d so the following for loop will go to that link and generate the icon for the weather 
    which is set to add that into the URL+ the matching icon
    */
     for(w = 0; w<5; w++){
        document.getElementById("img" + (w+1)).src = "http://openweathermap.org/img/wn/"+
        data.list[w].weather[0].icon
        +".png";
    }

    console.log(data)


})

}

function weatherTimeDefault(){
    document.getElementById("yourInput").defaultValue = "Shelton";
    weatherTime();
}


//Getting and displaying the information for the upcoming five days of the week
var z = new Date();
var weekday =
     ["Sunday", 
    "Monday", 
    "Tuesday", 
    "Wednesday",
    "Thursday", 
    "Friday", 
    "Saturday",
];

//Function to get the correct number for the index of the days array
function CheckDay(day){
    if(day + z.getDay() > 6){
        return day + z.getDay() - 7;
    }
    else{
        return day + z.getDay();
    }
}

    for(w = 0; w<5; w++){
        document.getElementById("day" + (w+1)).innerHTML = weekday[CheckDay(w)];
    }

    function saveWeather() {
        localStorage.setItem("searchedCity", bigCity);
    }


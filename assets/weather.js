var city;
var APIKey = "e05cb7544bfc83d4346b1fce0a2adc5a";
var nameVal = document.querySelector('.name');
var temp = document.querySelector('.temp');
var wind = document.querySelector('.wind');
var humidity = document.querySelector('.humidity');
var timeZone = document.querySelector('.timezone');
var olSearch = document.getElementById('listCity');
var citySearching = document.getElementById('citySearch');
console.log(city)

function searchCityByInput (city) {
    fetch("http://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=imperial&appid=" + APIKey)
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        console.log(data);
        var tempValue = data['main']['temp'];
        var nameInput = data['name'];
        var windValue = data['wind']['speed'];
        var humidityValue = data['main']['humidity']
        // var timeValue = data['timezone']
        
        nameVal.innerHTML = nameInput;
        temp.innerHTML = "Temp: " + tempValue + " °F";
        wind.innerHTML = "Wind: " + windValue + " MPH";
        humidity.innerHTML = "Humidity: " + humidityValue + " %";
        
        // timeZone.innerHTML = timeValue;
        // timeZone.innerHTML = (new Date(data.dt*1000-(data.timezone*1000))); // minus
        timeZone.innerHTML = moment().format(" MM/D/YYYY");
        localStorage.setItem("city", city)
    });
    fetch("https://api.openweathermap.org/data/2.5/forecast?q=" + city + "&units=imperial&appid=" + APIKey)
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        console.log(data);
        for ( i = 0; i < 5; i++) {
            document.getElementById("day" + (i+1) + "Temp").innerHTML = "Temp: " + Number(data.list[i].main.temp) + " °F";
            
            document.getElementById("day" + (i+1) + "Wind").innerHTML = "Wind: " + Number(data.list[i].wind.speed) + " MPH";
        
            document.getElementById("day" + (i+1) + "Humid").innerHTML = "Humidity: " + Number(data.list[i].wind.speed) + " %";

            document.getElementById("img" + (i+1)).src = " http://openweathermap.org/img/wn/" + data.list[i].weather[0].icon + ".png";
        }

    })
}



function getInputValue(e) {
    e.preventDefault()
    // Selecting the input element and get its value 
    var inputVal =  document.getElementById("citySearch").value;
    searchCityByInput(inputVal);
    
    

    var paragraph = document.createElement("button");
    
    paragraph.innerHTML = citySearching.value;
    // if(button = "click"){
    //     localStorage.getItem("city")
    // }else{
        
    // }
    olSearch.appendChild(paragraph);
    




    // var items = citySearching.value,
    // tab = [];

    // for (var i = 0; i < items.length; i++){

    //     tab.push(items[i].innerHTML)
    // }
    // console.log();
}


  


    









document.querySelector(".subBtn").addEventListener("click", getInputValue)
    

// document.querySelector(".subBtn").addEventListener("click", listInputValue) 
// timeOfCity()


// for (let i = 0; i < cars.length; i++)
// make a loop
//  creat ele li
//  extract from citysearch
//  console log

// make inputval tie in city
//   make an if statment if inputval = value then city
// add localstorage
// make the visuals

// var requestURL = 'https://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=" + APIKey';
var city;
var APIKey = "e05cb7544bfc83d4346b1fce0a2adc5a";

// console.log(requestURL)

function searchCityByInput (city) {
    fetch("http://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=" + APIKey)
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        console.log(data);
    });
}



function getInputValue(e) {
    e.preventDefault()
    // Selecting the input element and get its value 
    var inputVal = document.getElementById("citySearch").value;
    // city = inputVal;
    searchCityByInput(inputVal);
    localStorage.setItem("city", inputVal)
    
}

document.querySelector(".subBtn").addEventListener("click", getInputValue)

// make inputval tie in city
//   make an if statment if inputval = value then city
// add localstorage
// make the visuals

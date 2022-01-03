var city;
var APIKey = "e05cb7544bfc83d4346b1fce0a2adc5a";
var nameVal = document.querySelector('.name');
var temp = document.querySelector('.temp');
var wind = document.querySelector('.wind');
var humidity = document.querySelector('.humidity');
var timeZone = document.querySelector('.timezone');
var olSearch = document.getElementById('listCity');
var citySearching = document.getElementById('citySearch');

// var long = "";
// var latt = "";
console.log(city)

function searchCityByInput(city) {
    // var latt;
    // var long;
    fetch("https://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=imperial&appid=" + APIKey)
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
           var latt = data.coord.lat;
           var long = data.coord.lon;


            nameVal.innerHTML = nameInput;
            temp.innerHTML = "Temp: " + tempValue + " °F";
            wind.innerHTML = "Wind: " + windValue + " MPH";
            humidity.innerHTML = "Humidity: " + humidityValue + " %";

            // timeZone.innerHTML = timeValue;
            // timeZone.innerHTML = (new Date(data.dt*1000-(data.timezone*1000))); // minus
            timeZone.innerHTML = moment().format(" MM/D/YYYY");
            

        
        fetch("https://api.openweathermap.org/data/2.5/onecall?lat="+ latt + "&lon="+ long + "&units=imperial&appid=" + APIKey)
        .then(function (response) {
            return response.json();

        })
        .then(function (data) {
            $("#uvIndex").text("UV Index: " + data.current.uvi);
                    if (data.current.uvi < 3) {
                        $("#uvIndex").attr("class", "favorable");
                    } else if (data.current.uvi >= 3 && data.current.uvi <= 7) {
                        $("#uvIndex").attr("class", "moderate");
                    } else {
                        $("#uvIndex").attr("class", "severe");
                    }
            console.log(data);
            $("#day1Date").text(moment().add(1, "days").format(" MM/D/YYYY"));
            $("#day1Temp").text( "Temp: " + data.daily[1].temp.day + "℉");
            $("#day1Wind").text("Wind: " + data.daily[1].wind_speed + " MPH");
            $("#day1Humid").text("Humidity: " + data.daily[1].humidity + " %");
            $("#img1").attr("src", "https://openweathermap.org/img/w/" + data.daily[1].weather[0].icon + ".png");

            $("#day2Date").text(moment().add(2, "days").format(" MM/D/YYYY"));
            $("#day2Temp").text( "Temp: " + data.daily[2].temp.day + "℉");
            $("#day2Wind").text("Wind: " + data.daily[2].wind_speed + " MPH");
            $("#day2Humid").text("Humidity: " + data.daily[2].humidity + " %");
            $("#img2").attr("src", "https://openweathermap.org/img/w/" + data.daily[2].weather[0].icon + ".png");

            $("#day3Date").text(moment().add(3, "days").format(" MM/D/YYYY"));
            $("#day3Temp").text( "Temp: " + data.daily[3].temp.day + "℉");
            $("#day3Wind").text("Wind: " + data.daily[3].wind_speed + " MPH");
            $("#day3Humid").text("Humidity: " + data.daily[3].humidity + " %");
            $("#img3").attr("src", "https://openweathermap.org/img/w/" + data.daily[3].weather[0].icon + ".png");

            $("#day4Date").text(moment().add(4, "days").format(" MM/D/YYYY"));
            $("#day4Temp").text( "Temp: " + data.daily[4].temp.day + "℉");
            $("#day4Wind").text("Wind: " + data.daily[4].wind_speed + " MPH");
            $("#day4Humid").text("Humidity: " + data.daily[4].humidity + " %");
            $("#img4").attr("src", "https://openweathermap.org/img/w/" + data.daily[4].weather[0].icon + ".png");

            $("#day5Date").text(moment().add(5, "days").format(" MM/D/YYYY"));
            $("#day5Temp").text( "Temp: " + data.daily[5].temp.day + "℉");
            $("#day5Wind").text("Wind: " + data.daily[5].wind_speed + " MPH");
            $("#day5Humid").text("Humidity: " + data.daily[5].humidity + " %");
            $("#img5").attr("src", "https://openweathermap.org/img/w/" + data.daily[5].weather[0].icon + ".png");
        });
    })
    // add catch!

}
// function futureWeatherInput(city) {
//     fetch("https://api.openweathermap.org/data/2.5/forecast?q=" + city + "&units=imperial&appid=" + APIKey)
//         .then(function (response) {
//             return response.json();

//         })
//         .then(function (data) {

//             console.log(data);

//             // console.log("for")
//             //  document.getElementById("day" + (i+1) + "Wind").innerHTML = "Wind: " + Number(data.list[i].wind.speed) + " MPH";
//             //  document.getElementById("day" + (i+1) + "Temp").innerHTML = "Temp: " + Number(data.list[i].main.temp) + " °F";

//             // }

//             //    var latt = data.city.coord.lat;
//             //    var long = data.city.coord.lon;
//             //    console.log(latt)
//             //     console.log(long)

//             for (var i = 0; i < data.list; i += 8) {



                

//                 // var tempFuture = data['list']['main']['temp']
//                 // tempOne.innerHTML = tempFuture[i];
//                 document.getElementById("day" + (i + 1) + "Temp").innerHTML = "Temp: " + Number(data.list[i].main.temp) + " °F";

//                 // document.getElementById("day" + (i + 1) + "Temp").innerHTML = "Temp: " +  + " °F";

//                 document.getElementById("day" + (i + 1) + "Wind").innerHTML = "Wind: " + Number(data.list[i].wind.speed) + " MPH";

//                 document.getElementById("day" + (i + 1) + "Humid").innerHTML = "Humidity: " + Number(data.list[i].wind.speed) + " %";

//                 document.getElementById("img" + (i+1)).src = " http://openweathermap.org/img/wn/" + data.list[i].weather[0].icon + ".png";

//                 document.getElementById("day" + (i+1) + "Date").innerHTML = "Date: " + data.list[i].dt_txt;

//             }

//         })
// }
    //     TempDays.innerHTML = "Temp: " + Number(data.list[i].main.temp) + " °F";
    //     console.log(TempDays)
    // }


//    for (i = 0; i < data.list.length; i += 8 ){




function getInputValue(e) {
    e.preventDefault()
    // Selecting the input element and get its value 
    var inputVal = document.getElementById("citySearch").value;
    searchCityByInput(inputVal);
    // city = inputVal.push[""];
    
    var paragraph = document.createElement("p");

    paragraph.innerHTML = inputVal;

    paragraph.addEventListener("click" , function(e){
        console.log(e.target.textContent)
        searchCityByInput(e.target.textContent)
    }) 

    olSearch.appendChild(paragraph);
    
    console.log(city)



    console.log("paragraph")

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

//-------------------- Variables Declared on Global Level --------------------
let access = document.getElementById('access');
let allDetails;
let city;
let icon;
//-------------------- Variables Declared on Global Level --------------------

//-------------------------------------------------- Weather Using Location -------------------------------------------------- 


//-------------------- Function Running Two Parameters (onSuccess, onError) --------------------
window.onload = function getLocation() {
    if (navigator.geolocation) {
        access.innerHTML = "Allow to detect your location"
        navigator.geolocation.getCurrentPosition(onSuccess, onError);
    }
    else {
        access.innerHTML = "Geolocation is not supported by this browser."
    }
}

//-------------------- Function Running Two Parameters (onSuccess, onError) --------------------


//-------------------- onSuccess Parameter --------------------
function onSuccess(position) {
    access.innerHTML = "Detecting your location...";
    let { latitude, longitude } = position.coords;

    //-------------------- Fetching Location Using API --------------------
    fetch(`https://api.opencagedata.com/geocode/v1/json?q=${latitude}+${longitude}&key=e228ae2eaf8f4751afb78f864bdf52ea`)
        .then(response => response.json()).then(result => {
            allDetails = result.results[0].components;//getting the details of the location
            console.table(allDetails);
            let { city } = allDetails;//getting the details of the location
            city = city;
            access.innerHTML = "";
            //-------------------- Fetching Location Using API --------------------

            //-------------------- Fetching Weather Using API --------------------
            axios.get(`https://api.weatherapi.com/v1/current.json?key=92203d8e3c314335b7462722223006&q=${city}`)
                .then(function (response) {
                    console.log(response.data);



                    icon = response.data.current.condition.icon;
                    icon.replace("/file// ");
                    // console.log(icon);
                    document.getElementById('icon').src = icon;








                    document.getElementById('city').innerHTML = `<i id="city_location" class="fa-solid fa-location-dot"></i>${response.data.location.name}`;
                    document.getElementById('temp-f').innerHTML = response.data.current.temp_c + "°C";
                    document.getElementById('condition').innerHTML = response.data.current.condition.text;
                    // document.getElementById('feel').innerHTML = response.data.current.feelslike_c + '°C';
                    // document.getElementById('wind').innerHTML = response.data.current.wind_kph + " km/h";
                    // document.getElementById('wind_dir').innerHTML = response.data.current.wind_dir;
                    // document.getElementById('humidity').innerHTML = response.data.current.humidity + "%";
                    // document.getElementById('visiblity').innerHTML = response.data.current.vis_km + " km";
                })
            //-------------------- Fetching Weather Using API --------------------
        });
    access.innerHTML = "";

}


//-------------------- onError Parameter --------------------
function onError(error) {
    console.log(error);
    if (error.code == 1) {//if user denied to share location
        access.innerHTML = "User denied the request for Geolocation.";
    }
    else if (error.code == 2) {//if location is not found
        access.innerHTML = "Location information is unavailable.";
    }
    else if (error.code == 3) {//if any other error occured
        access.innerHTML = "Something went wrong.";
    }
}
//-------------------- onError Parameter --------------------

//-------------------------------------------------- Weather Using Location --------------------------------------------------


//-------------------------------------------------- Weather Using Search --------------------------------------------------
function getWeather() {
    let input_city = document.getElementById('input_city').value;
    console.log(input_city);
    axios.get(`http://api.weatherapi.com/v1/current.json?key=92203d8e3c314335b7462722223006&q=${input_city}`)
        .then(function (response) {
            console.log(response.data);
            document.getElementById('city').innerHTML = `<i id="city_location" class="fa-solid fa-location-dot"></i>${response.data.location.name}`;
            document.getElementById('temp-f').innerHTML = response.data.current.temp_c + "°C";
            document.getElementById('condition').innerHTML = response.data.current.condition.text;
        })
    access.innerHTML = "";

}

















//-------------------------------------------------- Weather Using Search --------------------------------------------------
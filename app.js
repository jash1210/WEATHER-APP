const API_KEY = `3265874 a2c77ae4a04bb96236a642d2f`
const form =document.querySelector("form");
const weather = document.querySelector("#weather");
const search = document.querySelector("#serch")

// const API = `https://api.openweathermap.org/data/2.5/weather?
// q=${city}&appid=${API_KEY}&units=metric`

// const IMG_URL = `https: //openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`

const getweather = async (city) =>{
    const url = `https://api.api-ninjas.com/v1/city?name=`
    const response = await fetch(url);
    console.log(response);
}

form.addEventListener(
    "submit",
    function(event){
        getweather(search.value);
        event.preventDefault();
    }
)
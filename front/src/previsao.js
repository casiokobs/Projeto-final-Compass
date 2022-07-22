function Previsao(){

      function getWeather() {
        let url;
        
        
        navigator.geolocation.getCurrentPosition((pos) => {
          let lat = pos.coords.latitude;
          let long = pos.coords.longitude;
          url = "https://api.openweathermap.org/data/2.5/weather?lat="+lat+"&lon="+long+"&appid=093ce6ecabbf25627b1b05217357a35d&units=metric";
          console.log(url);
          fetchApi(url);
        });
      }
      function fetchApi(url) {
        fetch(url)
          .then((data) => {
            return data.json();
          })
          .then((data) => {
            
            let tempInCelsius = data.main.temp;
            let city = document.querySelector(".city");
            let temp = document.querySelector(".temp");
              city.innerHTML=data.name;
              temp.innerHTML=tempInCelsius + 'º';
              return data.weather[0].icon;
          })
          .catch((err) => {
              console.log('Error');
              console.log('-');
          })
      }
      
      getWeather();
}
export default Previsao;


function Previsao(){
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
    } else {
        console.log("Geolocation is not supported by this browser.");
    }    
    async function showPosition(position) {
        await fetch("https://api.openweathermap.org/data/2.5/weather?lat="+position.coords.latitude+"&lon=" + position.coords.longitude+"&appid=093ce6ecabbf25627b1b05217357a35d", {
            method: 'GET', 
            headers: {},
        }).then(response => {     
            const result =response.json(); 
            //console.log(result.main);
        });
    }
}
export default Previsao;
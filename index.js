
document.getElementById('fetchButton').addEventListener('click',function(e){
    const apiKey = '45660ac78f796bd380b9737a7ecc9613'; 
    const city=document.getElementById('cityInput').value;
   e.preventDefault();
    const url=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    fetch(url)
    .then(response => {
        if (!response.ok) {
            throw new Error(`Error: ${response.status} ${response.statusText}`);
        }
        return response.json();
    })
    .then(data=>{
        const temp=data.main.temp;
        document.getElementById('temperature').innerText = `Temperature is: ${temp} °C`;

        document.getElementById('clouds').innerText = `${data.clouds.all}% cloudiness`;
        document.getElementById('icon').innerHTML = `<img src="http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png" alt="Weather icon">`;
         document.getElementById('icon1').innerText=`${data.weather[0].description}`
    })
    .catch(error => {
        console.error('Error fetching data:', error);
        document.getElementById('error').innerText = 'Could not fetch weather data. Please check the city name or try again later.';
    });
})
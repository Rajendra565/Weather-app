console.log("welcome to Wearther");

const btn=document.querySelector('#btn');
const searchbar=document.querySelector('#searchbar');
const WeartherImage=document.querySelector('#Image')
const temperature=document.querySelector('.temperature');
const description=document.querySelector('.description');
const humidityValue=document.querySelector('#humidity-value');
const windspeedValue=document.querySelector('#windspeed-value');

const loctionNotFound=document.querySelector(".loction-not-found");
const cityName=document.querySelector('.cite-name')

// async function checkeweather(city){
//     const api_key="07bfdbf9ba586ad0615c310b0aa76b99"
//     const url= `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}`;

//    const ans = await fetch('${url}').then(response=>response.json());
   
//    console.log(ans)

// }
  function checkeweather(city){
    const api_key="07bfdbf9ba586ad0615c310b0aa76b99";
    const url= `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}`;
    console.log(url)

    const xhr=new XMLHttpRequest();
    xhr.open('GET',url,true);
    xhr.send();
    xhr.onload=function(){
        const res=JSON.parse(this.responseText);
        console.log(`${res.name}`);
        
            temperature.innerHTML=`${Math.round(res.main.temp)}°C`;
            description.innerHTML=`${res.weather[0].description}`;
            
            humidityValue.innerHTML=`${res.main.humidity}%`;
            windspeedValue.innerHTML=`${res.wind.speed}Km/H`;
            cityName.innerHTML=`<p>${res.name}</p>`

            
        


        switch(res.weather[0].main){
            case 'Clouds':
                WeartherImage.src="/image/cloud.png";
                break;
            case 'Rain':
                WeartherImage.src="/image/Rain.jpeg";
                break;
            case 'Mist':
                WeartherImage.src="/image/mist.jpg";
                break;
            case 'Clear':
                WeartherImage.src="/image/clear.png";
                break;
            case 'Snow':
                WeartherImage.src="/image/snow.avif";
                break;
        }

         
    }
}

btn.addEventListener('click',()=>{
    checkeweather(searchbar.value)
})
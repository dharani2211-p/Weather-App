document.addEventListener('DOMContentLoaded',()=>{
  const apiKey = 'af3490852265ede54ab0db43e271f780'; 
  const icon1=document.querySelector('.iconbox');
  
  icon1.addEventListener('click',async()=>{


    document.querySelector('.alert').innerHTML = '';
    const city= document.querySelector('.search-bar').value.toUpperCase();
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  
    try
    {
        const res=await fetch(url);
        if(!res.ok)
        {
          document.querySelector('.alert').innerHTML='City not found. Please check the spelling and try again.';
          document.querySelector('.temp').innerHTML="";
          document.querySelector('.speed').innerHTML="";
          document.querySelector('.hum').innerHTML="";
          return;
        }

        const data=await res.json();
        const t=data.main.temp;
        if(t>25)
           temp=`  Sunny<img src='images/sunny.jpg' class='weather-icon' ><p>${data.main.temp}&deg;C</p><div>${city}</div>`;
        else if(t<=25 && t>20)
           temp=`  Cloudy <img src='images/cloudy.png' class='weather-icon' ><p>${data.main.temp}&deg;C</p><div>${city}</div>`;
        else if(t<=20 && t>15)
          temp=`  Rainy <img src='images/rain.jpg' class='weather-icon' ><p>${data.main.temp}&deg;C</p><div>${city}</div>`;
        else
          temp=`Snow <img src='images/snow.jpg' class='weather-icon' > <p>${data.main.temp}&deg;C</p><div>${city}</div>`;


        hum=`<p>${data.main.humidity}%</p><p>humidity</p>`;
        speed=`<p>${data.wind.speed} m/s</p><p>wind speed</p>`;
        
        document.querySelector('.temp').innerHTML=temp;
        document.querySelector('.speed').innerHTML=speed;
        document.querySelector('.hum').innerHTML=hum;
        document.querySelector('.search-bar').value="";
    }
    catch(err)
    {
      console.error(err);
    }

  })
  
  document.addEventListener('keypress',(e)=>{
        if(e.key=='Enter')
        {
          icon1.click();
        }
  })
  


})


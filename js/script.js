

  // 677bfb18087156c5befd1317195adeff



  async function fetchWeatherData(latitude,longitude,latlng) {
  
    const apiKey = '863bfd92b67ee6c3f299134d21167bfc';
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&APPID=${apiKey}`;
  
    try {
      const response = await fetch(url);
      const data = await response.json();
     
      let weather=data.main;
      for(const key in weather){
        console.log(key,weather[key]);
        
        const weatherPage=document.getElementById(`${latlng}`);
        weatherPage.innerHTML +=`<p class="text-light" >${key} : ${weather[key]} </p>`
      }

     //console.log(weather); // Handle the weather data here
    } catch (error) {
      console.error("Error fetching weather data:", error);
    }
  }
  




  async function getCities(){
      const response=await fetch('https://restcountries.com/v3.1/all');
      response.json().then((data)=>{
        for(let country of data){
            let latlng=country.latlng;
             const details={flag:country.flags.png, name:country.name.common,capital:country.capital,region:country.region,latlng:country.latlng}
            datas.push(details);
            let i=1;
           // fetchWeatherData(latlng[0],latlng[1]);
            
         
           
       
          }
          
      })


  }
  let datas=[];
  getCities();
  console.log(datas);
 

  function handleClick(){
      
      console.log(latlng);
      //     
  }


 
let all=[];
  //set interval 1000ms
  setTimeout(()=>{
            for(let country of datas){
              
              const column=document.querySelector('#cardSheet');
            column.innerHTML +=`<div>
            <div class="card m-3" style="width: 18rem;" style="position:relative">
            <h5 class="card-title p-4 text-center text-light bg-dark">${country.name}</h5>
             ;
            <img src="${country.flag}" class="card-img-top" alt="..." width="50" height="100" >
            <div class="card-body text-center">
               <p class="card-text">Capital : ${country.capital}</p>
               <p class="card-text">Region : ${country.region}</p>
                
              <div class="container">
            <div id=${country.latlng} style="position:absolute; top:10px; left:75px; background-color:black" show="false" >
                
            </div>
             
             
        </div>
         </div>
             <div class="text-center p-3" ><button id='btnId' type="button" class="btn btn-primary" value=${country.latlng} >weather</button></div>
            
          
          </div>
            </div>`
            }



      all=document.querySelectorAll('#btnId');
      all.forEach((bt)=>{
        
        bt.addEventListener('click',()=>{
          const latlng=bt.value.split(',');
          console.log(bt.diabled);
          if(bt.diabled=="false" || !bt.diabled){
            console.log(bt.diabled);
            fetchWeatherData(latlng[0],latlng[1],bt.value);
            bt.diabled="true";
         
          }
          else{
            const weatherPage=document.getElementById(`${bt.value}`);
        weatherPage.innerHTML ="";
     
            bt.diabled="false";
          }
          
          
          return console.log(bt.value);
        });
      })
      // setTimeout(()=>{

      // },3000)
    
  },3000)

  
    
 

  
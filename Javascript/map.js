function init(){

 
  //Guestions button
  document.getElementById("questions").addEventListener("click",questions);

  function questions(){
    alert("If you have questions, contact me at:\nhhemphill@hawk.illinoistech.edu");
  }

 


  //Map Spawner

  const iit = {lat: 41.83671396799945, lng: -87.62609431337762};
  var mapProp= {
    center:new google.maps.LatLng(iit),
    zoom:15,
  };


  var map = new google.maps.Map(document.getElementById("googleMap"),mapProp);

  //Map Markers
  const lawernceFish = { lat: 41.83848579901588, lng: -87.63306990467545 };
  const jackalope = {lat: 41.83657638441643, lng: -87.64499685374551};
  const ferros = {lat: 41.83851520232206, lng: -87.63199244299237};
  
  var marker = new google.maps.Marker({
    position: lawernceFish,
    map: map,
    title: "Lawrence Fish Market"
  });

  marker = new google.maps.Marker({
    position: jackalope,
    map: map,
    title: "Jackalope"
  });

    marker = new google.maps.Marker({
    position: ferros,
    map: map,
    title: "Ferro's"
  });


   //recenter button
  document.getElementById("recenter").addEventListener("click",recenter);

  function recenter(){
    map.setCenter(iit);
  }
}



window.addEventListener('load', init);

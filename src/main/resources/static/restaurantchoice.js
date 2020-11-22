/**
 * 
 */
     function myCreateFunction() {
       var table = document.getElementById("myTable");
       var row = table.insertRow(0);
       var cell1 = row.insertCell(0);
       var cell2 = row.insertCell(1);
       cell1.innerHTML = "NEW CELL1";
       cell2.innerHTML = "NEW CELL2";


     }
     
     
     
function initMap() {

    // The location of UC
    const UC = {lat: 39.130146, lng: -84.518982};
    //Mac Shack
    const MAC = {lat: 39.128246, lng: -84.517241 };
    //HangOverEasy
    const HANG_OVER_EASY = {lat: 39.130280, lng: -84.510176};
    
    
    // The location of Kroger
    const KROGER = { lat: 39.106677, lng: -84.513777 };
    //The Eagle 39.110695, -84.515235
    const EAGLE = { lat: 39.110695, lng: -84.515235 };
    //Goodfellas 39.109180, -84.511776
    const GOODFELLAS = { lat: 39.109180, lng: -84.511776 };
    
    
    // The map, centered at UC
    const MAP_UC = new google.maps.Map(document.getElementById("mapUC"), {
      zoom: 15,
      center: uc,
    });
    
      const MAP_CINCY = new google.maps.Map(document.getElementById("mapCincy"), {
        zoom: 15,
        center: kroger,
      
    });
    
    // The marker, positioned at UC
    const MARKER_UC = new google.maps.Marker({
        position: UC,
        map: MAP_UC,
      });
    // The marker, positioned at Mac Shack
      const MARKER_MAC = new google.maps.Marker({
        position: MAC,
        map: MAP_UC,
      });
    // The marker, positioned at HangOverEasy
      const MARKER_HANG_OVER_EASY = new google.maps.Marker({
        position: hangOverEasy,
        map: MAP_UC,
      });
    
      // The marker, positioned at kroger
    const markerKroger = new google.maps.Marker({
        position: KROGER,
        map: MAP_CINCY,
      });
    // The marker, positioned at The Eagle
      const markerEagle = new google.maps.Marker({
        position: eagle,
        map: MAP_CINCY,
      });
    // The marker, positioned at Goodfellas
      const markerGoodfellas = new google.maps.Marker({
        position: GOODFELLAS,
        map: MAP_CINCY,
      });

    }
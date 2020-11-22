
function initMap() {

    // The location of UC
    const UC = { lat: 39.130146, lng: -84.518982 };
    //Mac Shack
    const MAC = { lat: 39.128246, lng: -84.517241 };
    //HangOverEasy
    const HANG_OVER_EASY = { lat: 39.130280, lng: -84.510176 };
    
    
    // The location of KROGER
    const KROGER = { lat: 39.106677, lng: -84.513777 };
    //The EAGLE 39.110695, -84.515235
    const EAGLE = { lat: 39.110695, lng: -84.515235 };
    //GOODFELLAS 39.109180, -84.511776
    const GOODFELLAS = { lat: 39.109180, lng: -84.511776 };
    
    
    // The map, centered at UC
    const MAP_UC = new google.maps.Map(document.getElementById("MAP_UC"), {
      zoom: 15,
      center: uc,
    });
    
      const MAP_CINCY = new google.maps.Map(document.getElementById("MAP_CINCY"), {
        zoom: 15,
        center: KROGER,
      
    });
    
    // The marker, positioned at UC
    const markerUC = new google.maps.Marker({
        position: uc,
        map: MAP_UC,
      });
    // The marker, positioned at Mac Shack
      const markerMac = new google.maps.Marker({
        position: mac,
        map: MAP_UC,
      });
    // The marker, positioned at HangOverEasy
      const markerHangOverEasy = new google.maps.Marker({
        position: HANG_OVER_EASY,
        map: MAP_UC,
      });
    
      // The marker, positioned at KROGER
    const markerKROGER = new google.maps.Marker({
        position: KROGER,
        map: MAP_CINCY,
      });
    // The marker, positioned at The EAGLE
      const markerEAGLE = new google.maps.Marker({
        position: EAGLE,
        map: MAP_CINCY,
      });
    // The marker, positioned at GOODFELLAS
      const markerGOODFELLAS = new google.maps.Marker({
        position: GOODFELLAS,
        map: MAP_CINCY,
      });

    }
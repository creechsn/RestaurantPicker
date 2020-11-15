/**
 * 
 */

// Get User's location
(function() {
	navigator.geolocation.getCurrentPosition(function(position) {
		console.log(position.coords.latitude)
		console.log(position.coords.longitude)
	},
		function(error) {
			console.log("The Locator was denied. :(")
		})
})();





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
	const uc = { lat: 39.130146, lng: -84.518982 };
	//Mac Shack
	const mac = { lat: 39.128246, lng: -84.517241 };
	//HangOverEasy
	const hangOverEasy = { lat: 39.130280, lng: -84.510176 };


	// The location of Kroger
	const kroger = { lat: 39.106677, lng: -84.513777 };
	//The Eagle 39.110695, -84.515235
	const eagle = { lat: 39.110695, lng: -84.515235 };
	//Goodfellas 39.109180, -84.511776
	const goodfellas = { lat: 39.109180, lng: -84.511776 };


	// The map, centered at UC
	const mapUC = new google.maps.Map(document.getElementById("mapUC"), {
		zoom: 15,
		center: uc,
	});

	const mapCincy = new google.maps.Map(document.getElementById("mapCincy"), {
		zoom: 15,
		center: kroger,

	});

	// The marker, positioned at UC
	const markerUC = new google.maps.Marker({
		position: uc,
		map: mapUC,
	});
	// The marker, positioned at Mac Shack
	const markerMac = new google.maps.Marker({
		position: mac,
		map: mapUC,
	});
	// The marker, positioned at HangOverEasy
	const markerHangOverEasy = new google.maps.Marker({
		position: hangOverEasy,
		map: mapUC,
	});

	// The marker, positioned at kroger
	const markerKroger = new google.maps.Marker({
		position: kroger,
		map: mapCincy,
	});
	// The marker, positioned at The Eagle
	const markerEagle = new google.maps.Marker({
		position: eagle,
		map: mapCincy,
	});
	// The marker, positioned at Goodfellas
	const markerGoodfellas = new google.maps.Marker({
		position: goodfellas,
		map: mapCincy,
	});

}
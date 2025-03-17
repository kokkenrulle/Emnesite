var map = L.map('map').setView([55.6761, 12.5683], 12); // Latitude, Longitude, Zoom-niveau



// Tilføj OpenStreetMap tiles (gratis kortbaggrund)
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; OpenStreetMap contributors'
}).addTo(map);

var courts = [
    { lat: 55.6853, lng: 12.5635, title: "Fælledparken Basket" },
    { lat: 55.6739, lng: 12.5645, title: "Enghave Plads Basket" },
    { lat: 55.6657, lng: 12.5419, title: "Amager Strand Basket" }
];


// Tilføj markører for basketballbanerne
courts.forEach(function (court) {
    L.marker([court.lat, court.lng]).addTo(map)
      .bindPopup("<b>" + court.title + "</b>"); // Pop-up tekst
});



// Kort over postnumre i København og deres koordinater
var postnummerData = {
    "1000": { lat: 55.675, lng: 12.568 },
    "1050": { lat: 55.682, lng: 12.581 },
    "1300": { lat: 55.687, lng: 12.573 },
    "1500": { lat: 55.672, lng: 12.553 },
    "1700": { lat: 55.673, lng: 12.528 },
    "2100": { lat: 55.715, lng: 12.575 },
    "2200": { lat: 55.699, lng: 12.553 },
    "2300": { lat: 55.645, lng: 12.603 },
    "2400": { lat: 55.707231, lng:12.531058, },
    "2000": { lat: 55.666664, lng:12.5333312 }

};

// Funktion til at søge og zoome til postnummer
function searchPostnummer() {
    var searchValue = document.getElementById("search-input").value.trim();

    if (postnummerData[searchValue]) {
        var location = postnummerData[searchValue];
        map.setView([location.lat, location.lng], 14); // Zoom til postnummer
    } else {
        alert("Postnummer ikke fundet. Prøv et andet.");
    }
}

// Event listener for "Søg"-knappen
document.getElementById("search-button").addEventListener("click", searchPostnummer);

// Event listener for Enter-tasten
document.getElementById("search-input").addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        event.preventDefault(); // Forhindrer standard formularadfærd
        searchPostnummer();
    }
});
/* In dit script plaats je de code om de kaart in de id apMap te tekenen, zodat de AP-Hogeschool met adres Ellermanstraat 33 gecentreerd staat.  
* Gebruik hiervoor de documentatie op https://leafletjs.com/ 
* Verander in de code online alle "var" in "let".
*/

let map = L.map('JewelleryMap').setView([51.21622, 4.42027], 17);


L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);






// bepaal de rechthoek rondom het gebouw van AP
var circle = L.circle([51.21622, 4.42027], {
    color: 'red',
    fillColor: '#f03',
    fillOpacity: 0.5,
    radius: 500
}).addTo(map);

// kleur de rechthoek in met de rode AP-kleur
// define rectangle geographical bounds
// define rectangle geographical bounds
var bounds = [[54.559322, -5.767822], [56.1210604, -3.021240]];

// create an orange rectangle
L.rectangle(bounds, {color: "#ff7800", weight: 1}).addTo(map);

// create an orange rectangle
L.rectangle(bounds, {color: "#ff7800", weight: 1}).addTo(map);

L.marker([51.21622668, 4.42027471]).addTo(map);

var popup = L.popup()
    .setLatLng(latlng)
    .setContent('<p>Antwerpen 2018<br/>This is a nice popup.</p>')
    .openOn(map);

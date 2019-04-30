var varMap = L.map( 'map', {center: [10.0, 5.0], minZoom: 2, zoom: 2});

var MapLink = L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 18,
    attribution: '&copy; <a href="http://openstreetmap.org">OpenStreetMap</a>'
    }).addTo(varMap);
var OpenTopoMap = L.tileLayer('https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png', {
	maxZoom: 17,
	attribution: '&copy; <a href="http://openstreetmap.org">OpenStreetMap</a>'
});
var OpenMapSurfer_Roads = L.tileLayer('https://maps.heigit.org/openmapsurfer/tiles/roads/webmercator/{z}/{x}/{y}.png', {
	maxZoom: 19,
	attribution: '&copy; <a href="http://openstreetmap.org">OpenStreetMap</a>'
});
var Hydda_Full = L.tileLayer('https://{s}.tile.openstreetmap.se/hydda/full/{z}/{x}/{y}.png', {
	maxZoom: 18,
	attribution: '&copy; <a href="http://openstreetmap.org">OpenStreetMap</a>'
});
var Stamen_Toner = L.tileLayer('https://stamen-tiles-{s}.a.ssl.fastly.net/toner/{z}/{x}/{y}{r}.{ext}', {
	attribution: '&copy; <a href="http://openstreetmap.org">OpenStreetMap</a>',
	subdomains: 'abcd',
	minZoom: 0,
	maxZoom: 20,
	ext: 'png'
});
var Stamen_TonerLite = L.tileLayer('https://stamen-tiles-{s}.a.ssl.fastly.net/toner-lite/{z}/{x}/{y}{r}.{ext}', {
	attribution: '&copy; <a href="http://openstreetmap.org">OpenStreetMap</a>',
	subdomains: 'abcd',
	minZoom: 0,
	maxZoom: 20,
	ext: 'png'
});
var Stamen_Terrain = L.tileLayer('https://stamen-tiles-{s}.a.ssl.fastly.net/terrain/{z}/{x}/{y}{r}.{ext}', {
	attribution: '&copy; <a href="http://openstreetmap.org">OpenStreetMap</a>',
	subdomains: 'abcd',
	minZoom: 0,
	maxZoom: 18,
	ext: 'png'
});
var HikeBike_HikeBike = L.tileLayer('https://tiles.wmflabs.org/hikebike/{z}/{x}/{y}.png', {
	maxZoom: 19,
	attribution: '&copy; <a href="http://openstreetmap.org">OpenStreetMap</a>'
});
var Esri_WorldImagery = L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', {
  attribution: '&copy; <a href="http://openstreetmap.org">OpenStreetMap</a>',
  maxZoom: 20
});
var Stamen_TonerLabels = L.tileLayer('https://stamen-tiles-{s}.a.ssl.fastly.net/toner-labels/{z}/{x}/{y}{r}.{ext}', {
	attribution: '&copy; <a href="http://openstreetmap.org">OpenStreetMap</a>',
	subdomains: 'abcd',
	minZoom: 0,
	maxZoom: 20,
	ext: 'png'
});

var baseMaps = {
    "MapLink":MapLink,
    "OpenTopoMap": OpenTopoMap,
    "OpenMapSurfer_Roads": OpenMapSurfer_Roads,
    "Hydda_Full": Hydda_Full,
    "Stamen_Toner": Stamen_Toner,
    "Stamen_TonerLite":Stamen_TonerLite,
    "Stamen_Terrain":Stamen_Terrain,
    "HikeBike_HikeBike":HikeBike_HikeBike,
    "Esri_WorldImagery":Esri_WorldImagery,
    };
L.control.layers(baseMaps).addTo(varMap);
var myURL = jQuery( 'script[src$="leaf-demo.js"]' ).attr( 'src' ).replace( 'leaf-demo.js', '' );

var myIcon = L.icon({
  iconUrl: myURL + 'images/pin24.png',
  iconRetinaUrl: myURL + 'images/pin48.png',
  iconSize: [29, 24],
  iconAnchor: [9, 21],
  popupAnchor: [0, -14]
});

var markerClusters = L.markerClusterGroup();

for ( var i = 0; i < markers.length; ++i )
{
  var popup = markers[i].name +
              '<br/>' + markers[i].city +
              '<br/><b>IATA/FAA:</b> ' + markers[i].iata_faa +
              '<br/><b>ICAO:</b> ' + markers[i].icao +
              '<br/><b>Altitude:</b> ' + Math.round( markers[i].alt * 0.3048 ) + ' m' +
              '<br/><b>Timezone:</b> ' + markers[i].tz;

  var m = L.marker( [markers[i].lat, markers[i].lng])
                  .bindPopup( popup );

  markerClusters.addLayer( m );
}

varMap.addLayer( markerClusters );

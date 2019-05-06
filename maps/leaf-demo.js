var varMap = L.map('map', { center: [10.0, 5.0], minZoom: 2, zoom: 15 }).fitWorld();

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
  maxZoom: 18
});
var Stamen_TonerLabels = L.tileLayer('https://stamen-tiles-{s}.a.ssl.fastly.net/toner-labels/{z}/{x}/{y}{r}.{ext}', {
  attribution: '&copy; <a href="http://openstreetmap.org">OpenStreetMap</a>',
  subdomains: 'abcd',
  minZoom: 0,
  maxZoom: 20,
  ext: 'png'
});

var baseMaps = {
  "MapLink": MapLink,
  "OpenTopoMap": OpenTopoMap,
  "OpenMapSurfer_Roads": OpenMapSurfer_Roads,
  "Hydda_Full": Hydda_Full,
  "Stamen_Toner": Stamen_Toner,
  "Stamen_TonerLite": Stamen_TonerLite,
  "Stamen_Terrain": Stamen_Terrain,
  "HikeBike_HikeBike": HikeBike_HikeBike,
  "Esri_WorldImagery": Esri_WorldImagery,
};
L.control.layers(baseMaps).addTo(varMap);
var myURL = jQuery('script[src$="leaf-demo.js"]').attr('src').replace('leaf-demo.js', '');
// var myIcon = L.icon({
//   iconUrl: myURL + '../images/tractor.png',
//   iconRetinaUrl: myURL + 'images/tractor.png',
//   iconSize: [40, 40],
//   iconAnchor: [9, 21],
//   popupAnchor: [0, -14]
// });
var myIcon = L.icon({
  iconUrl: myURL + '../images/tractor.png',
  iconSize: [40, 40],
});
var russia = L.icon({
  iconUrl: myURL + '../images/russia.png',
  iconSize: [40, 40],

});
var india = L.icon({
  iconUrl: myURL + '../images/india.png',
  iconSize: [40, 40],
});
var unitedStaes = L.icon({
  iconUrl: myURL + '../images/united-states.png',
  iconSize: [40, 40],
});
var china = L.icon({
  iconUrl: myURL + '../images/china.png',
  iconSize: [40, 40],
});
var japan = L.icon({
  iconUrl: myURL + '../images/japan.png',
  iconSize: [40, 40],
});
var france = L.icon({
  iconUrl: myURL + '../images/france.png',
  iconSize: [40, 40],
});
var australia = L.icon({
  iconUrl: myURL + '../images/australia.png',
  iconSize: [40, 40],
});
var southAfrica = L.icon({
  iconUrl: myURL + '../images/south-africa.png',
  iconSize: [40, 40],
});
var portugal = L.icon({
  iconUrl: myURL + '../images/portugal.png',
  iconSize: [40, 40],
});
var markerClusters = L.markerClusterGroup();

// for ( var i = 0; i < markers.length; ++i )
// {
//   // console.log(markers[i].name);
//   var popup = markers[i].name +
//               '<br/>' + markers[i].city +
//               '<br/><b>IATA/FAA:</b> ' + markers[i].iata_faa +
//               '<br/><b>ICAO:</b> ' + markers[i].icao +
//               '<br/><b>Altitude:</b> ' + Math.round( markers[i].alt * 0.3048 ) + ' m' +
//               '<br/><b>Timezone:</b> ' + markers[i].tz;
//   // var m = L.marker( [markers[i].lat, markers[i].lng],{icon: myIcon}).bindPopup(popup).on('click', openDiv);
//   var m = L.marker( [markers[i].lat, markers[i].lng],{icon: myIcon}).bindPopup(popup).on('click', openDiv);
//   markerClusters.addLayer( m );
// }
for (var i = 0; i < markers.length; ++i) {
  var city = markers[i].city;
  var cityArr = city.split(",");
  console.log(cityArr[cityArr.length - 1]);
  var popup = markers[i].name +
    '<br/>' + markers[i].city +
    '<br/><b>IATA/FAA:</b> ' + markers[i].iata_faa +
    '<br/><b>ICAO:</b> ' + markers[i].icao +
    '<br/><b>Altitude:</b> ' + Math.round(markers[i].alt * 0.3048) + ' m' +
    '<br/><b>Timezone:</b> ' + markers[i].tz;
  if (cityArr[cityArr.length - 1] == ' Russia') {
    var m = L.marker([markers[i].lat, markers[i].lng], { icon: russia }).bindPopup(popup).on('click', openDiv);
    markerClusters.addLayer(m);
  }
  else if (cityArr[cityArr.length - 1] == ' India') {
    var m = L.marker([markers[i].lat, markers[i].lng], { icon: india }).bindPopup(popup).on('click', openDiv);
    markerClusters.addLayer(m);
  }
  else if (cityArr[cityArr.length - 1] == ' United States') {
    var m = L.marker([markers[i].lat, markers[i].lng], { icon: unitedStaes }).bindPopup(popup).on('click', openDiv);
    markerClusters.addLayer(m);
  }
  else if (cityArr[cityArr.length - 1] == ' Japan') {
    var m = L.marker([markers[i].lat, markers[i].lng], { icon: japan }).bindPopup(popup).on('click', openDiv);
    markerClusters.addLayer(m);
  }
  else if (cityArr[cityArr.length - 1] == ' France') {
    var m = L.marker([markers[i].lat, markers[i].lng], { icon: france }).bindPopup(popup).on('click', openDiv);
    markerClusters.addLayer(m);
  }
  else if (cityArr[cityArr.length - 1] == ' China') {
    var m = L.marker([markers[i].lat, markers[i].lng], { icon: china }).bindPopup(popup).on('click', openDiv);
    markerClusters.addLayer(m);
  }
  else if (cityArr[cityArr.length - 1] == ' Australia') {
    var m = L.marker([markers[i].lat, markers[i].lng], { icon: australia }).bindPopup(popup).on('click', openDiv);
    markerClusters.addLayer(m);
  }
  else if (cityArr[cityArr.length - 1] == ' Portugal') {
    var m = L.marker([markers[i].lat, markers[i].lng], { icon: portugal }).bindPopup(popup).on('click', openDiv);
    markerClusters.addLayer(m);
  }
  else if (cityArr[cityArr.length - 1] == ' South Africa') {
    var m = L.marker([markers[i].lat, markers[i].lng], { icon: southAfrica }).bindPopup(popup).on('click', openDiv);
    markerClusters.addLayer(m);
  }
  else {
    var m = L.marker([markers[i].lat, markers[i].lng], { icon: myIcon }).bindPopup(popup).on('click', openDiv);
    markerClusters.addLayer(m);
  };
}
function clickZoom2(e) {
  map.panTo(e.target.getLatLng(), 0);
}
function openDiv(e) {
  var coord = e.latlng;
  var lat = coord.lat;
  var lng = coord.lng;
  for (var i = 0; i < markers.length; i++) {
    if ((markers[i].lat == coord.lat && markers[i].lng == coord.lng)) {
      console.log('Match Found');
      console.log(markers[i].city);
      console.log(markers[i].icao);
      console.log(markers[i].tz);
      document.getElementById('mapTop').style.display = "inline-block";
      var pogo = '<table class="table table-bordered"><tr><td>Name</td><td>' + markers[i].name + '</td></tr><tr><td>City</td><td>' + markers[i].city + '</td></tr><tr><td>ICAO</td><td>' + markers[i].icao + '</td></tr><tr><td>IATA-FAA</td><td>' + markers[i].iata_faa + '</td></tr><tr><td>ICAO</td><td>' + markers[i].icao + '</td></tr><tr><td>Latitude</td><td>' + markers[i].lat + '</td></tr><tr><td>Longitude</td><td>' + markers[i].lng + '</td></tr><tr><td>Altitude</td><td>' + markers[i].alt + '</td></tr><tr><td>Timezone</td><td>' + markers[i].tz + '</td></tr></table>';
      document.getElementById('mapTop').innerHTML = pogo;
    }
    else {
      console.log('Match Not Found');
    }
  }
}
function dust() {
  document.getElementById('mapTop').style.display = 'none';
}
varMap.addLayer(markerClusters);


// function centerLeafletMapOnMarker(map, marker) {
//   var latLngs = [ marker.getLatLng() ];
//   var markerBounds = L.latLngBounds(latLngs);
//   map.fitBounds(markerBounds);
// }
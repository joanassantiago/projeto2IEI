var map = new L.Map("myMap", {center: [40.633258,-8.659097],zoom: 15});
var osmUrl="http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png";
var osmAttrib="Map data OpenStreetMap contributors";
var osm = new L.TileLayer(osmUrl, {attribution: osmAttrib});
map.addLayer(osm);
map.on("click", showCoordinates);
function showCoordinates(e){
    var s = document.getElementById("coordinates");
    s.innerHTML = "Latitude, Longitude = "+e.latlng.lat+", "+e.latlng.lng;
}

var pontos = [
    L.marker([40.633258, -8.659097]),
    
    ];
for(let i in pontos) {
    pontos[i].addTo(map);
}
L.marker([40.633258, -8.659097]).bindPopup("LABI@DETI").addTo(map);

var grupo = new L.featureGroup(pontos);
map.fitBounds(grupo.getBounds());

var reitoria = L.polygon(
    [ [40.63102, -8.65793], [40.63149, -8.65731],
        [40.63126, -8.65699], [40.63078, -8.65759] ],
    { color: "red" } );
reitoria.addTo(map);

var marker;
var potholearray = [];
var speedbumberarray = [];
var markerarray = [];

function initialize() {
  var Greensboro = new google.maps.LatLng(36.0726, -79.7920);
  var mapOptions = {
    zoom: 12,
    center: Greensboro
  }

  var map = new google.maps.Map(document.getElementById("map-canvas"), mapOptions);

  $.getJSON("data/data.json", function(data) {
    const failureToStopArr = data.failure_to_stop_at_stoplight
    for (var i in failureToStopArr) {
        var myLatlng = new google.maps.LatLng(failureToStopArr[i].latitude,failureToStopArr[i].longitude);

        var marker = new google.maps.Marker({
            draggable: false,
            position: myLatlng,
            map: map,
            icon: "img/red_light.png",
            optimized: false,
        });

        markerarray.push(marker);

        // google.maps.event.addListener(marker, "mouseover", mouseover);
        // google.maps.event.addListener(marker, "mouseout", mouseout);

        // google.maps.event.addListener(markerarray[i], "click", function(event) {
        //     infowindow.setContent('<font size="4pt">Watch out! This is an accident prone area</font>');
        //     infowindow.setPosition(this.position);
        //     infowindow.open(map, this);
        //     document.getElementById("accidentproneaudio").play();
        // });
    }

    // var infowindow = new google.maps.InfoWindow({});

  });
}

google.maps.event.addDomListener(window, "load", initialize);
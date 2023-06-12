let marker;
let potholearray = [];
let speedbumberarray = [];
let markerarray = [];


let map;
function initialize() {
    let Greensboro = new google.maps.LatLng(36.0726, -79.7920);
    let mapOptions = {
        zoom: 12,
        center: Greensboro
    }

    map = new google.maps.Map(document.getElementById("map-canvas"), mapOptions);
    $.getJSON("data/data.json", function (data) {
        const failureToStopArr = data.failure_to_stop_at_stoplight
        for (let i in failureToStopArr) {
            const geocoder = new google.maps.Geocoder();

            const parts = failureToStopArr[i].split('/');

            if (parts.length == 1) {
                console.log('ignoring ' + parts);
            } else {
                const address = parts[0] + ' Greensboro, NC and ' + parts[1];



                let myLatlng;
                geocoder.geocode({ address: address }, function(results, status) {
                    if (status === google.maps.GeocoderStatus.OK) {
                        let location = results[0].geometry.location;
                        let latitude = location.lat();
                        let longitude = location.lng();
                        myLatlng = new google.maps.LatLng(latitude, longitude);
                    } else {
                        console.log('failed');
                    }
                }).then((e) => {
                    // myLatlng = new google.maps.LatLng(failureToStopArr[i].latitude, failureToStopArr[i].longitude);

                    let marker = new google.maps.Marker({
                        draggable: false,
                        position: myLatlng,
                        map: map,
                        icon: "img/red_light.png",
                        optimized: false,
                    });

                    markerarray.push(marker);
                })
            }; // ignore addresses, they're not intersections

        }
    });
}

function addMarker() {
    // $.getJSON("data/data.json", function (data) {
    //     const failureToStopArr = data.failure_to_stop_at_stoplight
    //     for (let i in failureToStopArr) {
    //         const geocoder = new google.maps.Geocoder();
    //
    //         let myLatlng;
    //         // await geocoder.geocode({ address: '510 Plantation Drive, Myrtle Beach SC, 29575' }, function(results, status) {
    //         //     if (status === google.maps.GeocoderStatus.OK) {
    //         //         let location = results[0].geometry.location;
    //         //         let latitude = location.lat();
    //         //         let longitude = location.lng();
    //         //         myLatlng = new google.maps.LatLng(latitude, longitude);
    //         //         console.log('Latitude: ' + latitude);
    //         //         console.log('Longitude: ' + longitude);
    //         //     } else {
    //         //         console.log('failed');
    //         //     }
    //         // })
    //
    //
    //         myLatlng = new google.maps.LatLng(failureToStopArr[i].latitude, failureToStopArr[i].longitude);
    //
    //         let marker = new google.maps.Marker({
    //             draggable: false,
    //             position: myLatlng,
    //             map: map,
    //             icon: "img/red_light.png",
    //             optimized: false,
    //         });
    //
    //         markerarray.push(marker);
    //
    //         marker.setMap(map);
    //
    //         // google.maps.event.addListener(marker, "mouseover", mouseover);
    //         // google.maps.event.addListener(marker, "mouseout", mouseout);
    //
    //         // google.maps.event.addListener(markerarray[i], "click", function(event) {
    //         //     infowindow.setContent('<font size="4pt">Watch out! This is an accident prone area</font>');
    //         //     infowindow.setPosition(this.position);
    //         //     infowindow.open(map, this);
    //         //     document.getElementById("accidentproneaudio").play();
    //         // });
    //     }
    // });
}

google.maps.event.addDomListener(window, "load", initialize);

// addMarker().then(r => console.log('added marker'));


// Initialize and add the map
// let map;
//
// async function initMap() {
//     // The location of Uluru
//     const position = { lat: -25.344, lng: 131.031 };
//     // Request needed libraries.
//     //@ts-ignore
//     const { Map } = await google.maps.importLibrary("maps");
//     const { AdvancedMarkerElement } = await google.maps.importLibrary("marker");
//
//     // The map, centered at Uluru
//     map = new Map(document.getElementById("map"), {
//         zoom: 12,
//         center: position,
//         mapId: "DEMO_MAP_ID",
//     });
//
//     // The marker, positioned at Uluru
//     const marker = new AdvancedMarkerElement({
//         map: map,
//         position: position,
//         title: "Uluru",
//         icon: "img/red_light.png",
//         optimized: false
//     });
// }
//
// initMap();
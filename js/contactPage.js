// We load google maps in #contact-map
// based on the instructions from https://developers.google.com/maps/tutorials/fundamentals/adding-a-google-map
function initialize() {

    // Get the text from the form
    var mapHeader = $("#map_header").html();
    var mapContent = $("#map_content").html();

    var icon = $("#contact-map").attr("data-icon");

    var mapCanvas = document.getElementById('contact-map');
    var mapOptions = {
        center: new google.maps.LatLng(35.039074257019415, 33.9828112882102),
        zoom: 16,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    }
    var map = new google.maps.Map(mapCanvas, mapOptions);
    // Add a marker
    var markerOptions = {
        position: new google.maps.LatLng(35.039074257019415, 33.9828112882102),
        map: map
    };
    // If we have set a custom icon, use it
    if (icon) {
        markerOptions.icon = icon;
    }
    var marker = new google.maps.Marker(markerOptions);
    
    // Add info window based on https://developers.google.com/maps/documentation/javascript/examples/infowindow-simple
    var infowindow = new google.maps.InfoWindow({
        content: "<b>" + mapHeader + "</b><br>" + mapContent
    });
    marker.addListener('click', function () {
        infowindow.open(map, marker);
    });
}
google.maps.event.addDomListener(window, 'load', initialize);

// We enable the form validation
$("#commentForm").validate();


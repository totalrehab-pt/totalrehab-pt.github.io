$(document).ready(function() {
  $('#slideshow').crossSlide({
    sleep: 4,
    fade: 1
  }, [
    { src: 'images/athlete.gif' },
    { src: 'images/bungeerunner.gif' },
    { src: 'images/gymarea.gif' },
    { src: 'images/gymarea2.gif' },
    { src: 'images/handtherapy.gif' },
    { src: 'images/handtherapy2.gif' },
    { src: 'images/ladder.gif' },
    { src: 'images/peds.gif' },
    { src: 'images/receptionist.gif' },
    { src: 'images/elderlyman.gif' }
  ]);

  var $mapCanvas = $('#map_canvas');
  if ($mapCanvas.length) {
    var mapOptions = {
      center: new google.maps.LatLng(41.7293671, -92.35),
      zoom: 9,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    var map = new google.maps.Map($mapCanvas[0], mapOptions);
    var mapInfoWindow = new google.maps.InfoWindow();

    var grinnellMarker = new google.maps.Marker({
      position: new google.maps.LatLng(41.7293671, -92.7272963),
      map: map,
      title: "Total Rehab Grinnell Office"
    });
    var grinnellContent = '<div class="map_info">'+
    '<h2>Total Rehab Grinnell Office</h2>'+
    '<div class="adr">'+
    ' <div class="street-address">Southview Plaza-Suite #4</div>'+
    ' <div class="street-address">234 West Street South</div>'+
    ' <span class="locality">Grinnell</span>'+
    ' <abbr class="region" title="Iowa">IA</abbr>'+
    ' <span class="postal-code">50112</span>'+
    '</div>'+
    '<div class="phone">'+
    '  Phone:'+
    '  <span class="tel">'+
    '    <span>641-236-4506</span>'+
    '  </span></span>'+
    '</div>'+
    '<div class="phone">'+
    '  Fax:'+
    '  <span class="tel">'+
    '    <span class="type">Fax</span><span>'+
    '    <span>641-236-4316</span>'+
    '  </span></span>'+
    '</div>'+
    '<div class="hours">'+
    '  <p class="label">Hours</p>'+
    '  <p class="availability">Monday - Friday</p>'+
    '  <p class="availability">7:30am - 6pm</p>'+
    '</div>'+
    '</div>';
    google.maps.event.addListener(grinnellMarker, 'click', function() {
      mapInfoWindow.setContent(grinnellContent);
      mapInfoWindow.open(map, grinnellMarker);
    });

    var williamsburgMarker = new google.maps.Marker({
      position: new google.maps.LatLng(41.66146759999999, -92.00864539999999),
      map: map,
      title: "Total Rehab Williamsburg Office"
    });
    var williamsburgContent = '<div class="map_info">'+
    '<h2>Total Rehab Williamsburg Office</h2>'+
    '<div class="adr">'+
    ' <div class="street-address">509 Court Street</div>'+
    ' <span class="locality">Williamsburg</span>'+
    ' <abbr class="region" title="Iowa">IA</abbr>'+
    ' <span class="postal-code">52361</span>'+
    '</div>'+
    '<div class="phone">'+
    '  Phone:'+
    '  <span class="tel">'+
    '    <span>319-668-9453</span>'+
    '  </span></span>'+
    '</div>'+
    '<div class="hours">'+
    '  <p class="label">Hours</p>'+
    '  <span class="availability">Available by appointment</span>'+
    '</div>'+
    '</div>';
    google.maps.event.addListener(williamsburgMarker, 'click', function() {
      mapInfoWindow.setContent(williamsburgContent);
      mapInfoWindow.open(map, williamsburgMarker);
    });
  }
});

$(document).ready(function() {
  var $mapCanvas = $('#map_canvas');
  if ($mapCanvas.length) {
    var LOCATIONS = [
      {
        position: new google.maps.LatLng(41.7293671, -92.7272963),
        title: "Total Rehab Grinnell Office",
        popup: '<div class="map_info">'+
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
          '    <span class="type">Fax</span>'+
          '    <span>641-236-4316</span>'+
          '  </span>'+
          '</div>'+
          '<div class="hours">'+
          '  <p class="label">Hours</p>'+
          '  <p class="availability">Monday - Friday</p>'+
          '  <p class="availability">7:30am - 6pm</p>'+
          '</div>'+
          '</div>'
      },
      {
        position: new google.maps.LatLng(41.66146759999999, -92.00864539999999),
        title: "Total Rehab Williamsburg Office",
        popup: '<div class="map_info">'+
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
          '  </span>'+
          '</div>'+
          '<div class="hours">'+
          '  <p class="label">Hours</p>'+
          '  <span class="availability">Available by appointment</span>'+
          '</div>'+
          '</div>'
      },
      {
        position: new google.maps.LatLng(41.5818061,-92.8444895),
        title: "Diamond Trail Fitness Center",
        popup: '<div class="map_info">'+
          '<h2>Diamond Trail Fitness Center</h2>'+
          '<div class="adr">'+
          ' <div class="street-address">12498 Highway F62 East</div>'+
          ' <span class="locality">Sully</span>'+
          ' <abbr class="region" title="Iowa">IA</abbr>'+
          ' <span class="postal-code">50251</span>'+
          '</div>'+
          '<div class="phone">'+
          '  Phone:'+
          '  <span class="tel">'+
          '    <span>641-594-3303</span>'+
          '  </span>'+
          '</div>'+
          '<div class="phone">'+
          '  Fax:'+
          '  <span class="tel">'+
          '    <span class="type">Fax</span><span>'+
          '    <span>641-236-4316</span>'+
          '  </span></span>'+
          '</div>'+
          '</div>'
      }
    ];
    var mapOptions = {
      center: new google.maps.LatLng(41.7293671, -92.35),
      zoom: 9,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    var map = new google.maps.Map($mapCanvas[0], mapOptions);
    var mapInfoWindow = new google.maps.InfoWindow();

    $.each(LOCATIONS, function() {
      var location = this;
      var marker = new google.maps.Marker({
        map: map,
        position: location.position,
        title: location.title
      });
      google.maps.event.addListener(marker, 'click', function() {
        mapInfoWindow.setContent(location.popup);
        mapInfoWindow.open(map, marker);
      });
    });
  }
});

(function($) {
  $.fn.curvyCorners = function(options) {
		return this.each(function() {
			new $.CurvyCorners(this, options);
		});
	};
	
	$.CurvyCorners = function(e, o) {
	  var options = o || {};

    var defaults = {
      antiAlias: true,
      autoPad: false
    }

    var settings = {}
    var settings = $.extend(settings, defaults, options);
    var corners = new curvyCorners(settings, e);
    corners.applyCornersToAll();
  }
})(jQuery);

$(document).ready(function() {
  $('#patients').curvyCorners({br: { radius: 20 }});
});

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
    { src: 'images/receptionist.gif' }
  ]);
});


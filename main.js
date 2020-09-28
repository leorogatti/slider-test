$(document).ready(function(){
  let pauseInterval = false;

  let interval = window.setInterval(rotateSlides, 3000)

  function rotateSlides(){

    let $firstSlide = $('#carousel').find('div:first');

    let width = $firstSlide.width();

    $firstSlide.animate({marginLeft: -width}, 1000, function(){
      let $lastSlide = $('#carousel').find('div:last')
      $lastSlide.after($firstSlide);

      $firstSlide.css({marginLeft: 0})
    });
  }

  $('#back').click(previousSlide);
  $('#next').click(nextSlide);
  $('.slide-image').click(nextSlide);

  function previousSlide(){
    window.clearInterval(interval);
    let $currentSlide = $('#carousel').find('div:first');
    let width = $currentSlide.width();
    let $previousSlide = $('#carousel').find('div:last')
    $previousSlide.css({marginLeft: -width})
    $currentSlide.before($previousSlide);
    $previousSlide.animate({marginLeft: 0}, 1000, function(){
      interval = window.setInterval(rotateSlides, 3000);
    });
  }

  function nextSlide(){
    window.clearInterval(interval);
    let $currentSlide = $('#carousel').find('div:first');
    let width = $currentSlide.width();
    $currentSlide.animate({marginLeft: -width}, 1000, function(){
      let $lastSlide = $('#carousel').find('div:last')
      $lastSlide.after($currentSlide);
      $currentSlide.css({marginLeft: 0})
      interval = window.setInterval(rotateSlides, 3000);
    });
  }

});

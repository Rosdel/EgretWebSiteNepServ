$(window).scroll(function(e){ 
    var $el = $('#.top-nav'); 
    var isPositionFixed = ($el.css('position') == 'fixed');
    if ($(this).scrollTop() > 400 && !isPositionFixed){ 
      $el.css({'position': 'fixed', 'top': '0px'}); 
    }
    if ($(this).scrollTop() < 400 && isPositionFixed){
      $el.css({'position': 'static', 'top': '0px'}); 
    } 
  });
$("#slider").owlCarousel({
  loop: true,
  margin: 15,
  nav: false,
  autoplay: true,
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 2,
    },
    1000: {
      items: 3,
    },
  },
});

$("#slider1").owlCarousel({
  loop: true,
  margin: 15,
  nav: false,
  autoplay: true,
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 1,
    },
    1000: {
      items: 1,
    },
  },
});

$("#slider2").owlCarousel({
  loop: true,
  margin: 15,
  nav: false,
  autoplay: true,
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 1,
    },
    1000: {
      items: 1,
    },
  },
});

$(window).scroll(function(){
  if ($(this).scrollTop() > 100) {
      $('.scrollup').fadeIn();
  } else {
      $('.scrollup').fadeOut();
  }
}); 

$('.scrollup').click(function(){
  $("html, body").animate({ scrollTop: 0 }, 2000);
  return false;
});
$('.banner_container').slick({
  dots: true,
  infinite: true,
  speed: 2000,
  prevArrow:
    '<span class="prev_arrow"><i class="fa fa-chevron-left" aria-hidden="true"></i></span>',
  nextArrow:
    '<span class="next_arrow"><i class="fa fa-chevron-right" aria-hidden="true"></i></span>',
  fade: true,
  arrows: false,
  autoplay: true,
  cssEase: 'linear',
  slidesToShow: 1,
  slidesToScroll: 1,
});

//==============================================
$('.mobile_slider').slick({
  dots: true,
  arrows: false,
  infinite: true,
  autoplay: true,
  speed: 500,
  autoplaySpeed: 1000,
  speed: 300,
  slidesToShow: 1,
  slidesToScroll: 1,
  mobileFirst: true,
  responsive: [
    {
      breakpoint: 1024,
      settings: 'unslick',
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ],
});

// ===============================================
$('.teacher_mobile_slider').slick({
  dots: true,
  arrows: false,
  infinite: true,
  autoplay: true,
  speed: 500,
  autoplaySpeed: 1000,
  speed: 300,
  slidesToShow: 1,
  slidesToScroll: 1,
  mobileFirst: true,
  responsive: [
    {
      breakpoint: 1024,
      settings: 'unslick',
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ],
});

// ========================================

$('.slider-for').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: true,
  fade: true,
  asNavFor: '.slider-nav',
  prevArrow:
    '<span class="prev_arrow"><i class="fa fa-chevron-left" aria-hidden="true"></i></span>',
  nextArrow:
    '<span class="next_arrow"><i class="fa fa-chevron-right" aria-hidden="true"></i></span>',
});
$('.slider-nav').slick({
  slidesToShow: 5,
  slidesToScroll: 1,
  asNavFor: '.slider-for',
  arrows: false,
  dots: false,
  autoplay: true,
  autoplaySpeed: 1000,
  speed: 500,
  centerMode: true,
  focusOnSelect: true,
  responsive: [
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
      },
    },
    {
      breakpoint: 480,
      settings: {
        centerMode: false,
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ],
});

// =========================

$('.blog_slider').slick({
  dots: false,
  arrows: false,
  infinite: true,
  speed: 300,
  centerMode: true,
  centerPadding: '60px',
  slidesToShow: 4,
  slidesToScroll: 4,
  autoplay: true,
  autoplaySpeed: 1000,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ],
});

// =====================
let map;

function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
    center: { lat: -34.397, lng: 150.644 },
    zoom: 8,
  });
}
// ==============================
window.onscroll = function () {
  myFunction();
};
var navbar = document.getElementById('navbar');

// Get the offset position of the navbar
// var sticky = navbar.offsetTop;

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.pageYOffset > 100) {
    navbar.classList.add('sticky');
  } else {
    navbar.classList.remove('sticky');
  }
}

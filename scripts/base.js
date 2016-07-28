window.onload = function() { // после загрузки страницы

	var scrollUp = document.getElementById('scrollup'); // найти элемент

	// scrollUp.onclick = function() { //обработка клика
	// 	window.scrollTo(0,0);
	// };

// show button

	window.onscroll = function () { // при скролле показывать и прятать блок
		if ( window.pageYOffset > 600 ) {
			scrollUp.style.display = 'block';
		} else {
			scrollUp.style.display = 'none';
		}
	};
};



// ПЛАВНЫЙ ПЕРЕХОД ПО ЯКОРЯМ
$(document).ready(function() {
    $("a").click(function () { 
      var elementClick = $(this).attr("href");
      var destination = $(elementClick).offset().top;
      $('html,body').animate( { scrollTop: destination }, 1200 );
      return false;
    });
  });





$('.responsive').slick({
  dots: false,
  infinite: true,
  speed: 800,
  slidesToShow: 4,
  slidesToScroll: 4,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});
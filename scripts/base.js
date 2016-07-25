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
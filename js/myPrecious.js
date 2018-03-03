jQuery(document).ready(function($) {$(document).ready(function () {
		// Active navbar status
		$('nav ul li a').click(function (e) {
	        e.preventDefault();
	        console.log("ok");
	        $('nav ul li a').removeClass('active');
	        $('nav ul li a').css('text-decoration','none');
	        $(this).addClass('active');
	        $(this).css('text-decoration','underline');              
		});            
		 	// Scrollspy fluide
		$(function() {
			$('header a').on('click', function(e) {
				e.preventDefault();
				var hash = this.hash;
				$('html, body').animate({
					scrollTop: $(this.hash).offset().top
				}, 1000, function() {
					window.location.hash = hash;
				});
			});
		});       			            
	});
});
/* global Cookies */

/* eslint-disable no-use-before-define */
var driblesfifa = driblesfifa || {};
/* eslint-enable no-use-before-define */

driblesfifa.nav = (function () {
	/*
	navegacao do site
	====================
	*/
	$('.js-page-trigger').on('click', function (e) {
		e.preventDefault();
		window.scrollTo(0, 0);
		$('.js-page').addClass('hidden-xs-up');
		var page = '#' + this.href.split('#')[1];
		$(page).removeClass('hidden-xs-up');
	});

	/*
	cookie videogame
	====================
	*/
	var $videogame = $('.js-videogame');
	var alterarVideogame = function () {
		var videogame = Cookies.get('videogame');
		$videogame.removeClass('active');
		if (typeof videogame !== 'undefined' && videogame === 'ps') {
			$videogame.filter('[data-id="ps"]').addClass('active');
			$('body').addClass('ps');
		} else {
			$videogame.filter('[data-id="xbox"]').addClass('active');
			$('body').removeClass('ps');
		}
	};
	alterarVideogame();

	$videogame.on('click', function (e) {
		e.preventDefault();
		var videogame = $(this).attr('data-id');
		Cookies.set('videogame', videogame, {expires: 365, path: '/'});
		alterarVideogame();
	});
})();

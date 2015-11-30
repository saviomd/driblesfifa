/* global Cookies, ga */

var driblesfifa = driblesfifa || {};

driblesfifa.nav = (function () {
	/*
	navegacao do site
	====================
	*/
	$('.navbar-brand, .list-group--home a').on('click', function (e) {
		e.preventDefault();
		$('.section').addClass('hidden-xs-up');
		var section = '#' + this.href.split('#')[1];
		$(section).removeClass('hidden-xs-up');
		if (typeof ga !== 'undefined') {
			ga('send', 'event', 'Dribles FIFA', 'Navegação', section.split('#')[1]);
		}
	});

	/*
	cookie videogame
	====================
	*/
	var alterarVideogame = function () {
		var videogame = Cookies.get('videogame');
		$('.videogames').find('.btn').removeClass('active');
		if (typeof videogame !== 'undefined' && videogame === 'ps') {
			$('#ps').addClass('active');
			$('body').addClass('ps');
		} else {
			$('#xbox').addClass('active');
			$('body').removeClass('ps');
		}
	};
	alterarVideogame();

	$('.videogames').find('.btn').on('click', function (e) {
		e.preventDefault();
		var videogame = $(this).attr('id');
		Cookies.set('videogame', videogame, {expires: 365, path: '/'});
		alterarVideogame();
		if (typeof ga !== 'undefined') {
			ga('send', 'event', 'Dribles FIFA', 'Seleção de videogame', videogame);
		}
	});

	/*
	rodape
	====================
	*/
	if (typeof ga !== 'undefined') {
		$('.copy a').on('click', function () {
			ga('send', 'event', 'Dribles FIFA', 'Links no rodapé', $(this).text());
		});
	}
})();

/* eslint-disable no-use-before-define */
var driblesfifa = driblesfifa || {};
/* eslint-enable no-use-before-define */

driblesfifa.filter = (function () {
	var $currentFilter;
	$('.js-filter-current').on('click', function () {
		$currentFilter = $(this);
	});

	$('.js-filter').on('click', function (e) {
		e.preventDefault();
		var $this = $(this);
		var filter = $this.attr('data-filter');
		var $list = $('.js-list-' + $this.attr('data-list'));
		var $commands = $list.find('.js-movement');
		$this.addClass('active').siblings().removeClass('active');
		$currentFilter.text($this.text());
		if (filter === 'Todos') {
			$commands.removeClass('hidden-xs-up');
		} else if (filter === 'Novos') {
			$commands.addClass('hidden-xs-up').filter('[data-new="1"]').removeClass('hidden-xs-up');
		} else {
			$commands.addClass('hidden-xs-up').filter('[data-type="' + filter + '"]').removeClass('hidden-xs-up');
		}
	});
})();

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

/* eslint-disable no-use-before-define */
var driblesfifa = driblesfifa || {};
/* eslint-enable no-use-before-define */

driblesfifa.share = (function () {
	/*
	popup share
	====================
	*/
	$('.js-link-share').on('click', function (e) {
		e.preventDefault();
		var $this = $(this);
		var url = $this.attr('href');
		window.open(url, 'share', 'width=500, height=500, left=100, top=100, location=0, menubar=0, toolbar=0, status=0, scrollbars=1, resizable=1');
	});
})();

/* eslint-disable no-use-before-define */
var driblesfifa = driblesfifa || {};
/* eslint-enable no-use-before-define */

driblesfifa.toggleBg = (function () {
	/*
	background image toggle
	====================
	*/
	$('.js-toggle-bg').on('click', function () {
		$('.home').toggleClass('home--flamengo');
	});
})();

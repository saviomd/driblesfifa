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
			$commands.removeClass('d-none');
		} else if (filter === 'Novos') {
			$commands.addClass('d-none').filter('[data-new="1"]').removeClass('d-none');
		} else {
			$commands.addClass('d-none').filter('[data-type="' + filter + '"]').removeClass('d-none');
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
		$('.js-page').addClass('d-none');
		var page = '#' + this.href.split('#')[1];
		$(page).removeClass('d-none');
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

/* global ga */

/* eslint-disable no-use-before-define */
var driblesfifa = driblesfifa || {};
/* eslint-enable no-use-before-define */

driblesfifa.tutorials = (function () {
	var templateTutorial = '<li class="mb-3 animated fadeInRight">' +
			'<a class="embed-responsive embed-responsive-4by3 js-link-tutorial" href="https://www.youtube.com/watch?v={{videoId}}" target="_blank" ga-on="click" ga-event-category="Dribles FIFA" ga-event-action="Tutoriais" ga-event-label="{{title}}">' +
				'<img alt="{{title}}" class="embed-responsive-item" src="{{thumbnail}}">' +
			'</a>' +
		'</li>';

	var tutorialsLoaded = false;

	$('.js-link-tutorials').on('click', function () {
		if (!tutorialsLoaded) {
			var $listTutorials = $('.js-list-tutorials');
			$listTutorials.html('<li class="loading"></li>');
			$.ajax({
				dataType: 'json',
				type: 'GET',
				url: 'https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=PLYAzVafIQExlXzu8RdsGrUObkeATuTbPR&maxResults=50&key=AIzaSyDG_qiaXfeAYSYcvK_RxR4mMbBPP7RRwpw'
			}).done(function (response) {
				var items = response.items;
				var html = '';
				for (var i = 0, len = items.length; i < len; i++) {
					var item = templateTutorial;
					var videoId = items[i].snippet.resourceId.videoId;
					var title = items[i].snippet.title;
					var thumbnail = items[i].snippet.thumbnails.high.url;
					item = item.replace(/{{videoId}}/g, videoId)
						.replace(/{{title}}/g, title)
						.replace(/{{thumbnail}}/g, thumbnail);
					html += item;
				}
				$listTutorials.html(html);
				tutorialsLoaded = true;
			}).fail(function () {
				$listTutorials.html('<li class="animated fadeInRight text-center">N&atilde;o foi poss&iacute;vel carregar</li>');
				if (typeof ga !== 'undefined') {
					ga('send', 'event', 'Dribles FIFA', 'Tutoriais', 'Erro - Ajax fail');
				}
			});
		}
	});
})();

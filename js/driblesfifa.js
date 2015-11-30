var driblesfifa = driblesfifa || {};

driblesfifa.cache = (function () {
	/*
	recarregar pagina se conteudo foi alterado
	====================
	*/
	applicationCache.onupdateready = function () {
		location.reload();
	};
})();

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

/* global ga */

var driblesfifa = driblesfifa || {};

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
		var $commands = $list.find('.card');
		$this.addClass('active').siblings().removeClass('active');
		$currentFilter.text($this.text());
		if (filter === 'all') {
			$commands.removeClass('hidden-xs-up');
		} else if (filter === 'new') {
			$commands.addClass('hidden-xs-up').filter('[data-new="1"]').removeClass('hidden-xs-up');
		} else {
			$commands.addClass('hidden-xs-up').filter('[data-type="' + filter + '"]').removeClass('hidden-xs-up');
		}
		if (typeof ga !== 'undefined') {
			ga('send', 'event', 'Dribles FIFA', 'Filtro', $this.attr('data-list') + ' ' + filter);
		}
	});
})();

/* global ga */

var driblesfifa = driblesfifa || {};

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
		if (typeof ga !== 'undefined') {
			ga('send', 'event', 'Dribles FIFA', 'Compartilhe', $this.attr('title'));
		}
	});
})();

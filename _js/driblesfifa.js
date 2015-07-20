/* global _gaq, cookie, List */
/*! driblesfifa js */

var driblesfifa = driblesfifa || {};

driblesfifa.load = (function() {

	if ('console' in window) {
		console.log('Original source code: http://github.com/saviomd/driblesfifa');
	}

	/*
	recarregar pagina se conteudo foi alterado
	==================================================
	*/
	applicationCache.onupdateready = function() {
		location.reload();
	};

})();

driblesfifa.nav = (function() {

	/*
	navegacao do site
	==================================================
	*/
	$('.navbar-brand, .navbar-nav a, .list-group--home a').on('click', function(e) {
		e.preventDefault();
		window.scrollTo(0, 0);
		//mostrar secao clicada
		$('.section').addClass('hidden');
		var section = '#' + this.href.split('#')[1];
		$(section).removeClass('hidden');
		//marcar secao no menu
		$('.navbar-nav li').removeClass('active');
		$('.navbar-nav a[href=' + section + ']').parent().addClass('active');
		//se visivel, fechar navegacao mobile
		var $nav = $('.navbar-collapse');
		if ($nav.hasClass('in')) {
			$nav.collapse('hide');
		}
	});

	/*
	cookie videogame
	==================================================
	*/
	var alterarVideogame = function() {
		var videogame = cookie.get('videogame');
		$('.videogames a').removeClass('active');
		if (typeof videogame !== 'undefined' && videogame === 'ps') {
			$('#ps').addClass('active');
			$('body').addClass('ps');
		} else {
			$('#xbox').addClass('active');
			$('body').removeClass('ps');
		}
	};
	alterarVideogame();

	$('.videogames a').on('click', function(e) {
		e.preventDefault();
		var videogame = $(this).attr('id');
		cookie.set('videogame', videogame, {expires:365, path:'/'});
		alterarVideogame();
	});

})();

driblesfifa.search = (function() {

	var listSkillsOptions = {
		listClass: 'js-list-skills',
		searchClass: 'js-search-field-skills',
		valueNames: ['name', 'type', 'new']
	};
	var listCelebrationsOptions = {
		listClass: 'js-list-celebrations',
		searchClass: 'js-search-field-celebrations',
		valueNames: ['name', 'type', 'new']
	};

	var listSkills = new List('skills', listSkillsOptions);
	var listCelebrations = new List('celebrations', listCelebrationsOptions);

	var $searchField = $('.js-search-field');
	var $searchClear = $('.js-search-clear');

	var changeCurrentFilter = function($elem, list) {
		$elem.closest('li').addClass('active').siblings().removeClass('active');
		$searchField.filter('[data-list="' + list + '"]').val('');
		if (list === 'skills') {
			listSkills.search();
			listSkills.filter();
		} else if (list === 'celebrations') {
			listCelebrations.search();
			listCelebrations.filter();
		}
	};

	$searchField.on('keypress', function() {
		var list = $(this).attr('data-list');
		if (list === 'skills') {
			listSkills.filter();
		} else if (list === 'celebrations') {
			listCelebrations.filter();
		}
	});

	$searchClear.on('click', function() {
		var list = $(this).attr('data-list');
		$('.js-search-field').filter('[data-list="' + list + '"]').val('');
		if (list === 'skills') {
			listSkills.search();
		} else if (list === 'celebrations') {
			listCelebrations.search();
		}
	});

	$('.js-filter-all').on('click', function(e) {
		e.preventDefault();
		var list = $(this).attr('data-list');
		changeCurrentFilter($(this), list);
	});

	$('.js-filter-new').on('click', function(e) {
		e.preventDefault();
		var list = $(this).attr('data-list');
		changeCurrentFilter($(this), list);
		if (list === 'skills') {
			listSkills.filter(function(item) {
				if (item.values().new) {
					return true;
				} else {
					return false;
				}
			});
		} else if (list === 'celebrations') {
			listCelebrations.filter(function(item) {
				if (item.values().new) {
					return true;
				} else {
					return false;
				}
			});
		}
	});

	$('.js-filter-type').on('click', function(e) {
		e.preventDefault();
		var list = $(this).attr('data-list');
		changeCurrentFilter($(this), list);
		var type = $(this).attr('data-type');
		if (list === 'skills') {
			listSkills.filter(function(item) {
				if (item.values().type === type) {
					return true;
				} else {
					return false;
				}
			});
		} else if (list === 'celebrations') {
			listCelebrations.filter(function(item) {
				if (item.values().type === type) {
					return true;
				} else {
					return false;
				}
			});
		}
	});

})();

driblesfifa.share = (function() {

	/*
	share popup
	==================================================
	*/
	$('.link-share').on('click', function(e) {
		e.preventDefault();
		var url = $(this).attr('href');
		window.open(url, 'share', 'width=500, height=500, left=100, top=100, location=0, menubar=0, toolbar=0, status=0, scrollbars=1, resizable=1');
	});

})();

driblesfifa.events = (function() {

	/*
	track events
	==================================================
	*/
	if (location.search.indexOf('a=0') === -1) {

		$('.navbar-brand, .navbar-nav a, .list-group--home .list-group-item').on('click', function() {
			_gaq.push(['_trackEvent', 'Dribles FIFA', 'Navegação', $(this).attr('href')]);
		});

		$('.videogames .btn').on('click', function() {
			_gaq.push(['_trackEvent', 'Dribles FIFA', 'Seleção de videogame', $(this).attr('id')]);
		});

		$('.link-share').on('click', function() {
			_gaq.push(['_trackEvent', 'Dribles FIFA', 'Link compartilhe', $(this).attr('title')]);
		});

		$('#skills .dropdown-menu a').on('click', function() {
			_gaq.push(['_trackEvent', 'Dribles FIFA', 'Filtro', 'Dribles - ' + $(this).text()]);
		});

		$('#celebrations .dropdown-menu a').on('click', function() {
			_gaq.push(['_trackEvent', 'Dribles FIFA', 'Filtro', 'Comemorações - ' + $(this).text()]);
		});

		$('.js-search-field-skills').on('focus', function() {
			_gaq.push(['_trackEvent', 'Dribles FIFA', 'Busca', 'Dribles']);
		});

		$('.js-search-field-celebrations').on('focus', function() {
			_gaq.push(['_trackEvent', 'Dribles FIFA', 'Busca', 'Comemorações']);
		});

		$('.copy a').on('click', function() {
			_gaq.push(['_trackEvent', 'Dribles FIFA', 'Links no rodapé', $(this).text()]);
		});

	}

})();

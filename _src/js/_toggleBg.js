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

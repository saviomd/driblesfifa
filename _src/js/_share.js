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

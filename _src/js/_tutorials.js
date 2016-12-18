/* global ga */

/* eslint-disable no-use-before-define */
var driblesfifa = driblesfifa || {};
/* eslint-enable no-use-before-define */

driblesfifa.tutorials = (function () {
	var templateTutorial = '<li class="mb-1 animated fadeInRight">' +
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

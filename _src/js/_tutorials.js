/* global ga */

var driblesfifa = driblesfifa || {};

driblesfifa.tutorials = (function () {
	var tutorialsLoaded = false;

	$('.js-link-tutorials').on('click', function () {
		if (!tutorialsLoaded) {
			var $listTutorials = $('.js-list-tutorials');
			$listTutorials.html('<li class="loading"></li>');
			$.ajax({
				dataType: 'json',
				type: 'GET',
				url: 'https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=PLYAzVafIQExnIbsUuWgTHIRGJ6KFYY1Fa&maxResults=50&key=AIzaSyDG_qiaXfeAYSYcvK_RxR4mMbBPP7RRwpw'
			}).done(function (response) {
				var items = response.items;
				var html = '';
				var template = driblesfifa.templates.getTutorial();
				for (var i = 0, len = items.length; i < len; i++) {
					var item = template;
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
			});

			if (typeof ga !== 'undefined') {
				$listTutorials.on('click', '.js-link-tutorial', function () {
					var title = $(this).attr('data-title');
					ga('send', 'event', 'Dribles FIFA', 'Tutorial', title);
				});
			}
		}
	});
})();

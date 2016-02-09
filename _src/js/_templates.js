var driblesfifa = driblesfifa || {};

driblesfifa.templates = (function () {
	var tutorial = '<li class="m-b-1 animated fadeInRight">' +
			'<a class="embed-responsive embed-responsive-4by3 js-link-tutorial" href="https://www.youtube.com/watch?v={{videoId}}" data-title="{{title}}" target="_blank">' +
				'<img alt="{{title}}" class="embed-responsive-item" src="{{thumbnail}}">' +
			'</a>' +
		'</li>';

	var getTutorial = function () {
		return tutorial;
	};

	return {
		getTutorial: getTutorial
	};
})();

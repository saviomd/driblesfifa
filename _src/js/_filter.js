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
	});
})();

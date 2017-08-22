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


(function($) {
	"use strict";

	$(document.body).removeClass('no-js');
	$(document.body).addClass('js');
}(jQuery));

(function() {
	"use strict";

	var NAV_TOGGLE = 'data-nav-toggle';
	var NAV_STATE = 'data-nav-state';

	var $el_nav_btn = $('[' + NAV_TOGGLE + ']');

	function toggleNavState(event) {
		event.preventDefault();

		var $el_body = $('body');
		var navState = $el_body.attr(NAV_STATE);

		navState === 'open' ? $el_body.attr(NAV_STATE, '') : $el_body.attr(NAV_STATE, 'open');
	}

	$el_nav_btn.on('click', toggleNavState);

}());

(function() {
	function LoadFont(url, className) {
		$.get(url).done(function() {
			$('html').addClass(className);
		});
	}

	LoadFont('/_assets/fonts/Roboto-Bold-webfont.ttf', 'roboto-bold-loaded');
	LoadFont('/_assets/fonts/Roboto-Light-webfont.ttf', 'roboto-light-loaded');
}());

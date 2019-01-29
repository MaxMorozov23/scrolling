$(window).bind('mousewheel DOMMouseScroll', function(event){
	if ( $('.item').hasClass('delay') ) return false;
	if (event.originalEvent.detail < 0) {
		scroll($('.right'), true);
		scroll($('.left'), false);
	}
	else {
		scroll($('.left'), true);
		scroll($('.right'), false);
	}
});

function buttonScroll(where) {
	if ($('.item').hasClass('delay')) return false;
	if (where) {
		scroll($('.right'), true);
		scroll($('.left'), false);
	}
	else {
		scroll($('.left'), true);
		scroll($('.right'), false);
	}
}

function scroll(el, where) {
	el.each(function() {
		var count = $(this).find('.item').length;
		var index = $(this).find('.current').index();
		var item = $(this).find('.item');
		var nextIndex;
	

		if (where) {
			item.eq(index).removeClass('current');
			if (! (index == count - 1)) {
				item.eq(index).addClass('left-after');
			}
			nextIndex = index + 1;
			if (nextIndex == count) nextIndex = count - 1;
		} else {
			item.eq(index).removeClass('current');
			if (! index == 0) {
				item.eq(index).addClass('right-after');
			}
			nextIndex = index - 1;
			if (nextIndex <= 0) nextIndex = 0;
		}
		item.eq(nextIndex).removeClass('left-after right-after').addClass('current');
		item.eq(nextIndex).addClass('delay').delay(600).queue(function(){
			$(this).removeClass("delay").dequeue();
		});
	});
}

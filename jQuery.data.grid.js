$(document).ready(function() {
	
	// set up data grid 
	$('.data-grid tr:odd').addClass('odd');
	$('.data-grid td:last-child, .data-grid th:last-child').css({'border-right' : 'none'});

	colNarrow = $('.col-narrow').width()-2; // - 1px borders x2
	colWide = $('.col-wide').width()-2; // - 1px borders x2
	colFull = $('.col-full').width()-2;
	
	$('.data-grid').each(function() {
		if($(this).parents().hasClass('col-wide')) {
			$(this).width(colWide);
		} else if($(this).parents().hasClass('col-narrow')) {
			$(this).width(colNarrow);
		} else if($(this).parents().hasClass('col-full')) {
			$(this).width(colFull);
		}
	});

});

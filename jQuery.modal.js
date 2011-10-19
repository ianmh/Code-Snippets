	function openModal(elem) {
		// Get element value
		var elem = elem;
		$(elem).hide();
	
		// center modal
		if($(elem).height() > $(window).height()) {
			$(elem).css("top", '20px');
		} else {
			$(elem).css("top", ($(window).height() - $(elem).height()) / 2 + $(window).scrollTop());
		}
		if($(elem).width() > $(window).width()) {
			$(elem).css("left", '20px');
		} else {
			$(elem).css("left", ($(window).width() - $(elem).width()) / 2 + $(window).scrollLeft());
		}
		$(elem).css({
			'position' : 'absolute',
			'z-index' : '10001'
		});

		$(elem).fadeIn('fast');

		// screen dimentions and document height
		var winWidth = $(window).width();
		var winHeight = $(window).height();
		var docHeight = $(document).height();
	
		$('body').prepend('<div id="mask"></div>');
	
		// set opacity, width and height of mask
		$("#mask").css({ 
			'width': '100%',
			'height': docHeight,
			'position': 'absolute',
			'background': 'black',
			'z-index': 10000,
			'opacity':0,
			'padding-bottom': '20px'
		});
		// Transition
		$('#mask').animate({'opacity':.5}, 200);
		
		$(elem + ' .close' + ', #mask').click(function() {
			$('#mask').fadeOut('fast');
			$(elem).fadeOut('fast');
		});
	
	}
	
	$('.modal').hide();
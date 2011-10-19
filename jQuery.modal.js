	function openModal(elem) {
		// Get element value
		var elem = elem;
		$(elem).hide();
		
		// screen dementions and document height
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
			'opacity':0
		});
		// transition
		$('#mask').animate({'opacity':.5}, 200);
	
		// center modal
		if($(elem).height() > $(window).height()) {
			$(elem).css("top", 0);
		} else {
			$(elem).css("top", ($(window).height() - $(elem).height()) / 2 + $(window).scrollTop());
		}
		if($(elem).width() > $(window).width()) {
			$(elem).css("left", 0);
		} else {
			$(elem).css("left", ($(window).width() - $(elem).width()) / 2 + $(window).scrollLeft());
		}
		$(elem).css({
			'position' : 'absolute',
			'z-index' : '10001'
		});
		
		$(elem).fadeIn('fast');
	
		$(elem + ' .close' + ', #mask').click(function() {
			$('#mask').fadeOut('fast');
			$(elem).fadeOut('fast');
		});
	}
	
	$('.modal').hide();



	// Modal clicks
	$('#save').click(function() {
		openModal('.m-save');
	});
	$('#preview').click(function() {
		openModal('.m-preview');
	});
	
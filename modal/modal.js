// Modal Plugin
(function( $ ) {
	$.fn.modal = function( opts ) {

	var defaults = {
		modal					: 'modal', // Modal class name
		title 				: '', // Modal title
		data 					: '', // Motal data
		extraClass		: '', // Optional class (multiple width params)
		ajax					: true
	};

	
	var opts = $.extend(defaults, opts);


		$(this).click(function(e) {
			e.preventDefault();
			if(opts.ajax == true) { // Ajax call
				opts.title = $(this).attr("title");
				$.get($(this).attr("href"), function(content) { 
					opts.data = content;
					openModal();
				});
			} else { // grab data from set opts
				openModal();
			}
		});
	
	function openModal() {	
		var html = '\
		<div class="'+opts.modal+' '+opts.extraClass+'"> \
			<div class="modal-window-bar"><h3>'+opts.title+'</h3><img src="/images/icons/close.png" alt="Close" width="22" height="22" class="close" /></div> \
			<div class="modal-content"> \
				'+opts.data+' \
			</div> \
		</div>';
	
		elem = '.'+opts.modal; // convert to .elem
		
		$('body').prepend(html);
		
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
		// Transition
		$('#mask').animate({'opacity':.5}, 200);
		
		$(elem + ' .close' + ', #mask').click(function() {
			$('#mask').fadeOut('fast');
			$(elem).fadeOut('fast');
			$('#mask').remove();
			$(elem).remove();
		});
	
	}
	
	$('.modal').hide();
	
  };
})( jQuery );
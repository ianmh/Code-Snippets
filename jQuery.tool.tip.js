$('.tip-message').on({
	click: function(e) {
		e.preventDefault();
	},
	mouseenter: function() {
		
  	text = $(this).attr('alt');
  	$('body').prepend('<div class="tip-message-box">'+text+'</div>');
  	
		$(this).mousemove(function(e){
			var cssObj = {
				'left'			: e.pageX+10,
				'top'				: e.pageY+10,
			}
			$('.tip-message-box').css(cssObj);
		});
	},
	mouseleave: function() {
		$('.tip-message-box').remove();
	}
});



/**

//CSS

.tip-message-box {
	position: absolute;
	z-index: 9999;
	border:1px solid #80B2CD;
	background: #DEEFFF;
	width:200px;
	padding:10px;
	cursor: pointer;
}

**/
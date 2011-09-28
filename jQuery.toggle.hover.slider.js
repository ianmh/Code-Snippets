// hover divs and slide
$(document).ready(function() {
  // Hover over class named .deal-bubble
  $('.deal-bubble').hover(function() {
    $(this).stop().toggleClass('active')
    if(!$(this).hasClass('open')) {
      $('.twitter, .more-info', this).stop().toggleClass('hide')
    }
  });
  
  // expand .more-info class
  $('.info').hide(); // hide all info panes on start. 
  $('.more-info a, .info-hide a').click(function(e) {
    $(this).closest('.deal-bubble').toggleClass('open');
    $(this).closest('.deal-bubble').find('.info').stop(true, true).slideToggle();
    e.preventDefault();
  });
});

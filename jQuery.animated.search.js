$(document).ready(function() {
  // Search box
  // set default opacity
  $('#search input').css({
    'opacity' : 0.5
  });

  // animate opacity and width
  $('#search input').bind({

    click: function() {
      $(this).stop().animate({
        width: 200,
        opacity: 1  
      }, 300 );

    },

    blur: function() {
      $(this).stop().animate({
        width: 120,
        opacity: 0.5
      }, 300 );
    }
  });
});


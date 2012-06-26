// clear search field and repopulate on blur unless field text has changed
$('.clear-field').on({
  click: function(){
    var elem = $(this);
    elem.data("value", elem.attr("value"));
    elem.change(function() {
      elem.data("changed", true);
    });
    if(elem.attr("value") == elem.data("value") && elem.data("changed") != true) {
      elem.attr("value", "");
    }
  },
  blur: function() {
    var elem = $(this);
    if(elem.attr("value") == '') {
      elem.attr("value", elem.data("value"));     
    }
  }
});
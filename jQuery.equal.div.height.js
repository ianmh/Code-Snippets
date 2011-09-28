function minHeight(divName) { // min height function to set all heights equal to heighest value
  var minHeight = 0;
  var element = $(divName);
  element.each(function () {
    if ($(this).height() > minHeight) {
      minHeight = $(this).height();
    }
  });
  $(divName).height(minHeight); // set largest height
}
minHeight(".equalHeight");


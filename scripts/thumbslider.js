$(document).ready(function() {
  $('.thumbnail').click(function() {
      var newSrc = $(this).attr('src');
      $('.main-img').attr('src', newSrc);
  });
});
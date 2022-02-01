$(function(){
  $(document).ready(function(){
  $('#menu').click(function() {
    $('.color-box').slideToggle(800);
    });
  });
});

$(function(){
  $('#ciemny').click(function() {
    $('body').css('background-color', '#222222');
  });
});

$(function(){
  $('#jasny').click(function() {
    $('body').css('background-color', 'white');
  });
});

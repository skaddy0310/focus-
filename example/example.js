$(document).ready(function(){
  $('#img1').mouseenter(function(){
    $("#img2").addClass("blur");
    $("#img3").addClass("blur");
    $("#img1").css('box-shadow', '0px 0px 10px #000');
  });
  $('#img1').mouseleave(function(){
    $('#img3').removeClass("blur");
    $("#img2").removeClass("blur");
    $("#img1").css('box-shadow', '0px 0px 0px #000');
  });
  $('#img2').mouseenter(function(){
    $('#img3').addClass("blur");
    $("#img1").addClass("blur");
    $("#img2").css('box-shadow', '0px 0px 10px #000');
  });
  $('#img2').mouseleave(function(){
    $('#img3').removeClass("blur");
    $("#img1").removeClass("blur");
    $("#img2").css('box-shadow', '0px 0px 0px #000');

  });
  $('#img3').mouseenter(function(){
    $('#img1').addClass("blur");
    $("#img2").addClass("blur");
    $("#img3").css('box-shadow', '0px 0px 10px #000');
  });
  $('#img3').mouseleave(function(){
    $('#img1').removeClass("blur");
    $("#img2").removeClass("blur");
    $("#img3").css('box-shadow', '0px 0px 0px #000');

  });
});

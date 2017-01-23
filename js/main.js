$(function(){
  var off = $('#child').offset().top;
  var off2 = $('#child2').offset().top;
  var off3 = $('#child3').offset().top;
  moveImage(off,off2,off3);

  //画像スクロールイベント
  $(window).scroll(function () {
    moveImage(off,off2,off3);
  });
});

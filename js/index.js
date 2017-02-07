var oldScrollPoint = 0;
var flg = false;
(function(){
  //ネット確認
  if (navigator.onLine === false) {
      alert("ネット接続がされていないと正常に動きかない場合があります。");
  }

  //ブラウザ判定
  var userAgent = window.navigator.userAgent.toLowerCase();
  if (userAgent.indexOf('chrome') != -1) {
    alert("現在chromeでは、動作が保証できません。");
  }
})();
var user = "";
$(function(){

    // $('#headerhidden').css('display','');
    $('#mainDisp').css('display','');
    $('.container').css('padding','80px 0');
    $('#loginDisp').css('display','none');
    $('#jobCalcDisp').css('display','none');

    //サイドバースクロールイベント
    $(window).scroll(function () {
      var newScrollPoint = $(window).scrollTop();
      if(newScrollPoint<180){
        $('#sidebar_menu').css('margin-top','0px');
      }else{
        setTimeout(function(){
            while(oldScrollPoint!=(newScrollPoint+100)){
              var scrollDifference = oldScrollPoint > (newScrollPoint+100)?(-1):1;
              $('#sidebar_menu').css('margin-top',(oldScrollPoint+=scrollDifference)+'px');
            }
        }, 40);
      }
    });

    //非同期リスト読み込み
    $(window).scroll(function () {
      var scrollHeight = $(document).height();
      var scrollPosition = $(window).height() + $(window).scrollTop();
      if (((scrollHeight - scrollPosition) / scrollHeight === 0)&&$('#jobList_id').size()) {
        setTimeout(function(){
          addTr();
        }, 1000);
      }
    });



    $('#child').click(function(){
      if($('.mainPageSubList').size()){
        $('.mainPageSubList').remove();
      }else{
        $('#child').after("<div id='listJob' class='panel panel-primary mainPageSubList' ><h3>一覧</h3></div>\
        <div id='newJob' class='panel panel-primary mainPageSubList'><h3>新規登録</h3></div>");
        $('#listJob').click(function(){asynchronous("PCA008_joblist.html")});
        $('#newJob').click(function(){asynchronous("PCA008_joblist.html")});
      }
    });

    $('#child2').click(function(){
      if($('.mainPageSubList2').size()){
        $('.mainPageSubList2').remove();
      }else{
        $('#child2').after("<div id='listwork' class='panel panel-primary mainPageSubList2' ><h3>一覧</h3></div>\
        <div id='newwork' class='panel panel-primary mainPageSubList2'><h3>新規登録</h3></div>");
        $('#listwork').click(function(){
          window.location.href = "PCC002_dayReport_TEST.html";//画面遷移
        });
      }
    });


    $('#child4').click(function(){
      if($('.mainPageSubList3').size()){
        $('.mainPageSubList3').remove();
      }else{
        $('#child4').after("\
        <div id='yasumi' class='panel panel-primary mainPageSubList3' ><h3>特休・公休設定</h3></div>\
        <div id='group' class='panel panel-primary mainPageSubList'><h3>Gr名称追加・変更・削除</h3></div>\
        <div id='systemsetting' class='panel panel-primary mainPageSubList'><h3>システム管理画面</h3></div>\
        ");
        $('#yasumi').click(function(){
          window.location.href = "PCM005_holidaysettings.html";//
        });
        $('#group').click(function(){
          window.location.href = "PCM004_grnameaddition.html";//
        });
        $('#systemsetting').click(function(){
          window.location.href = "PCM000_systemadministration.html";
        });
      }
    });

    user = getParam();
    if(user=="nakamura"){
      $("#username").text("管理職：中村倫");
      $('#jobCalc').css('display','');
    }else{
      $("#username").text("一般：國島惇");
      $('#jobCalcDisp').css('display','none');
    }

});




//非同期
function asynchronous(url){
  $(".mainBox").load(url,function(){
    $('#mainColumn').remove();
  });
}

function addEvent(){
  $('#filter_id').click(function(){
    dispfilterBox();
  });
}

//mainの背景画像を動かすメソッド
function moveImage(off,off2,off3){
  var newScrollPoint = $(window).scrollTop();
  var maxY = document.documentElement.getBoundingClientRect().height - window.innerHeight;
  var point = ((newScrollPoint/2+off) / maxY)*100;
  var point2 = ((newScrollPoint/2+(off/2)) / maxY)*100;
  var point3 = ((newScrollPoint/2) / maxY)*100;

  $('#child').css('background-position'," 20% "+point+'%');
  $('#child2').css('background-position'," 20% "+point2+'%');
  $('#child3').css('background-position'," 20% "+point3+'%');
  $('#child4').css('background-position'," 20% "+point3+'%');
}





//jsでget送信を読み込み
function getParam() {
  var url   = location.href;
  if ( url.indexOf('?') == -1) {
      return false;
  }
  parameters    = url.split("?");
  params   = parameters[1].split("&");
  var paramsArray = [];
  for ( i = 0; i < params.length; i++ ) {
      neet = params[i].split("=");
      paramsArray.push(neet[0]);
      paramsArray[neet[0]] = neet[1];
  }
  var categoryKey = paramsArray["key"];
  return categoryKey;
}

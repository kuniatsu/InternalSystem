$(function(){
  addEvent();
  $('.chartDisp').click(function(){chartDisp();});
  $('.changeChart').click(function(){changeChart();});
});

function addTr(){
  for(var i=0;i<5;i++){
    $('#jobList_id tr:last').after('<tr><td>総合試験'+Math.floor( Math.random() * 10 )+'</td><td>¥200</td><td>¥200</td><td>2017/1/1</td></tr>');
    $('#jobList_id tr:last').after('<tr><td>ドキュメント作成支援'+Math.floor( Math.random() * 10 )+'</td><td>¥300</td><td>¥200</td><td>2017/1/2</td></tr>');
    $('#jobList_id tr:last').after('<tr><td>派遣'+Math.floor( Math.random() * 10 )+'</td><td>¥240</td><td>¥200</td><td>2017/1/3</td></tr>');
  }
}

function chartDisp(){
  dispNone();
  dispChart();
}

function dispNone(){
  $('#filterBox_id').css('display','none');
  $('#iframe_id').css('display','none');
}

function dispfilterBox(){
    var disp = $("#filterBox_id").css("display");
    if(disp=="block"){
      $('#filterBox_id').css('display','none');
    }else{
      $('#iframe_id').css('display','none');
      $('#filterBox_id').css('display','block');
    }
}

function dispChart(){
      $('#iframe_id').css('display','block');
}

function changeChart(){
  var style = $('#chartId').css('display');
  if(style=='block'){
    $('#chartId').css('display','none');
    $('#chartId2').css('display','block');
  }else{
    $('#chartId').css('display','block');
    $('#chartId2').css('display','none');
  }
}

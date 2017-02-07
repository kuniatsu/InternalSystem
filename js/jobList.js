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
  if($('#ankenfilter').css('display')=="block"){
    //表示
    $('#ankenfilter').css('display','none');
    dispNone();
    dispChart();
  }else{
    //非表示
    $('#ankenfilter').css('display','block');
    dispNone();

  }


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
  ankenPageNumInactive();
  var style1 = $('#chartId').css('display');
  var style2 = $('#chartId2').css('display');
  var style3 = $('#chartId3').css('display');
  if(style1=='block'){
    changeChartNum(2);
  }else if(style2=="block"){
    changeChartNum(3);
  }else{
    changeChartNum(1);
  }
}

function changeChartNum(num){
  ankenPageNumInactive();
  if(num==2){
    $('#ankenPageNum2').addClass('active');
    $('#chartId').css('display','none');
    $('#chartId2').css('display','block');
    $('#chartId3').css('display','none');
  }else if(num==3){
    $('#ankenPageNum3').addClass('active');
    $('#chartId').css('display','none');
    $('#chartId2').css('display','none');
    $('#chartId3').css('display','block');
  }else{
    $('#ankenPageNum1').addClass('active');
    $('#chartId').css('display','block');
    $('#chartId2').css('display','none');
    $('#chartId3').css('display','none');
  }
}

function ankenPageNumInactive(){
  $('#ankenPageNum1').removeClass('active');
  $('#ankenPageNum2').removeClass('active');
  $('#ankenPageNum3').removeClass('active');
}

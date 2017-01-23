$(function(){



  $('#pulslistPopup').click(function(){
    alert("^^^^");
  });

  $('#radio1').prop('checked', true);
  var name = $('#username').text();
  name = name.substring(name.indexOf("："),name.length);
  $('#tabname').text(name);

  var day = nowDay();
  $('#mydate').val(day);

  $('#time_startText').val("9:00");
  $('#time_endText').val("17:00");



  $('.bsDate').datepicker({language: 'ja'});

  $('.bsDateMonth').datepicker({
    format: 'yyyy/mm',
    language: 'ja',
    autoclose: true,
    minViewMode: 'months'
  });

  $('#radio1').click(function(){
    $('#kyuukeibox').removeClass('dispnone');
    $('#keirobox').addClass('dispnone');
    $('#norimonoibox').addClass('dispnone');
    $('#naiyou_id').removeClass('dispnone');
    $('#time_start').removeClass('dispnone');
    $('#time_end').removeClass('dispnone');
    $('#kingaku_id').addClass('dispnone');
  });

  $('#radioYotei').click(function(){
    $('#kyuukeibox').removeClass('dispnone');
    $('#keirobox').addClass('dispnone');
    $('#norimonoibox').addClass('dispnone');
    $('#naiyou_id').removeClass('dispnone');
    $('#time_start').removeClass('dispnone');
    $('#time_end').removeClass('dispnone');
    $('#kingaku_id').addClass('dispnone');
  });




  $('#radio2').click(function(){
    $('#kyuukeibox').addClass('dispnone');
    $('#keirobox').addClass('dispnone');
    $('#norimonoibox').addClass('dispnone');
    $('#naiyou_id').removeClass('dispnone');
    $('#time_start').addClass('dispnone');
    $('#time_end').addClass('dispnone');
    $('#kingaku_id').addClass('dispnone');

  });

  $('#radio3').click(function(){//交通費
    $('#kyuukeibox').addClass('dispnone');
    $('#keirobox').removeClass('dispnone');
    $('#norimonoibox').removeClass('dispnone');
    $('#naiyou_id').addClass('dispnone');
    $('#time_start').addClass('dispnone');
    $('#time_end').addClass('dispnone');
    $('#kingaku_id').removeClass('dispnone');
  });

  $('#radio4').click(function(){
    $('#kyuukeibox').addClass('dispnone');
    $('#keirobox').addClass('dispnone');
    $('#norimonoibox').addClass('dispnone');
    $('#naiyou_id').removeClass('dispnone');
    $('#time_start').removeClass('dispnone');
    $('#time_end').removeClass('dispnone');
    $('#kingaku_id').removeClass('dispnone');
  });



  $('#modalout').click(function(){
    $('#modal-example').fadeOut();
  });
  // $('#tabRefresh').click(function(){
  //   alert(234);
  // }
  // $('#tabNew').click(function(){
  //   alert(123);
  // }

  $('#downStartHour').click(function(){
    var time = $('#time_startText').val();
    time = changeHour("down",time);
    $('#time_startText').val(time);
  });

  $('#upStartHour').click(function(){
    var time = $('#time_startText').val();
    time = changeHour("up",time);
    $('#time_startText').val(time);
  });
  $('#downEndHour').click(function(){
    var time = $('#time_endText').val();
    time = changeHour("down",time);
    $('#time_endText').val(time);
  });

  $('#upEndHour').click(function(){
    var time = $('#time_endText').val();
    time = changeHour("up",time);
    $('#time_endText').val(time);
  });




// downStartMinutes
// upStartHour
// upStartMinutes
// downEndHour
// downEndMinutes
// upEndHour
// upEndMinutes


$('#downStartMinutes').click(function(){
  var time = $('#time_startText').val();
  time = changeMinutes("down",time);
  $('#time_startText').val(time);
});

$('#upStartMinutes').click(function(){
  var time = $('#time_startText').val();
  time = changeMinutes("up",time);
  $('#time_startText').val(time);
});
$('#downEndMinutes').click(function(){
  var time = $('#time_endText').val();
  time = changeMinutes("down",time);
  $('#time_endText').val(time);
});

$('#upEndMinutes').click(function(){
  var time = $('#time_endText').val();
  time = changeMinutes("up",time);
  $('#time_endText').val(time);
});


});
function changeMinutes(calc,time){
  var result = time.replace( /:/g , "" );
  var minutes = result.slice(-2); //後ろから２文字
  var hour = result.replace( minutes , "" );
  result = Number(minutes);
  if(calc=="down"&&result==0){
    result = 55;
  }else if(calc=="down"&&result<5){
    result = 55;
  }else if(calc=="down"&&result>60){
    result = "00";
  }else if(calc=="down"&&result<=60){
    result -= 5;
    if(result<5){
      result="00";
    }else if(result<10){
      result="05";
    }
  }else if(calc=="up"&&result==55){
    result = "00";
  }else if(calc=="up"&&result>55){
    result = "00";
  }else if(calc=="up"&&result<55){
    result += 5;
    if(result<10){
      result = "0"+result;
    }
  }
  result = hour+":"+result;
  return result;
}



function changeHour(calc,time){
  var result = time.replace( /:/g , "" ) ;
  // alert(result);
  var minutes = result.slice(-2); //後ろから２文字
  result = result.replace( minutes, "" ) ;
  result = Number(result);
  if(calc=="down"&&result==1){
    result = "0";
  }else if(calc=="down"&&result>1){
    result-=1;
    result = result;
  }else if(calc=="down"&&result<1){
    result+=23;
    result = result;
  }else if(calc=="up"&&result==23){
    result = "0";
  }else if(calc=="up"&&result>23){
    result -= 23;
    result = result;
  }else if(calc=="up"&&result<23){
    result = result+=1;
  }
  result = result+":"+minutes;
  return result;
}



function tabrefresh(){
}

function tabNew(){
  var name = $('#userListTitle').text();
  if(name.match("ユーザー")){
    alert('ユーザーを選択してください。');
    return;
  }
  $('#allWeek').after(''+
  '<li><a href="#home" data-toggle="tab">'+
   '<i class="glyphicon glyphicon-list-alt"></i>：'+name+'</a>'+
  '</li>'+
  '');
}

function nowDay(){
  var hiduke=new Date();
  var year = hiduke.getFullYear();
  var months = hiduke.getMonth()+1;
  months = (months+"").length>1?months:"0"+months;
  var days = hiduke.getDate();
  days = (days+"").length>1?days:"0"+days;
  return year +"/"+months+"/"+days;
}


function checkboxshow(){
  $('.checkBoxshow').removeClass('dispnone');
  $('#allCheck').html(''+
    '<button class="btn btn-default" onclick="addEvent();"><i class="glyphicon glyphicon-ok"></i> 一括操作</button>'+
    '<button class="btn btn-default"><i class="glyphicon glyphicon-thumbs-up"></i> 承認</button>'+
    '<button class="btn btn-default"><i class="glyphicon glyphicon-trash"></i> 削除</button>'+
    '');
}




function newEdit(){
  $('#modaltitle').val('');
  $('#modaltime1').val('');
  $('#modaltime2').val('');
  $('#modal-example').show();
}



function userChange(name){
  $('#userListTitle').html(name+'<span class="caret"></span>');
}

function test(){
  alert(11111110);
}

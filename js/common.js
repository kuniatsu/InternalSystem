 //pcm000_個人情報登録欄追加
    function add_row_p(){
        // 新しい行を追加
        var tblhtml = new Array(11);
        tblhtml[0] = '<td><input style="width:110px;" type="text" class="form-control input-xs" id="usage1input3" placeholder="10桁以内"></td>';
        tblhtml[1] = '<td><input style="width:170px;" type="text" class="form-control input-xs" id="usage1input3" placeholder="全角25文字(半角50文字)以内"></td>';
        tblhtml[2] = '<td><select style="width: 120px" class="form-control input-xs" id="usage1select2"><option></option><option>東京事業部</option><option>茨城事業部</option></select></td>';
        tblhtml[3] = '<td><select style="width: 150px" class="form-control input-xs" id="usage1select2"><option></option><option>管理本部</option><option>アウトソーシング</option><option>第1グループ</option><option>第2グループ</option><option>第3グループ</option></select></td>';
        tblhtml[4] = '<td><input style="width:100px;" type="text" class="form-control input-xs" id="usage1input3" placeholder="7桁以内"></td>';
        tblhtml[5] = '<td><input style="width:100px;" type="text" class="form-control input-xs" id="usage1input3" placeholder="7桁以内"></td>';
        tblhtml[6] = '<td><select style="width:100px" class="form-control input-xs" id="usage1select2"><option></option><option>役員</option><option>管理職</option><option>総務</option><option>一般</option></td>'; 
        tblhtml[7] = '<td><input style="width:110px;" type="text" class="form-control input-xs" id="usage1input3" placeholder="半角10文字以内"></td>';
        tblhtml[8] = '<td><input style="width:110px;" type="text" class="form-control input-xs" id="usage1input3" placeholder="半角12文字以内"></td>';
        tblhtml[9] = '<td><input style="width:100px;" type="text" class="form-control input-xs bsDate" id="usage1input3 #mydate"></td>';
        tblhtml[10] = '<td><span class="input-group-btn "><button type="button" class="btn btn-primary btn-sm">設定</button></span><span class="input-group-btn"><button type="button" class="btn btn-danger btn-sm" onClick="disp()">削除</button></span></td>';
        
        var tbl = document.getElementById("tbl_personal");
        var newRow = tbl.insertRow();
        var i;
        for (i = 0; i < tbl.rows[0].cells.length; i++) {
            // 新しい行にセルを作っていく
            var newCell = newRow.insertCell();
            newCell.innerHTML = tblhtml[i];
        }
            $("#del_p").prop('disabled', false);
    }        
    //pcm000_登録追加欄削除
   function del(){
        var table = document.getElementById("tbl_personal");
        var rows = table.rows.length; // 行数
        
        if(rows => 3){
            table.deleteRow(-1);
        }
        if(rows == 3){
            $("#del_p").prop('disabled', true);
        }
    }    
   //pcm004_事業部＿項目追加
    function Divs_add(){
        var div_element = document.createElement("div");
        div_element.className = "input-group"
        div_element.id = "add_divs"
        div_element.style = "width:570px;"
         div_element.innerHTML = '<span class="input-group-addon">事業部</span><input style="width:225px;" type="text" class="form-control input-sm" id="usage1input3" placeholder="全角30文字(半角60文字)以内"><span class="input-group-addon">適用開始日</span><input style="width:100px;" type="text" class="form-control bsDate input-sm" id="usage1input3 #mydate"><span class="input-group-btn"><button type="button" class="btn btn-primary btn-sm">設定</button></span><span class="input-group-btn"><button type="button" class="btn btn-danger btn-sm" onClick="disp()">削除</button></span>';
        var parent_object = document.getElementById("mainColumn");
        parent_object.insertBefore(div_element,btn_add1);
        
        $("#del1").prop('disabled', false);
    }
    //pcm004_事業部＿項目削除
    function Divs_del(){
        var parent_object = document.getElementById("mainColumn");
        var div_element = document.getElementById("add_divs");
        parent_object.removeChild(div_element);
    }
    //pcm004_Gr＿項目追加
    function Gr_add(){
        var div_element = document.createElement("div");
        div_element.className = "input-group"
        div_element.id = "add_gr"
        div_element.style = "width:580px;"
         div_element.innerHTML = '<span class="input-group-addon">グループ</span><input style="width:225px;" type="text" class="form-control input-sm" id="usage1input3" placeholder="全角30文字(半角60文字)以内"><span class="input-group-addon">適用開始日</span><input style="width:100px;" type="text" class="form-control bsDate input-sm" id="usage1input3 #mydate"><span class="input-group-btn"><button type="button" class="btn btn-primary btn-sm">設定</button></span><span class="input-group-btn"><button type="button" class="btn btn-danger btn-sm" onClick="disp()">削除</button></span>';
        var parent_object = document.getElementById("mainColumn");
        parent_object.insertBefore(div_element,btn_add2);
        
         $("#del2").prop('disabled', false);
    }
    //pcm004_Gr＿項目削除
    function Gr_del(){
        var parent_object = document.getElementById("mainColumn");
        var div_element = document.getElementById("add_gr");
        parent_object.removeChild(div_element);
    }    
        
 //pcm005_登録欄追加
    function add_row(){
        // 新しい行を追加
        var tblhtml = new Array(4);
        tblhtml[0] = '<td><input style="width:150px;" type="text" class="form-control bsDate" id="usage1input3 #mydate"></td>';
        tblhtml[1] = '<td><select style="width: 100px" class="form-control" id="usage1select2"><option>特休</option><option>公休</option></select></td>';
        tblhtml[2] = '<td><input style="width:250px;" type="text" class="form-control" id="usage1input3" placeholder="全角15文字(半角30文字)以内"></td>';
        tblhtml[3] = '<td><span class="input-group-btn"><button type="button" class="btn btn-primary">設定</button></span><span class="input-group-btn"><button type="button" class="btn btn-danger" onClick="disp()">削除</button></span></td>';
        
        var tbl = document.getElementById("tbl_holiday")
        var newRow = tbl.insertRow();
        var i;
        for (i = 0; i < tbl.rows[0].cells.length; i++) {
            // 新しい行にセルを作っていく
            var newCell = newRow.insertCell();
            newCell.innerHTML = tblhtml[i];
        }
        $("#del").prop('disabled', false);
    }
        
    //pcm005_追加登録欄削除
    function del_row(){
        var table = document.getElementById("tbl_holiday");
        var rows = table.rows.length; // 行数
        
        if(rows => 3){
            table.deleteRow(-1);
        }
        if(rows == 3){
            $("#del").prop('disabled', true);
        }
    }    
    //確認用ダイアログ
    function disp(){
	// 「OK」時の処理開始 ＋ ポップアップ表示
	if(window.confirm('該当データを削除します。')){

		location.href = "#"; // 
	}
	// 「OK」時の処理終了
	// 「キャンセル」時の処理開始
	else{
		window.alert('キャンセルされました'); // 警告ダイアログを表示
	}
	// 「キャンセル」時の処理終了
}
        
        
        
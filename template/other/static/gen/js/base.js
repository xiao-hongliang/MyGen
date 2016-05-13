/**
 * 初始化
 */
jQuery(document).ready(function(){
	Metronic.init();
	Layout.init();
	TableAdvanced.init();
});

/** 返回列表 */
function backListTab(){
	$("#addTab").attr("class", "");
	$("#listTab").attr("class", "active");
	$("#listApp").attr("class", "tab-pane fade in active");
	$("#newApp").attr("class", "tab-pane fade");
}

/**
 * 赋值删除ID
 */
function setDelId(id){
	$("#delete").attr("value",id);
}

/**
 * 通用删除
 */
$("#delete").click(function(){
	var id = $(this).attr("value");
	var page = $(this).attr("page");
	var url = page+"/delete.do";
	$.post(url, {"id":id}, function(d) {
		if (d.code=="200") {
			if($("#querybtn").length>0){
				$("#querybtn").click();
			}else{
				window.location.href=window.location.href;
			}
		}else{
			alert(d.message);
		}
	}, "json");
});

/**
 * 新增按钮-初始化form
 */
function addReset(){
	$('#form')[0].reset();
	$("#h_id").val("");
	$("#form textarea").html("");
	if($("#icon").length > 0){
		$("#icon").parent().find(".dropify-preview").attr("style","display:none;");
	}
}

/**
 * 日期格式化
 * @param strTime
 * @returns {String}
 */
function FormatDate (strTime) {
    var date = new Date(strTime);
    return date.getFullYear()+"-"+(date.getMonth()+1)+"-"+date.getDate();
}
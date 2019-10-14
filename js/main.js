
$(document).ready(function(){
	
	//选择一个问题答函数
	function chooseOne(oneself,val){
		if (val == 1){
    		oneself.find(".questionTwo").slideDown();
    		oneself.find(".questionOne").hide();
    	}else if(val == 2){ 
    		oneself.find(".questionOne").slideDown();
    		oneself.find(".questionTwo").hide();   		
    	}
	}
    $('.chooseOne').find('input[type=radio]').bind('click', function(){    	
    	chooseOne($(this).parent().parent(),$(this).val());
    });
	//添加表格行
	function addrow(){
		var myclick = $('.add');
		var tables = $('.peopleList');
		var trtd = $('<tr class="delrow">'+
			   		'<td><input type="text" class="input-name" name="" value="" /></td>'+
			   		'<td>'+
			   			'<table class="table-noline">'+
			   				'<tr><td><input type="checkbox" class="" name="" value="" />主任 </td></tr>'+
			   				'<tr><td><input type="checkbox" class="" name="" value="" />副主任 </td></tr>'+
			   				'<tr><td><input type="checkbox" class="" name="" value="" />科员 </td></tr>'+
			   			'</table>'+
			   	    '</td>'+
			   		'<td>'+
			   			'<table class="table-noline">'+
			   				'<tr>'+
			   					'<td><input type="checkbox" class="" name="" value="" />临床 </td>'+
			   					'<td><input type="checkbox" class="" name="" value="" />护理 </td>'+
			   				'</tr>'+
			   				'<tr>'+
			   					'<td><input type="checkbox" class="" name="" value="" />检验 </td>'+
			   					'<td><input type="checkbox" class="" name="" value="" />公卫 </td>'+
			   				'</tr>'+
			   				'<tr>'+
			   					'<td><input type="checkbox" class="" name="" value="" />药学 </td>'+
			   					'<td><input type="checkbox" class="" name="" value="" />影像 </td>'+
			   				'</tr>'+
			   			'</table>'+
			   		'</td>'+
			   		'<td>'+
			   			'<table class="table-noline">'+
			   				'<tr>'+
			   					'<td><input type="checkbox" class="" name="" value="" />博士 </td>'+
			   					'<td><input type="checkbox" class="" name="" value="" />硕士 </td>'+
			   				'</tr>'+
			   				'<tr>'+
			   					'<td><input type="checkbox" class="" name="" value="" />本科 </td>'+
			   					'<td><input type="checkbox" class="" name="" value="" />专科 </td>'+
			   				'</tr>'+
			   				'<tr>'+
			   					'<td colspan="2"><input type="checkbox" class="" name="" value="" />专科以下 </td>'+
			   				'</tr>'+
			   			'</table>'+
			   		'</td>'+
			   		'<td><input type="text" class="input-name" name="" value="" /></td>'+
			   		'<td>'+
			   			'<table class="table-noline">'+
			   				'<tr>'+
			   					'<td><input type="checkbox" class="" name="" value="" />正高 </td>'+
			   					'<td><input type="checkbox" class="" name="" value="" />副高 </td>'+
			   				'</tr>'+
			   				'<tr>'+
			   					'<td><input type="checkbox" class="" name="" value="" />中级 </td>'+
			   					'<td><input type="checkbox" class="" name="" value="" />初级 </td>'+
			   				'</tr>'+		   			
			   			'</table>'+
			   		'</td>'+
			   	  '</tr>');
			   	  trtd.appendTo(tables);
	}
	//删除行
	function subrow(){
		var len = $(".peopleList .delrow").length;
		if(len>2){  //表格留2行不删
			$(".peopleList .delrow:last").remove();
		}else{
//			alert("最后一行了");
		}
	}
	
	$('body').on('click','.add', function(){		
   	 	addrow();
	});
	$('body').on('click','.sub', function(){		
   	 	subrow();
	});
})
		



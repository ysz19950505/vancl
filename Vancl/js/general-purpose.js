$.get("http://h6.duchengjiu.top/shop/api_cat.php",function(response){
	var obj = response;
    for(var i = 0;i < obj.data.length; i++){		
		$("#ulList").append('<li><a href="list.html?cat_id='+obj.data[i].cat_id+'">' + obj.data[i].cat_name + '</a></li>');
					
	}
})

$.get("http://h6.duchengjiu.top/shop/api_cat.php",function(response){
	var obj = response;
    for(var i = 0;i < obj.data.length; i++){		
		$(".ulList").append('<li><a href="list.html?cat_id='+obj.data[i].cat_id+'">' + obj.data[i].cat_name + '</a></li>');
					
	}
})


$("#searchBtn").click(function(){
	var searchStr =  $("#search").val();
	window.location.href = "detail.html?search_text=" + searchStr;

})

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

//var $a = $("#searchBtn");
//console.log($a)

$("#searchBtn").click(function(){
	var searchStr =  $("#search").val();
	window.location.href = "detail.html?search_text=" + searchStr;

})


var str = location.search.substr(0);	
var catId = str.split("=");
var lock = true;
var page = 1
Pagination(page);
function Pagination(page){
	$.ajax({
	"url": "http://h6.duchengjiu.top/shop/api_goods.php?page="+page+"&pagesize=24",
	"type": "GET",
	"data": {
		"cat_id": catId[1]
	},
	"dataType": "json",
	"success": function(response){
	var obj = response;
	var html='';
	for(var i=0;i<response.data.length;i++){
		var obj = response.data[i]
		html +=`<div class="col-sm-6 col-md-4 col-lg-3">
		          <a href="detail-page.html?goods_id=${obj.goods_id}">
					  <div class="thumbnail">
				      <img src="${obj.goods_thumb}" alt="...">
				      <div class="caption">
				        <h3>商品名称:${obj.goods_name}</h3>
				        <p>简介:${obj.goods_desc}</p>
				        <p>金额:<span>${obj.price}</span></p>
				        <p>加入购物车</p>
				      </div>
				      </div>
			      </a>
			    </div>`
	}
	$("#goodsList").append(html);
	lock = true;
	}
})
}



$(".moretext span").click(function(){
	$(this).css("display", "none")
	set()
})
function set(){
	$(window).scroll(function(){
	if(!lock) return;
	if (page === 5) {
		return
	}
	var n = $(window).scrollTop();
	var m = $(window).height();
	var l = $(document).height();
	var proportion = n / ( l - m );
	if(proportion >= 0.7){
		page++;
		Pagination(page);
		lock = false;
	}
})
}


$.ajax({
	"url": "http://h6.duchengjiu.top/shop/api_cart.php?token="+localStorage.getItem("token"),
	"type": "GET",
	"dataType": "json",
	"success": function(response){
		for(var i=0;i<response.data.length;i++){
			$("#cartnav").append('<li><img src="'
			+response.data[i].goods_thumb
			+'"><p>'
			+ response.data[i].goods_name 
			+'</p></li>');
		}
		$("#cart-nav").text("购物车("+ response.data.length +")");
		$("#cartnav li img").css({"width":"80px","float":"left","margin":"10px"})
		$("#cartnav li p").css({"color":"#a10000","margin":"10px","float":"left",})
	}
});


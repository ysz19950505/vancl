
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
var page = 1;
var lock = true;
Pagination(page);
function Pagination(page){
	//alert(1)
	$.ajax({
		"url":"http://h6.duchengjiu.top/shop/api_goods.php?page="+page+"&pagesize=24",
		"type": "GET",
		"dataType": "json",
		"success": function(response){
			console.log(response)
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
	});
}

$(".moreImg img").click(function(){
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






$(".Side-bar ul li:eq(2)").click(function() {
	$("body,html").animate({scrollTop: 0});
});

$(document).scroll(function() {
	
	var top = $(document).scrollTop();
	
	if (top > 400) {
		$(".Side-bar").fadeIn();
	} else {
		$(".Side-bar").fadeOut();
	}
})
//window.onresize = change;
//change();
//function change(){
//	var windowWidth = document.documentElement.clientWidth;
//  if (windowWidth <1000) {
//	   $(".Side-bar").hide()
//	    removeEventListener("scroll",document,false)
//  }
//}



if( localStorage.getItem("token") ){
	$(".login-").html("<li><span>欢迎客官&nbsp;" + localStorage.getItem("username") + "&nbsp;来到凡客诚品"+ "</span></li><li><span id='cancel'>&nbsp;&nbsp;注销登录</span></li>");
}
$("#cancel").click(function(){
	localStorage.clear();
	$(".login-").html('<li><a href="Fakeregister.html">注册</a></li><li><a href="Fakeregister.html">登录</a></li>');
})


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


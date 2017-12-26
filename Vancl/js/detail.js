//通过url传递过来的商品名称，得到商品详情
var str = location.search.substr(1);
var search_text = str.split("=");
search_text[1] = decodeURI(search_text[1])
console.log(search_text[1])

$.ajax({
		"url": "http://h6.duchengjiu.top/shop/api_goods.php",
		"type": "GET",
		"dataTape": "json",
		"data": {
			"search_text": search_text[1]
		},
		"success": function(response){
//			console.log(response);
			var obj = response;
			var html = "";
			for(var i = 0; i < obj.data.length - 1; i++){
				html +=
					   `<li class="col-lg-3 col-md-4 col-sm-6 col-xs-6">
					   		<a href="detail-page.html?goods_id=${obj.data[i].goods_id}">
								<img src="${obj.data[i].goods_thumb}" />
					   			<h6>${obj.data[i].goods_name}</h6>
								<p class="price">￥${obj.data[i].price}</p>
								<button id="cart">加入购物车</button>
					  		</a>
					    </li>`;
			}
			$("#detail-row").html(html);
		}
	})

//  通过文本框内的中文搜索
$(".btn-default").click(function(){
	var strNew = $(".form-control").val();
//	console.log(strNew);
	$.ajax({
		"url": "http://h6.duchengjiu.top/shop/api_goods.php",
		"type": "GET",
		"dataTape": "json",
		"data": {
			"search_text": strNew
		},
		"success": function(response){
//			console.log(response);
			var obj = response;
			var html = "";
			for(var i = 0; i < obj.data.length - 1; i++){
				html +=
					   `<li class="col-lg-3 col-md-4 col-sm-6 col-xs-6">
					   		<a href="detail-page.html?goods_id=${obj.data[i].goods_id}">
								<img src="${obj.data[i].goods_thumb}" />
					   			<h6>${obj.data[i].goods_name}</h6>
								<p class="price">￥${obj.data[i].price}</p>
								<button id="cart">加入购物车</button>
					  		</a>
					    </li>`;
			}
			$("#detail-row").html(html);
		}
	})
})
setCss();
window.onresize = setCss;
function setCss(){
	var windowWidth = document.body.clientWidth; 
//	console.log(windowWidth)
	if(windowWidth <= 700){
		$(".sec-header").hide();
	}else{
		$(".sec-header").show();
	}
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
$(".accordion h3").click(function () {
	
	if ($(this).parent().is(".cur")) {
		$(this).siblings(".content").slideUp();
		$(this).parent().removeClass("cur");
		return ;
	}
	$(this).parent().addClass("cur").siblings().removeClass("cur");
 	$(this).siblings().stop(true,true).slideToggle()
 	$(this).parent().siblings().children(".content").stop(true,true).slideUp();

})



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


$.ajax({
    "url":"http://h6.duchengjiu.top/shop/api_order.php?token=" + localStorage.getItem("token"),
	"type":"GET",
	"dataType": "json",
	"success": function(response){
		console.log(response)
		console.log(localStorage.getItem("token"))
		if (response.code === 1) {
			$("#order-list").html("您的订单为空哦，去<a href='index.html'>购物</a>");
		}
		console.log(response)
		if(response.code === 0){
			console.log(response);
			var html = '';
			for(var i=0;i<response.data.length;i++){
				var obj = response.data[i]; 
				html += '<div class="order-item">';
				html += '<div class="order-item-header">订单号：' + obj.order_id +'</div>';
				for(var j=0;j<obj.goods_list.length;j++){
					var goods = obj.goods_list[j]; 
					goods.subtotal = goods.goods_number * goods.goods_price;
					html += '<div data-id="' 
					+goods.goods_id + '"><img src="'
					+ goods.goods_thumb  
					+'">商品名称：' 
					+ goods.goods_name  
					+ '商品数量：'
					+ goods.goods_number 
					+ '商品单价：' 
					+ goods.goods_price 
					+ '商品金额：' 
					+ goods.subtotal   
					+ '</div>';
				}
				html += '</div>'
			}
			$("#order-list").html(html);
		}
	}
});



var page = 2;
$.ajax({
	"url":"http://h6.duchengjiu.top/shop/api_goods.php?page="+page+"&pagesize=10",
	"type": "GET",
	"dataType": "json",
	"success": function(response){
//		console.log(response)
		var html='';
		for(var i=0;i<response.data.length;i++){
			var obj = response.data[i]
			html +=`<div class="col-sm-6 col-md-4 col-lg-3">
			          <a href="detail-page.html?goods_id=${obj.goods_thumb}">
						  <div class="thumbNail">
					      <img src="${obj.goods_thumb}" alt="...">
					      <div class="Caption">
					        <h3>${obj.goods_name}</h3>
					        <p>售价:&nbsp<span>${obj.price}</span></p>
					        <p>加入购物车</p>
					      </div>
					      </div>
				      </a>
				    </div>`
		}
		$("#goodslist").append(html);
	}
});

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
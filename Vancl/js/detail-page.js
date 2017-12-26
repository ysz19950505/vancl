//通过url传递过来的商品id，得到商品详情
var str = location.search.substr(1);
var goodId = str.split("=");
console.log(goodId[1])
$.ajax({
	"url": "http://h6.duchengjiu.top/shop/api_goods.php",
	"type": "GET",
	"dataType": "json",
	"data": {
		"goods_id": goodId[1]
	},
	"success": function(response){
		console.log(response);
		var obj = response;
		for(var i = 0; i < obj.data.length-1; i++){
			$(".sec-img").append('<img src="' + obj.data[i].goods_thumb + '" />');
			$("#price").append('<span>￥'+obj.data[i].price+'</span>')
			$(".sec-header").append('<h6 class="tietle">'+obj.data[i].goods_name+'</h6>');
		}
	}
})
//加入购物车
$("#cart").click(function(){
	//判断当前是否登录，没登录无法购买，提示用户，并跳转到登录页面，把当前路径发送给登录页面
	if(!localStorage.getItem("token")){
		alert("登录后才能购买！");
		location.href = "Fakeregister.html#callback=" + location.href;
	}
	//获取本地存储中的商品数量信息
	var goods_number = localStorage.getItem("cart"+goodId[1]);
		
	//如果有 则是买过！让之前的数量+1  如果没有就是第一次购买，那么数量是1
	goods_number = goods_number ? parseInt(goods_number)+1 : 1;
		
	$.ajax({
		"url":"http://h6.duchengjiu.top/shop/api_cart.php?token=" + localStorage.getItem("token"),
		"type":"POST",
		"dataType": "json",
		"data": {
			"goods_id" : goodId[1],
			"number"   : goods_number
		},
		"success": function(response){
			console.log(response);
			
			//成功后存储商品信息购买数量到本地存储中
			localStorage.setItem("cart"+ goodId[1],goods_number);
			alert('加入购物车成功');
		}
	});
})




//立即购买
$("#shopping").click(function(){
	//判断当前是否登录，没登录无法购买，提示用户，并跳转到登录页面，把当前路径发送给登录页面
	if(!localStorage.getItem("token")){
		alert("登录后才能购买！");
		location.href = "Fakeregister.html#callback=" + location.href;
	}
	//获取本地存储中的商品数量信息
	var goods_number = localStorage.getItem("cart"+goodId[1]);
		
	//如果有 则是买过！让之前的数量+1  如果没有就是第一次购买，那么数量是1
	goods_number = goods_number ? parseInt(goods_number)+1 : 1;
		
	$.ajax({
		"url":"http://h6.duchengjiu.top/shop/api_cart.php?token=" + localStorage.getItem("token"),
		"type":"POST",
		"dataType": "json",
		"data": {
			"goods_id" : goodId[1],
			"number"   : goods_number
		},
		"success": function(response){
			console.log(response);
			
			//成功后存储商品信息购买数量到本地存储中
			localStorage.setItem("cart"+ goodId[1],goods_number);
			//跳转到购物车页面
			location.href = "cart.html";
		}
	});
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
//图片放大镜



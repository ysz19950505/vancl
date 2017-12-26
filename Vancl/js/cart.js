$.ajax({
	"url": "http://h6.duchengjiu.top/shop/api_cart.php?token="+localStorage.getItem("token"),
	"type": "get",
	"dataType": "json",
	"success": function(response){
		console.log(response);
		if(response.data.length > 0){
			for(var i = 0; i < response.data.length; i++){
				var obj = response.data;
				console.log(obj[i].goods_number)
				var html =
				`<div class="goods">
					<div class="goods-box">
						<input type="checkbox" class="chkbox" />
						<input type="hidden" class="goods_id" value="${ obj[i].goods_id }"/>
						<img src="${ obj[i].goods_thumb }" alt="" />
						<p>${ obj[i].goods_name }</p>
					</div>
					<div class="goods-one">${ obj[i].goods_price }</div>
					<div class="goods-lists">
						<span class="left-button">-</span>
						<input type="text" class="center-text" value="${ obj[i].goods_number }"/>
						<span class="right-button">+</span>
					</div>
					<div class="goods-sum">${ obj[i].goods_price * obj[i].goods_number }</div>
					<div class="goods-op">
						<span>删除</span>
					</div>
				</div>`;
				$("#shop").html( $("#shop").html() + html )
			}
//			添加删除事件
			$(".goods-op").click(function(){
				alert('您是否删除这个商品!');
				
				var goods = this.parentNode;
				
				//删除dom节点
				$(goods).remove();
				//通过数据库删除
				upDataCartAjax(this,0)
			})
			//减号按钮事件监听
			$(".left-button").click(function(){
				upDataCart(this,"-1")
			})
			//加号按钮事件监听
			$(".right-button").click(function(){
				upDataCart(this,"+1")
			})
			//输入内容，改变商品数量
			$('.center-text').blur(function(){
				setGoods(this);
			})
			//全选框
			$("#shop").click(function(e){
				//发出单击事件源的id
				console.log(222)
				if(e.target.id === "selectAll"){
					
					console.log(777)
					//得到 全选按钮的当前选中状态存入变量
					var selected = e.target.checked;
					//通过类名得到商品复选框的类数组
					var checkboxs = document.getElementsByClassName("chkbox");
					console.log(checkboxs)
					for(var i = 0; i < checkboxs.length; i++){
						//把复选框的选中状态 通过赋值 和全选按钮一致
						checkboxs[i].checked = selected;
					}
					showSum();
					return ;
				}
				//除了全选复选框的事件
				if(e.target.type === "checkbox"){
					showSum();
				}
			})
		}
	}
})


//选中元素删除商品信息
$("#Delete").click(function(){
	//找到选中的复选框
	var inputs = $(".goods input:checked");
	for(var i = 0; i < inputs.length; i++){
		var goodsL = inputs[i].parentNode.parentNode;
		var objPa = inputs[i].parentNode;
		//删除数据库中相应内容
		upDataCartAjax(objPa,0);
		goodsL.remove();
	}
})
$("#Shop").click(function(e){
	//全局委托
	//全选selectAll
	if(e.target.id === "selectAll"){
		//得到 全选按钮的当前选中状态存入变量
		var selected = e.target.checked;
		//通过类名得到商品复选框的类数组
		var checkboxs = document.getElementsByClassName("chkbox");
		for(var i = 0; i < checkboxs.length; i++){
			//把复选框的选中状态 通过赋值 和全选按钮一致
			checkboxs[i].checked = selected;
		}
		showSum();
		return ;
		console.log(777)
	}
	//除了全选复选框的事件
	if(e.target.type === "checkbox"){
		showSum();
	}
})
//显示总结和数量
function showSum(){
	console.log(100)
	//动态得到数据类数组
	var goods = document.getElementsByClassName("goods");
	//累加器
	var sum = 0;
	var num = 0;
	for(var i = 0; i < goods.length; i++){
		var objGoods = goods[i];
		if($(objGoods).children("div:first").children("input").is(":checked")){
			sum += parseInt($(objGoods).children("div:eq(3)").text());
			num += parseInt($(objGoods).children("div:eq(2)").children("input").val());
		}
	}
	
	$("#Money").text("￥"+sum);
	$("#Amount").text(num);
}
//改变购物车商品数量的业务函数
function upDataCart(obj,num){   //obj当前触发事件的元素，num： -1 +1
	//找对象
	var Good = obj.parentNode.parentNode;
	//找到商品数量
	var goods_id = Good.getElementsByClassName("goods_id")[0].value;
	var goods_number = Good.getElementsByClassName("center-text")[0];
	var goods_number_value = parseInt(goods_number.value);
	//找到商品单价
	var goods_price = Good.getElementsByClassName("goods-one")[0];
	var goods_price_value = parseInt(goods_price.innerText);
	//找到商品合计金额元素
	var goods_subtotal = Good.getElementsByClassName("goods-sum")[0];
	
	//判断
	if(num == "-1"){
		goods_number_value--;
	}else if(num == "+1"){
		goods_number_value++;
	}
	
	if(goods_number_value < 1){
		goods_number_value = 1;
		alert("至少选购一件该商品！")
	}
	if(goods_number_value > 10){
		goods_number_value = 10;
		alert("最多选购10件该商品！")
	}
	//当前商品的值                         信号量改变后的值
	goods_number.value = goods_number_value;
	console.log(goods_number_value);
	//商品合计值
	var subtotal = goods_number_value * goods_price_value;
	
	goods_subtotal.innerHTML = subtotal;
	
	showSum();
}
//上下按钮监听
function setpSetGoods(obj,event){
	var event = event || window.event;
	
	event.preventDefault();
	
	if(event.keyCode === 40){
		upDataCart(obj,'-1');
	}else if( event.keyCode === 38){
		upDataCart(obj,'+1');
	}
}
//设置某件商品的数量
function setGoods(obj){
	
	//获取商品数量
	var num =parseInt($(obj).val());
	
	//判断商品数量的值，大于或者小于范围
	if(num < 1 || isNaN(num)){
		$(obj).val(1);
	}
	if(num > 10){
		$(obj).val(10);
	}
	
	//让金额合计变化
	upDataCart(obj,$(obj).val());
	
}
//跳转到订单页，并把金额带过去
$("#checkout").click(function(){
	
	var sum = $("#Money").text().substr(1);
//	console.log(sum);
	
	location.href = "checkout.html?sum="+sum;
	
})
//删除商品通过ajax
function upDataCartAjax(obj,num){
	
	var goods = obj.parentNode;
	
	var goods_id = goods.getElementsByClassName("goods_id")[0].value;
	
	$.ajax({
		"url": "http://h6.duchengjiu.top/shop/api_cart.php?token="+localStorage.token,
		"type": "POST",
		"dataType": "json",
		"data": {
			"goods_id": goods_id,
			"number" : num
		},
		"success": function(response){
			console.log(response);
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
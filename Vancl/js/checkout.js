address();
//隐藏和显示添加地址选项
$("#btn1").click(function(){
//	console.log(111);
	$("#add").show();
})
$(".close").click(function(){
	$("#add").hide();
})
//从url中获取金额添加到页面
var str = location.search.substr(1);
var sum = str.split("=");
console.log(sum[1])
$("#price").html('<h3>您还需支付：<span>￥'+sum[1]+'元</span></h3>')
//保存新地址
$("#btn2").click(function(e){
	e.preventDefault();
//	通过序列化表单值，创建 URL 编码文本字符串。
	var data = $("form").serialize();
	$.ajax({
		"url": "http://h6.duchengjiu.top/shop/api_useraddress.php?token="+ localStorage.token + "&status=add",
		"type": "post",
		"data": data,
		"dataType": "json",
		success: function(obj){
			console.log(obj);
			address();
			$("#add").hide();
		}
	})
})
//添加地址函数
function address(){
	$.ajax({
		"type": "get",
		"url": "http://h6.duchengjiu.top/shop/api_useraddress.php?token="+localStorage.token,
		"dataType": "json",
		"success": function(obj){
			var data = obj.data;
			var str = "";
			var address_id;
			for(var i = 0; i < data.length; i++){
				str +=
				`<div class="join-add" data-id="${data[i].address_id}">
					<span>${ data[i].address_name }</span>
					<span>${ data[i].mobile }</span>
					<span>
						${ data[i].province }
						${ data[i].city }
						${ data[i].district }
					</span>
					<span>
						${ data[i].address }
					</span>
					<span class="delete">删除</span>
					<input type="hidden"  value="${data[i].address_id}">
			</div>`;
			}
			$(".address-r").html(str);
			//删除地址
			$(".delete").click(function(e){
				alert("确定删除该地址?");
				$(this).parent().remove();
				var address_id = $(this).next("input").val();
				//ajax删除地址
				$.ajax({
					"type": "get",
					"url": "http://h6.duchengjiu.top/shop/api_useraddress.php?token="+ localStorage.token + "&status=delete&address_id="+ address_id,
					"dataType": "json",
					"success": function(obj){
						console.log(obj);
					}
				})
			})
			
			//点击地址
			$(".join-add").click(function(e){
				$(this).siblings().hide();
				$(this).css({'border-color': '#BA1000'});
				address_id = $(this).attr('data-id');
//				if(e.target){
//					address_id = event.target.getAttribute("data-id");
//					console.log(address_id);
//				}
			})
			//下订单
			$("#order").click(function(){
				//判断地址是否选中
				if( address_id == 0 || address_id == undefined){
					alert("请选择地址后在下单！");
					return;
				}
				$.ajax({
					"url":"http://h6.duchengjiu.top/shop/api_order.php?token="+localStorage.token + "&status=add",
					"type":"POST",
					"dataType": "json",
					"data": {
						"address_id": address_id,
						"total_prices": sum[1]
					},
					"success": function(response){
						console.log(response);
						if(response.code === 0){
							alert("提交订单成功！");
							//跳转到查询订单页面
							location.href = "order.html";
						}
					}
				});
			})
		}
	})
}

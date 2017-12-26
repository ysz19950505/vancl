function cambiar_login() {
	stop();
	document.querySelector('.cont_forms').className = "cont_forms cont_forms_active_login";
	document.querySelector('.cont_form_login').style.display = "block";
	document.querySelector('.cont_form_sign_up').style.opacity = "0";

	setTimeout(function() {
		document.querySelector('.cont_form_login').style.opacity = "1";
	}, 200);

	setTimeout(function() {
		stop();
		document.querySelector('.cont_form_sign_up').style.display = "none";
	}, 400);
}

function cambiar_sign_up(at) {
	stop();
	document.querySelector('.cont_forms').className = "cont_forms cont_forms_active_sign_up";
	document.querySelector('.cont_form_sign_up').style.display = "block";
	document.querySelector('.cont_form_login').style.opacity = "0";

	setTimeout(function() {
		document.querySelector('.cont_form_sign_up').style.opacity = "1";
	}, 100);

	setTimeout(function() {
		document.querySelector('.cont_form_login').style.display = "none";
	}, 400);
}

function ocultar_login_sign_up() {
	stop();
	document.querySelector('.cont_forms').className = "cont_forms";
	document.querySelector('.cont_form_sign_up').style.opacity = "0";
	document.querySelector('.cont_form_login').style.opacity = "0";

	setTimeout(function() {
		stop();
		document.querySelector('.cont_form_sign_up').style.display = "none";
		document.querySelector('.cont_form_login').style.display = "none";
	}, 500);
}

$(".logininup div:nth-child(4)").click(function() {
	stop();
	$(".logininup").animate({
		"top": 0 + "rem"
	})
})
$(".logininup").mouseleave(function() {
	stop();
	$(".logininup").animate({
		"top": -8 + "rem"
	})
})








$(".register div:nth-child(4)").click(function(){
	$(".register").animate({"top": 0+"rem"})
})
$(".register").mouseleave(function(){
	$(".register").animate({"top": -8+"rem"})
})


$("#username").blur(function(){
	var username = $('#username').val();
	$.ajax({
		"url":"http://h6.duchengjiu.top/shop/api_user.php",
		"type":"POST",
		"dataType": "json",
		"data": {
			"status": "check",
			"username": username
		},
		"success": function(response){
//			console.log(response);
			
			if(response.code === 0){
				//成功后
//				alert(response.message)
//				$(".error").hide();
				$(".good-2").show();
				$(".good-2").html("good！")
				$(".good-2").css({"color":"green"})
			}else if(response.code === 1000){
				//失败后
//				alert(response.message)
				$(".good-2").show();
				$(".good-2").html(response.message)
				$(".good-2").css({"color":"red"})
//				$(".success").hide();
			}else if(response.code === 2001){
				$(".good-2").show();
				$(".good-2").html(response.message)
				$(".good-2").css({"color":"red"})
			}
		}
	})
})


$("#password").blur(function(){
	var passWord = $('#password').val();
//	console.log(passWord)
//	console.log(passWord.length)
	if(passWord.length < 6){
//		console.log("1")
		$(".good-3").html("密码长度大于6位！");
		$(".good-3").show()
		$(".good-3").css({"color":"red"})
		return;
	}else{
		$(".good-3").html("good!");
		$(".good-3").show()
		$(".good-3").css({"color":"green"})
		return;
	}
})



$(".btn_sign_up").mouseover(function(){
//	var username = $('#username').val();
	var passWord = $('#password').val();
	var passWord1 = $('#password-1').val();
	
	if(passWord1 != passWord){
		$(".good-4").html("与上面密码不符！");
		$(".good-4").show()
		$(".good-4").css({"color":"red"})
		return;
	}
	if(passWord1 == passWord && passWord.length >0){
		$(".good-4").html("good！");
		$(".good-4").show()
		$(".good-4").css({"color":"green"})
	}
})



$(".btn_sign_up").click(function(e){
	
	
	e.stopPropagation();
	
	var username = $('#username').val();
	var password = $('#password').val();
//	var passWord1 = $('#password-1').val();
	console.log("用户"+username);
	console.log(password);
	console.log("点击了注册按钮");
	
//	var xhr = new XMLHttpRequest();
//	
//	xhr.open("POST", "http://h6.duchengjiu.top/shop/api_user.php", true);
//	
//	xhr.onreadystatechange = function() {
//		console.log("1");
//	}
//	
//	xhr.send();
	
//	$.post("http://h6.duchengjiu.top/shop/api_user.php")
	
	$.ajax({
		"url":"http://h6.duchengjiu.top/shop/api_user.php",
		"type":"POST",
		"dataType": "json",
		"data": {
			"status": "register",
			"username": username,
			"password": password
		},
		"success": function(response){
			console.log(response);
			localStorage.setItem("token",username)
			localStorage.setItem("token",password)
			if(response.code === 0){
				alert(response.message);
				cambiar_login()
//				window.location.href = "index.html";
			}
		}
	})
})





//if( localStorage.getItem("token") ){
//	$("body").html("<div class='register-s'><h2>欢迎</h2>" + localStorage.getItem("username") + "您已经登录成功了！<h6>马上飞往首页</h6></div>")
//	
//	setTimeout(function(){
//		location.href = "index.html";
//	},3000);
//}

//登录验证
$(".btn_login").click(function(e){
	e.stopPropagation();
	var username = $('#username-1').val();
	var password = $('#password-2').val();
	
	console.log(username,password);
	
	$.ajax({
		"url":"http://h6.duchengjiu.top/shop/api_user.php",
		"type":"POST",
		"dataType": "json",
		"data": {
			"status": "login",
			"username": username,
			"password": password
		},
		"success": function(response){
			if(response.code === 0){
				console.log(response.message);
				localStorage.setItem("token",response.data.token);
				var data = response.data;

				for( property in data){
					if(data.hasOwnProperty(property)){
						localStorage.setItem(property,data[property]);
					}
				}
				var callbackURL = location.hash.substr(10);
				if( callbackURL ){
					window.location.href = callbackURL;
				}else{
					window.location.href = "index.html";
				}	
			}
		}
	});
})


$(".mode-message .login-out").click(function(){
	localStorage.clear();
	if( !(localStorage.getItem("token")) ){
		alert("退出成功！")
	}
})
$(".mode-message .login-change").click(function(){
	localStorage.clear();
	if( !(localStorage.getItem("token")) ){
		alert("退出成功！即将跳往登陆页面")
		location.href = "TalkWebregister.html";
		
	}
})


var kk = localStorage.getItem("color-");
k4(kk);

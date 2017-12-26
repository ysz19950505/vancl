
var k = 0;




$(".i-color span:nth-child(1)").click(function(){
	$("body").css({"background":"#dddddd"});
	$(".header-a a").css({"color":"#3d3c5b"});
	$(".l-news-a a").css({"color":"#3d3c5b"});
	$(".left-c").css({"background":"#fff"});
	$(".right-c").css({"background":"#fff"});
	$(".iconfont").css({"color":"#cccbcb"});
	$(".main").css({"background":"#f8f7f7"});
	
	$(".l-news h5").css({"background":"#3d3c5b"});
	$(".right-c .subMenu").css({"background":"#fff"});
	
	$(".subMenu-ul li a").css({"color":"#000"});
	$(".subnav .mover").css({"background":"#000"});
	$(".s-button div").css({"background":"#fff"});
	$(".s-button div").css({"color":"#000"});
	$(".buttom").css({"color":"#68687b"});
//	$(".subMenu-message p").css({"background":"rgba(60,60,90,0.7)"})
	
	$(".cont_ba_opcity").css({"background":"#3d3c5b"})
	k = 1;
	localStorage.setItem("color-",k)
//	alert("1");
})

$(".i-color span:nth-child(2)").click(function(){
	$("body").css({"background":"#999999"});
	$(".header-a a").css({"color":"#eeeeee"});
	$(".l-news-a a").css({"color":"#3d3c5b"});
	$(".left-c").css({"background":"#f8f7f7"});
	$(".right-c").css({"background":"#fff"});
	$(".iconfont").css({"color":"#63627b"});
	$(".main").css({"background":"#e5e3e3"});
	
	$(".l-news h5").css({"background":"#3d3c5b"});
	$(".right-c .subMenu").css({"background":"#fff"});
	
	$(".subMenu-ul li a").css({"color":"#000"});
	$(".subnav .mover").css({"background":"#000"});
	$(".s-button div").css({"background":"#fff"});
	$(".s-button div").css({"color":"#000"});
	
//	$(".subMenu-message p").css({"background":"rgba(60,60,90,0.7)"})
//	.subMenu-message p:hover{
//	background: #3d3c5b;
//	color: white;
//	
//}	
	
	$(".col_md_login .cont_ba_opcity").css({"background":"#3d3c5b"})
//	alert("2");
	k= 2;
	localStorage.setItem("color-",k)
})

$(".i-color span:nth-child(3)").click(function(){
	$("body").css({"background":"#eb5f5f"});
	$(".l-news h5").css({"background":"#eb5f5f"});
	$(".right-c .subMenu").css({"background":"#f7afaf"});
	$(".l-news-a a").css({"color":"#fff"});
	$(".header-a a").css({"color":"#eeeeee"});
	$(".left-c").css({"background":"#f7afaf"});
	$(".right-c").css({"background":"#fff"});
	$(".iconfont").css({"color":"#f8f7f7"});
	$(".main").css({"background":"#f47d7d"});
	
	$(".subMenu-ul li a").css({"color":"#fff"});
	$(".subnav .mover").css({"background":"#e60026"});
	$(".s-button div").css({"background":"#f7afaf"});
	$(".s-button div").css({"color":"#fff"});
	$(".buttom").css({"color":"#e5e3e3"});
	$(".col_md_login .cont_ba_opcity").css({"backgroundColor":"#f47185"});
	k = 3;
	localStorage.setItem("color-",k)
//	$(".subMenu-message>p").css({"background":"rgba(255,255,255,0.7)"})
//	alert("3");
})

$(".i-color span:nth-child(4)").click(function(){
	$("body").css({"background":"url(img/bg-body-1.png) no-repeat","backgroundSize":"cover"});
	$(".l-news-a a").css({"color":"#3d3c5b"});
	$(".header-a a").css({"color":"#000"});
	$(".left-c").css({"background":"#f8f7f7"});
	$(".right-c").css({"background":"#fff"});
	$(".iconfont").css({"color":"#63627b"});
	$(".main").css({"background":"#e5e3e3"});
	$(".buttom").css({"color":"#000"});
	
	
	$(".l-news h5").css({"background":"#3d3c5b"});
	$(".right-c .subMenu").css({"background":"#fff"});
	
	$(".subMenu-ul li a").css({"color":"#000"});
	$(".subnav .mover").css({"background":"#000"});
	$(".s-button div").css({"background":"#fff"});
	$(".s-button div").css({"color":"#000"});
	
//	$(".subMenu-message>p").css({"background":"rgba(60,60,90,0.7)"})
	k = 4;
	localStorage.setItem("color-",k)
//	alert("4");
})


//$("#cont_ba_opcity").click(function(){
//	alert("1");
//})选择不到
//localStorage.setItem("color-",k)

function k4(k){
	if(k==1){
		$("body").css({"background":"#dddddd"});
		$(".header-a a").css({"color":"#3d3c5b"});
		$(".l-news-a a").css({"color":"#3d3c5b"});
		$(".left-c").css({"background":"#fff"});
		$(".right-c").css({"background":"#fff"});
		$(".iconfont").css({"color":"#cccbcb"});
		$(".main").css({"background":"#f8f7f7"});
		
		$(".l-news h5").css({"background":"#3d3c5b"});
		$(".right-c .subMenu").css({"background":"#fff"});
		
		$(".subMenu-ul li a").css({"color":"#000"});
		$(".subnav .mover").css({"background":"#000"});
		$(".s-button div").css({"background":"#fff"});
		$(".s-button div").css({"color":"#000"});
		$(".buttom").css({"color":"#68687b"});
	//	$(".subMenu-message p").css({"background":"rgba(60,60,90,0.7)"})
		
		$(".cont_ba_opcity").css({"background":"#3d3c5b"})
	}else if(k==2){
		$("body").css({"background":"#999999"});
		$(".header-a a").css({"color":"#eeeeee"});
		$(".l-news-a a").css({"color":"#3d3c5b"});
		$(".left-c").css({"background":"#f8f7f7"});
		$(".right-c").css({"background":"#fff"});
		$(".iconfont").css({"color":"#63627b"});
		$(".main").css({"background":"#e5e3e3"});
		
		$(".l-news h5").css({"background":"#3d3c5b"});
		$(".right-c .subMenu").css({"background":"#fff"});
		
		$(".subMenu-ul li a").css({"color":"#000"});
		$(".subnav .mover").css({"background":"#000"});
		$(".s-button div").css({"background":"#fff"});
		$(".s-button div").css({"color":"#000"});
		
	//	$(".subMenu-message p").css({"background":"rgba(60,60,90,0.7)"})
	//	.subMenu-message p:hover{
	//	background: #3d3c5b;
	//	color: white;
	//	
	//}	
		
		$(".col_md_login .cont_ba_opcity").css({"background":"#3d3c5b"})
	}else if(k==3){
		$("body").css({"background":"#eb5f5f"});
		$(".l-news h5").css({"background":"#eb5f5f"});
		$(".right-c .subMenu").css({"background":"#f7afaf"});
		$(".l-news-a a").css({"color":"#fff"});
		$(".header-a a").css({"color":"#eeeeee"});
		$(".left-c").css({"background":"#f7afaf"});
		$(".right-c").css({"background":"#fff"});
		$(".iconfont").css({"color":"#f8f7f7"});
		$(".main").css({"background":"#f47d7d"});
		
		$(".subMenu-ul li a").css({"color":"#fff"});
		$(".subnav .mover").css({"background":"#e60026"});
		$(".s-button div").css({"background":"#f7afaf"});
		$(".s-button div").css({"color":"#fff"});
		$(".buttom").css({"color":"#e5e3e3"});
		$(".col_md_login .cont_ba_opcity").css({"backgroundColor":"#f47185"});
		
	}else if(k==4){
		$("body").css({"background":"url(img/bg-body-1.png) no-repeat","backgroundSize":"cover"});
		$(".l-news-a a").css({"color":"#3d3c5b"});
		$(".header-a a").css({"color":"#000"});
		$(".left-c").css({"background":"#f8f7f7"});
		$(".right-c").css({"background":"#fff"});
		$(".iconfont").css({"color":"#63627b"});
		$(".main").css({"background":"#e5e3e3"});
		$(".buttom").css({"color":"#000"});
		
		
		$(".l-news h5").css({"background":"#3d3c5b"});
		$(".right-c .subMenu").css({"background":"#fff"});
		
		$(".subMenu-ul li a").css({"color":"#000"});
		$(".subnav .mover").css({"background":"#000"});
		$(".s-button div").css({"background":"#fff"});
		$(".s-button div").css({"color":"#000"});
	}
}

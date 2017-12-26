var n2 = 0;

	
//	setInterval (function(){
//		n2++;
//		if (n2 == 4) {
//			n2 =0
//		} 
//		$(".subnav .mover").animate({"left":n2*4+"rem"},100);
//		$(".subMenu-ul li div").eq(n2-1).show().siblings().children().hide()
//	},2000)
	
//	$(".right-c").mouseover(function(){
//		clearImmediate(timer);
//	})
	$(".subMenu-ul li").each(function(index){
		$(this).mouseover(function(){
			stop();
			n2 = index;
			$(".subnav .mover").animate({"left":n2*4+"rem"},100);
		})
		$(".subMenu-ul li div").mouseleave(function(){
			$(".subnav .mover").animate({"left":0+"rem"},100)
		})
	})
	
	$(".subMenu-ul li").mouseover(function(){
		$(this).children().show()
	})
	$(".subMenu-ul li").mouseleave(function(){
		$(".subMenu-ul li div").slideUp()
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




//
//function Tab(){
//	this.oBt = document.getElementById("s-button");
//	this.oUl = document.getElementById("subMenu-ul");
//	this.aLi = this.oUl.getElementsByTagName("li");
//	this.aDiv= this.aLi.getElementsByTagName("div")
//}
//
//Tab.prototype.init = function(){
//
//	var self = this;
//	
////	console.log("aa");
//	for(var i=0 ; i<this.aLi.length;i++){
//		
//		this.aLi[i].index = i;
//		this.aLi[i].onmouseover = function(){
//			
//			self.tt(this);
//		}
////		this.aLi[i].onmouseleave = function(){
////			self.ta(this);
////		}
//		this.aLi[i].onmouseleave = function(){
//			self.ta(this);
//		}
//	}
//}
//
//Tab.prototype.tt = function(obj){
//		for(var j=0;j<this.aDiv.length;j++){
//			this.aDiv[j].style.display="none";
//		}
//		if(obj.index-1== -1){
//			return ;
//		}
//		this.aDiv[obj.index-1].style.display="block";
//		
//}
//Tab.prototype.ta = function(obj){
//		for(var j=0;j<this.aDiv.length;j++){
//			this.aDiv[j].style.display="none";
//		}
//		
//}
//
//var tab = new Tab();
//tab.init();


$(".icon-s").click(function (e){
	e.stopPropagation();
	$(".search-kk").animate({"left": -2+"rem"})
})
$(".search-kk").click(function(e){
	e.stopPropagation();
})
$(document).click(function (){

	$(".search-kk").animate({"left": 13+"rem"})
})



$(".register div:nth-child(4)").click(function(){
	$(".register").animate({"top": 0+"rem"})
})
$(".register").mouseleave(function(){
	$(".register").animate({"top": -8+"rem"})
})

$(".logininup div:nth-child(4)").click(function(){
	$(".logininup").animate({"top": 0+"rem"})
})
$(".logininup").mouseleave(function(){
	$(".logininup").animate({"top": -8+"rem"})
})

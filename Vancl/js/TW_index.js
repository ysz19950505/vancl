var oSpan = document.getElementsByTagName("span");



function tick(){
	var oDate = new Date();
	
	
	var str = tub(oDate.getHours())+tub(oDate.getMinutes())+tub(oDate.getSeconds());
	for (var i=0; i<oSpan.length;i++) {
		oSpan[i].innerHTML=str[i];
	}
	}

	
	tick();
	 
	setInterval(tick,1000);
	 
	function tub(n){
		if(n < 10){
			return '0'+ n;
		}else{
			return '' + n;
		}
	}


var n2 = 0;
$(".subMenu-ul li").each(function(index){
	$(this).mouseover(function(){
		stop();
		n2 = index;
		$(".subnav .mover").animate({"left":n2*120+"px"},100)
	})
	$(".subMenu-ul").mouseleave(function(){
		$(".subnav .mover").animate({"left":0+"px"},100)
	})
})


$(".icon-s").click(function (e){
	e.stopPropagation();
	$(".search-kk").animate({"left": 0+"px"})
})
$(".search-kk").click(function(e){
	e.stopPropagation();
})
$(document).click(function (){

	$(".search-kk").animate({"left": 267+"px"})
})


function Tab(){
	this.oBt = document.getElementById("s-button");
	this.oUl = document.getElementById("subMenu-ul");
	this.aLi = this.oUl.getElementsByTagName("li");
	this.aDiv= this.oBt.getElementsByTagName("div")
}


Tab.prototype.init = function(){

	var self = this;
	
	console.log("aa");
	for(var i=0 ; i<this.aLi.length;i++){
		
		this.aLi[i].index = i;
		this.aLi[i].onmouseover = function(){
			
			self.tt(this);
		}
		this.aLi[i].onmouseleave = function(){
			self.ta(this);
		}
	}
}

Tab.prototype.tt = function(obj){
		for(var j=0;j<this.aDiv.length;j++){
			this.aDiv[j].style.display="none";
		}
		if(obj.index-1== -1){
			return ;
		}
		this.aDiv[obj.index-1].style.display="block";
		
}
Tab.prototype.ta = function(obj){
		for(var j=0;j<this.aDiv.length;j++){
			this.aDiv[j].style.display="none";
		}
		
}

var tab = new Tab();
tab.init();



var canvas = document.getElementById("canvas-a");
var ctx = canvas.getContext("2d");




//var image = new Image();
//image.src = "img/littlegirl.png";
//
//image.onload = function(){
//	
//	
//	
//	
//	
//	
//	
//	
//	
//	
//	var steps= 0;
//	var left= 0;
//	var top= 0;
//	setInterval(function(){
//		ctx.clearRect(0,0,800,800)
//		steps ++;
//		left += 7;
//		
//		if(steps > 3){
//			steps = 0;
//		}
//		ctx.drawImage(image,79*steps,108*1,79,108,100,0,79,108)
//	},150)	
//}
	
//	ctx.fillStyle = "#E2E2E2"
//	ctx.beginPath();
//	ctx.arc(0,0,30,0,2*Math.PI,false);
//	ctx.closePath();
//	ctx.fill();
//	
//	
//	ctx.fillStyle = "#E2E2E2"
//	ctx.beginPath();
//	ctx.arc(1000,500,30,0,2*Math.PI,false);
//	ctx.closePath();
//	ctx.fill();
//	
//	ctx.fillStyle = "#000"
//	ctx.beginPath();
//	ctx.arc(500,250,100,-0.5*Math.PI,0.5*Math.PI,false);
//	ctx.closePath();
//	ctx.fill();
//	
//	
//	ctx.fillStyle = "white"
//	ctx.strokeStyle = "aqua"
//	ctx.beginPath();
//	ctx.moveTo(100,200);
//	
//	function draw(current){
//		ctx.arc(100,200,80,0,current*2*Math.PI,false);
//		ctx.closePath();
//		ctx.fill();
//		ctx.stroke();
//	}
//	
//	
//	var num = 0;
//	var timer = null;
//	function loadCanvas(t){
//		timer = setInterval(function(){
//			
//			if(num >t){
//				draw(t)
//				clearInterval(timer);
//				
//			}else{
//				
//				draw(num);
//				num += 0.005;
//			}
//		},5)
//	}
	
	//loadCanvas(0.5);
	
		
//	ctx.drawImage(image,截取点,截取范围,摆放位置,显示大小)

	//circle
	
	
	
	function drawClock(){
		
		// clear canvas
		ctx.clearRect(0,0,1000,500);
		
		// get time
		var oDate = new Date();
		var sec = oDate.getSeconds();
		var minu = oDate.getMinutes();
		var hour = oDate.getHours();
		
		//turn
		hour = hour + minu/60;
		hour = hour>12?hour-12:hour;
		
		//dial
		ctx.beginPath();
		ctx.fillStyle = "#fff"
		ctx.lineWidth = 5;
		ctx.strokeStyle = "#ccc"  //顺时针
		ctx.arc(500,220,200,0,360,false);
		ctx.fill();
		ctx.stroke();
		ctx.closePath();
		
		for (var i=0; i<60; i++) {
			ctx.save();
			
			ctx.lineWidth = 3;
			ctx.strokeStyle = "#aaa";
			
			ctx.translate(500,220);
			ctx.rotate(i*6*Math.PI/180);
			
			ctx.beginPath();
			ctx.moveTo(0,-170);
			ctx.lineTo(0,-180);
			ctx.stroke();
			ctx.closePath();
			ctx.restore();
		}
		
		for (var i=0; i<12; i++) {
			ctx.save();
			
			ctx.lineWidth = 7;
			ctx.strokeStyle = "#6f6f6f";
			
			ctx.translate(500,220);
			ctx.rotate(i*30*Math.PI/180);
			
			ctx.beginPath();
			ctx.moveTo(0,-170);
			ctx.lineTo(0,-190);
			ctx.stroke();
			ctx.closePath();
			ctx.restore();
		}
		
		ctx.font = "20px 微软雅黑";
		ctx.lineWidth = 2;
		ctx.fillStyle = "#666666";
		ctx.fillText("Made in China",435,300);
		
		
		ctx.save();
			
			ctx.lineWidth = 11;
			ctx.strokeStyle = "black";
			
			ctx.translate(500,220);
			ctx.rotate(hour*30*Math.PI/180);
			
			ctx.beginPath();
			ctx.moveTo(0,-130);
			ctx.lineTo(0,30);
			ctx.stroke();
			ctx.closePath();
			ctx.restore();
			
		ctx.save();
			
			ctx.lineWidth = 7;
			ctx.strokeStyle = "black";
			
			ctx.translate(500,220);
			ctx.rotate(minu*6*Math.PI/180);
			
			ctx.beginPath();
			ctx.moveTo(0,-150);
			ctx.lineTo(0,30);
			ctx.stroke();
			ctx.closePath();
			ctx.restore();
			
		ctx.save();
			
			ctx.lineWidth = 3;
			ctx.strokeStyle = "black";
			
			ctx.translate(500,220);
			ctx.rotate(sec*6*Math.PI/180);
			
			ctx.beginPath();
			ctx.moveTo(0,-185);
			ctx.lineTo(0,45);
			ctx.stroke();
			ctx.closePath();
			ctx.restore();
			
		ctx.beginPath();
		ctx.strokeStyle="#666666"
		ctx.arc(500,220,9,0,360);
		ctx.fillStyle = "#999";
		ctx.fill();
		ctx.stroke();
		ctx.closePath();
		
		
	}
	setInterval(drawClock,1000);
	
	drawClock();
	
	
	//iife
//	(function(){
//		var DrawTable = function(canvas,listData){
//			this.canvas =canvas;
//			this.ctx = canvas.getContext("2d")
//			
//			this.lineWidth = 0.5;
//			this.width = this.canvas.width - this.lineWidth;
//			this.height = this.canvas.height - this.lineWidth;
//			
//			this.row =listData.row; //行
//			this.column = listData.data.length //列
//			this.itemHeight = listData.data;
//			
//			
//			this.itemWidth = 70;
//			this.itemSpace = (this.width -this.itemWidth*this.column) /this.column;
//			this.lineHeight = this.height / this.row;
//			
//			this.addTabel();
//		}
//		
//		//Draw lines  begin{x:0; y:0}JSON
//		DrawTable.prototype.addLine = function(begin,end){
//			this.ctx.beginPath();
//			this.ctx.lineWidth = this.lineWidth;
//			this.ctx.moveTo(begin.x, begin.y);
//			this.ctx.lineTo(end.x, end.y);
//			this.ctx.stroke();
//		}
//		
//		DrawTable.prototype.addRect = function(x,height){
//			this.ctx.beginPath();
//			this.ctx.fillStyle = "#407ebd"
//			this.ctx.fillRect(x,this.height-height,this.itemWidth,height);
//			
//		}
//		
//		DrawTable.prototype.addTabel = function(begin,end){
//			
////			this.addLine({x:0,y:0},{x:0,y:this.height});
////			this.addLine({x:this.width,y:0},{x:this.width,y:this.height});
//			for (var i=0; i<this.row;i++) {
//				var begin = {x:0, y:this.lineHeight*i}
//				var end = {x:this.width, y:this.lineHeight*i};
//				this.addLine(begin,end);
//			}
//			
//			for (var i=0; i<this.column;i++) {
//				this.addRect(this.itemSpace/2 + i*(this.itemWidth+this.itemSpace),this.itemHeight[i])
//			}
//		}
//		
//		window.DrawTable = DrawTable;
//		
//	})()
//	
//	var data = {
//		row:9,
//		data:[300,400,330,100,250,400]
//	}
//	
//	
//	var dt = new DrawTable(canvas,data)

	var oDi =document.getElementById("drag-box")
	var oP = oDi.getElementsByTagName("p")[0];
	oP.onmousedown = function(event){
		var event = event || window.event;
		
		var deltaX = event.clientX - oP.offsetLeft;
		var deltaY = event.clientY - oP.offsetTop;
		
		oDi.onmousemove = function(event){
			var event = event || window.event;
			var x = event.clientX - deltaX;
			var y = event.clientY - deltaY;
			
			
			if(x<0) x= 0;
			if(y<0) y= 0;
			if (x> oDi.clientWidth - oP.clientWidth) {
				x = oDi.clientWidth - oP.clientWidth;
			}
			if( y > oDi.clientHeight - oP.clientHeight){
				y = oDi.clientHeight - oP.clientHeight
			}
			oP.style.left = x + "px";
			oP.style.top = y + "px";
		}
	}
	document.onmouseup = function(){
		oDi.onmousemove = null;
	}
	
var oSmall = document.getElementById("smallp");
var zoom = document.getElementById("zoom")
var oBig = document.getElementById("bigp")
oSmall.onmouseover = function(){
	
}
oSmall.onmouseleave = function(){
	
}
//oSmall.onmousemove = function(){
//	var event = event ||
//	var scrollTop = document.body.scrollTop
//	var scrollLeft = document.body.scrollLeft
//}

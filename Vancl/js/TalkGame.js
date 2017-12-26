

 $("video").each(function(e){
	$("video").get(e).pause()
})
var n = 0;

$("video").get(n).play()

//  noSwiping : true,
$(".start").click(function(){
	$(".swiper-button-next").show();
})
$(".swiper-button-next").click(function(){
	n++;
//	console.log(n);
	$("video").get(n).play();

})

$(".v2").click(function(){
	$(".open").slideDown();
	$(".erro").delay(500).hide(100);
})
$(".open .input").blur(function(){
	var openS = $(".open .input").val();
	console.log(openS);
	if(openS == "芝麻开门"){
		$(".swiper-button-next img").animate({"right":"-49em"},100);
		console.log("22")
		
	}else{
		$(".erro").delay(500).show(100);
	}
})


$(".v3").click(function(){
	$(".open-").slideDown();
//	console.log("open-");
	$(".erro").delay(500).hide(100);
})

var answer = 0;
$(".open- .input").blur(function(){
	var openS = $(".open- .input").val();
	console.log(openS);
	if(openS == "芝麻开门"){

		console.log("33")
		answer++;
		if(answer > 3){
			$(".end4").show(500);
			$(".end1").show(1000);
			$(".end2").show(1500);
			$(".doyou").hide(1000);
			$(".an").hide(1000);
//			$(".end4").hide(500);
			$(".re-ans").hide(1000);
			$(".axi-no").hide(500);
			$(".axi-yes").hide(500);
			return ;
		}
		$(".axi-no").show(500);
		$(".axi-yes").show(500);
		$(".doyou").show(1000);
		$(".an").eq(answer-1).show(1000);
		
	}else{
		$(".erro").delay(500).show(100);
	}
	
})
$(".axi-no").click(function(){
	$(".swiper-button-next img").animate({"right":"-98em"},100);
});
$(".axi-yes").click(function(){
	$(".end4").show(500);
	$(".re-ans").show(1000);
	$(".doyou").hide(1000);
	$(".an").hide(1000);
//	$(".re-ans").hide(1000);
	$(".axi-no").hide(1000);
	$(".axi-yes").hide(1000);
	$(".open- .input").html("");
})
$(".open- .input").click(function(){
	$(".end4").hide(500);
	$(".re-ans").hide(1000);
	$(".axi-no").hide();
	$(".axi-yes").hide();
})



$(".v4").click(function(){
	$(".open--").slideDown();
	$(".erro").hide(100);
//	console.log("open-");
})
$(".clo3").click(function(){
	$(".erro").hide(100);
	console.log("col3")
	$(".swiper-button-next img").animate({"right":"-147em"},200);
})
$(".clo2").click(function(){
	$(".erro").show(100);
	$(".swiper-button-next img").animate({"right":"-98em"},200);
})
$(".clo1").click(function(){
	$(".erro").show(100);
	$(".swiper-button-next img").animate({"right":"-167em"},200);
})

$(".v5").click(function(){
	$(".open---").slideDown();
	$(".erro").delay(500).hide(100);
//	console.log("open-");
})
$(".open--- .input").blur(function(){
	var openS = $(".open--- .input").val();
	console.log(openS);
	if(openS == 39){
		$(".swiper-button-next img").animate({"right":"-196em"},100);
		console.log("55")
	}else{
		$(".erro").delay(500).show(100);
	}
})


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
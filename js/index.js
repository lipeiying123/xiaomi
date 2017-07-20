
$(function(){
	 $(".btnActive p").click(function(){
	 	$(this).addClass("active").siblings().removeClass("active");
	 })
	 $(".list-last>ul li").click(function(){
	 	$(this).addClass("on").siblings().removeClass("on");
	 	
	 })
	
	 $(".sel2_ul li").hover(function(){
	 	    var index=$(".sel2_ul li").index(this)
		    $(".pos_ul li").eq(index).show().siblings().hide();
		      
	 },function(){
	 	
		    $(".pos_ul li").eq(index).hide().siblings().show();
	 	
	 })
	  $(".pos_ul li").hover(function(){
	 	$(this).show()
	 },function(){
	 	$(this).hide()
	 })
 
 //侧边栏
 $(".secul li").hover(function() {
				var $ind = $(this).index();

				$(".cediv").css({
					"width": "0px",
					"opacity": 0.9
				})
				$(".cediv").eq($ind).css({
					"width": "200px",
					"opacity": 0.9
				})
			})
			$(".secul").hover(function() {}, function() {
				$(".cediv").css("width", "0px")
			})
			
	 
	 //下拉
	 $(".oll").hide();
	 	$(".xuan li").hover(function(){
				var ind=$(this).index()
				$(".oll").stop().slideUp(500);
				$(".oll").eq(ind).stop().slideDown(500);
			},function(){
			   $(".daohang").hover(function(){},function(){
			   	$(".oll").stop().slideUp(500);
			   })
			})
	 
	 
	 
	 
	 
	 
	 
	 
	 
	 
	
	 
	 
})

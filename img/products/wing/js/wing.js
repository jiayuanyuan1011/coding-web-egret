var isT1 = false;
var isT2 = false;
var isT3 = false;
var windowheight=950-$(window).height();

$(window).resize(function(){
	windowheight=950-$(window).height();
	$(".play_div").css("margin-left",$(window).width()-$(".play_div").width()>>1);
});

function t1play(){
	if($('.texing1').offset().top-$(window).scrollTop()+windowheight<1000){
		if(!isT1){
			isT1=true;
			var t = new TimelineLite({
			    onStart: function(){
			        $('.texing1').css('opacity', 0);
			    },
			    onComplete:function(){
			    	$('.texing1banner').attr("src","../img/products/wing/zhuliuyuyan.gif");
			    }
			});
			t.from('.texing1', 0.7, {opacity: 0.5, "margin-top": 250}, 't');
			t.from('.bg-test1 h4', 0.6, {"margin-left": 10, opacity:0}, 't');
			t.from('.bg-test1 div', 0.4, {"margin-left": 10, opacity:0}, 't+=0.3');
			t.to('.texing1', 0.2, {opacity: 1}, '+=0.3');
			t.play();
		}
	}
}
function t2play(){
	if($('.texing2').offset().top-$(window).scrollTop()+windowheight<900){
		if(!isT2){
			isT2=true;
			var t = new TimelineLite({
			    onStart: function(){
			        $('.texing2').css('opacity', 0);
			    },
			    onComplete:function(){
			    	$('.texing2banner').attr("src","../img/products/wing/wanzheng.gif");
			    }
			});
			t.from('.texing2', 0.7, {opacity: 0.5, "margin-top": 250}, 't');
			t.from('.bg-test2 h4', 0.6, {"margin-right": 10, opacity:0}, 't');
			t.from('.bg-test2 div', 0.4, {"margin-right": 10, opacity:0}, 't+=0.3');
			t.to('.texing2', 0.2, {opacity: 1}, '+=0.3');
			t.play();
		}
	}
}
function t3play(){
	if($('.texing3').offset().top-$(window).scrollTop()+windowheight<800){
		if(!isT3){
			isT3=true;
			var t = new TimelineLite({
			    onStart: function(){
			        $('.texing3').css('opacity', 0);
			    },
			    onComplete:function(){
			    	$('.texing3banner').attr("src","../img/products/wing/tiaoshi.gif");
			    }
			});
			t.from('.texing3', 0.7, {opacity: 0.5, "margin-top": 250}, 't');
			t.from('.bg-test3 h4', 0.6, {"margin-left": 10, opacity:0}, 't');
			t.from('.bg-test3 div', 0.4, {"margin-left": 10, opacity:0}, 't+=0.3');
			t.to('.texing3', 0.2, {opacity: 1}, '+=0.3');
			t.play();
		}
	}
}

$(window).scroll(function(e){
	
		t1play();
		t2play();
		t3play();
});

$(document).ready(function(){
	
	$(".play_div").css("margin-left",$(window).width()-$(".play_div").width()>>1);
	
	$(".title-name").mouseout(function(e){
		console.log("11");
		var item = $(event.target);
		item.prev().attr("style","color:#FAFF8A;left:20px;top:0px;-webkit-transition: all 0.3s ease-in-out;-moz-transition: all 0.3s ease-in-out;-o-transition: all 0.3s ease-in-out;transition: all 0.3s ease-in-out;");
	});
	
    $(".title-name").mouseover( 
    	function(event){
		var item = $(event.target);
		item.prev().attr("style","border-color:#faff8a;left:50px;top:20px;-webkit-transition: all 0.3s ease-in-out;-moz-transition: all 0.3s ease-in-out;-o-transition: all 0.3s ease-in-out;transition: all 0.3s ease-in-out;");
	    });
  

		$(".step1").one("click",function(){
	    TweenMax.to('.winglogo', 1, {
	        rotation: '360',
	        ease: Linear.easeNone
	    });
	    
	});
	
	

	$(".play_border").click(function(e){
    	var img=$(e.target).next();
		if($(img).is(":hidden")){
			img.attr("src","../img/stop.png");
	        img.show();
	        img.next().trigger('pause');
		}
   });
    $(document.body).find("video").click(function(){
        stopAll();
   });
   
   $(document.body).find(".play").on("click",function(e){
       $(e.target).hide();
       $(e.target).next().trigger('play');
       
   });
   
   $(document.body).find(".dot").on("click",function(e){
       stopAll();
   });

   function stopAll(){
       $(".play").show();
       $(document.body).find("video").trigger('pause');
   }
});
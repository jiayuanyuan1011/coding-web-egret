var isT1 = false;
var isT2 = false;
var isT3 = false;
var windowheight=950-$(window).height();

$(window).resize(function(){

	windowheight=950-$(window).height();
	$(".play_div").css("margin-left",$(window).width()-$(".play_div").width()>>1);
	//$("#blank").css("width",70 + ($(window).width()-$(".play_div").width()>>1));
	
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
//		t2play();
//		t3play();
});

function gotoTop(min_height){
    //预定义返回顶部的html代码，它的css样式默认为不显示
    //var gotoTop_html = '<div id="gotoTop">返回顶部</div>';
    //将返回顶部的html代码插入页面上id为page的元素的末尾 
    //$("#page").append(gotoTop_html);
    $("#gotoTop").click(//定义返回顶部点击向上滚动的动画
        function(){$('html,body').animate({scrollTop:0},700);
    }).hover(//为返回顶部增加鼠标进入的反馈效果，用添加删除css类实现
        function(){$(this).addClass("hover");},
        function(){$(this).removeClass("hover");
    });
    //获取页面的最小高度，无传入值则默认为600像素
    min_height ? min_height = min_height : min_height = 600;
    //为窗口的scroll事件绑定处理函数
    $(window).scroll(function(){
        //获取窗口的滚动条的垂直位置
        var s = $(window).scrollTop();
        //当窗口的滚动条的垂直位置大于页面的最小高度时，让返回顶部元素渐现，否则渐隐
        if( s > min_height){
            $("#gotoTop").fadeIn(100);
        }else{
            $("#gotoTop").fadeOut(200);
        };
    });
};



$(document).ready(function(){
	

	
	$(".play_div").css("margin-left",$(window).width()-$(".play_div").width()>>1);

	
	$(".title-name").mouseout(function(e){
		var item = $(e.target);
		item.prev().attr("style","color:#f5ec00;left:20px;top:0px;-webkit-transition: all 0.3s ease-in-out;-moz-transition: all 0.3s ease-in-out;-o-transition: all 0.3s ease-in-out;transition: all 0.3s ease-in-out;");
	});
	
    $(".title-name").mouseover( 
    	function(event){
		var item = $(event.target);
		item.prev().attr("style","border-color:#f5ec00;left:50px;top:20px;-webkit-transition: all 0.3s ease-in-out;-moz-transition: all 0.3s ease-in-out;-o-transition: all 0.3s ease-in-out;transition: all 0.3s ease-in-out;");
	    });
	    
	$(".title-name-down").mouseout(function(e){
		var item = $(e.target);
		item.prev().attr("style","color:#fee648;left:20px;top:0px;-webkit-transition: all 0.3s ease-in-out;-moz-transition: all 0.3s ease-in-out;-o-transition: all 0.3s ease-in-out;transition: all 0.3s ease-in-out;");
	});
	
    $(".title-name-down").mouseover( 
    	function(event){
		var item = $(event.target);
		item.prev().attr("style","border-color:#fee648;left:50px;top:20px;-webkit-transition: all 0.3s ease-in-out;-moz-transition: all 0.3s ease-in-out;-o-transition: all 0.3s ease-in-out;transition: all 0.3s ease-in-out;");
	    });
  

		$(".step1").one("click",function(){
	    TweenMax.to('.DBlogo', 1, {
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
   
   gotoTop();
});
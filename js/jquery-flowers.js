 // 下拉菜单(遮罩层)
 let myTimer=0;
$("#checkclass").mouseenter(function(){
	if($(".showlist").css("display","block")){
		$(".showlist").slideDown(200);
	}
}).mouseleave(function(){
    myTimer=setTimeout(function(){
		$(".showlist").slideUp(200);
	},200);
});
$(".showlist").mouseenter(function(){	
	clearInterval(myTimer);
}).mouseleave(function(){
	$(this).hide();	
})

//滑过 显示下拉菜单
$(".cf").each(function(){
	$(this).mouseenter(function(){
	    $(this).children(".lis").slideDown(100);
	}).mouseleave(function(){
	    $(this).children(".lis").slideUp(100);
	});
})
// 点击按钮出现搜索框，失去焦点隐藏
$(".icon-search_2").click(function(){
    $(".search1").animate({
        left: -20, opacity: 'show'
    }, 200);
    $(".search1").focus();
})
$(".search1").blur(function(){
    $(this).animate({
        left: 0, opacity: 'hide'
    }, 200);
})
// 点击按钮，板块轮播
$("#icon_left").click(function(){
	let num=$("#things").width()-$(".show").width();
    if($("#things").position().left>"-"+num){
	    $("#things").animate({
	        left:$(this).siblings(".show").children("#things").position().left+285*(-1)
	    }, 200);
    }else{
    	$("#things").animate({
        left:0
    }, 300);
    }
})
$("#icon_right").click(function(){
	let num=$("#things").width()-$(".show").width();
    if($("#things").position().left>num){
	    $("#things").animate({
	        left:$(this).siblings(".show").children("#things").position().left+285
	    }, 200);
    }else{
    	$("#things").animate({
        left:0
    }, 300);
    }
})
// 鼠标滑过，边框缩小，图片放大
$(".dun").each(function(){
    $(this).mouseenter(function(){		
		$(this).children("img").animate({
            width: $(this).width()*1.1,
            height: $(this).height()*1.1,
            left:"-"+$(this).width()*(1.1-1)/2,
            top:"-"+$(this).height()*(1.1-1)/2
            }, 300);
            $(this).children(".bord").animate({
            width: $(this).width()-20,
            height: $(this).height()-20,
            left:"10px",
            top:"10px"
            }, 200);
	}).mouseleave(function(){
		$(this).children("img").animate({
            width: "100%",
            height: "100%",
            left:"0px",
            top:"0px"}, 300 );
            $(this).children(".bord").animate({
            width: "100%",
            height: "100%",
            left:"0px",
            top:"0px"}, 200 );
	});
});
// 鼠标滑过，图片左移
$(".bottom li a").each(function(){
    $(this).mouseenter(function(){
        $(this).children("img").animate({
            left:$(this).position().left+60*(-1)
        }, 150)
     }).mouseleave(function(){
        $(this).children("img").animate({
            left:0
        }, 150)
     })
})
// 鼠标滑过图片放大
$(".select li .hd").each(function(){
        $(this).mouseenter(function(){		
			$(this).children("img").animate({
                width: $(this).width()*1.1,
                height: $(this).height()*1.1,
                left:"-"+$(this).width()*(1.1-1)/2,
                top:"-"+$(this).height()*(1.1-1)/2
                }, 300);
		}).mouseleave(function(){
			$(this).children("img").animate({
                width: "100%",
                height: "100%",
                left:"0px",
                top:"0px"}, 300 );
		});
    });
// 点击按钮，隐藏

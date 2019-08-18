$(function(){

	//Splash 다운로드 진행바 제어
	(set_progress = function(){
		var current = $(".progress").find(".current").text();
		var max = $(".progress").find(".max").text();
		var percent = Math.floor(current / max * 100);
		$(".progress > em .value").text(percent);
		$(".progress .bar_current").css("width",198 * percent / 100);
	})();

	//Selectbox 제어
	$(".select > li > a").on("click",function(){
		if($(this).parent().hasClass("on")){
			$(".select > li").removeClass("on");
		} else {
			$(".select > li").removeClass("on");
			$(this).parent().addClass("on");
		};
	});
	$(".select > li > ul > li > a").on("click",function(){
		$(this).parents("ul").siblings("a").text($(this).text());
		$(this).parents("ul").parent().removeClass("on");
	});

	//메인화면 Tab 제어
	(set_tab = function(val){
		$(".notice .tab li,.notice_wrap > div").removeClass("on");
		$(".notice .tab li:eq("+(val-1)+")").addClass("on");
		$(".notice_wrap > div:eq("+(val-1)+")").addClass("on");
	})(1);

	//Navigation 제어
	$("button.show").click(function(){
		$("nav").addClass("on");
	});
	$("button.hide").click(function(){
		$("nav").removeClass("on");
	});

	//엘리베이터 제어
	$(".content_wrap > a.top").click(function(){
		$(this).addClass("on");
		$(".content_wrap").animate({
			scrollTop:0
		},500,function(){
			$(this).children("a.top").removeClass("on");
		});
	});

	//환경설정 버튼 제어
	$(".config button.effect").click(function(){
		$(this).toggleClass("on");
		if($(this).find("em").text() == "On"){
			$(this).find("em").text("Off"); //소리 효과 끄기
		} else {
			$(this).find("em").text("On"); //소리 효과 켜기
		};
	});

	//모달팝업 제어
	show_modal = function(val){ //모달 열기
		var modal = $("#"+val);
		modal.show();
		var window_h = $(window).height();
		var margin_t = (window_h - parseInt(modal.find(".modal").css("height")))/2;
		modal.find(".modal").css("margin-top",margin_t);
	};
	hide_modal = function(){ //모달 닫기
		$(".modal_wrap").hide();
	};
	$(".modal a.close").click(function(){
		hide_modal();
	});
});
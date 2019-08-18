$(function(){

	//브라우저 업데이트
	if(navigator.userAgent.match(/MSIE 8/)) {
		$('.update_browser').show();
    };

	//스킵 제어
	$(".skip a").click(function(){
		$("#content").attr("tabindex", "0").focus();
		return false;
	});

	//로딩 화면 제어
	function show_loading(){
		$(".loading").show();
		$("body").css("overflow","hidden");
	};

	function hide_loading(){
		$(".loading").hide();
		$("body").css("overflow","visible");
	};

	//네비게이션 제어
	$("nav > ul > li > a").on("click",function(){
		var list = $(this).parent();
		if(!list.hasClass("no_depth")){
			if(list.hasClass("on")){
				$("nav li").removeClass("on");
			} else {
				$("nav li").removeClass("on");
				list.addClass("on");
			}
		};
	});

	$("#wrap > button.show").on("click",function(){
		$("header").addClass("on");
		$("body").css("overflow","hidden");
		
	});
	$("header > button.hide").on("click",function(){
		$("header").removeClass("on");
		$("body").css("overflow","visible");
		$(".header_wrap").delay(1000).animate({scrollTop:0},0);
	});
	$(window).resize(function(){
		var filter = "win16|win32|win64|mac";
		if(navigator.platform){
			if(!(0 > filter.indexOf(navigator.platform.toLowerCase()))){
				$("header").removeClass("on");
			};
		};
	});

	//게시판 리스트 hover효과
	$("table.board tr:gt(0)").hover(
		function(){$(this).addClass("hover");},
		function(){$(this).removeClass("hover");}
	);

	//게시판 리스트 전체 체크박스 제어
	$("table.board").on("click","input.select_all",function(){
		if($(this).prop("checked")){
			$("table.board td input[type='checkbox']").prop("checked",true);
		} else {
			$("table.board td input[type='checkbox']").prop("checked",false);
		};
	});

	//권한 체크박스 제어
	$(".authority .check.category").on("change","input[type=checkbox]",function(){
		if($(this).hasClass("all")){
			if($(this).prop("checked")){
				$(".authority input[type=checkbox]").prop("checked",true);
			} else {
				$(".authority input[type=checkbox]").prop("checked",false);
			};
		} else {
			if($(this).prop("checked")){
				$(this).parent().next(".check").find("input[type=checkbox]").prop("checked",true);
			} else {
				$(this).parent().next(".check").find("input[type=checkbox]").prop("checked",false);
			};
		};
		
	});

	//FAQ 제어
	$("table.board.faq td a").on("click",function(){
		if($(this).parents(".question").hasClass("on")){
			$("table.board.faq .question").removeClass("on");
		} else {
			$("table.board.faq .question").removeClass("on");
			$(this).parents(".question").addClass("on");
		};
	});

	//복수 파일업로드 개수 제어
	/*
	(list_check = function(){ //파일업로드 개수에 따른 클래스 부여(싱글 or 멀티)
		var list_cnt = $(".attach_wrap ul li").length;
		if(list_cnt == 1){
			$(".attach_wrap").addClass("single");
		} else {
			$(".attach_wrap").removeClass("single");
		};
	})();
	*/

	(list_setid = function(){ //파일업로드폼 ID 지정 및 레이블링
		$(".attach_wrap ul li").each(function(i){
			var list_id = "test00" + i + "_file"; // [D]ID값 네이밍은 언제든 변경가능
			$(this).find("input[type='file']").attr("id",list_id);
			$(this).find("label").attr("for",list_id);
		});
		//list_check();
	})();

	list_create = function(){ //파일업로드폼 생성
		var list_cnt = $(".attach_wrap ul li").length;
		if(list_cnt == 6){
			alert("You can upload up to 6 files.");
			return false;
		} else {
			$("<li><div class='upload'><input type='hidden' name='file_ids' value='-1'/><input class='upload_name' disabled><input type='file' name='inc_files'><label>SEARCH</label></div><div class='del'><button type='button' class='minus'>Delete This File Upload Form</button></div></li>").appendTo(".attach_wrap > ul");
			list_setid();
		};
	};
	/*
	var data_cnt = 1; //Modify시 파일 업로드폼 개수 지정
	for(i=0; i<data_cnt-1; i++){
		list_create();
	};
	*/

	$(".attach_wrap").on('click','.plus',function(){
		list_create();
	}).on('click','.minus',function(){
		var list_cnt = $(".attach_wrap ul li").length;
		if(list_cnt == 1){
			alert('There must be at least one data entry.');
			return;
		};
		$(this).parents("li").remove(); //파일업로드폼 삭제
		//list_check();
	});

	//파일업로드 커스터마이징 및 밸리데이션(용량, 확장자)
  	$(".attach_wrap,.upload").on('change','input[type=file]',function(){
		if($(this).val() != ""){
			if($(this).parent().hasClass("img")){

				//확장자 체크(이미지 파일)
				var ext = $(this).val().split(".").pop().toLowerCase();
				if($.inArray(ext,["gif","jpg","jpeg","png"]) == -1){ //[D]허용할 확장자만 배열에 작성
					alert('You can only upload image files with the following extensions : gif, jpg, jpeg, png');
					$(this).val("");
					return;
				};

			} else {

				//확장자 체크(일반 파일)
				var ext = $(this).val().split(".").pop().toLowerCase();
				if($.inArray(ext,["gif","jpg","jpeg","png","doc","docx","ppt","pptx","xls","xlsx","pdf","zip"]) == -1){ //[D]허용할 확장자만 배열에 작성
					alert('You can only upload files with the following extensions : gif, jpg, jpeg, png, doc, docx, ppt, pptx, xls, xlsx, pdf, zip');
					$(this).val("");
					return;
				};	
			};

			if(!$(this).parent().hasClass("unlimit")){

				//용량 체크
				var filesize = this.files[0].size;
				var maxsize = 5 * 1048576; //5MB
				if(filesize > maxsize){
					alert("You can not upload a file size of more than 5 MB file.");
					$(this).val("");
					return;
				};

			};
		};

		//커스터마이징
		if(window.FileReader){
		  var filename = $(this)[0].files[0].name;
		} else {
		  var filename = $(this).val().split('/').pop().split('\\').pop();
		};
		$(this).siblings('.upload_name').val(filename);
  	});

	//사진 업로드 썸네일 커스터마이징 및 밸리데이션
	var img_form = $(".photo_upload input[type=file]"); 

	img_form.on('change',function(){

		//확장자 체크(이미지 파일)
		var ext = $(this).val().split(".").pop().toLowerCase();
		if($.inArray(ext,["jpg"]) == -1){ // [D]허용할 확장자만 배열에 작성
			alert('You can only upload image files with the following extensions : jpg');
			$(this).val("");
			return;
		};

		//썸네일 표시
		$(this).siblings(".photo").remove();
		if(window.FileReader){
			//if (!$(this)[0].files[0].type.match(/image\//)) return;
			var reader = new FileReader();
			reader.onload = function(e){
				var src = e.target.result;
				$(".photo_upload").prepend('<div class="photo"><img src="' + src + '"></div>');
			};
			reader.readAsDataURL($(this)[0].files[0]);
		} else { 
			$(this)[0].select();
			$(this)[0].blur();
			var img_src = document.selection.createRange().text;
			$(this).parent().prepend('<div class="photo"><img></div>'); 
			var img = $(this).siblings('.photo').find('img');
			//img[0].style.filter = "progid:DXImageTransform.Microsoft.AlphaImageLoader(enable='true',sizingMethod='scale',src=\"" + img_src + "\")"; //ie 대응 코드(작동 검증 안됨)
			img.attr("src",img_src);
		};
	});

	//썸네일 삭제
	$(".photo_upload").on("click","button",function(){
		var parents = $(this).parents(".photo_upload");
		parents.find("input[type=file]").val("");
		parents.find(".photo img").remove();
	});
	
	//셀렉트박스 커스터마이징
	var select_box = $(".select_box select");
    select_box.on('focus', function(){
		$(this).parent('.select_box').addClass('on');
	}).on('focusout', function(){
		$(this).parent('.select_box').removeClass('on');
	}).on('change', function(){
        var select_name = $(this).children("option:selected").text();
        $(this).siblings("label").text(select_name);
    });

	//모달 레이어
	var modal = false;
	var modal_w;
	var modal_h;
	var modal_2nd = false; //이중 모달 제어 변수
	var window_h = $(window).height();

	$(".show_modal").on('click',function(){
		var val = $(this).attr("data-n");
		if($(this).hasClass("modal_2nd")){
			modal_2nd = true;
		};
		show_modal(val);
	});
	
	/*$(".hide_modal,.modal_back").on('click',function(){*/ //모달 배경 클릭시 모달 닫기
	$(".hide_modal").on('click',function(){
		var val = $(this).attr("data-n");
		hide_modal(val);
		modal = false;
	});

	function match_modal(val){
		for(var i=1; i<=9; i++){
			switch(val){
				case "modal_0"+i : modal = $(".modal_wrap.modal_0"+i); break;
			};
		};
	};

	function show_modal(modal_type){ //모달 열기
		reset_data();
		$("body").css("overflow","hidden");
		//$("body").addClass("modal_open");
		match_modal(modal_type);
		modal.parent().show();
		modal_w = modal.innerWidth();
		modal_h = modal.innerHeight();
		modal.css({'margin-left':-(modal_w/2),'margin-top':-(modal_h/2)});
		if(window_h < modal_h){
			modal.css("margin-top",-(window_h/2));
			modal.next(".modal_back").css("height",modal_h);
		};
	};

	$(window).on("resize",function(){ //모달 활성화 상태에서 윈도우 크기 변경시
		if(modal != false){
			window_h = $(window).height();
			if(window_h < modal_h){
				modal.css("margin-top",-(window_h/2));
				$(".modal_back").css("height",modal_h);
			} else {
				$(".modal_back").css("height",window_h);
			};
		};
	});

	function hide_modal(modal_type){ //모달 닫기
		match_modal(modal_type);
		modal.parent().hide();
		if(modal_2nd){
			modal_2nd = false;
		} else {
			$("body").css("overflow","visible");
			//$("body").removeClass("modal_open");
		};
	};

	//국가/부족 추가
	$(".modal").on("change",".nation select",function(){
		if($(this).val() == "Add Country"){
			$(this).parents(".nation").next("input[type=text]").attr("disabled",false)
		} else {
			$(this).parents(".nation").next("input[type=text]").attr("disabled",true).val("");
		};
	});

	//수업정보 입력
	$(".create_table").on("click","button.add",function(){
		var cnt = $(this).parent().siblings(".inner_table").children("table").length;
		var class_input = $(".create_table .class").find(".inner_data").eq(0).clone(true,true);
		var book_input = $(".create_table .book").find(".inner_data").eq(0).clone(true,true);

		class_input.find('input[type=file],.upload_name').val('');
		class_input.find('input[type=checkbox]').prop("checked",false);
		class_input.find('.select_box').children('label').each(function(){
			var def = $(this).siblings('select').find('option:first').val();
			$(this).text(def);
		});
		book_input.find('input[type=file],.upload_name').val('');
		var sort = $(this).parents("tr").attr("class");
		if(sort == "class"){
			class_input.insertAfter($(this).parent().siblings(".inner_table").children("table:eq(-1)"));
		} else {
			book_input.insertAfter($(this).parent().siblings(".inner_table").children("table:eq(-1)"));
		};
		class_setid();
	});

	$(".create_table").on("click","button.del",function(){
		var cnt = $(this).parents(".inner_table").children("table").length;
		if(cnt == 1){
			alert('There must be at least one data entry.');
			return;
		};
		$(this).parents(".inner_data").remove();
		class_setid();
	});

	(class_setid = function(){
		$(".inner_data").each(function(cnt){
			for(i=0; i<5; i++){
				$(this).find(".check_date").children("label").eq(i).attr("for",'lab0' + cnt + i);
				$(this).find(".check_date").children("input[type=checkbox]").eq(i).attr("id",'lab0' + cnt + i);
				$(this).find(".select_box").children("label").eq(i).attr("for",'sel0' + cnt + i);
				$(this).find(".select_box").children("select").eq(i).attr("id",'sel0' + cnt + i);
				$(this).find(".upload").children("label").eq(i).attr("for",'file0' + cnt + i);
				$(this).find(".upload").children("input[type=file]").eq(i).attr("id",'file0' + cnt + i);
			};
		});
	})();

	//업로드 카테고리 Depth 제어
	var depth_cnt = 1;
	$(".modal .more_depth button").on("click",function(){
		depth_cnt++;
		var list = $(this).parent().prev().find(".depth").children("li").eq(0).clone(true,true);
		list.find('.select_box').children('label').each(function(){
			var def = $(this).siblings('select').find('option:first').val();
			$(this).text(def);
		});
		if(depth_cnt <= 3){
			$(".modal ul.depth").append(list);
		} else {
			alert('You can register up to 3 categories at a time.');
			return;
		};
	});

	function reset_data(){ //모달 데이터 초기화
		$(".modal input,.modal textarea").val("");
		$(".modal select").each(function(){
			$(this).find('option:first').attr('selected','true');
			var select_name = $(this).children("option:selected").text();
	        $(this).siblings("label").text(select_name);
		});
		$(".modal .photo_upload img").remove();
		//$(".modal .depth li:gt(0)").remove();
		$(".modal .depth").each(function(){
			$(this).find("li:gt(0)").remove();
		});
		depth_cnt = 1;
	};
});

//학생 정보입력 탭메뉴 제어
function show_tab(no){
	$(".modal .tab_view").hide();
	$(".modal .tab_view.view_" + no).show();
	$(".modal .tab_menu li").removeClass("on");
	$(".modal .tab_menu li.tab_" + no).addClass("on");
};
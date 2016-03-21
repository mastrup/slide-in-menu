$(function () {
	$("#mobile-navigation-toggle").click(function () {
		$("#mobile-navigation-toggle .open-navigation").toggleClass("hidden");
		$("#mobile-navigation-toggle .close-navigation").toggleClass("hidden");
		$("#mobile-navigation-container").toggleClass("open");
		setMenuHeight();
	});

	$(".goto-submenu").click(function () {
		$(".active").animate({
			scrollTop: 0
		}, 'slow');
		$(this).siblings(".submenu").toggleClass("active active-layer");
		$(this).parent().closest("ul").removeClass("active-layer");
		$(".mobile-navigation-back").removeClass("hidden")
	});

	$(".mobile-navigation-back").click(function () {
		var element = $(".submenu.active-layer");
		element.removeClass("active active-layer");
		element.parent().closest("ul").addClass("active-layer");
		if(!$(this).hasClass("hidden")){
			checkIfRoot(element);
		}
	});

	if($(".rootmenu").data("currentpage") != "" && $(".rootmenu").data("currentpage") != undefined){
		var currentId = $(".rootmenu").data("currentpage");
		var element = $("a[data-id='" + currentId + "']").closest(".submenu");
		element.addClass("active active-layer");
		element.parents(".submenu").addClass("active");
		if(element.length){
			checkIfRoot(element);
		}
	}
	
	window.addEventListener('orientationchange', setMenuHeight);
	
	function checkIfRoot(element){
		if(element.parent().closest("ul").hasClass("rootmenu")){
			$(".mobile-navigation-back").addClass("hidden");
		}else{
			$(".mobile-navigation-back").removeClass("hidden");
		}
	}

	function setMenuHeight(){
		var containerHeight = $("#mobile-navigation-container").outerHeight();
		var containerHeaderHeight = $("#mobile-navigation-container .mobile-navigation-header").outerHeight()
		$("#mobile-navigation-container .rootmenu").outerHeight(containerHeight-containerHeaderHeight);
	}
});
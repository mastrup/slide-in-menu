$(function () {
	$("#mobile-navigation-toggle").click(function () {
		$("#mobile-navigation-toggle .open-navigation").toggleClass("hidden");
		$("#mobile-navigation-toggle .close-navigation").toggleClass("hidden");
		$("#mobile-navigation-container").toggleClass("open");
		setMenuHeight();
	});

	$(".goto-submenu").click(function () {
		$(this).siblings(".submenu").toggleClass("hidden");
		//$(".active").removeClass("active").scrollTop(0);
		$(".active").animate({
			scrollTop: 0
		}, 'slow').removeClass("active");
		$(this).siblings(".submenu").toggleClass("active");
		checkIfRoot($(this).parent().closest("ul"));
	});

	$(".mobile-navigation-back").click(function () {
		var old = $(".submenu.active");
		old.removeClass("active").addClass("hidden");
		old.parent().closest("ul").addClass("active");
		checkIfRoot(old.parent().closest("ul"));
	});

	if($(".rootmenu").data("currentpage") != "" && $(".rootmenu").data("currentpage") != undefined){
		var currentId = $(".rootmenu").data("currentpage");
		var element = $("a[data-id='" + currentId + "']").closest(".submenu");
		element.removeClass("hidden").addClass("active");
		element.parents(".submenu").removeClass("hidden")
		if(element.length){
			checkIfRoot(element.parent().closest("ul"));
		}
	}

	function checkIfRoot(parentMenu){
		if(parentMenu.hasClass("rootmenu active")){
			$(".mobile-navigation-back").addClass("hidden");
		}else{
			$(".mobile-navigation-back").removeClass("hidden");
		}
	}

	window.addEventListener('orientationchange', setMenuHeight);

	function setMenuHeight(){
		var containerHeight = $("#mobile-navigation-container").outerHeight();
		var containerHeaderHeight = $("#mobile-navigation-container .mobile-navigation-header").outerHeight()
		$("#mobile-navigation-container .rootmenu").outerHeight(containerHeight-containerHeaderHeight);
	}
});
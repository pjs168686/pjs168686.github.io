		$(function () {
			$(".menu").click(function () {
				$(this).toggleClass('on');
				if ($(this).hasClass("on") == true) {
					$("nav").css({
						"display": "block"
					});
				} else {
					$("nav").css({
						"display": "none"
					});
				}
			});

			$(window).scroll(function () {
				var win_s = $(window).scrollTop();
				var win_h = $(window).height();
				
				if(win_s>=($(".frame1").offset().top-win_h)){
					$(".frame1").addClass("show");
				}else {
					$(".frame1").removeClass("show");
				}
				if(win_s>=($(".frame2").offset().top-win_h)){
					$(".frame2").addClass("show");
				}else {
					$(".frame2").removeClass("show");
				}
				
				if(win_s>=(($(".casszero").offset().top)-win_h)){
					$(".casszero").addClass("move_left");
					$(".zero .product_box").addClass("move_right");
				} else {
					$(".casszero").removeClass("move_left");
					$(".zero .product_box").removeClass("move_right");
				}
				
				if(win_s>=(($(".cassfresh").offset().top)-win_h)){
					$(".cassfresh").addClass("move_right");
					$(".fresh .product_box").addClass("move_left");
				}else {
					$(".cassfresh").removeClass("move_right");
					$(".fresh .product_box").removeClass("move_left");
				}
				
				if(win_s>=(($(".casslight").offset().top)-win_h)){
					$(".casslight").addClass("move_left");
					$(".light .product_box").addClass("move_right");
				}else {
					$(".casslight").removeClass("move_left");
					$(".light .product_box").removeClass("move_right");
				}
				
				if(win_s>=$(".sns_box").offset().top-win_h){
					$(".sns_box").addClass("show");
				}else {
					$(".sns_box").removeClass("show");
				}
			});
		});

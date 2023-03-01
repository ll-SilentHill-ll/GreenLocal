$(document).ready(function(){
	$('.js-tab_trigger').click(function(event) {
		if($('.block').hasClass('one')){
		$('.js-tab_trigger').not($(this)).removeClass('active')
		$('.js-tab_contant').not($(this).next()).slideUp(300)
		}
		$(this).toggleClass('active').next().slideToggle(300);
	})

	$('.clickmodal').click(function(){

	$('.modalwindow').addClass('active_bg')
	$('.mainwindow').addClass('active_bg')


	})

	$('.mainwindow').click(function(){

	$('.modalwindow').removeClass('active_bg')
	$('.mainwindow').removeClass('active_bg')


	})

	$('.modalclick').click(function(){

	$('.modalwindow').removeClass('active_bg')
	$('.mainwindow').removeClass('active_bg')


	})

	$('.prp_button').click(function(){

	$('.modalwindow').addClass('active_bg')
	$('.mainwindow').addClass('active_bg')
	})


	$('.menu_checkbox').click(function(){

	$('.hamb-menu').toggleClass('hamb_acive')

	})

	$('.menu-bt_hamb').click(function(){

	$('.hamb-menu').toggleClass('hamb_acive')

	})

	})

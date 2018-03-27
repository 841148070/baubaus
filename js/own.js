
//下拉导航按钮
$('.Navbtn').click(function(){
	if($('.a').hasClass('A')){
		$('.a').removeClass('A')
	}else{
		$('.a').addClass('A')
	}
	if($('.b').hasClass('B')){
		$('.b').removeClass('B')
	}else{
		$('.b').addClass('B')
	}
	if($('.c').hasClass('C')){
		$('.c').removeClass('C')
	}else{
		$('.c').addClass('C')
	}
});


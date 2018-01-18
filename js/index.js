$(function () {
    let img=$('.yq1'),
		mark=$('.mark');

    img.hover(function () {
        $(this).children().fadeToggle(1000,"linear");
    },function () {
        $(this).children().css({display:"none"});
    });

    //宠物用品
    let xxq=$('.xxq1');
    let box = $('.box > img');
	let li = $('li');
	let ul = $('ul');

	let btn1 = $('.btn1');
	let btn2 = $('.btn2');
	let index = 0;
	let ins = 0;
	let imgbox = $('.imgbox');
	let guanb=$('.guanbi');
	img.click(function(){
        mark.css({display:"none"});
		guanb.closest('.bigbox').css({display:'block'
		});
		return false;
	});
	guanb.click(function(){
		guanb.closest('.bigbox').css({display:'none'
		});
	});
	function move(type){
		type = type || 'btn2';
		if(type == 'btn1'){
			index--;
			if(index < 0){
				index = li.length-1;
			}
		}else if(type == 'btn2'){
			index++;
			if(index > li.length-1){
				index = 0;
			}
		}
		
		let src = li.eq(index).children('img').attr('src');
		li.removeClass('hot').eq(index).addClass('hot')
		box.attr('src',src)
	}

	btn2.click(function(){
		move('btn2');
	});
	btn1.click(function(){
		move('btn1');
	});


	li.click(function(){
		li.not($(this)).removeClass('hot');
		$(this).addClass('hot');
		index = li.index($(this))-1;
		move();
	})


});

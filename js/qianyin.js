$(function () {
    let bLeft = $('.ctl2l'),
        bRigth = $('.ctl2r'),
        lis = $('.ctl2c > li'),
        box = $('.ctltu > img'),
        color = $('.ystu1');
    let next = lis.next(),
        index = 0;

    function move(type) {
        type = type || 'bRigth';
        if(type == 'bRigth'){
            index++;

            if(index >= lis.length - 1){
                index = 0;
            }

            lis.eq(index).css({border:'1px solid #00C0A5'}).siblings().css({border:'1px solid transparent'});
            console.log($().index())

        }else if(type == 'bLeft'){
            index--;
            if (index < 0){
                index = lis.length - 1;
            }
            lis.eq(index).css({border:'1px solid #00C0A5'}).siblings().css({border:'1px solid transparent'});
        }
        let src = color.eq(index).children('img').attr('src');
        let src1 = lis.eq(index).children('img').attr('src');
        box.attr("src",src);
        box.attr("src",src1);
    }

    bRigth.click(function () {
        move('bRigth');
    });
    bLeft.click(function () {
        move('bLeft');
    });

    lis.on('click',function () {
        lis.removeClass('hots');
        $(this).addClass('hots');
        let img = $('img',this);
        let src = img.attr("src");
        box.attr('src',src);
        index = $(this).index();
    });
    color.on('click',function () {
        color.removeClass('hot');
        $(this).addClass('hot');
        let img = $('img',this);
        let src = img.attr("src");
        box.attr('src',src);
        index = $(this).index();
    });

//    添加数量
    let num = 0;
    $('.shap > button').first().click(function(){
        num--;
        if(num<0){
            num = 0;
        }
        $(this).next().html(num)
    });
    $('div>button').last().click(function(){
        num++;
        $(this).prev().html(num)
    });
//    登陆注册
    let bigBox = $('.bigbox'),
        jrgwc = $('.jrgwc'),
        guan = $('.guan'),
        zc = $('h3:nth-child(2)'),
        dl = $('h3:first'),
        zcVal = $('.zc'),
        dlVal = $('.formGroup');


    jrgwc.click(function () {
        bigBox.css({display:'block'});
    });
    guan.click(function () {
        bigBox.css({display:'none'});
    });
    zc.click(function () {
        dl.removeClass('border');
        $(this).addClass('border').css({display:'inline-block',width:'57px',height:'37px'});
        dlVal.css({display:'none'});
        zcVal.css({display:'block'});
    })
    dl.click(function () {
        zc.removeClass('border');
        $(this).addClass('border').css({display:'inline-block',width:'57px',height:'37px'});
        zcVal.css({display:'none'});
        dlVal.css({display:'block'});
    })
});
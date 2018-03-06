$(function(){
    $(".content .content_top .left").click(function (e){
        $(this).css({"border-bottom": "2px solid #4BFA00","color": "#95FC8C"});
        $(".content .content_top .right").css({"border-bottom": "2px solid #CBF1BC","color": "#B7F1B2"});
        $(".content ul .content_left").css({"display":"block"});
        $(".content ul .content_right").css({"display":"none"});
    })

    $(".content .content_top .right").click(function(e){
        $(this).css({"border-bottom": "2px solid #4BFA00","color": "#95FC8C"});
        $(".content .content_top .left").css({"border-bottom": "2px solid #CBF1BC","color": "#B7F1B2"});
        $(".content ul .content_right").css({"display":"block"});
        $(".content ul .content_left").css({"display":"none"});
    })

    $(".content_right button").click(function(){
        if($.trim($('#userid').val())==''){
            alert("请输入您的用户名！");
            return false;
        }else if($.trim($('#pwd').val())==''){
            alert("请输入您的密码！");
            return false;
        }else{
            return true;
        }
    })
}) 

define(['jquery','app/carousel','app/jsonp','app/waterfall','app/gotop'],function($,Carousel,Jsonp,Waterfall,GoTop){

    Carousel.init($('.box'))
    new Jsonp($('.waterfall-ct'));
    $('.loadmore').on('click',function(){
        //��Ϊÿ�ζ���new��һ��curPage�Ͳ������
        new Jsonp($('.waterfall-ct'));
    })
    GoTop.init($('body'), $('body'), 200);
})
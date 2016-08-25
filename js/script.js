$('.slider').slick({
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: false
});
var head = $('.head'),
    w=$(window).width();
head.find('.select').on('click',function(e){
	var $this=$(this),
        target=$(e.target);
    target.is('li') && $this.find('.lang').html(target.html());
    $this.find('ul').slideToggle(300);
});
$(document).on('click',function(e){
    var target = $(e.target),
        ul = $('.head').find('.select ul');
    ul.is(':visible') && !target.closest('.select').length && ul.slideToggle(300);
});

//Вход-регистрация
$('.enter-reg a').on('click',function(e){
	var popup=$('.popup');
    popup.fadeIn(500);
    popup.find('.popup__overlay').on('click',function(e){
        popup.fadeOut(500);
    });
});

//Mobile menu
if(w<768) {
    var mobileMenu = head.find('.mobile'),
        menuList=head.find('.menu__list');
    mobileMenu.on('click',function(e){
        menuList.slideToggle(500);
    });
    menuList.find('a').on('click',function(e){
    	$this=$(this);
        mobileMenu.find('.nav-item').html($this.html());
        menuList.slideUp(500);
    });
}

$('.fancybox').fancybox();

//tables ie
$.fn.equivalent = function (){
    var $blocks = $(this),
        maxH    = $blocks.eq(0).find('.item').height();
    $blocks.each(function(i,row) {
        var items=$(row).find('.item');
        items.each(function(index,item){
            maxH = ( $(item).height() > maxH ) ? $(item).height() : maxH;
        });
        items.height(maxH);
    });
};
var rows=$('.table .row');
!!getInternetExplorerVersion() && rows.find('.item div:first').addClass('ie-div') &&  rows.equivalent();

//get ie browser
function getInternetExplorerVersion()
{
    var rv = null;
    if (navigator.appName == 'Microsoft Internet Explorer')
    {
        var ua = navigator.userAgent;
        var re  = new RegExp("MSIE ([0-9]{1,}[\.0-9]{0,})");
        if (re.exec(ua) != null)
            rv = parseFloat( RegExp.$1 );
    }
    else if (navigator.appName == 'Netscape')
    {
        var ua = navigator.userAgent;
        var re  = new RegExp("Trident/.*rv:([0-9]{1,}[\.0-9]{0,})");
        if (re.exec(ua) != null)
            rv = parseFloat( RegExp.$1 );
    }
    return rv;
}

//Google maps api
function initMap() {
    var lat=46.673094,
        lng= 32.687709;
    var mapOptions = {
        center: new google.maps.LatLng(lat, lng),
        zoom: 14,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    var map = new google.maps.Map(document.getElementById("map"),
        mapOptions);

    var image = 'img/map-marker.png';
    var myLatLng = new google.maps.LatLng(lat, lng);
    trackMarker = new google.maps.Marker({
        position: myLatLng,
        map: map,
        icon: image
    });
}
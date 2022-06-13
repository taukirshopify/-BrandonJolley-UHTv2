

(function ($) {

  $('.anouce-text').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    dots: false,
    vertical:true,
    autoplay: true,
  autoplaySpeed: 2000,

    verticalSwiping:true
  });

  $(document).ready(function() {
    $drawerRight1 = $('.cart-drawer-right1');
    $prodcut = $('.product-cart');
    $cart_list2 = $('.cart-drawer-btn1, .cart-drawer-close-btn1 ,.product-cart');
      
    $cart_list2.click(function(e) {
     
      $(this).toggleClass('active1');
      $('body').toggleClass('cart-drawer-pushtoleft1');
      $drawerRight1.toggleClass('cart-drawer-open1');
    });
  });

  $(".search-icon").click(function(){
  
    $(".search-wrapper").toggleClass("introoo");
    $(".svg-icon svg").toggleClass("none-search");
    $(".svg-iconc svg").toggleClass("d-none");
  });
  
  jQuery('.tas').parent().addClass('d-flex menu-margin');
  jQuery('.tas').parent('div').removeClass('drop-menu');



  $(document).ready(function () {
    ma5menu({
        menu: '.site-menu',
        activeClass: 'active',
        footer: '#ma5menu-tools',
        position: 'left',
        closeOnBodyClick: true,
    });
});
 


  })(jQuery);
  
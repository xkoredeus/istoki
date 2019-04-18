$(function() {
	$('.questions__slider').owlCarousel({
      nav: true,
      dots: false,
      margin: 20,
      navText: ["<img src='img/slider__arrow_prev.png'>", "<img src='img/slider__arrow_next.png'>"],
      responsive : {
        0   : {
            items: 1
        },
        380 : {
            items: 1
        },
        480 : {
            items: 1
        },
        768 : {
            items: 3
        },
        1040 : {
            items: 4
        }
      }
	});
  $('.reviews__slider').owlCarousel({
      nav: true,
      items: 1,
      dots: false,
      // margin: 20,
      navText: ["<img src='img/slider__arrow_prev.png'>", "<img src='img/slider__arrow_next.png'>"]
  });
	// tabs
  $(document).ready(function () {
    $('.tabs-content__item').hide();
    $('.tabs__container div.tabs-content__item.active-tab').show();
    $('ul.tabs__list > li').click(function () {
      if (!($(this).hasClass('active'))) {
        var thisLi = $(this);
        var numLi = thisLi.index();
        thisLi.addClass('active').siblings().removeClass('active');
        thisLi.parent().next().children('div').hide().eq(numLi).fadeIn('slow');
      }
    });
  });
  //article block
  $('.article__text_hidden').hide();
  $('.article__btn').on('click', function(e) {
    e.preventDefault();
    $(this).siblings('.article__text_hidden').slideToggle();
    $(this).toggleClass('active');
    if ($(this).hasClass('active')) {
      $(this).html('Скрыть');
    } else {
      $(this).html('Подробнее')
    }
  });
  //choice block
  $('.choice__item-btn').on('click', function(e) {
    e.preventDefault();
    $('.choice__item-btn.active').removeClass('active');
    $(this).addClass('active');
    var choice = $('.choice__item-btn.active').attr('data-choice');
    $('.choice-add__item.active').slideToggle().removeClass('active');
    $('.choice-add__item[data-choice="'+choice+'"]').slideToggle().addClass('active');
  });
  //stylization input type number
  $( '.cart__item-quantity' ).on( 'click', '.cart__item-quantity-minus, .cart__item-quantity-plus', function () {
  var input = $( this ).siblings( '.cart__item-quantity-num' );
    if ( (input.val() > 1) && ($( this ).hasClass( 'cart__item-quantity-minus' ) ) ) {
        input.val( +input.val() - 1 );
    } else if ( $( this ).hasClass( 'cart__item-quantity-plus' ) ) {
      input.val( +input.val() + 1 );
    };
  });

  $( '.input__wrp_num' ).on( 'click', '.input__wrp_num-minus, .input__wrp_num-plus', function () {
  var input = $( this ).siblings( '.input__wrp_num-value' );
    if ( (input.val() > 1) && ($( this ).hasClass( 'input__wrp_num-minus' ) ) ) {
        input.val( +input.val() - 1 );
    } else if ( $( this ).hasClass( 'input__wrp_num-plus' ) ) {
      input.val( +input.val() + 1 );
    };
  });
  
  

  //mobile menu
  // if ( $(window).width() < 992 ) {
  //   $('.nav__hamburger').on('click', function() {
  //     $(this).toggleClass("active");
  //     $('.nav__menu').toggleClass('active');
  //     $('body').toggleClass("fixed");
  //   });
  //   $('.nav__list-item_sub').on('click', function(){
  //     $(this).toggleClass('active').siblings().removeClass('active');

  //   });
  //   $('.nav__list-item_sub > a').on('click', function(e){
  //     e.preventDefault();
  //   });
  // }
});
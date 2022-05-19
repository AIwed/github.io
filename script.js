$(function(){

    //Resultsスワイパースライダー
        new Swiper('.swiper-container', {
            speed: 400,
            spaceBetween: 40,
            width: 400,
            loop: true,
            loopedSlides: 6,
            
            pagination: {
            el: '.swiper-pagination',
            type: 'bullets',
            clickable: true
        },

        breakpoints: {
            767: {
                spaceBetween: 24,
				width: 274,
            }
        },
    });


//header下線
$('.header-nav li a').click(function() {
    $('.header-nav li a').removeClass('is-active');
    $(this).addClass('is-active');
});

//ドロワー
$('.qa-box-q').click(function() {
    $(this).next().slideToggle();
    $(this).children('.qa-box-icon').toggleClass('is-open');
  });

//スムーススクロール
  // #から始まるURLがクリックされた時
$('a[href^="#"]').click(function() {
    // .headerクラスがついた要素の高さを取得
    let header = jQuery(".header").innerHeight();
      //移動速度を移動速度を指定（ミリ秒）
    let speed = 300;
      //hrefで指定されたidを取得
    let id = jQuery(this).attr("href");
      // idの値が#のみだったらターゲットをhtmlタグにしてトップへ戻るようにする
    let target = jQuery("#" == id ? "html" : id);
    // トップからの距離からヘッダー分の高さを引く
    let position = jQuery(target).offset().top - header;
    // その分だけ移動すればヘッダーと被りません
    jQuery("html, body").animate(
      {
        scrollTop: position
      },
      speed
    );
    return false;
  });
  
  // スクロール検知
jQuery(window).on("scroll", function() {
    // トップから100px以上スクロールしたら
    if (200 < jQuery(this).scrollTop()) {
      // is-showクラスをつける
   jQuery('.to-top').addClass( 'is-show' );
    } else {
      // 100pxを下回ったらis-showクラスを削除
    jQuery('.to-top').removeClass( 'is-show' );
    }
  });

  new WOW().init()

	//google.form
   let $form = $( '#js-form' )
   $form.submit(function(e) { 
    $.ajax({ 
     url: $form.attr('action'), 
     data: $form.serialize(), 
     type: "POST", 
     dataType: "xml", 
     statusCode: { 
        0: function() { 
          //送信に成功したときの処理 
          $form.slideUp()
          $( '#js-success' ).slideDown()
        }, 
        200: function() { 
            //送信に失敗したときの処理 
            $form.slideUp()
            $( '#js-error' ).slideDown()
        }
      } 
    });
    return false; 
  }); 

  
  //formの入力
  let $submit = $( '#js-submit' )
  $( '#js-form input, #js-form textarea' ).on( 'change', function() {
      
      if(
          $( '#js-form input[type="text"]' ).val() !=="" &&
          $( '#js-form input[type="email"]' ).val() !=="" &&   
          $( '#js-form input[name="entry.19420824"]' ).prop( 'checked' ) === true
          ){
              //全て入力された時
              $submit.prop( 'disabled', false)
              $submit.removeClass( '-disabled' )
            } else {
                //入力されていない時
              $submit.prop( 'disabled', true)
              $submit.addClass( '-disabled' )
          }
  });

  //drawer
  
  $(document).ready(function() {
    $('.drawer').drawer();
  });
  

});
  


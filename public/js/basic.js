				let test = $.easing;
	if (typeof test.easeInCirc === 'undefined') {
				let script   = document.createElement("script");
				script.type  = "text/javascript";
				script.src   = "js/jquery.easing.min.js";
				script.nonce  = '"<%=nonce%>"';
				document.body.appendChild(script);
}

$(document).ready(function() {

  $("a").click(function(e){
    this.blur();
  });
    $('.navbar-toggler').click(function(){
      if(!$('.navbar-toggler').hasClass('collapsed')){
        if($('#pick').hasClass('drop-colaps-pos')){
          $('#pick').removeClass('drop-colaps-pos');
        }
        $('#pick').addClass('drop-colaps-click');
      }else{
        if($('#pick').hasClass('drop-colaps-click')){
          $('#pick').removeClass('drop-colaps-click');
          if(!$('#pick').hasClass('drop-colaps-pos')){
            $('#pick').addClass('drop-colaps-pos');
          }
        }
      }
    });
    $(window).click(function(){
      if($('.navbar-toggler').hasClass('collapsed')){
        if($('#pick').hasClass('drop-colaps-click')){
          $('#pick').removeClass('drop-colaps-click');
          if(!$('#pick').hasClass('drop-colaps-pos')){
            $('#pick').addClass('drop-colaps-pos');
          }
        }
      }
    });
  $("a.smooth-scroll").click(function(e){
    e.preventDefault();
    let section = $(this).attr("href");
    if(section === "#home-link"){
      $('html, body').animate({
        scrollTop: 0
      }, 1250, "easeInOutExpo");
    }else if(section === "#contact-title"){
      if($(window).width() >= 769) {
        $('html, body').animate({
          scrollTop: $("#contactForm").offset().top - 250
        }, 1250, "easeInOutExpo", function(){
            $("#entered-form-name").focus();
        });
    }else{
      $('html, body').animate({
        scrollTop: $(section).offset().top - 70
      }, 1250, "easeInOutExpo", function(){
          $("#entered-form-name").focus();
      });
      }
    }else{
      $('html, body').animate({
        scrollTop: $(section).offset().top - 80
      }, 1250, "easeInOutExpo");
    }
  });
  var formName = $("#entered-form-name");
  let formEmail = $("#entered-form-email");
  let formMessage = $("#entered-form-message");
  $("form").on("submit", function(e) {
    e.preventDefault();
    let one = $('#send-message');
    let two = $('#bspan');
    let three = $('#bsvg');
    let formData = {
      name: formName.val(),
      email: formEmail.val(),
      message: formMessage.val(),
      subject: "Work inquiry"
    };
    let xhr = new XMLHttpRequest();
    xhr.open('POST', '/');
    xhr.setRequestHeader('content-type','application/json');
    xhr.onload = function(){
      if(xhr.responseText === 'Success'){
        one.addClass('msg-focus');
        two.addClass('span-focus');
        three.addClass('svg-focus');
        $('body, html').animate({scrollTop:$('#contactForm').offset().top - 100});
        setTimeout(function(){
          one.removeClass('msg-focus');
          two.removeClass('span-focus');
          three.removeClass('svg-focus');
        },5000);
        formName.val("");
        formEmail.val("");
        formMessage.val("");
      }else{
        // alert('Something went wrong');
      }
    }
    xhr.send(JSON.stringify(formData));
  });
  var alterClass = function() {
    var ww = document.body.clientWidth;
    if (ww < 1140) {
      $('.nav-item').removeClass('mx-2');
    } else if (ww >= 1001) {
      $('.nav-item').addClass('mx-2');
    };
    if (ww < 1161) {
      if ($('#logo').hasClass('logo-large')) {
        $('#logo').removeClass('logo-large').addClass('logo-small');
      }
      if($('#contact-us-button').hasClass('contact-us-button-big')){
        $('#contact-us-button').removeClass('contact-us-button-big').addClass('contact-us-button-small');
      }
      if($('.navbar').hasClass('large-navbar')){
        if($('#contact-us-button').hasClass('contact-button-small-menu')){
            $('#contact-us-button').addClass('contact-button-small-lg-menu').removeClass('contact-button-small-menu');
        }
        if($('#logo').hasClass('logo-small-top')){
          $('#logo').removeClass('logo-small-top');
        }
        $('#logo').addClass('logo-small-middle');
      }else{
        if($('#contact-us-button').hasClass('contact-button-small-lg-menu')){
            $('#contact-us-button').addClass('contact-button-small-menu').removeClass('contact-button-small-lg-menu');
        }
        if($('#logo').hasClass('logo-small-middle')){
          $('#logo').removeClass('logo-small-middle');
        }
        $('#logo').addClass('logo-small-top');
      }
    } else {
      if ($('#logo').hasClass('logo-small')) {
        $('#logo').addClass('logo-large').removeClass('logo-small');
      }
      if($('#logo').hasClass('logo-small-middle')){
        $('#logo').removeClass('logo-small-middle');
      }
      if($('#logo').hasClass('logo-small-top')){
        $('#logo').removeClass('logo-small-top');
      }
      if($('.navbar').hasClass('navbar-shrink')){
        $('.navbar').removeClass("navbar-shrink").addClass("large-navbar");
      }
      if($("#contact-us-button").hasClass('contact-us-button-small')){
        $('#contact-us-button').removeClass('contact-us-button-small').addClass('contact-us-button-big');
      }
      if($('#contact-us-button').hasClass('contact-button-small-menu')){
        $('#contact-us-button').removeClass('contact-button-small-menu').addClass('top-mar-bt-big');
      }
    }
    if(ww < 768){
      if($('#pick').hasClass('drop-move-one-lg')){
        $('#pick').removeClass('drop-move-one-lg');
      }
      if($('#pick').hasClass('drop-small-menu')){
        $('#pick').removeClass('drop-small-menu');
      }
      if ($('.navbar').hasClass("large-navbar")) {
        if($('#pick').hasClass('drop-lg-pos')){
          $('#pick').removeClass('drop-lg-pos');
        }
        if($('#pick').hasClass('drop-colaps-small-menu')){
          $('#pick').removeClass('drop-colaps-small-menu');
        }
        $('#pick').addClass('drop-colaps-pos');
      }else{
        if($('#pick').hasClass('drop-move-one-sm')){
          $('#pick').removeClass('drop-move-one-sm');
        }
        if(!$('#pick').hasClass('drop-colaps-small-menu')){
          $('#pick').addClass('drop-colaps-small-menu');
        }
      }
    }else if(ww >= 768 && ww < 1050){
			if($('#pick').hasClass('drop-colaps-small-menu')){
				$('#pick').removeClass('drop-colaps-small-menu');
			}
			if($('#pick').hasClass('large-navbar')){
				if(!$('#pick').hasClass('drop-move-one-lg')){
					$('#pick').addClass('drop-move-one-lg');
				}
			}else{
				if(!$('#pick').hasClass('drop-move-one-sm')){
					$('#pick').addClass('drop-move-one-sm');
				}
			}
      if($('#pick').hasClass('drop-small-menu')){
        $('#pick').removeClass('drop-small-menu');
      }
      if($('#pick').hasClass('drop-lg-pos')){
        $('#pick').removeClass('drop-lg-pos');
      }
      if($('#pick').hasClass('drop-colaps-pos')){
        $('#pick').removeClass('drop-colaps-pos');
      }
      if ($('.navbar').hasClass("large-navbar")) {
        if($('#pick').hasClass('drop-colaps-pos')){
          $('#pick').removeClass('drop-colaps-pos');
        }
        if($('#pick').hasClass('drop-move-one-sm')){
          $('#pick').removeClass('drop-move-one-sm');
        }
        if(!$('#pick').hasClass('drop-move-one-lg')){
          $('#pick').addClass('drop-move-one-lg');
        }
      }else{
        if($('#pick').hasClass('drop-colaps-small-menu')){
          $('#pick').removeClass('drop-colaps-small-menu');
        }
        if($('#pick').hasClass('drop-colaps-pos')){
          $('#pick').removeClass('drop-colaps-pos');
        }
        if($('#pick').hasClass('drop-move-one-lg')){
          $('#pick').removeClass('drop-move-one-lg');
        }
        if(!$('#pick').hasClass('drop-move-one-sm')){
          $('#pick').addClass('drop-move-one-sm');
        }
      }
    } else {
      if($('#pick').hasClass('drop-move-one-lg')){
        $('#pick').removeClass('drop-move-one-lg');
      }
      if($('#pick').hasClass('drop-colaps-pos')){
        $('#pick').removeClass('drop-colaps-pos');
      }
      if ($('.navbar').hasClass("large-navbar")) {
        if($('#pick').hasClass('drop-small-menu')){
          $('#pick').removeClass('drop-small-menu');
        }
        if(!$('#pick').hasClass('drop-lg-pos')){
          $('#pick').addClass('drop-lg-pos');
        }
      }else{
        if($('#pick').hasClass('drop-lg-pos')){
          $('#pick').removeClass('drop-lg-pos');
        }
        if(!$('#pick').hasClass('drop-small-menu')){
          $('#pick').addClass('drop-small-menu');
        }
      }
    }
  };
  $(window).resize(function() {
    alterClass();
  });
  alterClass();
});
$(window).scroll(function() {
  var viewportWidth = $(window).width();
  if ($(this).scrollTop() > 10) {
    if ($('.navbar').hasClass("large-navbar")) {
      $('.navbar').addClass("navbar-shrink").removeClass("large-navbar");
    }if ($('#logo').hasClass("logo-large")) {
      $('#logo').removeClass("logo-large").addClass("logo-small");
    }
    if($('#contact-us-button').hasClass("contact-us-button-big")){
      $('#contact-us-button').removeClass("contact-us-button-big").addClass("contact-us-button-small");
    }
    if($('#contact-us-button').hasClass('top-mar-bt-big')){
      $('#contact-us-button').removeClass('top-mar-bt-big').addClass('contact-button-small-menu');
    }
    if($('#contact-us-button').hasClass('contact-button-small-lg-menu')){
      $('#contact-us-button').removeClass('contact-button-small-lg-menu').addClass('contact-button-small-menu');
    }
    if(viewportWidth < 1161){
      if($('#logo').hasClass('logo-small-middle')){
        $('#logo').removeClass('logo-small-middle');
        $('#logo').addClass('logo-small-top');
      }
    }else{
      if($('#logo').hasClass('logo-small-middle')){
        $('#logo').removeClass('logo-small-middle');
      }
      $('#logo').addClass('logo-small-top');
    }
    if(viewportWidth  < 768){
      if($('#pick').hasClass('drop-move-one-lg')){
        $('#pick').removeClass('drop-move-one-lg');
      }
      if($('#pick').hasClass('drop-small-menu')){
        $('#pick').removeClass('drop-small-menu');
      }
      if($('#pick').hasClass('drop-colaps-pos')){
        $('#pick').removeClass('drop-colaps-pos').addClass('drop-colaps-small-menu');
      }
    }else if(viewportWidth >= 768 && viewportWidth < 1050){
      if($('#pick').hasClass('drop-colaps-pos')){
        $('#pick').removeClass('drop-colaps-pos');
      }
      if($('#pick').hasClass('drop-small-menu')){
        $('#pick').removeClass('drop-small-menu');
      }
      if($('#pick').hasClass('drop-lg-pos')){
        $('#pick').removeClass('drop-lg-pos');
      }
        if($('#pick').hasClass('drop-move-one-lg')){
          $('#pick').removeClass('drop-move-one-lg');
        }
        if(!$('#pick').hasClass('drop-move-one-sm')){
          $('#pick').addClass('drop-move-one-sm');
        }
      }else{
        if($('#pick').hasClass('drop-move-one-lg')){
          $('#pick').removeClass('drop-move-one-lg');
        }
        if($('#pick').hasClass('drop-colaps-pos')){
          $('#pick').removeClass('drop-colaps-pos');
        }
        if($('#pick').hasClass('drop-move-one-sm')){
          $('#pick').removeClass('drop-move-one-sm');
        }
        if($('#pick').hasClass('drop-lg-pos')){
          $('#pick').removeClass('drop-lg-pos');
        }
        if(!$('#pick').hasClass('drop-small-menu')){
          $('#pick').addClass('drop-small-menu');
        }
      }
  }else{
        if ($('.navbar').hasClass("navbar-shrink")) {
          $('.navbar').removeClass("navbar-shrink").addClass("large-navbar");
        }
        if(viewportWidth < 1161){
          if($('#contact-us-button').hasClass('contact-button-small-menu')){
            $('#contact-us-button').removeClass('contact-button-small-menu').addClass('contact-button-small-lg-menu');
          }
          if($('#logo').hasClass('logo-small-top')){
            $('#logo').removeClass('logo-small-top').addClass('logo-small-middle');
          }
        }else{
          if ($('#logo').hasClass("logo-small")) {
            $('#logo').addClass("logo-large").removeClass("logo-small");
          }
          if($('#logo').hasClass('logo-small-top')){
            $('#logo').removeClass('logo-small-top');
          }
          if($('#contact-us-button').hasClass('contact-us-button-small')){
            $('#contact-us-button').removeClass('contact-us-button-small').addClass('contact-us-button-big');
          }
          if($('#contact-us-button').hasClass('contact-button-small-menu')){
            $('#contact-us-button').removeClass('contact-button-small-menu').addClass('top-mar-bt-big');
          }
        }
        if(viewportWidth < 768){
          if($('#pick').hasClass('drop-small-menu')){
            $('#pick').removeClass('drop-small-menu');
          }
            if($('#pick').hasClass('drop-lg-pos')){
              $('#pick').removeClass('drop-lg-pos');
            }
            if($('#pick').hasClass('drop-colaps-small-menu')){
              $('#pick').removeClass('drop-colaps-small-menu');
            }
            $('#pick').addClass('drop-colaps-pos');
        }
        if(viewportWidth > 767 && viewportWidth < 1050){
          if($('#pick').hasClass('drop-small-menu')){
            $('#pick').removeClass('drop-small-menu');
          }
          if ($('.navbar').hasClass("large-navbar")) {
            if($('#pick').hasClass('drop-move-one-sm')){
              $('#pick').removeClass('drop-move-one-sm');
            }
            if(!$('#pick').hasClass('drop-move-one-lg')){
              $('#pick').addClass('drop-move-one-lg');
            }
          }
        }
        if(viewportWidth >= 1050){
        if ($('.navbar').hasClass("large-navbar")) {
          if($('#pick').hasClass('drop-small-menu')){
            $('#pick').removeClass('drop-small-menu');
          }
          if(!$('#pick').hasClass('drop-lg-pos')){
            $('#pick').addClass('drop-lg-pos');
          }
        }
      }
  }
});
$( window ).resize(function() {
  var viewportWidth = $(window).width();
if(viewportWidth >= 1355) {
  if($("#form").hasClass("col-xl-12")){
    $("#form").addClass("col-xl-10").removeClass("col-xl-12");
  }else{
    $("#form").addClass("col-xl-10");
  }
}else{
  if($("#form").hasClass("col-xl-10")){
    $("#form").removeClass("col-xl-10").addClass("col-xl-12");
  }
}
});

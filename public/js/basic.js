let test = $.easing;
if (void 0 === test.easeInCirc) {
  let s = document.createElement("script");
  s.type = "text/javascript", s.src = "js/jquery.easing.min.js", s.nonce = '"<%=nonce%>"', document.body.appendChild(s)
}
$(document).ready(function() {
  $("a").click(function(s) {
    this.blur()
  }), $(".navbar-toggler").click(function() {
    $(".navbar-toggler").hasClass("collapsed") ? $("#pick").hasClass("drop-opened-menu") && ($("#pick").removeClass("drop-opened-menu"), $(".navbar").hasClass("large-navbar") ? $("#pick").hasClass("drop-move-one-xs-lg") || $("#pick").addClass("drop-move-one-xs-lg") : $("#pick").hasClass("drop-move-one-xs-sm") || $("#pick").addClass("drop-move-one-xs-sm")) : ($("#pick").hasClass("drop-one-menu-xs-lg") && $("#pick").removeClass("drop-one-menu-xs-lg"), $("#pick").hasClass("drop-one-menu-xs-sm") && $("#pick").removeClass("drop-one-menu-xs-sm"), $("#pick").addClass("drop-opened-menu"))
  }), $(window).click(function() {
    $(".navbar-toggler").hasClass("collapsed") && $("#pick").hasClass("drop-opened-menu") && $("#pick").removeClass("drop-opened-menu")
  }), $("a.smooth-scroll").click(function(s) {
    s.preventDefault();
    s = $(this).attr("href");
    "#home-link" === s ? $("html, body").animate({
      scrollTop: 0
    }, 1250, "easeInOutExpo") : "#contact-title" === s ? 769 <= $(window).width() ? $("html, body").animate({
      scrollTop: $("#contactForm").offset().top - 250
    }, 1250, "easeInOutExpo", function() {
      $("#entered-form-name").focus()
    }) : $("html, body").animate({
      scrollTop: $(s).offset().top - 70
    }, 1250, "easeInOutExpo", function() {
      $("#entered-form-name").focus()
    }) : $("html, body").animate({
      scrollTop: $(s).offset().top - 80
    }, 1250, "easeInOutExpo")
  });
  var n = $("#entered-form-name");
  let t = $("#entered-form-email"),
    m = $("#entered-form-message");
  $("form").on("submit", function(s) {
    s.preventDefault();
    let o = $("#send-message"),
      a = $("#bspan"),
      l = $("#bsvg");
    s = {
      name: n.val(),
      email: t.val(),
      message: m.val(),
      subject: "Work inquiry"
    };
    let e = new XMLHttpRequest;
    e.open("POST", "/"), e.setRequestHeader("content-type", "application/json"), e.onload = function() {
      "Success" === e.responseText && (o.addClass("msg-focus"), a.addClass("span-focus"), l.addClass("svg-focus"), $("body, html").animate({
        scrollTop: $("#contactForm").offset().top - 100
      }), setTimeout(function() {
        o.removeClass("msg-focus"), a.removeClass("span-focus"), l.removeClass("svg-focus")
      }, 5e3), n.val(""), t.val(""), m.val(""))
    }, e.send(JSON.stringify(s))
  });

  function s() {
    var s = document.body.clientWidth;
    s < 1140 ? $(".nav-item").removeClass("mx-2") : 1001 <= s && $(".nav-item").addClass("mx-2"), s < 1161 ? ($("#logo").hasClass("logo-large") && $("#logo").removeClass("logo-large").addClass("logo-small"), $("#contact-us-button").hasClass("contact-us-button-big") && $("#contact-us-button").removeClass("contact-us-button-big").addClass("contact-us-button-small"), $(".navbar").hasClass("large-navbar") ? ($("#contact-us-button").hasClass("contact-button-small-menu") && $("#contact-us-button").addClass("contact-button-small-lg-menu").removeClass("contact-button-small-menu"), $("#logo").hasClass("logo-small-top") && $("#logo").removeClass("logo-small-top"), $("#logo").addClass("logo-small-middle")) : ($("#contact-us-button").hasClass("contact-button-small-lg-menu") && $("#contact-us-button").addClass("contact-button-small-menu").removeClass("contact-button-small-lg-menu"), $("#logo").hasClass("logo-small-middle") && $("#logo").removeClass("logo-small-middle"), $("#logo").addClass("logo-small-top"))) : ($("#logo").hasClass("logo-small") && $("#logo").addClass("logo-large").removeClass("logo-small"), $("#logo").hasClass("logo-small-middle") && $("#logo").removeClass("logo-small-middle"), $("#logo").hasClass("logo-small-top") && $("#logo").removeClass("logo-small-top"), $(".navbar").hasClass("navbar-shrink") && $(".navbar").removeClass("navbar-shrink").addClass("large-navbar"), $("#contact-us-button").hasClass("contact-us-button-small") && $("#contact-us-button").removeClass("contact-us-button-small").addClass("contact-us-button-big"), $("#contact-us-button").hasClass("contact-button-small-menu") && $("#contact-us-button").removeClass("contact-button-small-menu").addClass("top-mar-bt-big")), s < 768 ? ($("#pick").hasClass("drop-move-one-sm") && $("#pick").removeClass("drop-move-one-sm"), $("#pick").hasClass("drop-lg-pos") && $("#pick").removeClass("drop-lg-pos"), $("#pick").hasClass("drop-small-menu") && $("#pick").removeClass("drop-small-menu"), $("#pick").hasClass("drop-move-one-lg") && $("#pick").removeClass("drop-move-one-lg"), $(".navbar").hasClass("large-navbar") ? $("#pick").hasClass("drop-move-one-xs-lg") || $("#pick").addClass("drop-move-one-xs-lg") : $("#pick").hasClass("drop-move-one-xs-sm") || $("#pick").addClass("drop-move-one-xs-sm")) : 768 <= s && s < 1050 ? ($("#pick").hasClass("drop-move-one-xs-sm") && $("#pick").removeClass("drop-move-one-xs-sm"), $("#pick").hasClass("drop-move-one-xs-lg") && $("#pick").removeClass("drop-move-one-xs-lg"), $(".navbar").hasClass("large-navbar") ? ($("#pick").hasClass("drop-lg-pos") && $("#pick").removeClass("drop-lg-pos"), $("#pick").hasClass("drop-move-one-sm") && $("#pick").removeClass("drop-move-one-sm"), $("#pick").hasClass("drop-move-one-lg") || $("#pick").addClass("drop-move-one-lg")) : ($("#pick").hasClass("drop-small-menu") && $("#pick").removeClass("drop-small-menu"), $("#pick").hasClass("drop-move-one-lg") && $("#pick").removeClass("drop-move-one-lg"), $("#pick").hasClass("drop-move-one-sm") || $("#pick").addClass("drop-move-one-sm"))) : $(".navbar").hasClass("large-navbar") ? ($("#pick").hasClass("drop-move-one-sm") && $("#pick").removeClass("drop-move-one-sm"), $("#pick").hasClass("drop-move-one-lg") && $("#pick").removeClass("drop-move-one-lg"), $("#pick").hasClass("drop-small-menu") && $("#pick").removeClass("drop-small-menu"), $("#pick").hasClass("drop-lg-pos") || $("#pick").addClass("drop-lg-pos")) : ($("#pick").hasClass("drop-move-one-sm") && $("#pick").removeClass("drop-move-one-sm"), $("#pick").hasClass("drop-move-one-lg") && $("#pick").removeClass("drop-move-one-lg"), $("#pick").hasClass("drop-lg-pos") && $("#pick").removeClass("drop-lg-pos"), $("#pick").hasClass("drop-small-menu") || $("#pick").addClass("drop-small-menu"))
  }
  $(window).resize(function() {
    s()
  }), s()
}), $(window).scroll(function() {
  var s = $(window).width();
  10 < $(this).scrollTop() ? ($(".navbar").hasClass("large-navbar") && $(".navbar").addClass("navbar-shrink").removeClass("large-navbar"), $("#logo").hasClass("logo-large") && $("#logo").removeClass("logo-large").addClass("logo-small"), $("#contact-us-button").hasClass("contact-us-button-big") && $("#contact-us-button").removeClass("contact-us-button-big").addClass("contact-us-button-small"), $("#contact-us-button").hasClass("top-mar-bt-big") && $("#contact-us-button").removeClass("top-mar-bt-big").addClass("contact-button-small-menu"), $("#contact-us-button").hasClass("contact-button-small-lg-menu") && $("#contact-us-button").removeClass("contact-button-small-lg-menu").addClass("contact-button-small-menu"), s < 1161 ? $("#logo").hasClass("logo-small-middle") && ($("#logo").removeClass("logo-small-middle"), $("#logo").addClass("logo-small-top")) : ($("#logo").hasClass("logo-small-middle") && $("#logo").removeClass("logo-small-middle"), $("#logo").addClass("logo-small-top")), s < 768 ? ($("#pick").hasClass("drop-move-one-sm") && $("#pick").removeClass("drop-move-one-sm"), $("#pick").hasClass("drop-move-one-lg") && $("#pick").removeClass("drop-move-one-lg"), $("#pick").hasClass("drop-move-one-xs-lg") && $("#pick").removeClass("drop-move-one-xs-lg"), $("#pick").hasClass("drop-move-one-xs-sm") || $("#pick").addClass("drop-move-one-xs-sm")) : 768 <= s && s < 1050 ? ($("#pick").hasClass("drop-lg-pos") && $("#pick").removeClass("drop-lg-pos"), $("#pick").hasClass("drop-small-menu") && $("#pick").removeClass("drop-small-menu"), $("#pick").hasClass("drop-move-one-sm") || $("#pick").addClass("drop-move-one-sm"), $("#pick").hasClass("drop-move-one-lg") && $("#pick").removeClass("drop-move-one-lg")) : ($("#pick").hasClass("drop-lg-pos") && $("#pick").removeClass("drop-lg-pos"), $("#pick").hasClass("drop-small-menu") || $("#pick").addClass("drop-small-menu"))) : ($(".navbar").hasClass("navbar-shrink") && $(".navbar").removeClass("navbar-shrink").addClass("large-navbar"), s < 1161 ? ($("#contact-us-button").hasClass("contact-button-small-menu") && $("#contact-us-button").removeClass("contact-button-small-menu").addClass("contact-button-small-lg-menu"), $("#logo").hasClass("logo-small-top") && $("#logo").removeClass("logo-small-top").addClass("logo-small-middle")) : ($("#logo").hasClass("logo-small") && $("#logo").addClass("logo-large").removeClass("logo-small"), $("#logo").hasClass("logo-small-top") && $("#logo").removeClass("logo-small-top"), $("#contact-us-button").hasClass("contact-us-button-small") && $("#contact-us-button").removeClass("contact-us-button-small").addClass("contact-us-button-big"), $("#contact-us-button").hasClass("contact-button-small-menu") && $("#contact-us-button").removeClass("contact-button-small-menu").addClass("top-mar-bt-big")), s < 768 && ($("#pick").hasClass("drop-move-one-sm") && $("#pick").removeClass("drop-move-one-sm"), $("#pick").hasClass("drop-move-one-lg") && $("#pick").removeClass("drop-move-one-lg"), $("#pick").hasClass("drop-move-one-xs-sm") && $("#pick").removeClass("drop-move-one-xs-sm"), $("#pick").hasClass("drop-move-one-xs-lg") || $("#pick").addClass("drop-move-one-xs-lg")), 767 < s && s < 1050 && ($("#pick").hasClass("drop-lg-pos") && $("#pick").removeClass("drop-lg-pos"), $("#pick").hasClass("drop-small-menu") && $("#pick").removeClass("drop-small-menu"), $("#pick").hasClass("drop-move-one-sm") && $("#pick").removeClass("drop-move-one-sm"), $("#pick").hasClass("drop-move-one-lg") || $("#pick").addClass("drop-move-one-lg")), 1050 <= s && ($("#pick").hasClass("drop-small-menu") && $("#pick").removeClass("drop-small-menu"), $("#pick").hasClass("drop-lg-pos") || $("#pick").addClass("drop-lg-pos")))
}), $(window).resize(function() {
  1355 <= $(window).width() ? $("#form").hasClass("col-xl-12") ? $("#form").addClass("col-xl-10").removeClass("col-xl-12") : $("#form").addClass("col-xl-10") : $("#form").hasClass("col-xl-10") && $("#form").removeClass("col-xl-10").addClass("col-xl-12")
});

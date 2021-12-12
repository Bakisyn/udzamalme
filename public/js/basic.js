'use strict';
let test = $.easing;
if (void 0 === test.easeInCirc) {
  let s = document.createElement("script");
  /** @type {string} */
  s.type = "text/javascript";
  /** @type {string} */
  s.src = "js/jquery.easing.min.js";
  /** @type {string} */
  s.nonce = '"<%=nonce%>"';
  document.body.appendChild(s);
}
$(document).ready(function() {
  const navbar = $(".navbar");
  const logo = $("#logo");
  const contactbutton = $("#contact-us-button");
  const pick = $("#pick");
  /**
   * @return {undefined}
   */
  function showMenu() {
    /** @type {number} */
    var timeBarWidth = document.body.clientWidth;
    if (timeBarWidth < 1140) {
      $(".nav-item").removeClass("mx-2");
    } else {
      if (1001 <= timeBarWidth) {
        $(".nav-item").addClass("mx-2");
      }
    }
    if (timeBarWidth < 1161) {
      logo.removeClass().addClass('logo-default d-inline-block align-text-top logo-small');
      contactbutton.removeClass().addClass('d-none d-md-block contact-us-button smooth-scroll open-sans top-mar-bt-big contact-us-button-small');
      if (navbar.hasClass("large-navbar")) {
        contactbutton.addClass("contact-button-small-lg-menu");
        logo.addClass("logo-small-middle");
      } else {
        contactbutton.addClass("contact-button-small-menu");
        logo.addClass("logo-small-top");
      }
    } else {
      logo.removeClass().addClass('logo-default d-inline-block align-text-top logo-large');
      navbar.removeClass().addClass('navbar navbar-expand-md navbar-dark large-navbar');
      contactbutton.removeClass().addClass('d-none d-md-block contact-us-button smooth-scroll open-sans top-mar-bt-big contact-us-button-big');
    }
    if (timeBarWidth < 768) {
      pick.removeClass();
      if (navbar.hasClass("large-navbar")) {
        pick.addClass("drop-move-one-xs-lg");
      } else {
        pick.addClass("drop-move-one-xs-sm");
      }
    } else {
      if (768 <= timeBarWidth && timeBarWidth < 1050) {
        pick.removeClass();
        if ($(".navbar").hasClass("large-navbar")) {
          pick.addClass("drop-move-one-lg");
        } else {
          pick.addClass("drop-move-one-sm");
        }
      } else {
        pick.removeClass();
        if ($(".navbar").hasClass("large-navbar")) {
          pick.addClass("drop-lg-pos");
        } else {
          pick.addClass("drop-small-menu");
        }
      }
    }
  }
  $("a").click(function(s) {
    this.blur();
  });
  const navbartoggler = $(".navbar-toggler");
  navbartoggler.click(function() {
    if ($(".navbar-toggler").hasClass("collapsed")) {
      pick.removeClass();
      if (navbar.hasClass("large-navbar")) {
        pick.addClass("drop-move-one-xs-lg");
      } else {
        pick.addClass("drop-move-one-xs-sm");
      }
    } else {
      pick.addClass("drop-opened-menu");
    }
  });
  $(window).click(function() {
    if (pick.hasClass("drop-opened-menu")) {
      pick.removeClass("drop-opened-menu");
    }
  });
  $("a.smooth-scroll").click(function(e) {
    e.preventDefault();
    e = $(this).attr("href");
    if ("#home-link" === e) {
      $("html, body").animate({
        scrollTop : 0
      }, 1250, "easeInOutExpo");
    } else {
      if ("#contact-title" === e) {
        if (769 <= $(window).width()) {
          $("html, body").animate({
            scrollTop : $("#contactForm").offset().top - 250
          }, 1250, "easeInOutExpo", function() {
            $("#entered-form-name").focus();
          });
        } else {
          $("html, body").animate({
            scrollTop : $(e).offset().top - 70
          }, 1250, "easeInOutExpo", function() {
            $("#entered-form-name").focus();
          });
        }
      } else {
        $("html, body").animate({
          scrollTop : $(e).offset().top - 80
        }, 1250, "easeInOutExpo");
      }
    }
  });
  var inputel = $("#entered-form-name");
  let t = $("#entered-form-email");
  let m = $("#entered-form-message");
  $("form").on("submit", function(options) {
    options.preventDefault();
    let $allPanels = $("#send-message");
    let undoEl = $("#bspan");
    let l = $("#bsvg");
    options = {
      name : inputel.val(),
      email : t.val(),
      message : m.val(),
      subject : "Work inquiry"
    };
    let xhr = new XMLHttpRequest;
    xhr.open("POST", "/");
    xhr.setRequestHeader("content-type", "application/json");
    /**
     * @return {undefined}
     */
    xhr.onload = function() {
      if ("Success" === xhr.responseText) {
        $allPanels.addClass("msg-focus");
        undoEl.addClass("span-focus");
        l.addClass("svg-focus");
        $("body, html").animate({
          scrollTop : $("#contactForm").offset().top - 100
        });
        setTimeout(function() {
          $allPanels.removeClass("msg-focus");
          undoEl.removeClass("span-focus");
          l.removeClass("svg-focus");
        }, 5e3);
        inputel.val("");
        t.val("");
        m.val("");
      }
    };
    xhr.send(JSON.stringify(options));
  });
  $(window).resize(function() {
    showMenu();
  });
  showMenu();
}), $(window).scroll(function() {
  const navbar = $(".navbar");
  const logo = $("#logo");
  const contactbutton = $("#contact-us-button");
  const pick = $("#pick");
  var i = $(window).width();
  if (10 < $(this).scrollTop()) {
    navbar.removeClass().addClass('navbar navbar-expand-md navbar-dark navbar-shrink');
    logo.removeClass().addClass('logo-default d-inline-block align-text-top logo-small');
    contactbutton.removeClass().addClass('d-none d-md-block contact-us-button smooth-scroll open-sans contact-button-small-menu contact-us-button-small');
    if (i < 1161) {
      logo.removeClass().addClass('logo-default d-inline-block align-text-top logo-small logo-small-top');
    } else {
      logo.removeClass().addClass('logo-default d-inline-block align-text-top logo-small logo-small-top');
    }
    pick.removeClass();
    if (i < 768) {
      pick.addClass("drop-move-one-xs-sm");
    } else {
      if (768 <= i && i < 1050) {
        pick.addClass("drop-move-one-sm");
      } else {
        pick.addClass("drop-small-menu");
      }
    }
  } else {
    navbar.removeClass().addClass('navbar navbar-expand-md navbar-dark large-navbar');
    logo.removeClass();
    if (i < 1161) {
      contactbutton.removeClass().addClass('d-none d-md-block contact-us-button smooth-scroll open-sans contact-button-small-lg-menu contact-us-button-small');
      logo.addClass('logo-default d-inline-block align-text-top logo-small logo-small-middle');
    } else {
      logo.addClass('logo-default d-inline-block align-text-top logo-large');
      contactbutton.removeClass().addClass('d-none d-md-block contact-us-button smooth-scroll open-sans contact-button-small-lg-menu top-mar-bt-big contact-us-button-big');
    }
    pick.removeClass();
    if (i < 768) {
      pick.addClass("drop-move-one-xs-lg");
    }
    if (767 < i && i < 1050) {
      pick.addClass("drop-move-one-lg");
    }
    if (1050 <= i) {
      pick.addClass("drop-lg-pos");
    }
  }
}), $(window).resize(function() {
  const formz = $("#form");
  formz.removeClass();
  if (1355 <= $(window).width()) {
    formz.addClass("col-md-12 brdr-box col-xl-10");
  } else {
    formz.addClass("col-md-12 brdr-box col-xl-12");
  }
});

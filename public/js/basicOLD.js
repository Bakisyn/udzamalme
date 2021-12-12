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
      if ($("#logo").hasClass("logo-large")) {
        $("#logo").removeClass("logo-large").addClass("logo-small");
      }
      if ($("#contact-us-button").hasClass("contact-us-button-big")) {
        $("#contact-us-button").removeClass("contact-us-button-big").addClass("contact-us-button-small");
      }
      if ($(".navbar").hasClass("large-navbar")) {
        if ($("#contact-us-button").hasClass("contact-button-small-menu")) {
          $("#contact-us-button").addClass("contact-button-small-lg-menu").removeClass("contact-button-small-menu");
        }
        if ($("#logo").hasClass("logo-small-top")) {
          $("#logo").removeClass("logo-small-top");
        }
        $("#logo").addClass("logo-small-middle");
      } else {
        if ($("#contact-us-button").hasClass("contact-button-small-lg-menu")) {
          $("#contact-us-button").addClass("contact-button-small-menu").removeClass("contact-button-small-lg-menu");
        }
        if ($("#logo").hasClass("logo-small-middle")) {
          $("#logo").removeClass("logo-small-middle");
        }
        $("#logo").addClass("logo-small-top");
      }
    } else {
      if ($("#logo").hasClass("logo-small")) {
        $("#logo").addClass("logo-large").removeClass("logo-small");
      }
      if ($("#logo").hasClass("logo-small-middle")) {
        $("#logo").removeClass("logo-small-middle");
      }
      if ($("#logo").hasClass("logo-small-top")) {
        $("#logo").removeClass("logo-small-top");
      }
      if ($(".navbar").hasClass("navbar-shrink")) {
        $(".navbar").removeClass("navbar-shrink").addClass("large-navbar");
      }
      if ($("#contact-us-button").hasClass("contact-us-button-small")) {
        $("#contact-us-button").removeClass("contact-us-button-small").addClass("contact-us-button-big");
      }
      if ($("#contact-us-button").hasClass("contact-button-small-menu")) {
        $("#contact-us-button").removeClass("contact-button-small-menu").addClass("top-mar-bt-big");
      }
    }
    if (timeBarWidth < 768) {
      if ($("#pick").hasClass("drop-move-one-sm")) {
        $("#pick").removeClass("drop-move-one-sm");
      }
      if ($("#pick").hasClass("drop-lg-pos")) {
        $("#pick").removeClass("drop-lg-pos");
      }
      if ($("#pick").hasClass("drop-small-menu")) {
        $("#pick").removeClass("drop-small-menu");
      }
      if ($("#pick").hasClass("drop-move-one-lg")) {
        $("#pick").removeClass("drop-move-one-lg");
      }
      if ($(".navbar").hasClass("large-navbar")) {
        if (!$("#pick").hasClass("drop-move-one-xs-lg")) {
          $("#pick").addClass("drop-move-one-xs-lg");
        }
      } else {
        if (!$("#pick").hasClass("drop-move-one-xs-sm")) {
          $("#pick").addClass("drop-move-one-xs-sm");
        }
      }
    } else {
      if (768 <= timeBarWidth && timeBarWidth < 1050) {
        if ($("#pick").hasClass("drop-move-one-xs-sm")) {
          $("#pick").removeClass("drop-move-one-xs-sm");
        }
        if ($("#pick").hasClass("drop-move-one-xs-lg")) {
          $("#pick").removeClass("drop-move-one-xs-lg");
        }
        if ($(".navbar").hasClass("large-navbar")) {
          if ($("#pick").hasClass("drop-lg-pos")) {
            $("#pick").removeClass("drop-lg-pos");
          }
          if ($("#pick").hasClass("drop-move-one-sm")) {
            $("#pick").removeClass("drop-move-one-sm");
          }
          if (!$("#pick").hasClass("drop-move-one-lg")) {
            $("#pick").addClass("drop-move-one-lg");
          }
        } else {
          if ($("#pick").hasClass("drop-small-menu")) {
            $("#pick").removeClass("drop-small-menu");
          }
          if ($("#pick").hasClass("drop-move-one-lg")) {
            $("#pick").removeClass("drop-move-one-lg");
          }
          if (!$("#pick").hasClass("drop-move-one-sm")) {
            $("#pick").addClass("drop-move-one-sm");
          }
        }
      } else {
        if ($(".navbar").hasClass("large-navbar")) {
          if ($("#pick").hasClass("drop-move-one-sm")) {
            $("#pick").removeClass("drop-move-one-sm");
          }
          if ($("#pick").hasClass("drop-move-one-lg")) {
            $("#pick").removeClass("drop-move-one-lg");
          }
          if ($("#pick").hasClass("drop-small-menu")) {
            $("#pick").removeClass("drop-small-menu");
          }
          if (!$("#pick").hasClass("drop-lg-pos")) {
            $("#pick").addClass("drop-lg-pos");
          }
        } else {
          if ($("#pick").hasClass("drop-move-one-sm")) {
            $("#pick").removeClass("drop-move-one-sm");
          }
          if ($("#pick").hasClass("drop-move-one-lg")) {
            $("#pick").removeClass("drop-move-one-lg");
          }
          if ($("#pick").hasClass("drop-lg-pos")) {
            $("#pick").removeClass("drop-lg-pos");
          }
          if (!$("#pick").hasClass("drop-small-menu")) {
            $("#pick").addClass("drop-small-menu");
          }
        }
      }
    }
  }
  $("a").click(function(s) {
    this.blur();
  });
  $(".navbar-toggler").click(function() {
    if ($(".navbar-toggler").hasClass("collapsed")) {
      if ($("#pick").hasClass("drop-opened-menu")) {
        $("#pick").removeClass("drop-opened-menu");
        if ($(".navbar").hasClass("large-navbar")) {
          if (!$("#pick").hasClass("drop-move-one-xs-lg")) {
            $("#pick").addClass("drop-move-one-xs-lg");
          }
        } else {
          if (!$("#pick").hasClass("drop-move-one-xs-sm")) {
            $("#pick").addClass("drop-move-one-xs-sm");
          }
        }
      }
    } else {
      if ($("#pick").hasClass("drop-one-menu-xs-lg")) {
        $("#pick").removeClass("drop-one-menu-xs-lg");
      }
      if ($("#pick").hasClass("drop-one-menu-xs-sm")) {
        $("#pick").removeClass("drop-one-menu-xs-sm");
      }
      $("#pick").addClass("drop-opened-menu");
    }
  });
  $(window).click(function() {
    if ($(".navbar-toggler").hasClass("collapsed") && $("#pick").hasClass("drop-opened-menu")) {
      $("#pick").removeClass("drop-opened-menu");
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
  var i = $(window).width();
  if (10 < $(this).scrollTop()) {
    if ($(".navbar").hasClass("large-navbar")) {
      $(".navbar").addClass("navbar-shrink").removeClass("large-navbar");
    }
    if ($("#logo").hasClass("logo-large")) {
      $("#logo").removeClass("logo-large").addClass("logo-small");
    }
    if ($("#contact-us-button").hasClass("contact-us-button-big")) {
      $("#contact-us-button").removeClass("contact-us-button-big").addClass("contact-us-button-small");
    }
    if ($("#contact-us-button").hasClass("top-mar-bt-big")) {
      $("#contact-us-button").removeClass("top-mar-bt-big").addClass("contact-button-small-menu");
    }
    if ($("#contact-us-button").hasClass("contact-button-small-lg-menu")) {
      $("#contact-us-button").removeClass("contact-button-small-lg-menu").addClass("contact-button-small-menu");
    }
    if (i < 1161) {
      if ($("#logo").hasClass("logo-small-middle")) {
        $("#logo").removeClass("logo-small-middle");
        $("#logo").addClass("logo-small-top");
      }
    } else {
      if ($("#logo").hasClass("logo-small-middle")) {
        $("#logo").removeClass("logo-small-middle");
      }
      $("#logo").addClass("logo-small-top");
    }
    if (i < 768) {
      if ($("#pick").hasClass("drop-move-one-sm")) {
        $("#pick").removeClass("drop-move-one-sm");
      }
      if ($("#pick").hasClass("drop-move-one-lg")) {
        $("#pick").removeClass("drop-move-one-lg");
      }
      if ($("#pick").hasClass("drop-move-one-xs-lg")) {
        $("#pick").removeClass("drop-move-one-xs-lg");
      }
      if (!$("#pick").hasClass("drop-move-one-xs-sm")) {
        $("#pick").addClass("drop-move-one-xs-sm");
      }
    } else {
      if (768 <= i && i < 1050) {
        if ($("#pick").hasClass("drop-lg-pos")) {
          $("#pick").removeClass("drop-lg-pos");
        }
        if ($("#pick").hasClass("drop-small-menu")) {
          $("#pick").removeClass("drop-small-menu");
        }
        if (!$("#pick").hasClass("drop-move-one-sm")) {
          $("#pick").addClass("drop-move-one-sm");
        }
        if ($("#pick").hasClass("drop-move-one-lg")) {
          $("#pick").removeClass("drop-move-one-lg");
        }
      } else {
        if ($("#pick").hasClass("drop-lg-pos")) {
          $("#pick").removeClass("drop-lg-pos");
        }
        if (!$("#pick").hasClass("drop-small-menu")) {
          $("#pick").addClass("drop-small-menu");
        }
      }
    }
  } else {
    if ($(".navbar").hasClass("navbar-shrink")) {
      $(".navbar").removeClass("navbar-shrink").addClass("large-navbar");
    }
    if (i < 1161) {
      if ($("#contact-us-button").hasClass("contact-button-small-menu")) {
        $("#contact-us-button").removeClass("contact-button-small-menu").addClass("contact-button-small-lg-menu");
      }
      if ($("#logo").hasClass("logo-small-top")) {
        $("#logo").removeClass("logo-small-top").addClass("logo-small-middle");
      }
    } else {
      if ($("#logo").hasClass("logo-small")) {
        $("#logo").addClass("logo-large").removeClass("logo-small");
      }
      if ($("#logo").hasClass("logo-small-top")) {
        $("#logo").removeClass("logo-small-top");
      }
      if ($("#contact-us-button").hasClass("contact-us-button-small")) {
        $("#contact-us-button").removeClass("contact-us-button-small").addClass("contact-us-button-big");
      }
      if ($("#contact-us-button").hasClass("contact-button-small-menu")) {
        $("#contact-us-button").removeClass("contact-button-small-menu").addClass("top-mar-bt-big");
      }
    }
    if (i < 768) {
      if ($("#pick").hasClass("drop-move-one-sm")) {
        $("#pick").removeClass("drop-move-one-sm");
      }
      if ($("#pick").hasClass("drop-move-one-lg")) {
        $("#pick").removeClass("drop-move-one-lg");
      }
      if ($("#pick").hasClass("drop-move-one-xs-sm")) {
        $("#pick").removeClass("drop-move-one-xs-sm");
      }
      if (!$("#pick").hasClass("drop-move-one-xs-lg")) {
        $("#pick").addClass("drop-move-one-xs-lg");
      }
    }
    if (767 < i && i < 1050) {
      if ($("#pick").hasClass("drop-lg-pos")) {
        $("#pick").removeClass("drop-lg-pos");
      }
      if ($("#pick").hasClass("drop-small-menu")) {
        $("#pick").removeClass("drop-small-menu");
      }
      if ($("#pick").hasClass("drop-move-one-sm")) {
        $("#pick").removeClass("drop-move-one-sm");
      }
      if (!$("#pick").hasClass("drop-move-one-lg")) {
        $("#pick").addClass("drop-move-one-lg");
      }
    }
    if (1050 <= i) {
      if ($("#pick").hasClass("drop-small-menu")) {
        $("#pick").removeClass("drop-small-menu");
      }
      if (!$("#pick").hasClass("drop-lg-pos")) {
        $("#pick").addClass("drop-lg-pos");
      }
    }
  }
}), $(window).resize(function() {
  if (1355 <= $(window).width()) {
    if ($("#form").hasClass("col-xl-12")) {
      $("#form").addClass("col-xl-10").removeClass("col-xl-12");
    } else {
      $("#form").addClass("col-xl-10");
    }
  } else {
    if ($("#form").hasClass("col-xl-10")) {
      $("#form").removeClass("col-xl-10").addClass("col-xl-12");
    }
  }
});


function hasClass(elem, className) {
  return new RegExp(' ' + className + ' ').test(' ' + elem.className + ' ');
}
function addClass(elem, className) {
  if (!hasClass(elem, className)) {
      elem.className += ' ' + className;
  }
}
function removeClass(elem){
  elem.className = '';
}

function removeSingleClass(elem, className) {
    var newClass = ' ' + elem.className.replace( /[\t\r\n]/g, ' ') + ' ';
    if (hasClass(elem, className)) {
        while (newClass.indexOf(' ' + className + ' ') >= 0 ) {
            newClass = newClass.replace(' ' + className + ' ', ' ');
        }
        elem.className = newClass.replace(/^\s+|\s+$/g, '');
    }
}
function hasClassSvg(elem, className) {
  return new RegExp(' ' + className + ' ').test(' ' + elem.className.baseVal + ' ');
}
function addClassSvg(elem, className) {
  if (!hasClassSvg(elem, className)) {
      elem.className.baseVal += ' ' + className;
  }
}
function removeSingleClassForm(elem, className) {
    var newClass = ' ' + elem.className.replace( /[\t\r\n]/g, ' ') + ' ';
    console.log("classes in " +  elem.id + " are " + newClass);
    if (hasClass(elem, className)) {
        while (newClass.indexOf(' ' + className + ' ') >= 0 ) {
            newClass = newClass.replace(' ' + className + ' ', ' ');
        }
        elem.className = newClass.replace(/^\s+|\s+$/g, '');
        console.log("classes in " +  elem.id + " are " + elem.getAttribute('class'));
    }
}
function removeSingleClassSvg(elem, className) {
    var newClass = ' ' + elem.getAttribute('class').replace( /[\t\r\n]/g, ' ') + ' ';
    console.log("classes in bsvg are " + newClass);
    if (hasClassSvg(elem, className)) {
        while (newClass.indexOf(' ' + className + ' ') >= 0 ) {
            newClass = newClass.replace(' ' + className + ' ', ' ');
        }
        elem.setAttribute('class', newClass.replace(/^\s+|\s+$/g, ''));
        console.log("classes in bsvg are " + elem.getAttribute("class"));
    }
}

document.addEventListener("DOMContentLoaded", function(event) {

const navbar = document.getElementById("navbar");
const logo = document.getElementById("logo");
const contactbutton = document.getElementById("contact-us-button");
const pick = document.getElementById("pick");

function showMenu() {
  var timeBarWidth = document.body.clientWidth;
  let navelements = document.getElementsByClassName("nav-item");
  if (timeBarWidth < 1140) {
    if(hasClass(navelements[0], "mx-2")){
      for (var y = 0; y < navelements.length; y++) {
        let elementToRemoveFrom = navelements[y];
          removeSingleClass(elementToRemoveFrom, "mx-2");
      }
    }
  } else {
    if (1001 <= timeBarWidth) {
      if(!hasClass(navelements[0], "mx-2")){
        for (var y = 0; y < navelements.length; y++) {
          let elementToRemoveFrom = navelements[y];
            addClass(elementToRemoveFrom, "mx-2");
        }
      }
    }
  }
  if (timeBarWidth < 1161) {
    removeClass(logo);
    addClass(logo,'logo-default d-inline-block align-text-top logo-small');
    removeClass(contactbutton);
    addClass(contactbutton,'d-none d-md-block contact-us-button smooth-scroll open-sans top-mar-bt-big contact-us-button-small');
    if (hasClass(navbar, "large-navbar")) {
      addClass(contactbutton,"contact-button-small-lg-menu");
      addClass(logo,"logo-small-middle");
    } else {
      addClass(contactbutton,"contact-button-small-menu");
      addClass(logo,"logo-small-top");
    }
  } else {
    removeClass(logo); addClass(logo,'logo-default d-inline-block align-text-top logo-large');
    removeClass(navbar); addClass(navbar,'navbar navbar-expand-md navbar-dark large-navbar');
    removeClass(contactbutton); addClass(contactbutton, 'd-none d-md-block contact-us-button smooth-scroll open-sans top-mar-bt-big contact-us-button-big');
  }
  if (timeBarWidth < 768) {
    removeClass(pick);
    if (hasClass(navbar,"large-navbar")) {
      addClass(pick,"drop-move-one-xs-lg");
    } else {
      addClass(pick,"drop-move-one-xs-sm");
    }
  } else {
    if (768 <= timeBarWidth && timeBarWidth < 1050) {
      removeClass(pick);
      if (hasClass(navbar,"large-navbar")) {
        addClass(pick,"drop-move-one-lg");
      } else {
        addClass(pick,"drop-move-one-sm");
      }
    } else {
      removeClass(pick);
      if (hasClass(navbar,"large-navbar")) {
        addClass(pick,"drop-lg-pos");
      } else {
        addClass(pick,"drop-small-menu");
      }
    }
  }
}
let aelements = document.getElementsByTagName("a");
for (var i = 0; i < aelements.length; i++) {
    aelements[i].addEventListener('click', function(){
      this.blur();
    }, false);
  }

const navbartoggler = document.getElementById("navbar-toggler");
navbartoggler.addEventListener('click',function(){
  if (hasClass(navbartoggler,"collapsed")) {
    removeClass(pick);
    if (hasClass(navbar,"large-navbar")) {
      addClass(pick,"drop-move-one-xs-lg");
    } else {
      console.log('doesnt have large navbar');
      addClass(pick,"drop-move-one-xs-sm");
    }
  } else {
    addClass(pick,"drop-opened-menu");
  }
},false);

window.addEventListener('click',function(){
  if (hasClass(pick,"drop-opened-menu")) {
    removeSingleClass(pick,"drop-opened-menu");
  }
},false);


function animate(elem, style, unit, from, to, time, prop) {
  if (!elem) {
    return;
  }
  var start = new Date().getTime(),
    timer = setInterval(function() {
      var step = Math.min(1, (new Date().getTime() - start) / time);
      if (prop) {
        elem[style] = (from + step * (to - from)) + unit;
      } else {
        elem.style[style] = (from + step * (to - from)) + unit;
      }
      if (step === 1) {
        clearInterval(timer);
      }
    }, 25);
  if (prop) {
    elem[style] = from + unit;
  } else {
    elem.style[style] = from + unit;
  }
}


let elements = document.getElementsByClassName("smooth-scroll");

for (var i = 0; i < elements.length; i++) {
    elements[i].addEventListener('click', function(e){
      e.preventDefault();
      e = this.getAttribute('href');
      let target = document.getElementById(e);
      console.log("href clicked = " + e);
      if ("home-link" === e) {
        console.log('clicked home');
        animate(document.scrollingElement || document.documentElement, "scrollTop", "", 0, 0, 2000, true);
      }else if("contact-title" === e){
        console.log("conteeect");
        animate(document.scrollingElement || document.documentElement, "scrollTop", "", 0, target.offsetTop - 100, 2000, true);
        document.getElementById("entered-form-name").focus();
      }
      else{
        animate(document.scrollingElement || document.documentElement, "scrollTop", "", 0, target.offsetTop - 100, 2000, true);
      }
    }, false);
}


const inputel = document.getElementById("entered-form-name");
const t = document.getElementById("entered-form-email");
const m = document.getElementById("entered-form-message");
const form = document.getElementsByTagName("form");
form[0].addEventListener('submit',function(options){
  options.preventDefault();
  let allPanels = document.getElementById("send-message");
  let undoEl = document.getElementById("bspan");
  let lolz = document.getElementById("bsvg");
  console.log("id of bsvg = " + lolz.id);
  options = {
    name : inputel.value,
    email : t.value,
    message : m.value,
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
      addClass(allPanels,"msg-focus");
      addClass(undoEl,"span-focus");
      addClassSvg(lolz,"svg-focus");
      contacttitle = document.getElementById('contactForm');
      // animate(document.scrollingElement || document.documentElement, "scrollTop", "", 0, contacttitle.offsetTop, 2000, true);
      setTimeout(function() {
        console.log("timeout executing");
        removeSingleClassForm(allPanels,"msg-focus");
        removeSingleClassForm(undoEl,"span-focus");
        removeSingleClassSvg(lolz,"svg-focus");
      }, 5000);
      inputel.value="";
      t.value="";
      m.value="";
    }
  };
  xhr.send(JSON.stringify(options));
});
window.addEventListener('resize',function(){
  showMenu();
});
showMenu();
});

window.addEventListener('scroll',function(){
  const navbar = document.getElementById("navbar");
  const logo = document.getElementById("logo");
  const contactbutton = document.getElementById("contact-us-button");
  const pick = document.getElementById("pick");

  let i = window.innerWidth;
  let toppos  = window.pageYOffset || (document.documentElement || document.body.parentNode || document.body).scrollTop;
  if (10 < toppos) {
    removeClass(navbar); addClass(navbar,'navbar navbar-expand-md navbar-dark navbar-shrink');
    removeClass(logo); addClass(logo,'logo-default d-inline-block align-text-top logo-small');
    removeClass(contactbutton); addClass(contactbutton,'d-none d-md-block contact-us-button smooth-scroll open-sans contact-button-small-menu contact-us-button-small');
    if (i < 1161) {
      removeClass(logo); addClass(logo,'logo-default d-inline-block align-text-top logo-small logo-small-top');
    } else {
      removeClass(logo); addClass(logo,'logo-default d-inline-block align-text-top logo-small logo-small-top');
    }
    removeClass(pick);
    if (i < 768) {
      addClass(pick,"drop-move-one-xs-sm");
    } else {
      if (768 <= i && i < 1050) {
        addClass(pick,"drop-move-one-sm");
      } else {
        addClass(pick,"drop-small-menu");
      }
    }
  } else {
    removeClass(navbar); addClass(navbar,'navbar navbar-expand-md navbar-dark large-navbar');
    removeClass(logo);
    if (i < 1161) {
      removeClass(contactbutton); addClass(contactbutton,'d-none d-md-block contact-us-button smooth-scroll open-sans contact-button-small-lg-menu contact-us-button-small');
      addClass(logo,'logo-default d-inline-block align-text-top logo-small logo-small-middle');
    } else {
      addClass(logo,'logo-default d-inline-block align-text-top logo-large');
      removeClass(contactbutton); addClass(contactbutton,'d-none d-md-block contact-us-button smooth-scroll open-sans contact-button-small-lg-menu top-mar-bt-big contact-us-button-big');
    }
    removeClass(pick);
    if (i < 768) {
      addClass(pick,"drop-move-one-xs-lg");
    }
    if (767 < i && i < 1050) {
      addClass(pick,"drop-move-one-lg");
    }
    if (1050 <= i) {
      addClass(pick,"drop-lg-pos");
    }
  }
});
window.addEventListener('resize',function(){
  const formz = document.getElementById("form");
  removeClass(formz);
  let i = window.outerWidth;
  if (1355 <= i) {
    addClass(formz,"col-md-12 brdr-box col-xl-10");
  } else {
    addClass(formz,"col-md-12 brdr-box col-xl-12");
  }
});

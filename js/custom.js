var $ = window.$,
    input = $(".inputHolder").children("input"),
    mobileMenuBtn = $(".mobileIcon"),
    mobileMenu = $(".mobileMenu"),
    mobileMenuLi = mobileMenu.children("ul").children("li"),
    menuLi = $(".menu").children("ul").children("li"),
    buttonPortfolio = $(".portfolio"),
    header = $(".mainHeader"),
    dataTarget = 0,
    mainSection = $("main"),
    offsetTop = 0;

function headerScroll() {
    "use strict";
    $(window).bind('scroll', function () {
        if ($(window).scrollTop() > 50) {
            $("header").addClass('fixed');
        } else {
            $("header").removeClass('fixed');
        }
    });
}

function autoScrollTo() {
    "use strict";
    mobileMenuLi.on("click", function () {
        dataTarget = $(this).data("target");
        offsetTop = mainSection.find("section[data-target=" + dataTarget + "]").offset().top;
        if (dataTarget === 1) {
            $("html, body").animate({
                scrollTop: 0
            }, 1000);
        } else {
            $("html, body").animate({
                scrollTop: offsetTop - 40
            }, 1000);
        }
    });
    menuLi.on("click", function () {
        dataTarget = $(this).data("target");
        offsetTop = mainSection.find("section[data-target=" + dataTarget + "]").offset().top;
        if (dataTarget === 1) {
            $("html, body").animate({
                scrollTop: 0
            }, 1000);
        } else {
            $("html, body").animate({
                scrollTop: offsetTop - 40
            }, 1000);
        }
    });
}





$(document).ready(function () {
    'use strict';
    
    mobileMenuBtn.on("click", function () {
        mobileMenu.slideToggle();
    });
    
    mobileMenu.on("click", "li", function () {
        mobileMenu.slideToggle();
    });
    
    buttonPortfolio.on("click", function () {
        window.scrollTo(500, 0);
    });
    
    autoScrollTo();
});


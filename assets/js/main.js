(function ($) {
  "use strict";

  // Data-Background Js
  $("[data-background").each(function () {
    $(this).css(
      "background-image",
      "url( " + $(this).attr("data-background") + "  )"
    );
  });

  // sticky
  var wind = $(window);
  var sticky = $("#sticky-header");
  var main_nav = sticky.parent();
  var menu_height = main_nav.height();
  if (wind.width() > 767) {
    wind.on("scroll", function () {
      var scroll = wind.scrollTop();
      if (scroll < 120) {
        sticky.removeClass("sticky");
      } else {
        sticky.addClass("sticky");
      }
    });
  } else {
    console.log(main_nav.is("header"));
    if (main_nav.is("header") && main_nav.hasClass("transparent_header")) {
      $(main_nav).addClass("header-cus").removeClass("transparent_header");
    }
    $(main_nav).css("height", menu_height + "px");
    sticky.addClass("sticky-sm");
  }

  // preloader
  $(window).on("load", function () {
    $(".preloader").delay(350).fadeOut("slow");
  });

  // mobile menu
  $("#mobile-menu-active").metisMenu();

  $("#mobile-menu-active .dropdown > a").on("click", function (e) {
    e.preventDefault();
  });

  $(".hamburger-menu > a").on("click", function (e) {
    e.preventDefault();
    $(".slide-bar").toggleClass("show");
    $("body").addClass("on-side");
    $(".body-overlay").addClass("active");
    $(this).addClass("active");
  });

  $(".close-mobile-menu > a").on("click", function (e) {
    e.preventDefault();
    $(".slide-bar").removeClass("show");
    $("body").removeClass("on-side");
    $(".body-overlay").removeClass("active");
    $(".hamburger-menu > a").removeClass("active");
  });

  $(".body-overlay").on("click", function () {
    $(this).removeClass("active");
    $(".slide-bar").removeClass("show");
    $("body").removeClass("on-side");
    $(".hamburger-menu > a").removeClass("active");
  });

  // Enable Bootstrap Tooltip
  $(function () {
    $('[data-toggle="tooltip"]').tooltip();
  });

  //Index Page Estimate Slider
  function decimalFormat(nStr) {
    var $decimalDot = ".";
    var $decimalComma = ",";

    var currency_symbol_left = "$";
    var currency_symbol_right = "";

    nStr += "";
    var x = nStr.split(".");
    var x1 = x[0];
    var x2 = x.length > 1 ? $decimalDot + x[1] : "";
    var rgx = /(\d+)(\d{3})/;
    while (rgx.test(x1)) {
      var x1 = x1.replace(rgx, "$1" + $decimalComma + "$2");
    }
    return currency_symbol_left + x1 + x2 + currency_symbol_right;
  }

  function earnAvg() {
    var fee = 5;
    var $decimal = 2;

    var monthlySubscription = parseFloat($("#rangeMonthlySubscription").val());
    var numberFollowers = parseFloat($("#rangeNumberFollowers").val());

    var followersAndPrice = numberFollowers * monthlySubscription;
    var percentageAvgFollowers = (followersAndPrice * fee) / 100;
    var earnAvg = followersAndPrice - percentageAvgFollowers;

    return decimalFormat(earnAvg.toFixed($decimal));
  }
  $("#estimatedEarn").html(earnAvg());
  $("#rangeNumberFollowers, #rangeMonthlySubscription").on(
    "change",
    function () {
      $("#estimatedEarn").html(earnAvg());
    }
  );

  // portfolio active
  $(".portfolio_active").owlCarousel({
    loop: true,
    autoplay: true,
    smartSpeed: 1500,
    autoplayHoverPause: true,
    margin: 30,
    autoplayTimeout: 6000,
    nav: false,
    dots: false,
    responsive: {
      0: {
        items: 1,
      },
      768: {
        items: 2,
      },
      992: {
        items: 2,
      },
      1000: {
        items: 3,
      },
    },
  });

  // portfolio active
  $(".portfolio_active_2").owlCarousel({
    loop: true,
    autoplay: true,
    smartSpeed: 1500,
    autoplayHoverPause: true,
    margin: 30,
    autoplayTimeout: 6000,
    nav: false,
    dots: false,
    responsive: {
      0: {
        items: 1,
      },
      768: {
        items: 2,
      },
      992: {
        items: 2,
      },
      1000: {
        items: 4,
      },
    },
  });

  // testimonial active
  $(".testimonial_active").owlCarousel({
    loop: true,
    autoplay: true,
    smartSpeed: 1000,
    autoplayHoverPause: true,
    margin: 30,
    autoplayTimeout: 6000,
    nav: false,
    dots: true,
    responsive: {
      0: {
        items: 1,
      },
      768: {
        items: 1,
      },
      992: {
        items: 1,
      },
      1000: {
        items: 1,
      },
    },
  });

  // brand active
  $(".brand_active").owlCarousel({
    loop: true,
    margin: 0,
    items: 1,
    dots: false,
    autoplay: true,
    smartSpeed: 1000,
    autoplayTimeout: 5000,
    autoplayHoverPause: true,
    responsive: {
      0: {
        items: 2,
      },
      500: {
        items: 2,
      },
      767: {
        items: 3,
      },
      992: {
        items: 4,
      },
      1200: {
        items: 5,
      },
    },
  });

  // blog post active
  $(".gallery_post_active").owlCarousel({
    loop: true,
    margin: 0,
    items: 1,
    navText: [
      '<i class="ti-arrow-left"></i>',
      '<i class="ti-arrow-right"></i>',
    ],
    nav: true,
    dots: false,
    responsive: {
      0: {
        items: 1,
      },
    },
  });

  // skill bar
  if ($("#bar1").length) {
    $("#bar1").barfiller();
  }
  if ($("#bar2").length) {
    $("#bar2").barfiller();
  }
  if ($("#bar3").length) {
    $("#bar3").barfiller();
  }

  $(function () {
    $(".progress").each(function () {
      var value = $(this).attr("data-value");
      var left = $(this).find(".progress-left .progress-bar");
      var right = $(this).find(".progress-right .progress-bar");
      if (value > 0) {
        if (value <= 50) {
          right.css(
            "transform",
            "rotate(" + percentageToDegrees(value) + "deg)"
          );
        } else {
          right.css("transform", "rotate(180deg)");
          left.css(
            "transform",
            "rotate(" + percentageToDegrees(value - 50) + "deg)"
          );
        }
      }
    });
    function percentageToDegrees(percentage) {
      return (percentage / 100) * 360;
    }
  });

  // WoW Js
  new WOW().init();

  /* magnificPopup img view */
  $(".popup-image").magnificPopup({
    type: "image",
    gallery: {
      enabled: true,
    },
  });

  /* magnificPopup video view */
  $(".popup-video").magnificPopup({
    type: "iframe",
  });

  // isotop
  $(".grid").imagesLoaded(function () {
    // init Isotope
    var $grid = $(".grid").isotope({
      itemSelector: ".grid-item",
      percentPosition: true,
      masonry: {
        // use outer width of grid-sizer for columnWidth
        columnWidth: ".grid-item",
      },
    });

    // filter items on button click
    $(".masonry_active").on("click", "button", function () {
      var filterValue = $(this).attr("data-filter");
      $grid.isotope({ filter: filterValue });
    });
  });

  //for menu active class
  $(".masonry_active button").on("click", function (event) {
    $(this).siblings(".active").removeClass("active");
    $(this).addClass("active");
    event.preventDefault();
  });

  // back to top - start
  $(window).scroll(function () {
    if ($(this).scrollTop() > 200) {
      $("#backtotop:hidden").stop(true, true).fadeIn();
    } else {
      $("#backtotop").stop(true, true).fadeOut();
    }
  });
  $(function () {
    $("#scroll").on("click", function () {
      $("html,body").animate(
        {
          scrollTop: $("#thetop").offset().top,
        },
        "slow"
      );
      return false;
    });
  });
  // back to top - end

  // quantity - start
  (function () {
    window.inputNumber = function (el) {
      var min = el.attr("min") || false;
      var max = el.attr("max") || false;

      var els = {};

      els.dec = el.prev();
      els.inc = el.next();

      el.each(function () {
        init($(this));
      });

      function init(el) {
        els.dec.on("click", decrement);
        els.inc.on("click", increment);

        function decrement() {
          var value = el[0].value;
          value--;
          if (!min || value >= min) {
            el[0].value = value;
          }
        }

        function increment() {
          var value = el[0].value;
          value++;
          if (!max || value <= max) {
            el[0].value = value++;
          }
        }
      }
    };
  })();
  inputNumber($(".input_number"));
  // quantity - end

  // Accordion Box
  if ($(".accordion-box").length) {
    $(".accordion-box").on("click", ".acc-btn", function () {
      var outerBox = $(this).parents(".accordion-box");
      var target = $(this).parents(".accordion");

      if ($(this).next(".acc-content").is(":visible")) {
        $(this).removeClass("active");
        $(this).next(".acc-content").slideUp(300);
        $(outerBox).children(".accordion").removeClass("active-block");
      } else {
        $(outerBox).find(".accordion .acc-btn").removeClass("active");
        $(this).addClass("active");
        $(outerBox).children(".accordion").removeClass("active-block");
        $(outerBox).find(".accordion").children(".acc-content").slideUp(300);
        target.addClass("active-block");
        $(this).next(".acc-content").slideDown(300);
      }
    });
  }

  // Pricing Tabel
  // Table Price Change
  $(".price_head").each(function () {
    var price = $(this).find("h2").text();
    var priceSpan = `<span class="mprice d-none">` + price + `</span>`;
    $(this).append(priceSpan);
  });

  $("#my-switch").change(function () {
    if (!this.checked) {
      $(".price_head").each(function (i) {
        $(this).find(".time").text("Yearly");
        var price = $(this).find(".mprice").text();
        var percent = (price * 10) / 100;
        $(this)
          .find("h2")
          .text(Math.floor(price * 12 - percent));
      });
    } else {
      $(".price_head").each(function () {
        $(this).find(".time").text("Monthly");
        var price = $(this).find(".mprice").text();
        $(this).find("h2").text(price);
      });
    }
  });

  // Popover JS

  $("#popup-holder").hide();
  $(".opt-pop").popover({
    html: true,
  });

  $(".opt-pop").each(function () {
    var pop_list = $(this).data("list");
    if ($(pop_list).hasClass("has_pop")) {
      $(pop_list).append(`<script>$(".clipboard").on("click", function (e) {
      var $url = $(location).attr("href");
      var $temp = $("<input>");
      $("body").append($temp);
      e.preventDefault();
      $temp.val($url).select();
      document.execCommand("copy");
      Swal.fire({
        position: 'bottom-end',
        icon: 'success',
        title: 'Copied',
        showConfirmButton: false,
        timer: 800,
        toast: true,
        iconColor: "#ff9100",
    })
      $temp.remove();
    });
    $('[data-toggle="modal"]').click(function () {
      $(".opt-pop").popover("hide");
    });
  </script>`);
    }
    var content = $(pop_list).html();

    $(this).attr("data-content", content);
  });

  function decComa(nStr) {
    var $decimalDot = ".";
    var $decimalComma = ",";

    nStr += "";
    var x = nStr.split(".");
    var x1 = x[0];
    var x2 = x.length > 1 ? $decimalDot + x[1] : "";
    var rgx = /(\d+)(\d{3})/;
    while (rgx.test(x1)) {
      var x1 = x1.replace(rgx, "$1" + $decimalComma + "$2");
    }
    return x1 + x2;
  }

  $(".bnum").each(function () {
    $(this).text(decComa($(this).text()));
  });

  $(".sure-btn").click(function (e) {
    e.preventDefault();
    var mes = $(this).data("message");
    Swal.fire({
      title: mes,
      showDenyButton: false,
      showCancelButton: true,
      confirmButtonText: `Yes`,
      confirmButtonColor: "#f74646",
      cancelButtonColor: "#ff9100",
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        Swal.fire({
          icon: "success",
          title: "Cleared!",
          showConfirmButton: false,
          timer: 800,
          iconColor: "#ff9100",
        });
      }
    });
  });

  // Image Move
  $(".drag-img").each(function () {
    let dragImg = $(this);
    let imgURL = $(this).data("background");
    let imgHeight = 0;
    let imgWidth = 0;
    let start_y;
    let start_x;
    let newPosX;
    let newPosY;
    let curPosX = dragImg.css("background-position-x");
    let curPosY = dragImg.css("background-position-y");
    let mouseDown = false;
    let imgExtra = dragImg.append(
      `<img class="d-none" style="height:100%;width:100%;object-fit:cover;" src="` +
        imgURL +
        `">`
    );
    dragImg.addClass("mouse-dis");

    $(".done-edit").hide();

    $(".reorg-img").click(function (e) {
      e.preventDefault();
      $(this)
        .parent()
        .parent()
        .parent()
        .parent()
        .parent()
        .find(".drag-img")
        .removeClass("mouse-dis");
      $(this).parent().parent().find(".dropdown-toogle").hide();
      $(this).parent().parent().parent().find(".done-edit").show();
    });
    $(".done-edit").click(function (e) {
      e.preventDefault();
      $(this).parent().parent().find(".drag-img").addClass("mouse-dis");
      $(this).hide();
      $(this).parent().find(".dropdown-toogle").show();
    });

    dragImg.mousedown(function (e) {
      dragImg.hasClass("mouse-dis") ? (mouseDown = false) : (mouseDown = true);
    });

    $(document).mouseup(function () {
      mouseDown = false;
      dragImg.css({
        "background-position-y": curPosY,
        "background-position-x": curPosX,
      });
    });

    dragImg.mouseenter(function (e) {
      start_x = e.clientX;
      start_y = e.clientY;
    });

    $(document).mousemove(function (e) {
      newPosY = e.clientY - start_y;
      newPosX = e.clientX - start_x;
      start_y = e.clientY;
      start_x = e.clientX;
      imgHeight = imgExtra.height();
      imgWidth = imgExtra.width();
      if (mouseDown) {
        dragImg.css({
          "background-position-x": "+=" + newPosX,
          "background-position-y": "+=" + newPosY,
        });
        console.log(imgWidth);
        curPosX = parseInt(dragImg.css("background-position-x"));
        curPosY = parseInt(dragImg.css("background-position-y"));
        // if (curPosY > 0) {
        //   curPosY = 0;
        // }
        // if (curPosX > 0) {
        //   curPosX = 0;
        // }
        // if (curPosY < -imgHeight) {
        //   curPosY = -imgHeight;
        // }
        // if (curPosX < -imgWidth) {
        //   curPosX = -imgWidth;
        // }
        // if (curPosY < -imgHeight + 50) { curPosY = -imgHeight; }
        dragImg.css({
          "background-position-y": curPosY,
          "background-position-x": curPosX,
        });
      }
    });
  });

  // Select Payment Method
  $(".select-method").each(function () {
    let other = $(this).data("target");
    $(other).find("input").attr("disabled", "disabled");
    if ($(this).is(":checked")) {
      let target = $(this).data("target");
      $(target).find("input").removeAttr("disabled");
    }
    $(".select-method").change(function () {
      if ($(this).is(":checked")) {
        let target = $(this).data("target");
        $(other).find("input").attr("disabled", "disabled");
        $(target).find("input").removeAttr("disabled");
      }
    });
  });
})(jQuery);

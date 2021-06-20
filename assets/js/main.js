(function ($) {
  "use strict";

  // Data-Background Js
  $("[data-background").each(function () {
    $(this).css(
      "background-image",
      "url( " + $(this).attr("data-background") + "  )"
    );
  });

  // datepicker
  $(".dateInput").each(function () {
    $(this).datepicker({
      orientation: "auto left",
      autoclose: true,
      todayHighlight: true,
      toggleActive: true,
    });
  });

  var wind = $(window);
  //Light Dark Toogle
  let themeSwitch = `
  <li>
    <div class="check-green dl mb-0 w-100 justify-content-between">
    <span class="ml-0">Dark Mode</span>
    <div>
        <input type="checkbox" name="check-green" id="l004">
        <label for="l004">
            <div></div>
        </label>
    </div>
    </div>
  </li>`;

  $(".site-logo").each(function () {
    let lightLogo = $(this).data("lightlogo");
    let darkLogo = $(this).data("darklogo");
    if ($("body").hasClass("dark-mode")) {
      $(this).attr("src", darkLogo);
    } else {
      $(this).attr("src", lightLogo);
    }
  });

  //Light Dark Toogle Apearence In Specific Places
  if ($("body").find(".mob-bottom-menu div").length > 0) {
    $(".main_menu nav>ul>li.pro-img-thumb>ul>li:last-child").before(
      themeSwitch
    );
    $("#mobile-menu-active>li[data-placement = last]").before(themeSwitch);
    themeChange();
  }

  function themeChange() {
    $(".dl input").change(function () {
      $("body").toggleClass("dark-mode");
      $(".dl input").not(this).prop("checked", this.checked);
      $(".site-logo").each(function () {
        let lightLogo = $(this).data("lightlogo");
        let darkLogo = $(this).data("darklogo");
        if ($("body").hasClass("dark-mode")) {
          $(this).attr("src", darkLogo);
        } else {
          $(this).attr("src", lightLogo);
        }
      });
    });
  }

  // sticky

  var sticky = $("#sticky-header");
  var main_nav = sticky.parent();
  var menu_height = main_nav.height();

  // Footer Gap
  if (wind.width() <= 767) {
    if ($("body").find(".mob-bottom-menu div").length > 0) {
      $("footer").addClass("pb-70");
    }
  }

  if (wind.width() > 767) {
    //Scroll
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

  // WoW Js
  new WOW().init();

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
  $(".opt-pop").each(function () {
    if ($(this).hasClass("pop-focus")) {
      $(this).popover({
        html: true,
        trigger: "focus",
      });
    } else {
      $(this).popover({
        html: true,
        trigger: "click",
      });
    }
  });
  $(".pop-ex").popover({
    html: true,
  });
  $(".pop-ex").each(function () {
    var pop_list = $(this).data("list");
    var content = $(pop_list).html();
    $(this).attr("data-content", content);
  });

  $("body").on("click", function (e) {
    //did not click a popover toggle, or icon in popover toggle, or popover
    if (
      $(e.target).data("toggle") !== "popover" &&
      $(e.target).parents('[data-toggle="popover"]').length === 0 &&
      $(e.target).parents(".popover.in").length === 0
    ) {
      $('[data-toggle="popover"]').popover("hide");
    }
  });
  // To make copy work on pop over
  $(".opt-pop").each(function () {
    var pthis = $(this);
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

  // Copy Function
  $(".clipboard").on("click", function (e) {
    var $url = $(location).attr("href");
    var $temp = $("<input>");
    $("body").append($temp);
    e.preventDefault();
    $temp.val($url).select();
    document.execCommand("copy");
    Swal.fire({
      position: "bottom-end",
      icon: "success",
      title: "Copied",
      showConfirmButton: false,
      timer: 800,
      toast: true,
      iconColor: "#ff9100",
    });
    $temp.remove();
  });

  //Used In Simulation
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

  // Max Three Cat Check
  $(".boxed-selects").each(function () {
    let maxChecks = $(this).data("max");
    let eachBox = $(this);
    console.log(eachBox.find(".custom-control-input:checked").length);
    if (maxChecks != undefined || maxChecks > 0) {
      eachBox.find(".custom-control-input:checked").length >= maxChecks
        ? eachBox
            .find(".custom-control-input")
            .not(":checked")
            .attr("disabled", true)
        : "";
      eachBox.find(".custom-control-input").change(function () {
        eachBox.find(".custom-control-input:checked").length >= maxChecks
          ? eachBox
              .find(".custom-control-input")
              .not(":checked")
              .attr("disabled", true)
          : eachBox
              .find(".custom-control-input:disabled")
              .attr("disabled", false);
      });
    }
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
        $(other).find("input").val("");
        $(target).find("input").removeAttr("disabled");
        $(".card-forms").slideUp();
      }
    });
  });

  $(".card-forms").hide();
  if ($(".gateway-img").find("input").is(":checked")) {
    $(".card-forms").slideUp();
    let target = $(".gateway-img").find("input:checked").data("target");
    $(target).slideDown();
  }

  $(".gateway-img")
    .find("input")
    .change(function () {
      let target = $(this).data("target");
      if ($(this).is(":checked")) {
        $(".card-forms").slideUp();
        $(target).slideDown();
      }
    });
})(jQuery);

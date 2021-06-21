// Light Box
// To use multiple lightbox for multiple divs in single page add same name to class and 'data-name' to use lightbox
$(".gallery").each(function () {
  var $gal = $(this).data("name");
  $gal = new SimpleLightbox("." + $gal + " a", {
    showCounter: false,
  });
});

// Hide more than 4
$(".gallery").each(function () {
  $(this)
    .find(">a")
    .each(function (i, val) {
      if (i > 3) {
        $(this).addClass("hideImg");
      }
    });
});

// Facebook Enables
$(function () {
  //Tooltip Enable
  $('[data-toggle="tooltip"]').tooltip();
  //Post Share Popover Hover Enable
  $('.share[data-toggle="popover"]')
    .popover({ trigger: "manual", html: true, animation: true })
    .on("mouseenter", function () {
      var _this = this;
      $(this).popover("show");
      $(".popover").on("mouseleave", function () {
        $(_this).popover("hide");
      });
    })
    .on("mouseleave", function () {
      var _this = this;
      setTimeout(function () {
        if (!$(".popover:hover").length) {
          $(_this).popover("hide");
        }
      }, 300);
    });
});

//Post Like, Bookmark Toogle Action
$(".op-actions a:not(.no-click)").click(function (e) {
  e.preventDefault();
  $(this).find("i").toggleClass("far fas");
});

//Hidden Input Call On Post Input
$(".get-attachment").click(function (e) {
  e.preventDefault();
  $(this).parent().find('input[type="file"]').click();
});

//Reply Hide Option
$(".reply").click(function (e) {
  e.preventDefault();
  $(this).parent().parent().parent().find(".reply-box").slideToggle();
});

// Audio Player

document.addEventListener("DOMContentLoaded", function () {
  GreenAudioPlayer.init({
    selector: ".audio",
    stopOthersOnPlay: true,
  });
});

// Pinned Post
$(".pinned_post a").click(function (e) {
  e.preventDefault();
  var $text = $(this).find("span").text();
  $(this)
    .find("span")
    .text($text == "Pinned Post" ? "Post Unpinned" : "Pinned Post");
  $(this).find("i").toggleClass("far fas");
});

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
    .find("a")
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

// Image Gallery
// $(".fbphotobox").each(function (key) {
//   var tar = $(this).data("name");

//   var ph = "photo-" + $(this).data("imgs");
//   // var valvar = `photo-` + key;

//   $("." + tar + "img").fbPhotoBox({
//     rightWidth: 360,
//     leftBgColor: "black",
//     rightBgColor: "white",
//     footerBgColor: "black",
//     overlayBgColor: "#222",
//     containerClassName: tar,
//     imageClassName: ph,
//     onImageShow: function () {
//       $("." + tar + "img").fbPhotoBox("addTags", [
//         { x: 0.3, y: 0.3, w: 0.3, h: 0.3 },
//       ]);
//       var $author_name = $(this).attr("author");
//       var $author_img = $(this).attr("author-img-src");
//       var $post_id = $(this).attr("post-id");
//       var $img_des = $(this).attr("data-des");
//       $(".fbphotobox-image-content").html(
//         `<div class="owner-meta">
//                               <span class="owner-avatar">
//                                   <a href="streamer-details.html">
//                                       <img src="` +
//           $author_img +
//           `"
//                                           alt="` +
//           $author_name +
//           `">
//                                   </a>
//                               </span>

//                               <div class="post-owner">
//                                   <h5 class="mb-0 font-montserrat">
//                                       <a href="streamer-details.html">` +
//           $author_name +
//           `</a>

//                                       <small class="verified"
//                                           data-toggle="tooltip"
//                                           data-placement="top"
//                                           title=""
//                                           data-original-title="User Verified">
//                                           <i class="ti-check-box"></i>
//                                       </small>

//                                       <small
//                                           class="text-muted">@willamson</small>

//                                   </h5>

//                                   <small class="timeAgo text-muted"
//                                       data="2021-04-14T13:20:05+00:00">10
//                                       days ago</small>
//                               </div><!-- post-owner -->
//                           </div>
//                           <!-- post-comments -->
//                           <div class="img-comments mt-3">
//                               <!-- author description -->
//                               <div class="commente-container mb-3">
//                                   <div class="commenter-meta">
//                                       <div class="commenter-avatar">
//                                           <img src="` +
//           $author_img +
//           `"
//                                           alt="` +
//           $author_name +
//           `">
//                                       </div>
//                                       <div class="comentar-name">
//                                           <a href="javascript:void(0)">` +
//           $author_name +
//           `</a><span class="ml-2">` +
//           $img_des +
//           `</span>
//                                       </div>
//                                   </div>
//                               </div>
//                               <!-- author description end -->
//                               <!-- comment -->
//                               <div class="commente-container mb-3">
//                                   <div class="commenter-meta">
//                                       <div class="commenter-avatar">
//                                           <img src="./assets/img/team/team_05.jpg"
//                                           alt="Jonathon Doe">
//                                       </div>
//                                       <div class="comentar-name">
//                                           <a href="javascript:void(0)">Jonathon Doe</a><span class="ml-2">Nice Very Good</span>
//                                       </div>
//                                   </div>
//                                   <!--comment options-->
//                                       <div class="comment-opt">
//                                           <ul class="op-actions ph-actions mt-0">
//                                               <li><a href="#" class="like">
//                                                       <i class="far fa-heart"></i>1</a>
//                                               </li>
//                                               <li><a href="javascript:void(0)" class="reply no-click"><i class="fas fa-reply"></i>0</a>
//                                               </li>
//                                               <li><span>44w</span></li>
//                                           </ul>
//                                       </div>
//                                       <!--comment options end-->
//                               </div>
//                               <!-- comment end-->
//                               <!-- comment -->
//                               <div class="commente-container mb-3">
//                                   <div class="commenter-meta">
//                                       <div class="commenter-avatar">
//                                           <img src="./assets/img/team/team_01.jpg"
//                                           alt="Joe Dower">
//                                       </div>
//                                       <div class="comentar-name">
//                                           <a href="javascript:void(0)">Joe Dower</a><span class="ml-2">Like To know more it was much helpful and liked it very much</span>
//                                       </div>
//                                   </div>
//                                   <!--comment options-->
//                                       <div class="comment-opt">
//                                           <ul class="op-actions ph-actions mt-0">
//                                               <li><a href="#" class="like">
//                                                       <i class="far fa-heart"></i>1</a>
//                                               </li>
//                                               <li><a href="javascript:void(0)" class="reply no-click"><i class="fas fa-reply"></i>0</a>
//                                               </li>
//                                               <li><span>44w</span></li>
//                                           </ul>
//                                       </div>
//                                       <!--comment options end-->
//                               </div>
//                               <!-- comment end-->
//                               <!-- comment -->
//                               <div class="commente-container mb-3">
//                                   <div class="commenter-meta">
//                                       <div class="commenter-avatar">
//                                           <img src="./assets/img/team/team_02.jpg"
//                                           alt="Jack Dower">
//                                       </div>
//                                       <div class="comentar-name">
//                                           <a href="javascript:void(0)">Jack Dower</a><span class="ml-2">Can't One of the best truely a worerful and usefull device</span>
//                                       </div>
//                                   </div>
//                                   <!--comment options-->
//                                       <div class="comment-opt">
//                                           <ul class="op-actions ph-actions mt-0">
//                                               <li><a href="#" class="like">
//                                                       <i class="far fa-heart"></i>1</a>
//                                               </li>
//                                               <li><a href="javascript:void(0)" class="reply no-click"><i class="fas fa-reply"></i>0</a>
//                                               </li>
//                                               <li><span>44w</span></li>
//                                           </ul>
//                                       </div>
//                                       <!--comment options end-->
//                               </div>
//                               <!-- comment end-->
//                           </div>
//                           <!-- post-comments ends -->
//                           <div class="img-comment-inputs">
//                           <div class="post-options ph-actions op-actions">
//                                   <div class="left-side">
//                                       <a href="#" class="like">
//                                           <i class="far fa-heart"></i>1</a>
//                                       <a href="javascript:void(0)"
//                                           class="no-click"><i
//                                               class="fas fa-comment"></i>0</a>
//                                       <a href="javascript:void(0)"
//                                           data-container="body"
//                                           data-toggle="popover"
//                                           data-placement="top"
//                                           class="ph-share no-click"><i
//                                               class="fas fa-share-square"></i>0</a>
//                                   </div>
//                               </div>
//                               <div
//                           class="commenter-meta comment-text-box mt-4">
//                           <div class="commenter-avatar">
//                               <img src="./assets/img/team/team_06.jpg"
//                                   alt="Commenter" />
//                           </div>
//                           <div class="comment-input">
//                               <form class="comment-from"
//                                   action="#">
//                                   <div class="input-group">
//                                       <input type="text"
//                                           class="form-control"
//                                           placeholder="Your Comment Here...">
//                                       <div class="input-text-opt">
//                                           <button type="submit"
//                                               class="comment-submit"><i
//                                                   class="far fa-paper-plane"></i></button>

//                                       </div>
//                                   </div>
//                               </form>
//                           </div>

//                       </div>
//                           </div>
//                           `
//       );

//       $(".ph-share").attr(
//         "data-content",
//         `<ul class="pop-share-links">
//                   <li><a href="javascript:void(0)"><i class="fab fa-facebook-f"></i></a></li>
//                   <li><a href="javascript:void(0)"><i class="fab fa-twitter"></i></a></li>
//                   <li><a href="javascript:void(0)"><i class="fab fa-instagram"></i></a></li>
//                   <li><a href="javascript:void(0)"><i class="fab fa-whatsapp"></i></a></li>
//                   <li><a href="javascript:void(0)"><i class="fas fa-envelope"></i></a></li>
//                   <li><a href="#" onclick="copyURL">
//                       <i class="fas fa-link"></i>
//                       <input type="hidden" value="Hello World" class="copiedURL">
//                       </a>
//                       </li>

//                   </ul >`
//       );

//       $('.fbphotobox-image-content .verified[data-toggle="tooltip"]').tooltip();

//       $(".ph-share")
//         .popover({ trigger: "manual", html: true, animation: true })
//         .on("mouseenter", function () {
//           var _this = this;
//           $(this).popover("show");
//           $(".popover").on("mouseleave", function () {
//             $(_this).popover("hide");
//           });
//         })
//         .on("mouseleave", function () {
//           var _this = this;
//           setTimeout(function () {
//             if (!$(".popover:hover").length) {
//               $(_this).popover("hide");
//             }
//           }, 300);
//         });

//       $(".ph-actions a:not(.no-click)").click(function (e) {
//         e.preventDefault();
//         $(this).find("i").toggleClass("far fas");
//       });
//     },
//   });
// });

// Audio Player

document.addEventListener("DOMContentLoaded", function () {
  GreenAudioPlayer.init({
    selector: ".audio",
    stopOthersOnPlay: true,
  });
});

$("#popup-holder").hide();
$(".opt-pop").popover({
  html: true,
});

$(".opt-pop").each(function () {
  var pop_list = $(this).data("list");
  var content = $(pop_list).html();
  $(this).attr("data-content", content);
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

var $url = $(location).attr("href");
$(document).ready(function () {
  setTimeout(function () {
    $(".clipboard").on("click", function (e) {
      var $temp = $("<input>");
      $("body").append($temp);
      e.preventDefault();
      $temp.val($url).select();
      console.log($temp.val());
      document.execCommand("copy");
      $temp.remove();
    });
  }, 3000);
});

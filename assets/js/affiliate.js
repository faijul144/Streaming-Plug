// Profile And Affiliate Manager Change
$(".pro-tab").slideUp();
$(".tab-click").click(function (e) {
  e.preventDefault();
  $(".pro-tab").slideUp();
  $($(this).data("target")).slideDown();
  $(".tab-click").parent().removeClass("active-tab");
  $(this).parent().addClass("active-tab");
});

// Asset Img
$(".aff-img").each(function () {
  var $gal = $(this).data("img");
  var $links = $(this).find(".aff-link").html();
  $gal = new SimpleLightbox("#" + $gal, {
    showCounter: false,
    nav: false,
    rel: false,
    loop: false,
    captions: true,
    captionsData: "text",
    swipeTolerance: 99999,
    additionalHtml: [`<div class="aff-link p-1 bg-white">` + $links + `</div>`],
  });
});

// Copy
$(".aff-link>label").on("click", function (e) {
  var $data = $(this).parent().find("input").val();
  var $temp = $("<input>");
  $("body").append($temp);
  e.preventDefault();
  $temp.val($data).select();
  document.execCommand("copy");
  Swal.fire({
    position: "bottom-end",
    icon: "success",
    title: "Copied",
    showConfirmButton: false,
    timer: 800,
    toast: true,
  });
  $temp.remove();
});

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
new SimpleLightbox(".aff-img a", {
  showCounter: false,
  nav: false,
  rel: false,
  loop: false,
  captions: true,
  captionsData: "text",
  swipeTolerance: 99999,
  additionalHtml: [
    `<div class="aff-link">
      <input type="text"
          value="https://yourlink.com"
          id="img-4">
      <label for="img-4"
          class="fas fa-clipboard"
          data-toggle="tooltip"
          data-placement="top"
          title="Copy Link"></label>
    </div><script>$(".aff-link>label").on("click", function (e) {
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
      });</script>`,
  ],
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

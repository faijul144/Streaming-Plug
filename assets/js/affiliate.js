// Profile And Affiliate Manager Change
$("pro-aff").hasClass("active-tab") ? $(".pro-tab").hide() : "";

$(".aff-enabled").hide();
$(".active-tab").data("target").show();

$(".tab-click").click(function (e) {
  e.preventDefault();
  $(".pro-tab").fadeOut("fast");
  $(".aff-enabled").slideUp();
  $($(this).data("target")).fadeIn();
  $(".tab-click").parent().removeClass("active-tab");
  $(this).parent().addClass("active-tab");
  $("#thetop").click();
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

// Chart
const labels = ["Jan", "Feb", "March"];
var data = {
  labels: labels,
  datasets: [
    {
      label: "Number Of Click",
      data: [
        { x: new Date(2012, 01, 1), y: 26 },
        { x: new Date(2012, 02, 3), y: 38 },
        { x: new Date(2012, 01, 5), y: 43 },
        { x: new Date(2012, 03, 7), y: 29 },
        { x: new Date(2012, 01, 11), y: 41 },
      ],
      borderColor: "rgb(75, 192, 192)",
      fill: false,
    },
  ],
};
var ctx = document.getElementById("myChart").getContext("2d");
var myChart = new Chart(ctx, {
  type: "line",
  data: data,
  options: {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  },
});

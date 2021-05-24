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
    disableScroll: true,
    additionalHtml: [`<div class="aff-link p-1 bg-white">` + $links + `</div>`],
  });
});

// Casout Card
$(".payment-choose-payout").hide();
$("#payout").click(function () {
  $(this)
    .parent()
    .parent()
    .parent()
    .find(".payment-choose-payout")
    .slideToggle();
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
    iconColor: "#ff9100",
  });
  $temp.remove();
});

// Hight Chart
var chart = Highcharts.stockChart("newChart", {
  xAxis: {
    ordinal: false,
  },

  plotOptions: {
    series: {
      dataGrouping: {
        forced: true,
        approximation: "sum",
      },
    },
  },

  rangeSelector: {
    enabled: false,
  },

  series: [
    {
      data: [
        [Date.UTC(2020, 0, 1), 9],
        [Date.UTC(2021, 0, 2), 3],
        [Date.UTC(2020, 3, 1), 1],
        [Date.UTC(2021, 4, 1), 7],
      ],
    },
  ],
});

$(".chart-view-types li button").each(function () {
  var type = $(this).data("type");
  $("#ch-" + type).click(function () {
    $(".chart-view-types li button").removeClass("thm_btn-black");
    $(this).addClass("thm_btn-black");
    chart.update({
      plotOptions: {
        series: {
          dataGrouping: {
            units: [[type, [0]]],
          },
        },
      },
    });
  });
});

// apex chart
// var options = {
//   series: [
//     {
//       name: "Desktops",
//       data: [10, 41, 35, 51, 49, 62, 69, 91, 148],
//     },
//   ],
//   chart: {
//     height: 350,
//     type: "line",
//     zoom: {
//       enabled: false,
//     },
//   },
//   dataLabels: {
//     enabled: false,
//   },
//   stroke: {
//     curve: "straight",
//   },
//   title: {
//     text: "Summary",
//     align: "left",
//   },
//   grid: {
//     row: {
//       colors: ["#f3f3f3", "transparent"], // takes an array which will be repeated on columns
//       opacity: 0.5,
//     },
//   },
//   xaxis: {
//     categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep"],
//   },
// };

// var chart = new ApexCharts(document.querySelector("#newChart"), options);
// chart.render();

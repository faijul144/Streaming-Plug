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
// const labels = ["Jan", "Feb", "March"];
// var data = {
//   labels: labels,
//   datasets: [
//     {
//       label: "Number Of Click",
//       data: [
//         { x: new Date(2012, 01, 1), y: 26 },
//         { x: new Date(2012, 02, 3), y: 38 },
//         { x: new Date(2012, 01, 5), y: 43 },
//         { x: new Date(2012, 03, 7), y: 29 },
//         { x: new Date(2012, 01, 11), y: 41 },
//       ],
//       borderColor: "rgb(75, 192, 192)",
//       fill: false,
//     },
//   ],
// };
// var ctx = document.getElementById("myChart").getContext("2d");
// var myChart = new Chart(ctx, {
//   type: "line",
//   data: data,
//   options: {
//     scales: {
//       y: {
//         beginAtZero: true,
//       },
//     },
//   },
// });

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

// $("#months").click(function () {
//   chart.update({
//     plotOptions: {
//       series: {
//         dataGrouping: {
//           units: [["month", [1]]],
//         },
//       },
//     },
//   });
// });

// $("#date").click(function () {
//   chart.update({
//     plotOptions: {
//       series: {
//         dataGrouping: {
//           units: [["day", [1]]],
//         },
//       },
//     },
//   });
// });

// $("#week").click(function () {
//   chart.update({
//     plotOptions: {
//       series: {
//         dataGrouping: {
//           units: [["week", [1]]],
//         },
//       },
//     },
//   });
// });

// $("#year").click(function () {
//   chart.update({
//     plotOptions: {
//       series: {
//         dataGrouping: {
//           units: [["year", [1]]],
//         },
//       },
//     },
//   });
// });

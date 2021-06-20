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
$(".aff-table .payment-choose-payout").hide();
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

// Chart Js
var ctx = document.getElementById("newChart").getContext("2d");
const Yearlylabels = ["2016", "2017", "2018", "2019", "2020", "2021"];
const Monthlylabels = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
const Weeklylabels = [
  "21-6-21",
  "22-6-21",
  "23-6-21",
  "24-6-21",
  "25-6-21",
  "26-6-21",
  "27-6-21",
];
const Dailylylabels = [
  "21-6-21",
  "22-6-21",
  "23-6-21",
  "24-6-21",
  "25-6-21",
  "26-6-21",
  "27-6-21",
  "28-6-21",
  "29-6-21",
  "30-6-21",
];
const Yeardata = {
  labels: Yearlylabels,
  datasets: [
    {
      label: "Yearly Data",
      backgroundColor: "#ff9100",
      borderColor: "#ff9100",
      data: [5, 10, 5, 2, 20, 30],
    },
  ],
};

const Monthdata = {
  labels: Monthlylabels,
  datasets: [
    {
      label: "Monthly Data",
      backgroundColor: "#ff9100",
      borderColor: "#ff9100",
      data: [5, 10, 5, 2, 20, 30, 45, 12, 55, 82, 32, 56],
    },
  ],
};

const Weekdata = {
  labels: Weeklylabels,
  datasets: [
    {
      label: "Weekly Data",
      backgroundColor: "#ff9100",
      borderColor: "#ff9100",
      data: [5, 10, 5, 2, 20, 30, 45],
    },
  ],
};

const Dailydata = {
  labels: Dailylylabels,
  datasets: [
    {
      label: "Daily Data",
      backgroundColor: "#ff9100",
      borderColor: "#ff9100",
      data: [5, 10, 5, 2, 20, 30, 45, 12, 55, 82],
    },
  ],
};

const config = {
  type: "line",
  data: Dailydata,
  options: {},
};
var chart = new Chart(ctx, config);

//Data Change By Buttons
$(".chart-view-types li button").each(function () {
  var type = $(this).data("type");
  $("#ch-" + type).click(function () {
    $(".chart-view-types li button").removeClass("thm_btn-black");
    $(this).addClass("thm_btn-black");
    if (type == "day") {
      chart.data = Dailydata;
      chart.update();
    }
    if (type == "month") {
      chart.data = Monthdata;
      chart.update();
    }
    if (type == "week") {
      chart.data = Weekdata;
      chart.update();
    }
    if (type == "year") {
      chart.data = Yeardata;
      chart.update();
    }
  });
});

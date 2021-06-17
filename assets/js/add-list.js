"use strict";
let date = new Date();
let rand =
  Math.floor(Math.random() * 100) +
  date.getDay() +
  date.getMilliseconds() +
  date.getSeconds() +
  date.getHours();

$(".add-btn").click(function (e) {
  e.preventDefault();
  let listContainer = $(this).parent().find(".inputed-list");
  let inputField = $(this).data("target");

  if ($(inputField).val().length == "") {
    alert("Please Input Data");
  } else {
    let inputValue = $(inputField).val();
    let listTemplate = `<div id=${rand}>
<span>${inputValue}</span>
<div class="sm-action">
    <button class="sm-action-btn"
    type="button"
        data-action="edit" onclick="editCon('${rand}')">
        <i class="far fa-pencil"></i>
    </button>
    <button class="sm-action-btn"
    type="button"
        data-action="remove" onclick="deleteCon('${rand}')">
        <i class="far fa-times""></i>
    </button>
</div>
</div>`;
    listContainer.append(listTemplate);
  }
});

function deleteCon(x) {
  $("#" + x).remove();
}

function editCon(x) {
  let thisBtn = $("#" + x);
  let currentValue = thisBtn.find("span").text();
  thisBtn.empty();
  thisBtn.append(`<input type="text" class="form-control" value="${currentValue}">
<button type="button" class="thm_btn br_btn btn_sub_cus_edit" onclick="updateCon('${x}')">Update</button>`);
}

function updateCon(x) {
  let thisBtn = $("#" + x);
  let newValue = thisBtn.find("input").val();
  thisBtn.empty();
  thisBtn.append(`<span>${newValue}</span>
  <div class="sm-action">
      <button class="sm-action-btn"
      type="button"
          data-action="edit" onclick="editCon('${x}')">
          <i class="far fa-pencil"></i>
      </button>
      <button class="sm-action-btn"
      type="button"
          data-action="remove" onclick="deleteCon('${x}')">
          <i class="far fa-times""></i>
      </button>
  </div>`);
}

//Multyinput
let dataArray = [];
$(".multy-btn").click(function (e) {
  e.preventDefault();
  let listContainer = $(this).parent().find(".inputed-list");
  let fieldsContainer = $(this).data("target");
  let inputFields = $(fieldsContainer).find("input");
  let selectFields = $(fieldsContainer).find("select");
  let addFor = $(this).data("for");
  let template;

  inputFields.each(function () {
    if (!$(this).val() == "") {
      dataArray.push($(this).val());
    } else {
      alert("Please Input Data");
    }
  });
  selectFields.each(function () {
    if (!$(this).find(":selected").val() == "") {
      dataArray.push($(this).find(":selected").val());
    } else {
      alert("Please Input Data");
    }
  });

  let companyTemp = `<div id=${rand}>
  <div>
      <div class="data">${dataArray[0]}</div>
      <div class="data">${dataArray[2]}, ${dataArray[1]}</div>
      <div class="data">From ${dataArray[3]} - ${dataArray[4]}</div>
  </div>
  <div class="sm-action">
      <button class="sm-action-btn" data-action="edit"
          onclick="editMulCon('${rand}')">
          <i class="far fa-pencil"></i>
      </button>
      <button class="sm-action-btn"
          data-action="remove"
          onclick="deleteCon('${rand}')">
          <i class="far fa-times"></i>
      </button>
  </div>
</div>`;
  let instituteTemp;
  addFor == "company" ? (template = companyTemp) : (template = instituteTemp);

  listContainer.append(template);
});

function editMulCon(x) {
  let thisBtn = $("#" + x);
  let currentValue = [];
  let currentValues = thisBtn.find(".data");

  currentValues.each(function () {
    if ($(this).text().includes(",")) {
      currentValue.push($(this).text().split(","));
    } else {
      currentValue.push($(this).text());
    }
  });
  alert(currentValue);

  thisBtn.empty();
  thisBtn.append(`<input type="text" class="form-control" value="${currentValue}">
<button type="button" class="thm_btn br_btn btn_sub_cus_edit" onclick="updateCon('${x}')">Update</button>`);
}

"use strict";
let date = new Date();

$(".add-btn").click(function (e) {
  e.preventDefault();
  let listContainer = $(this).parent().find(".inputed-list");
  let inputField = $(this).data("target");
  let rand =
    "S" +
    Math.floor(Math.random() * 100) +
    date.getDay() +
    date.getMilliseconds() +
    date.getSeconds() +
    date.getHours();
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
    $(inputField).val("");
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
  let randM =
    "M" +
    Math.floor(Math.random() * 100) +
    date.getDay() +
    date.getMilliseconds() +
    date.getSeconds() +
    date.getHours();
  let listContainer = $(this).parent().find(".inputed-list");
  let fieldsContainer = $(this).data("target");
  let inputFields = $(fieldsContainer).find("input");
  let selectFields = $(fieldsContainer).find("select");
  let addFor = $(this).data("for");
  let template;

  inputFields.each(function () {
    dataArray.push($(this).val());
    $(this).val("");
  });
  selectFields.each(function () {
    dataArray.push($(this).find(":selected").val());
    $(this).find(":selected").attr("selected", "false");
  });

  let companyTemp = `<div id=${randM}>
  <div>
      <div class="data">${dataArray[0]}</div>
      <div class="data">${dataArray[1]}</div>
      <div class="data">${dataArray[2]}</div>
      <div class="data">From ${dataArray[3]} - ${dataArray[4]}</div>
  </div>
  <div class="sm-action">
      <button class="sm-action-btn" data-action="edit"
          onclick="editMulCon('${randM}')">
          <i class="far fa-pencil"></i>
      </button>
      <button class="sm-action-btn"
          data-action="remove"
          onclick="deleteCon('${randM}')">
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
  let formSelectOpt = [];
  let toSelectOpt = [];
  thisBtn
    .parent()
    .parent()
    .find(".from-select")
    .find("option")
    .each(function () {
      formSelectOpt.push($(this).clone()[0].outerHTML);
    });

  thisBtn
    .parent()
    .parent()
    .find(".to-select")
    .find("option")
    .each(function () {
      toSelectOpt.push($(this).clone()[0].outerHTML);
    });

  currentValues.each(function () {
    currentValue.push($(this).text());
  });

  let fromI = 0;
  let fromL = formSelectOpt.length;
  var i;
  let fullTime = currentValue[3].split(/[^A-Z0-9]/gi);

  for (let j = 0; j < fullTime.length; j++) {
    if (fullTime[j] == "" || fullTime[j] == "From") {
      fullTime.splice(j, 1);
    }
  }
  console.log(fullTime);

  for (i = fromI; i < fromL; i++) {
    if (formSelectOpt[i].includes(currentValue[3])) {
      formSelectOpt[
        i
      ] = `<option value="${currentValue[3]}" selected="selected">${currentValue[2]}</option>`;
    }
    formSelectOpt[i] = formSelectOpt[i];
  }

  console.log(formSelectOpt);

  thisBtn.empty();
  thisBtn.addClass("d-block");
  thisBtn.append(
    `
    <input type="text" class="form-control mb-2 w-100"
        id="com-name" value="${currentValue[0]}">
    <input type="text" class="form-control mb-2 w-100"
        id="com-add" value="${currentValue[1]}">
    <input type="text" class="form-control mb-2 w-100"
        id="possition" value="${currentValue[2]}">
    <div class="form-row w-100">
        <div class="col-md-6">
            <select name="from" class="form-control from-inner-select">` +
      jQuery.each(formSelectOpt, function (i, val) {
        val;
      }) +
      `</select>
        </div>
        <div class="col-md-6">
            <select name="from" class="form-control to-inner-select">
                <option value="Present">Present</option>
                <option value="2021">2021</option>
                <option value="2020">2020</option>
                <option value="2019">2019</option>
            </select>
        </div>
    </div>
  `
  );
}

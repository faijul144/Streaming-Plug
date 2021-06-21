"use strict";
let date = new Date();
// All the templates that are genarated have the variable name accordingly

// For single input field

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
  if ($(inputField).val().length <= 0) {
    alert("Please Input Name");
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
    if (listContainer.find("h4").hasClass("d-none")) {
      listContainer.find("h4").removeClass("d-none");
    }
    listContainer.append(listTemplate);
    $(inputField).val("");
  }
});

// For single edit field

function editCon(x) {
  let thisBtn = $("#" + x);
  let currentData = thisBtn.html();
  let oldDataID = x + "now";
  $("body").append(
    `<div style="display='none'" id=${oldDataID}>${currentData}</div>`
  );
  let currentValue = thisBtn.find("span").text();
  thisBtn.empty();
  thisBtn.append(`<input type="text" class="form-control" value="${currentValue}">
<button type="button" class="thm_btn br_btn btn_sub_cus_edit" onclick="updateCon('${x}','${oldDataID}')">Update</button>
<button type="button" class="thm_btn br_btn btn_sub_cus_edit" onclick="cancleUp('${oldDataID}','${x}')">Cancle</button>`);
}

// For single update submission

function updateCon(x, oldData) {
  let thisBtn = $("#" + x);
  let newValue = thisBtn.find("input").val();
  thisBtn.empty();
  $("#" + oldData).remove();
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

//Multyinput button

//For the sake for template chage between company and institute paramiter must be passed

$(".multy-btn").click(function (e) {
  let dataArray = [];
  let listContainer = $(this).parent().find(".inputed-list");
  let fieldsContainer = $(this).data("target");
  let inputFields = $(fieldsContainer).find("input");
  let selectFields = $(fieldsContainer).find("select");
  let addFor = $(this).data("for");
  e.preventDefault();
  if ($(fieldsContainer).find("input").val().length <= 0) {
    alert("Please Input Name");
  } else {
    let randM =
      "M" +
      Math.floor(Math.random() * 100) +
      date.getDay() +
      date.getMilliseconds() +
      date.getSeconds() +
      date.getHours();

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
          onclick="editMulCon('${randM}','${addFor}')">
          <i class="far fa-pencil"></i>
      </button>
      <button class="sm-action-btn"
          data-action="remove"
          onclick="deleteCon('${randM}')">
          <i class="far fa-times"></i>
      </button>
  </div>
</div>`;
    let instituteTemp = `<div id=${randM}>
  <div>
      <div class="data">${dataArray[0]}</div>
      <div class="data">${dataArray[1]}</div>
      <div class="data">From ${dataArray[2]} - ${dataArray[3]}</div>
  </div>
  <div class="sm-action">
      <button class="sm-action-btn" data-action="edit"
          onclick="editMulCon('${randM},${addFor}')">
          <i class="far fa-pencil"></i>
      </button>
      <button class="sm-action-btn"
          data-action="remove"
          onclick="deleteCon('${randM}')">
          <i class="far fa-times"></i>
      </button>
  </div>
</div>`;
    if (addFor == "company") {
      template = companyTemp;
    }
    if (addFor == "institute") {
      template = instituteTemp;
    }

    if (listContainer.find("h4").hasClass("d-none")) {
      listContainer.find("h4").removeClass("d-none");
    }
    listContainer.append(template);
  }
});

// multi edit field

function editMulCon(x, addedfor) {
  let thisBtn = $("#" + x);
  let currentValue = [];
  let currentValues = thisBtn.find(".data");
  let formSelectOpt = [];
  let toSelectOpt = [];
  let currentData = thisBtn.html();
  let oldDataID = x + "now";
  $("body").append(
    `<div style="display='none'" id=${oldDataID}>${currentData}</div>`
  );
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
  var i, j;
  let fullTime;

  if (addedfor == "company") {
    fullTime = currentValue[3].split(/\From|[^A-Z0-9]/gi).clean("");
  }
  if (addedfor == "institute") {
    fullTime = currentValue[2].split(/\From|[^A-Z0-9]/gi).clean("");
  }

  for (i = fromI; i < fromL; i++) {
    if (formSelectOpt[i].includes(fullTime[0])) {
      formSelectOpt[
        i
      ] = `<option value="${fullTime[0]}" selected="selected">${fullTime[0]}</option>`;
    }
    formSelectOpt[i] = formSelectOpt[i];
  }

  for (j = fromI; j < fromL; j++) {
    if (toSelectOpt[j].includes(fullTime[1])) {
      toSelectOpt[
        j
      ] = `<option value="${fullTime[1]}" selected="selected">${fullTime[1]}</option>`;
    }
    toSelectOpt[j] = toSelectOpt[j];
  }

  let template;
  let comTemplate =
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
        <select name="from" class="form-control to-inner-select">` +
    jQuery.each(toSelectOpt, function (i, val) {
      val;
    }) +
    `</select>
    </div>
    <button type="button" onclick="multiUpdate('${x}','${addedfor}','${oldDataID}')" class="thm_btn br_btn btn_sub_cus_md mt-3">Update</button>
    <button type="button" class="thm_btn br_btn btn_sub_cus_md ml-2 mt-3" onclick="cancleUp('${oldDataID}','${x}')">Cancle</button>
</div>
`;
  let insTemplate =
    `
  <input type="text" class="form-control mb-2 w-100" value="${currentValue[0]}">
  <input type="text" class="form-control mb-2 w-100" value="${currentValue[1]}">
  <div class="form-row w-100">
      <div class="col-md-6">
          <select name="from" class="form-control from-inner-select">` +
    jQuery.each(formSelectOpt, function (i, val) {
      val;
    }) +
    `</select>
      </div>
      <div class="col-md-6">
          <select name="from" class="form-control to-inner-select">` +
    jQuery.each(toSelectOpt, function (i, val) {
      val;
    }) +
    `</select>
      </div>
      <button type="button" onclick="multiUpdate('${x}','${addedfor}','${oldDataID}')" class="thm_btn br_btn btn_sub_cus_md mt-3">Update</button>
      <button type="button" class="thm_btn br_btn btn_sub_cus_md ml-2 mt-3" onclick="cancleUp('${oldDataID}','${x}')">Cancle</button>
  </div>
  `;

  if (addedfor == "company") {
    template = comTemplate;
  }
  if (addedfor == "institute") {
    template = insTemplate;
  }

  thisBtn.empty();
  thisBtn.addClass("d-block");

  thisBtn.append(template);
  $("select").select2({
    minimumResultsForSearch: -1,
    width: "resolve",
  });
}

// multi update submission

function multiUpdate(x, addedfor, oldData) {
  let updateCon = $("#" + x);
  let inputFields = updateCon.find("input");
  let selectFields = updateCon.find("select");
  let template;
  let newDataArray = [];

  inputFields.each(function () {
    newDataArray.push($(this).val());
    $(this).val("");
  });
  selectFields.each(function () {
    newDataArray.push($(this).find(":selected").val());
    $(this).find(":selected").attr("selected", "false");
  });

  let companyTemp = `<div>
      <div class="data">${newDataArray[0]}</div>
      <div class="data">${newDataArray[1]}</div>
      <div class="data">${newDataArray[2]}</div>
      <div class="data">From ${newDataArray[3]} - ${newDataArray[4]}</div>
  </div>
  <div class="sm-action">
      <button class="sm-action-btn" data-action="edit"
          onclick="editMulCon('${x}','${addedfor}')">
          <i class="far fa-pencil"></i>
      </button>
      <button class="sm-action-btn"
          data-action="remove"
          onclick="deleteCon('${x}')">
          <i class="far fa-times"></i>
      </button>
  </div>`;
  let instituteTemp = `<div>
  <div class="data">${newDataArray[0]}</div>
  <div class="data">${newDataArray[1]}</div>
  <div class="data">From ${newDataArray[2]} - ${newDataArray[3]}</div>
</div>
<div class="sm-action">
  <button class="sm-action-btn" data-action="edit"
      onclick="editMulCon('${x}','${addedfor}')">
      <i class="far fa-pencil"></i>
  </button>
  <button class="sm-action-btn"
      data-action="remove"
      onclick="deleteCon('${x}')">
      <i class="far fa-times"></i>
  </button>
</div>`;

  if (addedfor == "company") {
    template = companyTemp;
  }
  if (addedfor == "institute") {
    template = instituteTemp;
  }
  console.log(oldData);
  $("#" + oldData).remove();
  updateCon.empty();
  updateCon.removeClass("d-block");
  updateCon.append(template);
}

// delete action

function deleteCon(x) {
  if (
    $("#" + x)
      .parent()
      .find(">div").length <= 1
  ) {
    $("#" + x)
      .parent()
      .find("h4")
      .addClass("d-none");
  }
  $("#" + x).remove();
}

// Cancle Update
function cancleUp(oldata, x) {
  $("#" + x).html($("#" + oldata).html());
  $("#" + x).removeClass("d-block");
  $("#" + oldata).remove();
}

// for cleaning up arrays with black strings

Array.prototype.clean = function (deleteValue) {
  for (var i = 0; i < this.length; i++) {
    if (this[i] == deleteValue) {
      this.splice(i, 1);
      i--;
    }
  }
  return this;
};

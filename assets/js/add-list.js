"use strict";
let date = new Date();
let editId;
let rand =
  Math.floor(Math.random() * 100) +
  date.getDay() +
  date.getMilliseconds() +
  date.getSeconds() +
  date.getHours();
let thisContainer, currentBtnText, pressedAddBtn;

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

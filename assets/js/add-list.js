"use strict";

let inputButton = $(".add-btn");
let actionBtn = $(".sm-action-btn");
let date = new Date();
let editId;
let rand =
  Math.floor(Math.random() * 100) +
  date.getDay() +
  date.getMilliseconds() +
  date.getSeconds() +
  date.getHours();
let thisContainer, currentBtnText, pressedAddBtn;

inputButton.click(function (e) {
  e.preventDefault();
  let listContainer = $(this).parent().find(".inputed-list");
  let inputField = $(this).data("target");
  let inputValue = $(inputField).val();
  let listTemplate = `<div id=${rand}>
<span>${inputValue}</span>
<div class="sm-action">
    <button class="sm-action-btn"
        data-action="edit">
        <i class="far fa-pencil"></i>
    </button>
    <button class="sm-action-btn"
        data-action="remove">
        <i class="far fa-times"></i>
    </button>
</div>
</div>`;

  if (inputValue.length == "") {
    alert("Please Input Data");
  } else {
    inputValue = inputValue;
    listContainer.append(listTemplate);
  }
});

actionBtn.click(function (e) {
  e.preventDefault();
  let action = $(this).data("action");
  if (action == "edit") {
    thisContainer = $(this).parent().parent().find("span");
    editId = $(this).parent().parent().attr("id");
    alert(editId);
    let editBtn = $(this).parent().parent().parent().parent().find(".add-btn");
    currentBtnText = editBtn.text();
    pressedAddBtn = $(this)
      .parent()
      .parent()
      .parent()
      .parent()
      .find(".add-btn")
      .data("target");
    let currentValue = $(this).parent().parent().find("span").text();
    $(pressedAddBtn).val(currentValue);
    editBtn.text("Update");
    editBtn.addClass("edit-btn");
    editBtn.removeClass("add-btn");
    editBtn.attr("data-change", editId);
  }
  if (action == "remove") {
    $(this).parent().parent().remove();
  }
});

$(".edit-btn").click(function (e) {
  e.preventDefault();
  let tar = $(this).data("change");
  thisContainer.text($(pressedAddBtn).val());
  $(pressedAddBtn).val("");
  editBtn.addClass("add-btn");
  editBtn.removeClass("edit-btn");
  editBtn.text(currentBtnText);
});

"use strict";
const cards = document.querySelector(".cards");
const addBtn = document.querySelector(".add-btn");
const title = document.querySelector(".title");
const notes = document.querySelector(".note");

const addNote = function () {
  const card = document.createElement("div");
  card.className = "card";
  card.innerHTML = `
  
  <h4 >${title.value}</h4>
  <p>${notes.value}</p>
  <button class="delete-btn">Delete</button>
    `;
  cards.appendChild(card);
  title.value = "";
  notes.value = "";
  const delBtn = card.querySelector(".delete-btn");
  delBtn.addEventListener("click", () => card.remove());
};
addBtn.addEventListener("click", () => {
  if (title.value === "" && notes.value === "") {
    alert("Empty title and notes ");
  } else if (title.value === "") {
    alert("Enter your title");
  } else if (notes.value === "") {
    alert("write your notes");
  } else {
    return addNote();
  }
});
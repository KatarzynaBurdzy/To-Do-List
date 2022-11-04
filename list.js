// Selected elements
const newTaskForm = document.querySelector(".new-form");
// Buttons
const btnMainAddNewTask = document.querySelector(".btn-add");
const btnAddToList = document.querySelector(".btn-add-form");
const btnCancelNewTaskForm = document.querySelector(".btn-cancel-form");

// Functions
const btnFunctionality = function () {
  newTaskForm.classList.toggle("hidden");
  btnMainAddNewTask.classList.toggle("hidden");
};

// Event listeners
btnMainAddNewTask.addEventListener("click", btnFunctionality);
btnCancelNewTaskForm.addEventListener("click", btnFunctionality);

btnAddToList.addEventListener("click", function () {});

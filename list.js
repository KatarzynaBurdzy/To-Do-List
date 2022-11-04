// Selected elements
const newTaskForm = document.querySelector(".new-form");
const taskNameInput = document.querySelector(".task-name-input");
const TaskNoteInput = document.querySelector("#task-note-textarea");
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

btnAddToList.addEventListener("click", function (e) {
  e.preventDefault();
  if (!taskNameInput.value) alert("Add task name");
  else alert("okej");
});

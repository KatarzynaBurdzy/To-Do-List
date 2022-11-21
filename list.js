// Selected elements
const newTaskForm = document.querySelector(".new-form");
const taskNameInput = document.querySelector(".task-name-input");
const taskNoteInput = document.querySelector("#task-note-textarea");
const unorderedList = document.querySelector("ul");
// Buttons
const btnMainAddNewTask = document.querySelector(".btn-add");
const btnAddToList = document.querySelector(".btn-add-form");
// const btnCancelNewTaskForm = document.querySelector(".btn-cancel-form");

// Arrays
// const taskArray = [];

// Functions
const btnFunctionality = function () {
  newTaskForm.classList.toggle("hidden");
  // btnMainAddNewTask.classList.toggle("hidden");
};

const createLiEl = function (a) {
  if (a.length > 0) {
    const [t, n] = a;
    const liEl = document.createElement("li");
    liEl.innerHTML = `<span class='li-el'>${t} ${n}</span>`;
    unorderedList.appendChild(liEl);
  }
};

const createList = function (e) {
  if (taskNameInput.value) {
    const arrTemp = [];
    arrTemp.push(taskNameInput.value);
    arrTemp.push(taskNoteInput.value);
    // taskArr.push(arrTemp);
    // console.log(taskArr);
    createLiEl(arrTemp);
    taskNameInput.value = "";
    taskNoteInput.value = "";
  } else alert("add task name");
};

// Event listeners
btnMainAddNewTask.addEventListener("click", btnFunctionality);
// btnCancelNewTaskForm.addEventListener("click", btnFunctionality);

btnAddToList.addEventListener("click", (e) => {
  e.preventDefault();
  createList();
});

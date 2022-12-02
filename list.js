// Selected elements
const newTaskForm = document.querySelector(".new-form");
const taskNameInput = document.querySelector(".task-name-input");
const taskNoteInput = document.querySelector(".task-note-textarea");
const unorderedList = document.querySelector("ul");
const taskListDiv = document.querySelector(".task-list");
const liNote = document.querySelector(".note");

// Buttons
const btnMainAddNewTask = document.querySelector(".btn-add");
const btnAddToList = document.querySelector(".btn-add-form");
const btnCancel = document.querySelector(".btn-cancel");
const btnMore = document.querySelector(".btn-more");

// Array
const listArr = [];
let id = 0;

// Functions
const clearInput = function () {
  taskNameInput.value = "";
  taskNoteInput.value = "";
};

// add TASK to the listArr so later you can remove it
const addListArr = function (toDo, note, id, done, trash) {
  listArr.push({
    name: toDo,
    note: note,
    id: id,
    done: false,
    trash: false,
  });
  id++;
};

// add DONE class to checkbox, TRASH to
const createList = function (toDo, note, id, done, trash) {
  if (taskNameInput.value) {
    const text = `
    <li class="task" id=${id}>
    <span class="to-do">${toDo}</span>
    <button class="btn btn-form btn-cancel">cancel</button>
    <button class="btn btn-form btn-more">more</button>
    <br />
    <span class="note hidden">Note: ${note}</span>
  </li>`;
    unorderedList.insertAdjacentHTML("beforeend", text);
    clearInput();
  } else alert("add task name");
};

// Event listeners
btnMainAddNewTask.addEventListener("click", () => {
  newTaskForm.classList.toggle("hidden");
  if (newTaskForm.classList.contains("hidden")) {
    btnMainAddNewTask.textContent = "ADD NEW TASK";
  } else {
    btnMainAddNewTask.textContent = "CANCEL";
    clearInput();
  }
});

btnAddToList.addEventListener("click", (e) => {
  e.preventDefault();
  createList(taskNameInput.value, taskNoteInput.value, id, false, false);
  taskListDiv.classList.remove("hidden");
  alert("You successfully added a new task!");
});

// btnMore.addEventListener("click", function () {
//   // console.log("fdss");
//   liNote.classList.toggle("hidden");
// });

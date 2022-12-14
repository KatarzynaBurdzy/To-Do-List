// Selected elements
const newTaskForm = document.querySelector(".new-form");
const taskNameInput = document.querySelector(".task-name-input");
const taskNoteInput = document.querySelector(".task-note-textarea");
const unorderedList = document.querySelector("ul");
const taskListDiv = document.querySelector(".task-list");
const listTitle = document.querySelector(".list-title");
const liNote = document.querySelector(".note");

// Buttons
const btnMainAddNewTask = document.querySelector(".btn-add");
const btnAddToList = document.querySelector(".btn-add-form");

// Functions
const clearInput = function () {
  taskNameInput.value = "";
  taskNoteInput.value = "";
};

const createListEl = function (toDo, note) {
  const newLi = document.createElement("li");
  const checkbox = document.createElement("input");
  const h3Text = document.createElement("span");
  const newNote = document.createElement("p");
  const btnTrash = document.createElement("button");
  const btnMore = document.createElement("button");

  h3Text.textContent = `${toDo}`;
  newNote.textContent = `${note}`;
  btnTrash.textContent = `delete_outline`;
  btnMore.textContent = `more_horiz`;

  newLi.classList.add("task");
  newNote.classList.add("note", "hidden");
  checkbox.classList.add("checkbox");
  checkbox.setAttribute("type", "radio");
  h3Text.classList.add("task-name-list");
  btnTrash.classList.add("btn", "btn-form", "btn-trash", "material-icons");
  btnMore.classList.add("btn", "btn-form", "btn-more", "material-icons");

  btnTrash.addEventListener("click", () => {
    if (confirm("Your task will be deleted")) {
      newLi.remove();
    }
  });

  btnMore.addEventListener("click", () => newNote.classList.toggle("hidden"));

  checkbox.addEventListener("click", () => h3Text.classList.add("checked"));

  newLi.appendChild(checkbox);
  newLi.appendChild(h3Text);
  newLi.appendChild(btnTrash);
  newLi.appendChild(btnMore);
  newLi.appendChild(newNote);
  unorderedList.appendChild(newLi);
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
  if (taskNameInput.value) {
    createListEl(taskNameInput.value, taskNoteInput.value);
    clearInput();
    listTitle.classList.remove("hidden");
  } else alert("Add task name");
});

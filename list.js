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

// Functions
const clearInput = function () {
  taskNameInput.value = "";
  taskNoteInput.value = "";
};

const createListEl = function (toDo, note) {
  // Creating new elements
  const newLi = document.createElement("li");
  const h3Text = document.createElement("span");
  const newNote = document.createElement("p");
  const btnTrash = document.createElement("button");
  const btnMore = document.createElement("button");

  // Adding text to elements
  h3Text.textContent = `${toDo}`;
  newNote.textContent = `${note}`;
  btnTrash.textContent = `delete`;
  btnMore.textContent = `more_horiz`;

  // Adding classes to elements
  newLi.classList.add("task");
  newNote.classList.add("note", "hidden");
  btnTrash.classList.add(
    "btn",
    "btn-form",
    "btn-trash",
    "material-symbols-outlined"
  );
  btnMore.classList.add(
    "btn",
    "btn-form",
    "btn-more",
    "material-symbols-outlined"
  );

  // Adding event listeners to buttons
  btnTrash.addEventListener("click", () => {
    if (confirm("Your task will be deleted")) {
      newLi.remove();
    }
  });

  btnMore.addEventListener("click", () => newNote.classList.toggle("hidden"));

  // Appending children
  newLi.appendChild(h3Text);
  newLi.appendChild(btnTrash);
  newLi.appendChild(btnMore);
  newLi.appendChild(newNote);
  unorderedList.appendChild(newLi);

  console.log(newLi);
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
    taskListDiv.classList.remove("hidden");
  } else alert("Add task name");
});

// btnMore.addEventListener("click", function () {
//   // console.log("fdss");
//   liNote.classList.toggle("hidden");
// });

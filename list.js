// Selected elements
const newTaskForm = document.querySelector(".new-form");
const taskNameInput = document.querySelector(".task-name-input");
const taskNoteInput = document.querySelector(".task-note-textarea");
const unorderedList = document.querySelector("ul");
// Buttons
const btnMainAddNewTask = document.querySelector(".btn-add");
const btnAddToList = document.querySelector(".btn-add-form");

// Functions
const clearInput = function () {
  taskNameInput.value = "";
  taskNoteInput.value = "";
};

const createList = function (toDo, note) {
  if (taskNameInput.value) {
    const text = `<li class='task'>
      <span class='to-do'>${toDo}
      <button class="cancel">
      cancel</button>
      <button class="more">
      more
      </button>
</span>
      <br>
      <span class='note'>Note: ${note}</span>
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
  createList(taskNameInput.value, taskNoteInput.value);
});

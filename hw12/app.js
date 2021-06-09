const DELETE_BTN_CLASS = `remove-item`;
const DELETE_BTN_ICON = '<i class="fa fa-remove"></i>';
const TASKS_ELEMENT_CLASS = `collection-item`;

const taskCollection = document.querySelector(`.collection`);
const taskInput = document.querySelector(`#task`);
const applyBtn = document.querySelector(`.btn`);

let tasksList = [];

applyBtn.addEventListener(`click`, onAddTaskBtnClick);
taskCollection.addEventListener(`click`, removeTask);

init();

function onAddTaskBtnClick() {
  if (isInputValid()) {
    const newTask = getTaskData();
    addTask(newTask);
    resetInput();
  } else {
    alert(`Write your task!`);
  }
  resetInput();
}
function removeTask(e) {
  if (e.target.parentElement.classList.contains(DELETE_BTN_CLASS)) {
    const taskId = getTaskId(e.target);
    deleteTask(taskId);
    removeTaskElement(taskId);
  }
}
function init() {
  restoreTaskFromLocalStorage();
  renderTasks(tasksList);
}
function deleteTask(id) {
  tasksList = tasksList.filter((item) => item.id !== id);
  saveTaskToLocalStorage();
}

function removeTaskElement(id) {
  return document.getElementById(id).remove();
}

function getTaskId(el) {
  const task = el.closest(`.${TASKS_ELEMENT_CLASS}`);
  return +task.getAttribute(`id`);
}

function colorToggle() {
  const insertedElement =
    taskCollection.children[taskCollection.children.length - 1];
  insertedElement.addEventListener(`click`, isTaskChecked);
}

function addTask(task) {
  tasksList.push(task);
  saveTaskToLocalStorage();
  renderTasks(tasksList);
}
function renderTasks(list) {
  taskCollection.innerHTML = ``;
  list.forEach((item) => renderTask(item));
}
function renderTask(task) {
  const li = document.createElement(`li`);
  li.className = TASKS_ELEMENT_CLASS;
  li.textContent = task.value;
  li.id = task.id;

  const link = document.createElement(`a`);
  link.className = `${DELETE_BTN_CLASS} secondary-content`;
  link.innerHTML = DELETE_BTN_ICON;
  li.appendChild(link);
  taskCollection.appendChild(li);
  colorToggle();
}

function getTaskData() {
  return {
    id: Date.now(),
    value: taskInput.value,
  };
}

function isTaskChecked(e) {
  e.target.classList.toggle(`green`);
}

function resetInput() {
  taskInput.value = "";
}

function isInputValid() {
  return taskInput.value.trim() !== ``;
}

function saveTaskToLocalStorage() {
  localStorage.setItem(`tasks`, JSON.stringify(tasksList));
}

function restoreTaskFromLocalStorage() {
  const data = localStorage.getItem(`tasks`);
  if (data !== null) {
    tasksList = JSON.parse(data);
  } else {
    tasksList = [];
  }
}

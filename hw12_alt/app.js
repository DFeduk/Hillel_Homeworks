const DELETE_BTN_CLASS = `remove-item`;
const DELETE_BTN_ICON = '<i class="fa fa-remove"></i>';
const TASKS_ELEMENT_CLASS = `collection-item`;
const TASK_ID_ATTRIBUTE_NAME = `data-task-id`;

const taskCollection = document.querySelector(`.collection`);
const taskInput = document.querySelector(`#task`);
const applyBtn = document.querySelector(`.btn`);
const taskTemplate = document.querySelector(`#newTaskTemplate`).innerHTML;

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
}
function removeTask(e) {
  const taskId = getTaskId(e.target);
  switch (true) {
    case e.target.classList.contains(TASKS_ELEMENT_CLASS):
      toggleTaskState(taskId);
      break;
    case e.target.parentElement.classList.contains(DELETE_BTN_CLASS):
      deleteTask(taskId);
      removeTaskElement(taskId);
      break;
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
  const el = getTaskRow(id);
  el.remove();
}
function getTaskRow(id) {
  return taskCollection.querySelector(`[${TASK_ID_ATTRIBUTE_NAME}="${id}"]`);
}

function getTaskId(el) {
  const task = el.closest(`.${TASKS_ELEMENT_CLASS}`);
  return +task.dataset.taskId;
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
  const newTaskHtml = getTaskHtml(task);
  taskCollection.insertAdjacentHTML(`beforeend`, newTaskHtml);
}
function getTaskHtml(task) {
  return taskTemplate
    .replace(`{{id}}`, task.id)
    .replace(`{{value}}`, task.value)
    .replace(`{{checkClass}}`, task.isChecked ? `green` : ``);
}
function toggleTaskState(id) {
  tasksList = tasksList.map((item) =>
    item.id !== id
      ? item
      : {
          ...item,
          isChecked: !item.isChecked,
        }
  );

  renderTasks(tasksList);
  saveTaskToLocalStorage();
}
function getTaskData() {
  return {
    id: Date.now(),
    value: taskInput.value,
    isChecked: false,
  };
}
function resetInput() {
  taskInput.value = ``;
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

const taskList = document.querySelector(".collection");
const taskInput = document.querySelector("#task");
const applyBtn = document.querySelector(".btn");

applyBtn.addEventListener("click", addTask);
taskList.addEventListener("click", removeTask);

function createTask() {
  const li = document.createElement("li");
  li.className = "collection-item";
  li.textContent = taskInput.value;

  const link = document.createElement("a");
  link.className = "remove-item secondary-content";
  link.innerHTML = '<i class="fa fa-remove"></i>';
  li.appendChild(link);
  return li;
}

function addTask() {
  const li = createTask();
  if (taskInput.value === "") {
    alert("Write your task!");
  } else {
    taskList.appendChild(li);
  }
  taskInput.value = "";
}

// Гуглил, но до конца не понял как это работает(вроде как не было условием в дз)

function removeTask(e) {
  if (e.target.parentElement.classList.contains("remove-item")) {
    e.target.parentElement.parentElement.remove();
  }
}

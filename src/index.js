function addTask(event) {
  event.preventDefault();
  let input = this.children[0];

  let taskText = input.value;

  input.value = "";
  let taskList = document.querySelector("#tasks");
  let newTask = document.createElement("li");
  newTask.innerText = taskText;
  taskList.appendChild(newTask);
}
let addTaskSection = document.querySelector("#create-task-form");

addTaskSection.addEventListener("submit", addTask);

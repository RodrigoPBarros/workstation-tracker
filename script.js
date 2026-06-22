// 1. Relógio em Tempo Real
function updateClock() {
  const now = new Date();
  // Corrigido: toLocaleTimeString para mostrar a HORA, não a data
  const time = now.toLocaleTimeString("pt-br", { hour12: false });
  document.getElementById("clock").innerText = time;
}
setInterval(updateClock, 1000);

// 2. Lógica do Timer de Foco
let timer;
let minutes = 25;
let seconds = 0;
const display = document.querySelector(".display-timer");

function startTimer() {
  if (timer) return;

  timer = setInterval(() => {
    if (seconds === 0) {
      if (minutes === 0) {
        clearInterval(timer);
        display.style.color = "#facc15";
        document.title = "!!! MISSÃO FINALIZADA !!!";
        alert("Missão cumprida! Hora de um descanso.");
        return;
      }
      minutes--;
      seconds = 59;
    } else {
      seconds--;
    }

    updateDisplay();
  }, 1000);
}

function updateDisplay() {
  const m = minutes < 10 ? "0" + minutes : minutes;
  const s = seconds < 10 ? "0" + seconds : seconds;
  display.innerText = `${m}:${s}`;
}

function pauseTimer() {
  clearInterval(timer);
  timer = null;
}

// 3. Eventos dos botões
document.getElementById("btn-start").addEventListener("click", startTimer);
document.getElementById("btn-pause").addEventListener("click", pauseTimer);
document.getElementById("btn-reset").addEventListener("click", () => {
  pauseTimer();
  minutes = 25;
  seconds = 0;
  display.style.color = "white";
  document.title = "Workstation Tracker";
  updateDisplay();
});

// 4. Lógica das missões
const taskInput = document.getElementById("task-input");
const categoryInput = document.getElementById("category-input");
const addBtn = document.getElementById("add-task");
const taskList = document.getElementById("task-list");

function addTask() {
  const text = taskInput.value;
  const category = categoryInput.value;

  if (text === "") return;

  createTaskElement(text, category);
  saveTasks();
  taskInput.value = "";
}

function createTaskElement(text, category) {
  const li = document.createElement("li");
  li.dataset.category = category;
  li.dataset.text = text;
  li.innerHTML = `
        <span>[${category.toUpperCase()}] ${text}</span>
        <button class="delete-btn">X</button>
    `;

  li.querySelector(".delete-btn").addEventListener("click", () => {
    li.remove();
    saveTasks();
  });

  taskList.appendChild(li);
}

addBtn.addEventListener("click", addTask);

taskInput.addEventListener("keypress", (e) => {
  if (e.key === "Enter") addTask();
});

// 5. LocalStorage
function saveTasks() {
  const tasks = [];
  document.querySelectorAll("#task-list li").forEach((li) => {
    tasks.push({
      text: li.dataset.text,
      category: li.dataset.category,
    });
  });
  localStorage.setItem("my_missions", JSON.stringify(tasks));
}
function loadTasks() {
  const savedTasks = JSON.parse(localStorage.getItem("my_missions") || "[]");
  savedTasks.forEach((task) => {
    createTaskElement(task.text, task.category);
  });
}

loadTasks();

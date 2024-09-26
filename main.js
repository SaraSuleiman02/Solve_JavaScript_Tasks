const taskContainers = document.querySelectorAll(".task-container");
let currentTaskIndex = 0;

function updateTaskVisibility() {
  taskContainers.forEach((container, index) => {
    container.classList.toggle("active", index === currentTaskIndex);
  });
  document.getElementById("prevButton").style.display =
    currentTaskIndex === 0 ? "none" : "inline-block";
}

function showNextTask() {
  if (currentTaskIndex < taskContainers.length - 1) {
    currentTaskIndex++;
    updateTaskVisibility();
  } else {
    alert("No more tasks!");
  }
}

function showPrevTask() {
  if (currentTaskIndex > 0) {
    currentTaskIndex--;
    updateTaskVisibility();
  }
}

document.getElementById("nextButton").addEventListener("click", showNextTask);
document.getElementById("prevButton").addEventListener("click", showPrevTask);

// Initialize task visibility
updateTaskVisibility();

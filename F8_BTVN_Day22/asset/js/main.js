const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const addTask = $(".add-btn");
const addModal = $("#addTaskModal");
const closeBtn = $(".modal-close");
const inputElement = $("#taskTitle");
const descriptionElement = $("#taskDescription");
const categoryElement = $("#taskCategory");
const priorityElement = $("#taskPriority");
const startTimeElement = $("#startTime");
const endTimeElement = $("#endTime");
const dueDateElement = $("#taskDate");
const cardColorElement = $("#taskColor");
const modalForm = $(".todo-app-form");
const createBtn = $(".btn-primary");
const taskGrid = $(".task-grid");
const cancelBtn = $(".btn-secondary");
const checkBtn = $(".fa-check");

let taskList = [];

addTask.onclick = function (event) {
    event.preventDefault();
    addModal.className = "modal-overlay show";
    setTimeout(function () {
        inputElement.focus();
    }, 50);
};

closeBtn.onclick = function (event) {
    event.preventDefault();
    addModal.className = "modal-overlay";
};

modalForm.onsubmit = function (event) {
    event.preventDefault();
};

createBtn.onclick = function (event) {
    event.preventDefault();
    const newTask = {
        title: inputElement.value,
        description: descriptionElement.value,
        category: categoryElement.value,
        priority: priorityElement.value,
        startTime: startTimeElement.value,
        endTime: endTimeElement.value,
        DueDate: dueDateElement.value,
        cardColor: cardColorElement.value,
        isCompleted: false,
    };

    taskList.unshift(newTask);
    renderTasks();
};

cancelBtn.onclick = function (event) {
    event.preventDefault();
    addModal.className = "modal-overlay";
};

function renderTasks() {
    const html = taskList
        .map(function (task) {
            return `
            <div class="task-card ${task.cardColor} ${task.isCompleted ? "completed" : ""}">
                <div class="task-header">
                    <h3 class="task-title">${task.title}</h3>
                    <button class="task-menu">
                        <i class="fa-solid fa-ellipsis fa-icon"></i>
                        <div class="dropdown-menu">
                            <div class="dropdown-item">
                                <i class="fa-solid fa-pen-to-square fa-icon"></i>
                                Edit
                            </div>
                            <div class="dropdown-item complete">
                                <i class="fa-solid fa-check fa-icon"></i>
                                ${task.isCompleted ? "Mark as Active" : "Mark as Complete"}
                            </div>
                            <div class="dropdown-item delete">
                                <i class="fa-solid fa-trash fa-icon"></i>
                                Delete
                            </div>
                        </div>
                    </button>
                </div>
                <p class="task-description">${task.description}</p>
                <div class="task-time">${task.startTime} - ${task.endTime}</div>
            </div>
        `;
        })
        .join("");
    taskGrid.innerHTML = html;
    addModal.className = "modal-overlay";
    modalForm.reset();
}

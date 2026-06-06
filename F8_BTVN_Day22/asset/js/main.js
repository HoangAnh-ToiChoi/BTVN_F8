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

let taskList = JSON.parse(localStorage.getItem("tasks")) ?? [];

let indexEdit = null;

function openForm() {
    addModal.className = "modal-overlay show";
    setTimeout(function () {
        inputElement.focus();
    }, 50);
}

function closeForm() {
    addModal.className = "modal-overlay";
    const titleTask = addModal.querySelector(".modal-title");
    if (titleTask) {
        titleTask.textContent = titleTask.dataset.original;
        delete titleTask.dataset.original;
    }
    indexEdit = null;
}

function saveTask() {
    localStorage.setItem("tasks", JSON.stringify(taskList));
}

addTask.onclick = function (event) {
    event.preventDefault();
    openForm();
};

closeBtn.onclick = function (event) {
    event.preventDefault();
    closeForm();
};

taskGrid.onclick = function (event) {
    const btnEdit = event.target.closest(".btnEdit");
    if (btnEdit) {
        openForm();

        const titleTask = addModal.querySelector(".modal-title");
        if (titleTask) {
            titleTask.dataset.original = titleTask.textContent;
            titleTask.textContent = "Edit task";
        }

        const indexTask = btnEdit.dataset.index;
        const task = taskList[indexTask];

        inputElement.value = task.title;
        descriptionElement.value = task.description;
        priorityElement.value = task.priority;
        startTimeElement.value = task.startTime;
        endTimeElement.value = task.endTime;
        dueDateElement.value = task.DueDate;
        cardColorElement.value = task.cardColor;

        indexEdit = indexTask;
    }

    const btnComplete = event.target.closest(".btn-complete");
    // console.log(btnComplete);
    if (btnComplete) {
        const task = taskList[btnComplete.dataset.index];
        task.isComplete = !task.isComplete;
        saveTask();
        renderTasks();
    }
    const btnDelete = event.target.closest(".btn-Delete");
    if (btnDelete) {
        if (
            confirm(
                `Bạn có chắc chắn muốn xóa ${taskList[btnDelete.dataset.index].title}?`,
            )
        ) {
            taskList.splice(btnDelete.dataset.index, 1);
            saveTask();
            renderTasks();
        }
    }
};

modalForm.onsubmit = function (event) {
    event.preventDefault();
    const newTask = {
        title: inputElement.value,
        description: descriptionElement.value,
        priority: priorityElement.value,
        startTime: startTimeElement.value,
        endTime: endTimeElement.value,
        DueDate: dueDateElement.value,
        cardColor: cardColorElement.value,
        isComplete: false,
    };
    if (indexEdit) {
        taskList[indexEdit] = newTask;
    } else {
        taskList.unshift(newTask);
    }
    saveTask();
    renderTasks();
    closeForm();
    modalForm.reset();
};

cancelBtn.onclick = function (event) {
    event.preventDefault();
    closeForm();
};

function renderTasks() {
    const html = taskList
        .map(function (task, index) {
            return `
        <div class="task-card ${task.cardColor} ${task.isComplete ? "completed" : ""} ">
                    <div class="task-header">
                        <h3 class="task-title" data-original="${task.title}">${task.title}</h3>
                        <button class="task-menu">
                            <i class="fa-solid fa-ellipsis fa-icon"></i>
                            <div class="dropdown-menu">
                                <div class="dropdown-item btnEdit" data-index = "${index}" >
                                    <i
                                        class="fa-solid fa-pen-to-square fa-icon"
                                    ></i>
                                    Edit
                                </div>
                                <div class="dropdown-item complete btn-complete" data-index="${index}">
                                    <i class="fa-solid fa-check fa-icon"></i>
                                    ${task.isComplete ? "Mark as Active" : "Mark as Complete"}
                                </div>
                                <div class="dropdown-item delete btn-Delete" data-index="${index}">
                                    <i class="fa-solid fa-trash fa-icon"></i>
                                    Delete
                                </div>
                            </div>
                        </button>
                    </div>
                    <p class="task-description">
                        ${task.description}
                    </p>
                    <div class="task-time">${task.startTime}AM- ${task.endTime}PM</div>
                </div>
                `;
        })
        .join("");

    taskGrid.innerHTML = html;
}

renderTasks();

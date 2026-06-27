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

addTask.onclick = function (event) {
    event.preventDefault();
    openForm();
};

closeBtn.onclick = function (event) {
    event.preventDefault();
    closeForm();
};

async function taskInfo(id) {
    try {
        const response = await fetch(`http://localhost:3000/task/${id}`);
        const task = await response.json();
        inputElement.value = task.title;
        descriptionElement.value = task.description;
        priorityElement.value = task.priority;
        startTimeElement.value = task.startTime;
        endTimeElement.value = task.endTime;
        dueDateElement.value = task.DueDate;
        cardColorElement.value = task.cardColor;
    } catch (e) {
        console.log(e);
    }
}

taskGrid.onclick = async function (event) {
    const btnEdit = event.target.closest(".btnEdit");
    if (btnEdit) {
        openForm();

        const titleTask = addModal.querySelector(".modal-title");
        if (titleTask) {
            titleTask.dataset.original = titleTask.textContent;
            titleTask.textContent = "Edit task";
        }

        const idTask = btnEdit.dataset.id;
        await taskInfo(idTask);
        indexEdit = idTask;
    }

    const btnComplete = event.target.closest(".btn-complete");
    if (btnComplete) {
        const idTask = btnComplete.dataset.id;
        const task = taskList.find((task) => task.id === idTask);
        if (task) {
            task.isComplete = !task.isComplete;
            await completeTask(idTask, task.isComplete);
            renderTasks();
        }
    }
    const btnDelete = event.target.closest(".btn-Delete");
    if (btnDelete) {
        const idTask = btnDelete.dataset.id;
        const task = taskList.find((task) => task.id === idTask);
        if (confirm(`Bạn có chắc chắn muốn xóa ${task.title}?`)) {
            await deleteTask(idTask);
            renderTasks();
        }
    }
};

modalForm.onsubmit = async function (event) {
    event.preventDefault();

    if (indexEdit) {
        await editTask(indexEdit);
    } else {
        await postTask();
    }

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
        .map(function (task) {
            return `
        <div class="task-card ${task.cardColor} ${task.isComplete ? "completed" : ""} ">
                    <div class="task-header">
                        <h3 class="task-title" data-original="${task.title}">${task.title}</h3>
                        <button class="task-menu">
                            <i class="fa-solid fa-ellipsis fa-icon"></i>
                            <div class="dropdown-menu">
                                <div class="dropdown-item btnEdit" data-id="${task.id}">
                                    <i
                                        class="fa-solid fa-pen-to-square fa-icon"
                                    ></i>
                                    Edit
                                </div>
                                <div class="dropdown-item complete btn-complete" data-id="${task.id}">
                                    <i class="fa-solid fa-check fa-icon"></i>
                                    ${task.isComplete ? "Mark as Active" : "Mark as Complete"}
                                </div>
                                <div class="dropdown-item delete btn-Delete" data-id="${task.id}">
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

    taskGrid.innerHTML = DOMPurify.sanitize(html);
}

async function completeTask(idTask, isComplete) {
    return fetch(`http://localhost:3000/task/${idTask}`, {
        method: "PATCH",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            isComplete: isComplete,
        }),
    })
        .then((res) => res.json())
        .catch((error) => console.log(error));
}

async function deleteTask(idTask) {
    return fetch(`http://localhost:3000/task/${idTask}`, {
        method: "DELETE",
    })
        .then()
        .catch((error) => console.log(error));
}

async function editTask(indexEdit) {
    return fetch(`http://localhost:3000/task/${indexEdit}`, {
        method: "PATCH",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            title: inputElement.value,
            description: descriptionElement.value,
            priority: priorityElement.value,
            startTime: startTimeElement.value,
            endTime: endTimeElement.value,
            DueDate: dueDateElement.value,
            cardColor: cardColorElement.value,
            isComplete: false,
        }),
    })
        .then((res) => res.json())
        .catch((error) => console.log(error));
}

async function postTask() {
    return fetch("http://localhost:3000/task", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            title: inputElement.value,
            description: descriptionElement.value,
            priority: priorityElement.value,
            startTime: startTimeElement.value,
            endTime: endTimeElement.value,
            DueDate: dueDateElement.value,
            cardColor: cardColorElement.value,
            isComplete: false,
        }),
    })
        .then((res) => res.json())
        .catch((error) => console.log(error));
}

async function renderUI() {
    const response = await fetch("http://localhost:3000/task");
    taskList = await response.json();
    renderTasks();
}

renderUI();

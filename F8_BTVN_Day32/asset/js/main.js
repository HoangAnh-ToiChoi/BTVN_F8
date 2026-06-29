const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);
const folderItem = $("#fileTree");
const contextMenu = $("#contextMenu");
const menuRename = $("#menuRename");
const menuDelete = $("#menuDelete");

let currentNode = null;

const tree = [
    {
        type: "folder",
        name: "src",
        children: [
            {
                type: "folder",
                name: "components",
                children: [
                    { type: "file", name: "Button.js" },
                    { type: "file", name: "Input.js" },
                    { type: "file", name: "Card.js" },
                ],
            },
            {
                type: "folder",
                name: "services",
                children: [
                    { type: "file", name: "api.js" },
                    { type: "file", name: "auth.js" },
                ],
            },
            { type: "file", name: "index.js" },
            { type: "file", name: "App.js" },
            { type: "file", name: "main.js" },
        ],
    },
    {
        type: "folder",
        name: "public",
        children: [
            {
                type: "folder",
                name: "images",
                children: [
                    { type: "file", name: "hero.png" },
                    { type: "file", name: "avatar.png" },
                ],
            },
            { type: "file", name: "index.html" },
            { type: "file", name: "favicon.ico" },
            { type: "file", name: "manifest.json" },
        ],
    },
    {
        type: "folder",
        name: "assets",
        children: [
            {
                type: "folder",
                name: "fonts",
                children: [
                    { type: "file", name: "Roboto.woff2" },
                    { type: "file", name: "OpenSans.woff2" },
                ],
            },
            {
                type: "folder",
                name: "icons",
                children: [
                    { type: "file", name: "home.svg" },
                    { type: "file", name: "search.svg" },
                    { type: "file", name: "user.svg" },
                ],
            },
            { type: "file", name: "logo.png" },
            { type: "file", name: "banner.jpg" },
        ],
    },
    {
        type: "folder",
        name: "config",
        children: [
            {
                type: "folder",
                name: "environments",
                children: [
                    { type: "file", name: "dev.env" },
                    { type: "file", name: "prod.env" },
                ],
            },
            { type: "file", name: "webpack.config.js" },
            { type: "file", name: "babel.config.js" },
        ],
    },
    {
        type: "folder",
        name: "tests",
        children: [
            {
                type: "folder",
                name: "unit",
                children: [
                    { type: "file", name: "sum.test.js" },
                    { type: "file", name: "filter.test.js" },
                ],
            },
            { type: "file", name: "setup.js" },
            { type: "file", name: "jest.config.js" },
        ],
    },
    {
        type: "folder",
        name: "docs",
        children: [
            { type: "file", name: "api.md" },
            { type: "file", name: "usage.md" },
            { type: "file", name: "changelog.md" },
        ],
    },
    {
        type: "folder",
        name: "scripts",
        children: [
            { type: "file", name: "build.js" },
            { type: "file", name: "deploy.js" },
            { type: "file", name: "start.js" },
        ],
    },
    {
        type: "folder",
        name: "styles",
        children: [
            { type: "file", name: "global.css" },
            { type: "file", name: "theme.css" },
        ],
    },
    {
        type: "folder",
        name: "utils",
        children: [
            { type: "file", name: "helpers.js" },
            { type: "file", name: "validators.js" },
        ],
    },
    {
        type: "folder",
        name: "empty_dir",
        children: [],
    },
    { type: "file", name: "package.json" },
    { type: "file", name: "README.md" },
    { type: "file", name: "vite.config.js" },
    { type: "file", name: ".gitignore" },
];

function renderTree(treeArray) {
    treeArray.forEach(function (tree) {
        folderItem.appendChild(createNode(tree));
    });
}

function getFileIcon(fileName) {
    if (fileName.endsWith(".js"))
        return '<i class="fa-brands fa-js text-js"></i>';
    if (fileName.endsWith(".css"))
        return '<i class="fa-brands fa-css3-alt text-css"></i>';
    if (fileName.endsWith(".html"))
        return '<i class="fa-brands fa-html5 text-html"></i>';
    if (fileName.endsWith(".json"))
        return '<i class="fa-solid fa-file-code text-json"></i>';
    if (fileName.endsWith(".md"))
        return '<i class="fa-solid fa-circle-info text-info"></i>';
    return '<i class="fa-regular fa-file"></i>';
}

function createNode(node) {
    if (node.type.includes("file")) {
        const item = document.createElement("div");
        const itemChild = document.createElement("div");
        item.classList.add("tree-item", "file");
        itemChild.classList.add("tree-item-content");
        itemChild.innerHTML = `
         <span class="chevron-placeholder"></span>
        <span class="icon"></span>${getFileIcon(node.name)}</span>
        <span class="name">${node.name}</span>`;
        item.appendChild(itemChild);
        return item;
    }

    if (node.type.includes("folder")) {
        const item = document.createElement("div");
        const itemChild = document.createElement("div");
        item.classList.add("tree-item", "folder", "collapsed");
        itemChild.classList.add("tree-item-content");
        itemChild.innerHTML = `
        <span class="chevron"><i class="fa-solid fa-chevron-right"></i></span>
        <span class="icon"><i class="fa-solid fa-folder text-folder"></i></span>
        <span class="name">${node.name}</span>`;
        item.appendChild(itemChild);

        if (node.children && node.children.length > 0) {
            const childrenContainer = document.createElement("div");
            childrenContainer.classList.add("tree-children");
            node.children.forEach(function (child) {
                childrenContainer.appendChild(createNode(child));
            });
            item.appendChild(childrenContainer);
        }
        return item;
    }
}

function handleRename(input, nameSpan) {
    let isFinished = false;
    const finshRename = (saveValue) => {
        if (isFinished) return;

        isFinished = true;

        if (saveValue) {
            const newContext = input.value.trim();
            if (newContext !== "") {
                nameSpan.textContent = newContext;
            }

            const fileIcon = input
                .closest(".tree-item.file")
                ?.querySelector(".icon");

            if (fileIcon) {
                fileIcon.innerHTML = getFileIcon(newContext);
            }
        }
        input.replaceWith(nameSpan);
    };

    input.addEventListener("blur", () => finshRename(input.value));
    input.addEventListener("keydown", (e) => {
        if (e.key === "Enter") {
            finshRename(true);
        }
        if (e.key === "Escape") {
            finshRename(false);
        }
    });
}

//xử lý chọn file, đóng mở folder
folderItem.onclick = function (event) {
    const folder = event.target.closest(".tree-item.folder");
    let examClosing = false;

    if (folder) {
        const isClosing = folder.classList.toggle("collapsed");
        examClosing = isClosing;
        folder.classList.toggle("expanded", !isClosing);
    }

    const itemContent = event.target.closest(".tree-item-content");

    if (itemContent) {
        const active = folderItem.querySelector(".tree-item-content.selected");
        if (active) {
            active.classList.remove("selected");
        }

        if (!examClosing) {
            itemContent.classList.add("selected");
        }
    }
};

// Xử lý contextmenu
folderItem.oncontextmenu = function (e) {
    const itemContent = e.target.closest(".tree-item-content");

    if (itemContent) {
        e.preventDefault();
        currentNode = itemContent;
        contextMenu.style.left = `${e.clientX}px`;
        contextMenu.style.top = `${e.clientY}px`;
        contextMenu.classList.add("active");
    }
};

document.onclick = function () {
    contextMenu.classList.remove("active");
};

menuRename.onclick = function () {
    if (!currentNode) return;

    const spanName = currentNode.querySelector(".name");
    const oldName = spanName.textContent;

    const input = document.createElement("input");
    input.value = oldName;
    input.classList.add("input-rename");

    spanName.replaceWith(input);
    input.focus();
    input.select();
    handleRename(input, spanName);
    contextMenu.classList.remove("active");
};

menuDelete.onclick = function (event) {
    if (!currentNode) return;
    const itemContent = currentNode.closest(".tree-item");
    const name = currentNode.querySelector(".name");
    if (itemContent) {
        if (confirm(`Bạn có chắc chắn muốn xóa ${name.textContent}?`)) {
            itemContent.remove();
            currentNode = null;
        }
    }
};

renderTree(tree);

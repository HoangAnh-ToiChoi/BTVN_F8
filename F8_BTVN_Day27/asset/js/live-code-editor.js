const input = document.querySelector(".editor");
const result = document.querySelector(".result");
const contextMenu = document.querySelector(".context-menu");
const container = document.querySelector(".container");

function hiddenContextMenu() {
    contextMenu.style.opacity = "0";
    contextMenu.style.visibility = "hidden";
}

input.addEventListener("input", (e) => {
    result.srcdoc = e.target.value;
});

window.addEventListener("keydown", (e) => {
    if (e.key === "F5" || (e.ctrlKey && e.key === "r")) {
        e.preventDefault();
        confirm("Bạn có chắc chắn muốn tải lại trang không?");
    }
});

input.addEventListener("contextmenu", (e) => {
    if (e.button === 2) {
        e.preventDefault();
        contextMenu.style.opacity = "1";
        contextMenu.style.visibility = "visible";
        const menuWidth = contextMenu.offsetWidth;
        const menuHeight = contextMenu.offsetHeight;
        const windowWidth = window.innerWidth;
        const windowHeight = window.innerHeight;

        const left =
            e.clientX + menuWidth > windowWidth
                ? windowWidth - menuWidth
                : e.clientX;

        const top =
            e.clientY + menuHeight > windowHeight
                ? windowHeight - menuHeight
                : e.clientY;

        contextMenu.style.left = left + "px";
        contextMenu.style.top = top + "px";
    }
});

contextMenu.addEventListener("click", (e) => {
    if (e.button === 0) {
        result.srcdoc = "";
        input.value = "";
        hiddenContextMenu();
    }
});

container.addEventListener("click", (e) => {
    if (input.contains(e.target)) {
        hiddenContextMenu();
    }
});

window.addEventListener("blur", () => {
    contextMenu.style.opacity = "0";
    contextMenu.style.visibility = "hidden";
});

window.addEventListener(
    "wheel",
    () => {
        hiddenContextMenu();
    },
    true,
);

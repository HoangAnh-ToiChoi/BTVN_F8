const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const checkboxAll = $(".js-checkedAll");
const checkboxList = $$(".js-checked");
const countEl = $(".count");

function handleCheckedAll() {
    const checkCount = Array.from(checkboxList).filter((e) => e.checked).length;
    const total = checkboxList.length;

    checkboxAll.indeterminate = checkCount > 0 && checkCount < total;

    checkboxAll.checked = checkCount === total;

    if (countEl) {
        countEl.textContent = `Đã chọn ${checkCount}`;
    }
}
checkboxList.forEach((checked) => {
    checked.addEventListener("change", handleCheckedAll);
});

checkboxAll.addEventListener("change", (e) => {
    const isChecked = e.target.checked;

    checkboxList.forEach((el) => {
        el.checked = isChecked;
    });

    handleCheckedAll();
});

handleCheckedAll();

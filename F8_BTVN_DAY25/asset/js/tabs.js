const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const tabs = $$(".js-tab");

tabs.forEach((tab) => {
    const tabList = tab.querySelectorAll(".js-tab-item");
    const tabContent = tab.querySelectorAll(".js-content");

    if (tabList.length) tabList[0].classList.add("active");
    if (tabContent.length) tabContent[0].classList.add("active");

    tabList.forEach((e, index) => {
        e.onclick = function () {
            const activeTab = tab.querySelector(".js-tab-item.active");
            const activeContent = tab.querySelector(".js-content.active");
            if (activeTab) {
                activeTab.classList.remove("active");
            }
            this.classList.add("active");
            if (activeContent) {
                activeContent.classList.remove("active");
            }
            tabContent[index].classList.add("active");
        };
    });
});

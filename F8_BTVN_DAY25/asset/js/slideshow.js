const btnControls = document.querySelectorAll(".control");
const slideList = Array.from(document.querySelectorAll(".slide-item"));
const slideShow = document.querySelector(".slide-show");
const dots = document.querySelectorAll(".dot");
let currentIndex = 1;
let exam = false;
let autoplayTimer;

const lengthSlides = slideList.length - 1;

if (lengthSlides) {
    const lastItem = slideList[0].cloneNode(true);
    slideShow.appendChild(lastItem);
    slideList.push(lastItem);
}

if (lengthSlides) {
    const firstItem = slideList[slideList.length - 2].cloneNode(true);
    slideShow.insertBefore(firstItem, slideList[0]);
    slideList.unshift(firstItem);
}

function handleNext() {
    if (exam) return;
    exam = true;
    currentIndex = Math.min(currentIndex + 1, slideList.length - 1);
    slideShow.style.transition = "all 0.3s ease-in-out";
    slideShow.style.transform = `translateX(-${currentIndex * 100}%)`;
    updateDots();
}

function handlePrev() {
    if (exam) return;
    exam = true;
    currentIndex = Math.max(0, --currentIndex);
    slideShow.style.transition = "all 0.3s ease-in-out";
    slideShow.style.transform = `translateX(-${currentIndex * 100}%)`;
    updateDots();
}

function startAutoplay() {
    autoplayTimer = setInterval(() => {
        handleNext();
    }, 3000);
}

function stopAutoplay() {
    clearInterval(autoplayTimer);
}

function updateDots() {
    let indexDot = currentIndex - 1;
    if (indexDot < 0) indexDot = dots.length - 1;
    else if (indexDot > dots.length - 1) indexDot = 0;

    dots.forEach((dot) => dot.classList.remove("active"));

    dots[indexDot].classList.add("active");
}

slideShow.style.transition = "none";
slideShow.style.transform = `translateX(-${currentIndex * 100}%)`;

btnControls.forEach((btn) => {
    btn.addEventListener("click", (e) => {
        slideShow.style.transition = "all 0.3s ease-in-out";

        if (e.target.matches(".btn-prev")) {
            handlePrev();
        }

        if (e.target.matches(".btn-next")) {
            handleNext();
        }
    });
});

slideShow.ontransitionend = () => {
    exam = false;

    if (currentIndex === slideList.length - 1) {
        currentIndex = 1;
        slideShow.style.transition = "none";
        slideShow.offsetWidth;
        slideShow.style.transform = `translateX(-${currentIndex * 100}%)`;
    }

    if (currentIndex === 0) {
        currentIndex = slideList.length - 2;
        slideShow.style.transition = "none";
        slideShow.offsetWidth;
        slideShow.style.transform = `translateX(-${currentIndex * 100}%)`;
    }
};

startAutoplay();
updateDots();

slideShow.addEventListener("mouseenter", stopAutoplay);
slideShow.addEventListener("mouseleave", startAutoplay);

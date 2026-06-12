const users = [
    {
        id: 1,
        name: "Nguyễn Thảo",
        age: 22,
        job: "Nhiếp ảnh gia tự do",
        bio: "Thích chụp ảnh, du lịch bụi và khám phá những quán cà phê ẩn mình ở Sài Gòn. Cùng đi chụp hình nhé! 📸✨",
        image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=600&q=80", // <- Dán đường dẫn ảnh của bạn ở đây
    },
    {
        id: 2,
        name: "Trần Minh",
        age: 25,
        job: "Kỹ sư phần mềm",
        bio: "Thích code, thích chạy bộ và nấu ăn. Đang tìm một người cùng chia sẻ sở thích ẩm thực và cà phê cuối tuần. ☕️🍳",
        image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=600&q=80", // <- Dán đường dẫn ảnh của bạn ở đây
    },
    {
        id: 3,
        name: "Lê Vy",
        age: 23,
        job: "Nhà thiết kế đồ họa",
        bio: "Mê vẽ vời, yêu mèo và thích nhạc Indie. Rất vui nếu tìm được bạn bè có cùng gu âm nhạc! 🐱🎨🎵",
        image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=600&q=80", // <- Dán đường dẫn ảnh của bạn ở đây
    },
    {
        id: 4,
        name: "Hoàng Long",
        age: 26,
        job: "Huấn luyện viên Gym",
        bio: "Chuyên gia thể hình & dinh dưỡng. Rất thích du lịch, leo núi và thử thách bản thân. Keep moving! 💪🏔️",
        image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=600&q=80", // <- Dán đường dẫn ảnh của bạn ở đây
    },
    {
        id: 5,
        name: "Phạm Hà",
        age: 24,
        job: "Biên tập viên nội dung",
        bio: "Yêu viết lách, sách và phim điện ảnh. Tìm kiếm những cuộc trò chuyện sâu sắc và thú vị. 📚🎬",
        image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=600&q=80", // <- Dán đường dẫn ảnh của bạn ở đây
    },
];

const cardArea = document.querySelector(".card-area");
let isDragging = false;
let startX = 0;
let startY = 0;
const threshold = 80;

function renderUserCard() {
    const cardContainer = document.getElementById("card-container");
    users.forEach((user) => {
        const cardUser = document.createElement("div");
        cardUser.classList.add("tender-card");
        cardUser.innerHTML = `
            <div class="card-image">
                <img src="${user.image}" alt="${user.name}" />
                <div class="stamp stamp-like">✨</div>
                <div class="stamp stamp-nope">😢</div>
            </div>
            <div class="card-info">
                <h3 >${user.name}</h3>
                <p class="age">${user.age}</p>
                <p class="job">${user.job}</p>
                <p class="bio">${user.bio}</p>
            </div>
        `;
        cardContainer.appendChild(cardUser);
    });
}

function handleDragStart(e) {
    e.preventDefault();
    startX = e.clientX;
    startY = e.clientY;
    isDragging = true;
}

function handleDragMove(e) {
    if (!isDragging) return;
    const diffX = e.clientX - startX;
    const diffY = e.clientY - startY;
    const rotation = diffX * 0.08;

    const card = document.querySelector(".tender-card:last-child");
    card.style.transform = `translate(${diffX}px, 0px) rotate(${rotation}deg)`;
    if (diffX > 10) {
        card.classList.add("swipe-right-tone");
        card.classList.remove("swipe-left-tone");
    } else if (diffX < -10) {
        card.classList.add("swipe-left-tone");
        card.classList.remove("swipe-right-tone");
    } else {
        card.classList.remove("swipe-left-tone", "swipe-right-tone");
    }
}

function handleDragEnd(e) {
    const card = document.querySelector(".tender-card:last-child");
    isDragging = false;
    const diffX = e.clientX - startX;
    const diffY = e.clientY - startY;
    if (Math.abs(diffX) > threshold) {
        card.classList.add("swiping");
        const rotation = diffX * 0.08;
        const dric = diffX > 0 ? 1 : -1;
        const exit = dric * (window.innerWidth + 300);

        card.style.transform = `translate(${exit}px, 0px) rotate(${rotation}deg)`;

        // Chờ thẻ quẹt bay hẳn ra ngoài màn hình xong mới xóa khỏi HTML
        card.addEventListener(
            "transitionend",
            () => {
                card.remove();
            },
            { once: true },
        );
    } else {
        card.classList.add("returning");
        card.style.transform = "";
        card.classList.remove("swipe-left-tone", "swipe-right-tone");
        card.addEventListener("transitionend", () => {
            card.classList.remove("returning");
        });
    }
}

cardArea.addEventListener("mousedown", handleDragStart);

cardArea.addEventListener("mousemove", handleDragMove);

cardArea.addEventListener("mouseup", handleDragEnd);

renderUserCard();

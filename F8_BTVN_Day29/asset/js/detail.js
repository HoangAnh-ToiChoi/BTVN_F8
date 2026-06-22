const urlParams = new URLSearchParams(window.location.search);
const productId = urlParams.get("id");

async function getDetail() {
    try {
        const res = await fetch(`https://dummyjson.com/products/${productId}`);
        const product = await res.json();

        const detailContainer = document.querySelector(".detail-container");

        const productImg = document.createElement("div");
        productImg.classList.add("detail-img");
        detailContainer.appendChild(productImg);

        const detailImg = document.createElement("img");
        detailImg.src = product.thumbnail;
        productImg.appendChild(detailImg);

        const productInfo = document.createElement("div");
        productInfo.classList.add("detail-info");
        detailContainer.appendChild(productInfo);

        const detailInfoTitle = document.createElement("h3");
        detailInfoTitle.classList.add("detail-title");
        detailInfoTitle.textContent = product.title;
        productInfo.appendChild(detailInfoTitle);

        const detailInfoPrice = document.createElement("span");
        detailInfoPrice.classList.add("detail-price");
        detailInfoPrice.textContent = `$${product.price}`;
        productInfo.appendChild(detailInfoPrice);

        const detailDescription = document.createElement("p");
        detailDescription.classList.add("detail-description");
        detailDescription.textContent = product.description;
        productInfo.appendChild(detailDescription);
    } catch (e) {
        throw new Error("Sản phẩm không tồn tại");
    }
}
getDetail();

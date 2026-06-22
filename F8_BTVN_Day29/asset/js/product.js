async function getProduct(url) {
    const respone = await fetch(url);
    const data = await respone.json();
    const products = data.products;
    console.log(products);
    const main = document.querySelector(".main");
    const productList = document.createElement("div");
    productList.classList.add("product-list");
    main.appendChild(productList);

    try {
        products.forEach((product) => {
            const productItem = document.createElement("a");
            productItem.classList.add("product");
            productItem.href = `./detail.html?id=${product.id}`;

            productList.appendChild(productItem);

            const productImage = document.createElement("div");
            productImage.classList.add("product-img");
            productItem.appendChild(productImage);

            const productImageImg = document.createElement("img");
            productImageImg.onload = () => {
                productImageImg.classList.add("loaded");
            };
            productImageImg.src = product.thumbnail;
            productImage.appendChild(productImageImg);

            const productInfo = document.createElement("div");
            productInfo.classList.add("product-info");
            productItem.appendChild(productInfo);

            const productInfoTitle = document.createElement("h3");
            productInfoTitle.classList.add("product-title");
            productInfoTitle.textContent = product.title;
            productInfo.appendChild(productInfoTitle);

            const productInfoPrice = document.createElement("span");
            productInfoPrice.classList.add("product-price");
            productInfoPrice.textContent = `$${product.price}`;
            productInfo.appendChild(productInfoPrice);
        });
    } catch (e) {
        throw new Error("Danh sách sản phẩm không tồn tại");
    }
}

getProduct("https://dummyjson.com/products");

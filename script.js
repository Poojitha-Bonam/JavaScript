let create_ele = document.createElement("h1")
create_ele.textContent = "Let the coin decide your destiny!"
create_ele.classList = "heading"
document.body.appendChild(create_ele)

let coin_img = document.createElement("img")
coin_img.src="https://upload.wikimedia.org/wikipedia/commons/1/16/Indian_1_Rupee_Coin_Reverse_or_Tails.jpg"
document.body.appendChild(coin_img)
coin_img.classList = "tails"

let create_btn = document.createElement("button")
create_btn.textContent = "Toss the Coin"
create_btn.classList = "btn"
document.body.appendChild(create_btn)

create_btn.addEventListener("click", function() {
    let random = Math.floor(Math.random() * 2);
    if (random === 0) {
        coin_img.src = "https://upload.wikimedia.org/wikipedia/commons/1/16/Indian_1_Rupee_Coin_Reverse_or_Tails.jpg";
        coin_img.classList = "tails";
    } else {
        coin_img.src = "https://banknotecoinstamp.com/cdn/shop/products/302_92188f9e-1ddf-48cc-82be-f16451a8e480.jpg?v=1674642291";
        coin_img.classList = "heads";
    }
});

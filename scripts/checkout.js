let cartAdd = JSON.parse(localStorage.getItem("cartPage")) || [];
let totalPrice;

function  displayData (productData) {
    document.getElementById("cart_products").innerHTML = null;
    totalPrice = 0;

    productData.forEach (function (elem, index) {
        totalPrice = totalPrice+ Number(elem.price);
        
        let box = document.createElement("div");
        box.setAttribute("id", "box")

        let productImg = document.createElement("img");
        productImg.setAttribute("src", elem.img);

        let details = document.createElement("div");

        let brandName = document.createElement("h4");
        brandName.innerText = elem.brand;

        let productName = document.createElement("p");
        productName.innerText = elem.name;

        let productPrice = document.createElement("h4");
        productPrice.innerText = "€ " + elem.price;

        let img_details = document.createElement("div");
        img_details.setAttribute("id", "img_details")

        let productDelete = document.createElement("button");
        productDelete.innerText = "✕ Remove";
        productDelete.addEventListener("click", function() {
            removeItems(index);
        })

        let hr = document.createElement("hr");

        details.append(brandName,productName,productDelete)
        img_details.append(productImg,details)
        box.append(img_details,productPrice);
        document.getElementById("cart_products").append(box,hr);
        
    })
    // console.log(totalPrice);
    document.getElementById("total_price").innerText = "Grand Total	€ " + totalPrice;
}
displayData (cartAdd);


function removeItems(index) {
    cartAdd.splice(index,1);
    localStorage.setItem("cartPage", JSON.stringify(cartAdd));
    window.location.reload();
}
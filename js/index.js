function addItem(product) {
    let value = document.querySelectorAll('.product-qty')[product];
    value.innerHTML ++;
    console.log(value.innerHTML);
}

function removeItem(product) {
    let value = document.querySelectorAll('.product-qty')[product];
    if (value.innerHTML > 1) {
        value.innerHTML --;
    }
    console.log(value.innerHTML);
}
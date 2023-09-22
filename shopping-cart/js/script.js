// Defining button
let macbook = document.getElementById('laptop_btn');
let pixel = document.getElementById('pixel_btn');
let eset = document.getElementById('eset_btn');
let amazfit = document.getElementById('amazfit_btn');
let cart = document.querySelector('ul');
let remove = document.querySelector('ul');

macbook.addEventListener('click', addToCart);
pixel.addEventListener('click', addToCart);
eset.addEventListener('click', addToCart);
amazfit.addEventListener('click', addToCart);
remove.addEventListener('click', removeProduct);

function addToCart(e) {
    const temp = document.createElement('li');
    const link = document.createElement('a');
    const productName = e.target.previousElementSibling.previousElementSibling.previousElementSibling.textContent;
    const productPrice = e.target.previousElementSibling.previousElementSibling.textContent;
    link.setAttribute('href', '#');
    link.textContent = "Remove";
    link.style.textDecoration = 'none';
    link.style.border = '1px solid green';
    link.style.backgroundColor = 'black';
    link.style.color = 'white';
    temp.appendChild(document.createTextNode(productName + " ----"));
    temp.appendChild(document.createTextNode(productPrice + "   "));
    temp.appendChild(link);
    temp.style.marginTop = '5px';
    cart.appendChild(temp);
}

function removeProduct(e) {
    if (e.target.hasAttribute('href')) {
        const product = e.target.parentElement;
        product.remove();
    }
}
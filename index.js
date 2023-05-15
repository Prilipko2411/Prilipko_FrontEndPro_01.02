let containerFruit = document.getElementById("conteinerFruit");
let isContainerVisible1 = false;

function showCategory1() {
    if (isContainerVisible1) {
        containerFruit.style.display = "none";
        isContainerVisible1 = false;
    } else {
        containerFruit.style.display = "block";
        isContainerVisible1 = true;

        containerVegetables.style.display = "none";
        isContainerVisible2 = false;
        containerSweets.style.display = "none";
        isContainerVisible3 = false;
    }
}

let containerVegetables = document.getElementById("conteinerVegetables");
let isContainerVisible2 = false;

function showCategory2() {
    if (isContainerVisible2) {
        containerVegetables.style.display = "none";
        isContainerVisible2 = false;
    } else {
        containerVegetables.style.display = "block";
        isContainerVisible2 = true;

        containerFruit.style.display = "none";
        isContainerVisible1 = false;
        containerSweets.style.display = "none";
        isContainerVisible3 = false;
    }
}

let containerSweets = document.getElementById("conteinerSweets");
let isContainerVisible3 = false;

function showCategory3() {
    if (isContainerVisible3) {
        containerSweets.style.display = "none";
        isContainerVisible3 = false;
    } else {
        containerSweets.style.display = "block";
        isContainerVisible3 = true;

        containerFruit.style.display = "none";
        isContainerVisible1 = false;
        containerVegetables.style.display = "none";
        isContainerVisible2 = false;
    }
}

let appleItem = document.getElementById('item-apple');
let orangeItem = document.getElementById('item-orange');
let carrotItem = document.getElementById('item-carrot')
let tomatoItem = document.getElementById('item-tomato')
let chocolateItem = document.getElementById('item-chocolate')
let candyItem = document.getElementById('item-candy')

appleItem.addEventListener('click', showProductInformation);
orangeItem.addEventListener('click', showProductInformation);
carrotItem.addEventListener('click', showProductInformation);
tomatoItem.addEventListener('click', showProductInformation);
chocolateItem.addEventListener('click', showProductInformation);
candyItem.addEventListener('click', showProductInformation);

function showProductInformation() {
    let productId = this.id.replace('item-', 'product-informator-');
    let productInformator = document.getElementById(productId);
  
    let allProductInformators = document.getElementsByClassName('info');
  for (let i = 0; i < allProductInformators.length; i++) {
    allProductInformators[i].style.display = 'none';
  }
  
  productInformator.style.display = 'block';
}

let buyButtons = document.getElementsByClassName('buy-button');
for (let i = 0; i < buyButtons.length; i++) {
  buyButtons[i].addEventListener('click', buyProduct);
}

function buyProduct() {
    let productName = this.parentNode.querySelector('h2').textContent;
alert('Товар "' + productName + '" - куплен!');

var allProductInformators = document.getElementsByClassName('info');
for (let i = 0; i < allProductInformators.length; i++) {
allProductInformators[i].style.display = 'none';
}
var allProductInformators = document.getElementsByClassName('category');
for (let i = 0; i < allProductInformators.length; i++) {
allProductInformators[i].style.display = 'none';
}
}
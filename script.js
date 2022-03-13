/* eslint-disable func-names */
/* eslint-disable no-plusplus */
// Make Pop-up Menu appear when you hover profile and cart
// 1. Select Profile and Cart
const btnsShowPopup = document.querySelectorAll('.show-popup');
const popup = document.querySelector('.cart-item--popup');

const openPopup = function () {
  popup.classList.remove('hidden');
};

const closePopup = function () {
  popup.classList.add('hidden');
};

for (let i = 0; i < btnsShowPopup.length; i++) {
  btnsShowPopup[i].addEventListener('click', () => {
    if (popup.classList.contains('hidden')) {
      openPopup();
    } else {
      closePopup();
    }
  });
}

// Make Modal appear when you click on the button
// 1. Select button
const btnShowModal = document.querySelector('.show-modal');
const modal = document.querySelector('.hero-modal');
const overlay = document.querySelector('.overlay');
const closeModalBtn = document.querySelector('.close-modal');
// SIDEBAR
const sidebar = document.querySelector('.side-bar');
const sidebarBtn = document.querySelector('.side-bar-btn');
const sidebarCloseBtn = document.querySelector('.close-sidebar');

const openModal = function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModel = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

const openSideBar = function () {
  sidebar.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeSideBar = function () {
  sidebar.classList.add('hidden');
  overlay.classList.add('hidden');
};

// show - modal;
btnShowModal.addEventListener('click', () => {
  openModal();
});

closeModalBtn.addEventListener('click', () => {
  closeModel();
});

// sidebar
sidebarBtn.addEventListener('click', () => {
  openSideBar();
});

sidebarCloseBtn.addEventListener('click', () => {
  closeSideBar();
});

const herothumbs = document.querySelectorAll('.hero-option-img');
const heroThumbImgs = document.querySelectorAll('.hero-thumb-img');
const heroImg = document.querySelector('.hero-main-img');

for (let i = 0; i < 4; i++) {
  herothumbs[i].addEventListener('click', () => {
    heroImg.src = `/images/image-product-${i + 1}.jpg`;
    for (let j = 0; j < 4; j++) {
      herothumbs[j].classList.remove('border');
      heroThumbImgs[j].classList.remove('selected');
    }
    herothumbs[i].classList.add('border');
    heroThumbImgs[i].classList.add('selected');
  });
}

const modalThumbs = document.querySelectorAll('.hero-modal-img');
const modalImg = document.querySelector('.hero-main-modal-img');
const nextBtn = document.querySelector('.btn--right');
const previousBtn = document.querySelector('.btn--left');
const thumbImg = document.querySelectorAll('.modal-thumb-img');

let order = 1;

nextBtn.addEventListener('click', () => {
  if (order >= 1 && order < 4) {
    order++;
    for (let j = 0; j < 4; j++) {
      modalThumbs[j].classList.remove('border');
      thumbImg[j].classList.remove('selected');
      modalThumbs[j].style.transition = '0.3s';
    }
    modalImg.src = `/images/image-product-${order}.jpg`;
    modalThumbs[order - 1].classList.add('border');
    thumbImg[order - 1].classList.add('selected');
  }
});

previousBtn.addEventListener('click', () => {
  if (order > 1 && order < 5) {
    order--;
    for (let j = 0; j < 4; j++) {
      modalThumbs[j].classList.remove('border');
      thumbImg[j].classList.remove('selected');
      modalThumbs[j].style.transition = '0.3s';
    }
    modalImg.src = `/images/image-product-${order}.jpg`;
    modalThumbs[order - 1].classList.add('border');
    thumbImg[order - 1].classList.add('selected');
  }
});

modalThumbs.forEach((thumb, index) => {
  thumb.addEventListener('click', () => {
    modalImg.src = `/images/image-product-${index + order}.jpg`;
    for (let j = 0; j < 4; j + 1) {
      modalThumbs[j].classList.remove('border');
      thumbImg[j].classList.remove('selected');
      modalThumbs[j].style.transition = '0.3s';
    }
    modalThumbs[index].classList.add('border');
    thumbImg[index].classList.add('selected');
  });
});

// Add to cart
const addToCart = document.querySelector('.add-to-cart');
const plus = document.querySelector('.plus');
const minus = document.querySelector('.minus');
const deleteAll = document.querySelector('.cart-item--delete');
const countOfAdded = document.getElementById('count-of-added');
const emptyList = document.querySelector('.list-empty');
const cartItem = document.querySelector('.cart-list');
const itemPrice = document.getElementById('item-price');
const totalPrice = document.getElementById('total-price');
const cartItemCount = document.getElementById('count');

let count = 0;
let price = 125;
let total = 0;

const add = () => {
  count++;
  countOfAdded.textContent = count;
  cartItemCount.textContent = count;
  total = price * count;
  // give emptyList and cartItem 0.3s transition
  emptyList.style.transition = '0.3s';
  cartItem.style.transition = '0.3s';
  emptyList.classList.add('hidden');
  cartItem.classList.remove('hidden');
  if (count === 1) {
    itemPrice.textContent = '$125.00';
  } else if (count > 1) {
    itemPrice.textContent = `$125.00 x ${count} `;
    totalPrice.textContent = ` $${total}.00`;
  }
};

const remove = () => {
  if (count > 1) {
    count--;
    countOfAdded.textContent = count;
    cartItemCount.textContent = count;
    total -= price;
    itemPrice.textContent = `$125.00 x ${count} `;
    totalPrice.textContent = ` $${total}.00`;
  } else if (total === 125 && count === 1) {
    count--;
    countOfAdded.textContent = count;
    cartItemCount.textContent = count;
    itemPrice.textContent = '$125.00';
    totalPrice.textContent = '';
    emptyList.classList.remove('hidden');
    cartItem.classList.add('hidden');
  } else {
    countOfAdded.textContent = count;
    cartItemCount.textContent = count;
    emptyList.classList.remove('hidden');
    cartItem.classList.add('hidden');
  }
};

const trash = () => {
  count = 0;
  price = 125;
  total = 0;
  countOfAdded.textContent = count;
  cartItemCount.textContent = count;
  itemPrice.textContent = '';
  totalPrice.textContent = '';
  emptyList.classList.remove('hidden');
  cartItem.classList.add('hidden');
};
deleteAll.addEventListener('click', trash);

addToCart.addEventListener('click', add);

plus.addEventListener('click', add);

minus.addEventListener('click', remove);

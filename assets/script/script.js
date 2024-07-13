'use strict';

const shoes = document.querySelectorAll('.shoe__1');
const nextIcon = document.querySelector('.arrow__icon i:nth-child(2)')
const backIcon = document.querySelector('.arrow__icon i:nth-child(1)')
shoes.forEach(el => {
    el.style.display = 'none'
})

let currentStep = 0
shoes[currentStep].style.display = 'block';
// if (shoes[currentStep] < 0) {
//     shoes[currentStep].style.display = 'none';

// }

const shoeNext = function () {
    // shoes[currentStep].style.animation = 'open 0.7s linear';
    shoes[currentStep].style.display = 'none';
    currentStep++;

    // shoes[currentStep].style.display = 'block';
    shoes[currentStep].style.animation = 'open 0.7s ease';
    shoes[currentStep].style.display = 'block';
    backBtnShow();
    nextBtnHide();
}




const shoeBack = function () {
    shoes[currentStep].style.display = 'none';
    currentStep--
    // shoes[currentStep].style.animation = 'close 0.2s linear';
    // shoes[currentStep].style.animation = 'close 1s linear';
    shoes[currentStep].style.animation = 'open 0.7s ease';
    shoes[currentStep].style.display = 'block';
    backBtnHide();
    nextBtnShow();
}

const nextBtnHide = function () {
    if (currentStep >= shoes.length - 1) {
        nextIcon.style.display = 'none';
    }
}
const nextBtnShow = function () {
    if (currentStep < shoes.length - 1) {
        nextIcon.style.display = 'block';
    }
}

const backBtnShow = function () {
    if (currentStep >= 1) {
        backIcon.style.display = 'block';
    }
}
const backBtnHide = function () {
    if (currentStep === 0) {
        backIcon.style.display = 'none';
    }
}
backIcon.addEventListener('click', shoeBack)
nextIcon.addEventListener('click', shoeNext);
// shoes[2].style.display = 'none';
// shoes[1].classList.add('.hidden')
// shoes[2].classList.add('.hidden')
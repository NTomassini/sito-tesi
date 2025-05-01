let nextButton = document.getElementById('next');
let prevButton = document.getElementById('prev');
let carousel = document.querySelector('.carousel');
let listHTML = document.querySelector('.carousel .list');
let backButton = document.getElementById('back');

nextButton.addEventListener('click', () => showSlider('next'));
prevButton.addEventListener('click', () => showSlider('prev'));
backButton.addEventListener('click', () => carousel.classList.remove('showDetail'));

function showSlider(direction) {
    disableButtons();

    carousel.classList.remove('next', 'prev');
    let items = document.querySelectorAll('.carousel .list .item');

    if (direction === 'next') {
        listHTML.appendChild(items[0]);
        carousel.classList.add('next');
    } else {
        listHTML.prepend(items[items.length - 1]); 
        carousel.classList.add('prev');
    }

    enableButtonsAfterAnimation();
}

function disableButtons() {
    nextButton.disabled = true;
    prevButton.disabled = true;
}

function enableButtonsAfterAnimation() {
    carousel.addEventListener('animationend', () => {
        nextButton.disabled = false;
        prevButton.disabled = false;
    }, { once: true });
}


document.addEventListener('click', (event) => {
    if (event.target.classList.contains('seeMore')) {
        carousel.classList.remove('next', 'prev');
        carousel.classList.add('showDetail');
    }
});

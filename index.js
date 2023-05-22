let offset = 0;
const sliderLine = document.querySelector('.slider-line');
const prevButton = document.querySelector('.slider-prev');
const nextButton = document.querySelector('.slider-next');

nextButton.style.display = 'none';

prevButton.addEventListener('click', slide.bind(null, 'prev'));
nextButton.addEventListener('click', slide.bind(null, 'next'));

function slide(direction) {
    if (direction === 'prev') {
        offset += 285;
        if (offset > 855) {
            offset = 0;
        }
    } else {
        offset -= 285;
        if (offset < 0) {
            offset = 855;
        }
    }

    sliderLine.style.left = -offset + 'px';
    updateButtonVisibility();
}

function updateButtonVisibility() {
    nextButton.style.display = offset === 0 ? 'none' : 'block';
    prevButton.style.display = offset === 855 ? 'none' : 'block';
}


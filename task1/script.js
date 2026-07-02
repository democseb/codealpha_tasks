const images = document.querySelectorAll('.gallery img');
const lightbox = document.querySelector('.lightbox');
const lightboxImg = document.querySelector('.lightbox-img');

const closeBtn = document.querySelector('.close');
const nextBtn = document.querySelector('.next');
const prevBtn = document.querySelector('.prev');

let currentIndex = 0;

// Open Lightbox

images.forEach((img, index) => {

    img.addEventListener('click', () => {

        lightbox.style.display = 'flex';
        lightboxImg.src = img.src;

        currentIndex = index;
    });

});

// Close Lightbox

closeBtn.addEventListener('click', () => {
    lightbox.style.display = 'none';
});

// Next Image

nextBtn.addEventListener('click', () => {

    currentIndex++;

    if(currentIndex >= images.length){
        currentIndex = 0;
    }

    lightboxImg.src = images[currentIndex].src;

});

// Previous Image

prevBtn.addEventListener('click', () => {

    currentIndex--;

    if(currentIndex < 0){
        currentIndex = images.length - 1;
    }

    lightboxImg.src = images[currentIndex].src;

});

// Filter Function

function filterImages(category){

    const allImages = document.querySelectorAll('.image');

    allImages.forEach((item) => {

        if(category === 'all'){
            item.style.display = 'block';
        }

        else if(item.classList.contains(category)){
            item.style.display = 'block';
        }

        else{
            item.style.display = 'none';
        }

    });

}
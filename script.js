let currentImage = 0;
const images = document.querySelectorAll('.carousel-image');

function showImage(index) {
  images.forEach((img, i) => {
    img.style.display = i === index ? 'block' : 'none';
  });
}

function prevImage() {
  currentImage = (currentImage - 1 + images.length) % images.length;
  showImage(currentImage);
}

function nextImage() {
  currentImage = (currentImage + 1) % images.length;
  showImage(currentImage);
}

// Visa första bilden när sidan laddas
window.onload = () => showImage(currentImage);
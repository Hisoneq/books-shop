export function setupSlider() {
    let currentIndex = 0;
    const images = document.querySelectorAll('.firstPict');
    const circles = document.querySelectorAll('.main__circle');
    const totalImages = images.length;

    function showImage(index) {
        images.forEach((image, i) => {
            image.style.display = (i === index) ? 'block' : 'none';
        });
        circles.forEach((circle, i) => {
            circle.classList.toggle('active', i === index);
        });
    }

    function nextImage() {
        currentIndex = (currentIndex + 1) % totalImages;
        showImage(currentIndex);
    }

    setInterval(nextImage, 5000);

    circles.forEach((circle, index) => {
        circle.addEventListener('click', () => {
            currentIndex = index;
            showImage(currentIndex);
        });
    });

    showImage(currentIndex);
}
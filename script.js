// --- Product Color Switching ---
const colorBlackBtn = document.getElementById('color-black');
const colorWhiteBtn = document.getElementById('color-white');
const productImage = document.getElementById('product-image');
const body = document.body;

const productImages = {
    black: 'https://placehold.co/800x600/36454f/ffffff?text=Product+Image+Black',
    white: 'https://placehold.co/800x600/ffffff/36454f?text=Product+Image+White'
};

colorBlackBtn.addEventListener('click', () => {
    productImage.src = productImages.black;
    body.classList.remove('theme-white');
    body.classList.add('theme-black');
});

colorWhiteBtn.addEventListener('click', () => {
    productImage.src = productImages.white;
    body.classList.remove('theme-black');
    body.classList.add('theme-white');
});

// --- Scroll-based Animations (Intersection Observer) ---
const fadeInSections = document.querySelectorAll('.fade-in');

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
            observer.unobserve(entry.target); // Stop observing once animated
        }
    });
}, {
    threshold: 0.2 // Trigger when 20% of the section is visible
});

fadeInSections.forEach(section => {
    observer.observe(section);
});

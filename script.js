document.addEventListener('DOMContentLoaded', function () {
    // Create floating hearts
    function createHearts() {
        const container = document.getElementById('hearts-container');
        const heartCount = 50;

        for (let i = 0; i < heartCount; i++) {
            const heart = document.createElement('i');
            heart.classList.add('fas', 'fa-heart', 'heart');
            heart.style.left = Math.random() * 100 + 'vw';
            heart.style.fontSize = (10 + Math.random() * 30) + 'px';
            heart.style.animationDuration = 2 + Math.random() * 8 + 's';
            heart.style.animationDelay = Math.random() * 5 + 's';
            container.appendChild(heart);
        }
    }

    // Close popup functionality
    document.getElementById('close-btn').addEventListener('click', function () {
        document.getElementById('popup').style.display = 'none';

        // Create more hearts when closing
        createHearts();

        // Reopen popup after 5 seconds
        // setTimeout(() => {
        //     document.getElementById('popup').style.display = 'flex';
        // }, 5000);
    });

    // Initialize
    createHearts();

    // Create new hearts every 3 seconds
    setInterval(() => {
        createHearts();
    }, 3000);
});


document.addEventListener('DOMContentLoaded', function () {
    const container = document.getElementById('floating-container');
    const photoPaths = [
        "images/1.jpg",
        "images/2.jpg",
        "images/3.jpg",
        "images/4.jpg",
        "images/5.jpg",
        "images/6.jpg",
        "images/7.jpg",
        "images/8.jpg",
        "images/9.jpg",
        "images/10.jpg",
        "images/11.jpg",
        "images/12.jpg",
        "images/13.jpg",
        "images/14.jpg",
        "images/15.jpg",
        "images/16.jpg",
        "images/17.jpg",
        "images/18.jpg",
        // Add photo        
    ];

    function createFloatingElement(isPhoto) {
        const element = isPhoto ? document.createElement('img') : document.createElement('i');
        const isPhone = window.innerWidth < 480; // Detect phones specifically

        // Mobile-optimized sizes
        const baseSize = isPhone ? 70 : 130;
        const borderWidth = isPhone ? 2 : 3;

        if (isPhoto) {
            element.classList.add('floating-photo');
            element.src = photoPaths[Math.floor(Math.random() * photoPaths.length)];

            // Responsive photo styling
            element.style.width = `${baseSize}px`;
            element.style.height = `${baseSize}px`;
            element.style.border = `${borderWidth}px solid white`;
            element.style.borderRadius = '8px'; // Slightly rounded on phones

            // Error handling
            element.onerror = () => element.remove();
        } else {
            element.classList.add('fas', 'fa-heart', 'floating-heart');
            element.style.fontSize = `${isPhone ? 16 : 24}px`;
            element.style.color = `hsl(${Math.random() * 60 + 330}, 100%, 65%)`;
        }

        // Mobile-optimized positioning and animation
        element.style.left = `${Math.random() * 100}vw`;

        // Slower animations on phones
        const duration = (isPhoto ? 6 : 3) + Math.random() * (isPhone ? 4 : 6);
        element.style.animationDuration = `${duration}s`;
        element.style.animationDelay = `${Math.random() * 3}s`;

        // Smoother movement on phones
        if (isPhoto) {
            element.style.transformOrigin = 'center';
            element.style.willChange = 'transform, opacity'; // Performance boost
        }

        container.appendChild(element);

        // Cleanup (shorter on phones)
        setTimeout(() => element.remove(), isPhone ? 15000 : 20000);
    }


    // Create initial elements
    for (let i = 0; i < 30; i++) {
        createFloatingElement(i % 5 === 0);
        if (i % 10 === 0) createFloatingElement(false);
    }

    // Continuous creation
    setInterval(() => {
        createFloatingElement(Math.random() < 0.7);
    }, 800);
});
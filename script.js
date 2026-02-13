document.getElementById('tapBtn').addEventListener('click', () => {
    for (let i = 0; i < 15; i++) {
        createHeart();
    }
});

function createHeart() {
    const heart = document.createElement('div');
    heart.classList.add('floating-heart');
    heart.innerHTML = '❤️';
    
    // Random position and size
    heart.style.left = Math.random() * 100 + 'vw';
    heart.style.fontSize = Math.random() * 20 + 10 + 'px';
    heart.style.opacity = Math.random();
    
    // Random animation duration
    const duration = Math.random() * 3 + 2;
    heart.style.transition = `transform ${duration}s linear, opacity ${duration}s ease-in`;
    
    document.body.appendChild(heart);

    // Trigger animation
    setTimeout(() => {
        heart.style.transform = `translateY(-100vh) rotate(${Math.random() * 360}deg)`;
        heart.style.opacity = '0';
    }, 100);

    // Remove after done
    setTimeout(() => {
        heart.remove();
    }, duration * 1000);
}

// Auto-create some hearts on load
setInterval(createHeart, 500);

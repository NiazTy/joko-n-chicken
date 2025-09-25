const marquee = document.getElementById("marquee");
const marqueeContainer = document.getElementById("marquee-container");

marquee.innerHTML += marquee.innerHTML;

let offset = 0;
const speed = 0.5;
let paused = false;

function animate() {
if (!paused) {
    offset -= speed;
    if (Math.abs(offset) >= marquee.scrollWidth / 2) {
    offset = 0;
    }
    marquee.style.transform = `translateX(${offset}px)`;
}
requestAnimationFrame(animate);
}

// Hover event → pause/resume
marqueeContainer.addEventListener("mouseenter", () => paused = true);
marqueeContainer.addEventListener("mouseleave", () => paused = false);

animate();
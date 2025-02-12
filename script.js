let video = document.getElementById("musicVideo");
let position = 0;
let direction = 1;

function bounceVideo() {
    if (position >= 20 || position <= 0) {
        direction *= -1;
    }
    position += direction;
    video.style.transform = `translateY(${position}px)`;
    requestAnimationFrame(bounceVideo);
}

bounceVideo();

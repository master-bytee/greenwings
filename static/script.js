// scripts.js
document.addEventListener('DOMContentLoaded', function () {
    const modelButton = document.getElementById('model-button');
    const videoPopup = document.getElementById('video-popup');
    const closeBtn = document.getElementById('close-btn');

    modelButton.addEventListener('click', function () {
        videoPopup.classList.add('show');
    });

    closeBtn.addEventListener('click', function () {
        videoPopup.classList.remove('show');
    });
});

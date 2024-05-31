function checkForScreenRecording() {
    const videoElement = document.querySelector('video');
    if (videoElement) {
        // Insert an invisible overlay to disrupt recording
        const overlay = document.createElement('div');
        overlay.style.position = 'absolute';
        overlay.style.top = '0';
        overlay.style.left = '0';
        overlay.style.width = '100%';
        overlay.style.height = '100%';
        overlay.style.zIndex = '1000';
        overlay.style.backgroundColor = 'rgba(0,0,0,0.5)';
        overlay.style.display = 'none'; // Start hidden

        document.querySelector('.video-wrapper').appendChild(overlay);

        // Show the overlay intermittently
        setInterval(() => {
            overlay.style.display = 'block';
            setTimeout(() => {
                overlay.style.display = 'none';
            }, 200); // Flash for 200ms
        }, 3000); // Every 3 seconds
    }
}

document.addEventListener('DOMContentLoaded', () => {
    checkForScreenRecording();
});

// ---------------------------------------------menu bar toggemenu button------------------------------------------------------------
function toggleMenu() {
    const menuList = document.getElementById('menuList');
    menuList.classList.toggle('active');
}


// ---------------------------------------------Video Gallery------------------------------------------------------------

document.addEventListener('DOMContentLoaded', function () {
    const moreBtn = document.getElementById('moreBtn');
    const hiddenItems = document.querySelectorAll('.gallery-item.hidden');
    const galleryGrid = document.getElementById('galleryGrid');
    const videoModal = document.getElementById('videoModal');
    const modalVideo = document.getElementById('modalVideo');
    const closeModal = document.querySelector('.close-modal');
    const videoContainers = document.querySelectorAll('.video-container');

    let showingAll = false;

    // View More/Less functionality
    moreBtn.addEventListener('click', function () {
        if (showingAll) {
            // Hide all except first 3
            hiddenItems.forEach((item, index) => {
                item.classList.add('hidden');
            });
            moreBtn.textContent = 'View More';
            showingAll = false;
        } else {
            // Show all hidden items
            hiddenItems.forEach(item => {
                item.classList.remove('hidden');
            });
            moreBtn.textContent = 'View Less';
            showingAll = true;
        }

        // Smooth scroll to gallery section
        galleryGrid.scrollIntoView({ behavior: 'smooth' });
    });

    // Video playback functionality
    videoContainers.forEach(container => {
        container.addEventListener('click', function () {
            const videoUrl = this.getAttribute('data-video');
            modalVideo.src = videoUrl;
            videoModal.style.display = 'flex';
            document.body.style.overflow = 'hidden'; // Prevent scrolling when modal is open
        });
    });

    // Close modal
    closeModal.addEventListener('click', function () {
        videoModal.style.display = 'none';
        modalVideo.src = '';
        document.body.style.overflow = 'auto';
    });

    // Close modal when clicking outside
    videoModal.addEventListener('click', function (e) {
        if (e.target === videoModal) {
            videoModal.style.display = 'none';
            modalVideo.src = '';
            document.body.style.overflow = 'auto';
        }
    });
});
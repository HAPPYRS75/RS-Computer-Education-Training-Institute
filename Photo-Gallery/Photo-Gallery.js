// ---------------------------------------------menu bar toggemenu button------------------------------------------------------------
function toggleMenu() {
    const menuList = document.getElementById('menuList');
    menuList.classList.toggle('active');
}

// ---------------------------------------------Photo Gallery------------------------------------------------------------

document.addEventListener('DOMContentLoaded', function() {
    const moreBtn = document.getElementById('moreBtn');
    const hiddenItems = document.querySelectorAll('.gallery-item.hidden');
    const galleryGrid = document.getElementById('galleryGrid');
    let showingAll = false;
    
    moreBtn.addEventListener('click', function() {
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
});
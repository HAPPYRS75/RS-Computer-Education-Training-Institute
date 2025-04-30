// ---------------------------------------------menu bar toggemenu button------------------------------------------------------------
function toggleMenu() {
    const menuList = document.getElementById('menuList');
    menuList.classList.toggle('active');
}



// About.js------------------------------------------------------------------------------------------

function viewAdminProfile() {
    // In a real implementation, this would redirect to the admin's profile page
    alert("Opening Admin's Full Profile & CV\nThis would show detailed information, work history, and downloadable CV");
    // window.location.href = "/admin-profile.html";
}

function viewProfile(memberName) {
    // In a real implementation, this would redirect to the team member's profile page
    alert(`Opening ${memberName}'s Profile Page\nThis would show their professional details and accomplishments`);
    // window.location.href = `/profile.html?name=${encodeURIComponent(memberName)}`;
}
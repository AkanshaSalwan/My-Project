function toggleMobileMenu() {
    const mobileMenu = document.getElementById("mobile-menu");
    if (mobileMenu.style.width === "250px") {
        mobileMenu.style.width = "0";
    } else {
        mobileMenu.style.width = "250px";
    }
}

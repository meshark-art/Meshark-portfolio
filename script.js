// ================================
// PORTFOLIO JAVASCRIPT
// ================================

// Display a message in the browser console
console.log("Meshark Waema's portfolio is running.");


// ================================
// NAVIGATION
// ================================

const navLinks = document.querySelectorAll(".nav-links a");

navLinks.forEach(link => {
    link.addEventListener("click", () => {
        console.log(`Navigating to ${link.getAttribute("href")}`);
    });
});

document.addEventListener("DOMContentLoaded", () => {
    // Smooth scrolling for internal links
    document.querySelectorAll("nav a").forEach(anchor => {
        anchor.addEventListener("click", function(event) {
            const href = this.getAttribute("href");

            if (href.startsWith("#")) {  // Only prevent default for internal links
                event.preventDefault();
                const targetId = href.substring(1);
                document.getElementById(targetId).scrollIntoView({
                    behavior: "smooth"
                });
            }
        });
    });

    // Change navbar background on scroll
    const header = document.querySelector("header");
    window.addEventListener("scroll", () => {
        if (window.scrollY > 50) {
            header.style.backgroundColor = "rgba(51, 51, 51, 0.9)";
        } else {
            header.style.backgroundColor = "#333";
        }
    });
});


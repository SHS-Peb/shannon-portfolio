let darkmode = localStorage.getItem('darkmode');
const themeSwitch = document.getElementById("theme-switch")
const popup = document.getElementById('job-popup');
const closeBtn = document.getElementById('close-popup');

closeBtn.addEventListener('click', () => {
  popup.style.display = 'none';
});

const enableDarkmode = () => {
    document.body.classList.add('darkmode')
    localStorage.setItem('darkmode', "active")
}

const disableDarkmode = () => {
    document.body.classList.remove('darkmode')
    localStorage.setItem('darkmode', null)
}

themeSwitch.addEventListener("click", () => {
    darkmode = localStorage.getItem("darkmode")
    darkmode !== "active" ? enableDarkmode() : disableDarkmode()
})

if(darkmode === "active") enableDarkmode()

document.addEventListener("DOMContentLoaded", () => {
    // Smooth scrolling for internal links
    document.querySelectorAll("nav a").forEach(anchor => {
        anchor.addEventListener("click", function(event) {
            const href = this.getAttribute("href");

            if (href.startsWith("#")) {  
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



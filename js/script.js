const menu = document.getElementById("menu");
const action = document.getElementById("actions");

menu.addEventListener("click" , () => {
    hundleMenu();
});

function hundleMenu(){
    menu.classList.toggle("is-active");
    actions.classList.toggle("is-active");
}
document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('nav a');

    navLinks.forEach(function(link) {
        link.addEventListener('click', function(e) {
            e.preventDefault();

            const targetId = this.getAttribute('href').substring(1);

            document.getElementById(targetId).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});
document.addEventListener('DOMContentLoaded', function() {
    const upButton = document.querySelector('.up');

    // Add a scroll event listener to show/hide the button
    window.addEventListener('scroll', function() {
        if (window.scrollY > 100) {
            upButton.style.display = 'block';
        } else {
            upButton.style.display = 'none';
        }
    });

    // Function to scroll to the top when the button is clicked
    window.scrollToTop = function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };
});


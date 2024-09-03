let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a'); 

window.onscroll = () => {
    let scrollPos = window.scrollY;

    sections.forEach(sec => {
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id'); 

        if (scrollPos >= offset && scrollPos < offset + height) {
            navLinks.forEach(link => {
                link.classList.remove('active'); 
                if (link.getAttribute('href').includes(id)) {
                    link.classList.add('active'); 
                }
            });
        }
    });
};

menuIcon.addEventListener('click', () => { 
    menuIcon.classList.toggle("bx-x");
    navbar.classList.toggle("active");
});

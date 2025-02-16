document.addEventListener('DOMContentLoaded', () => {
    const learnMoreButton = document.querySelector('.hero-button');
    
    learnMoreButton.addEventListener('click', (e) => {
        e.preventDefault();
        const aboutSection = document.getElementById('about');
        
        window.scrollTo({
            top: aboutSection.offsetTop,
            behavior: 'smooth'
        });
    });

    // Existing code for smooth scrolling for navigation links
    const links = document.querySelectorAll('nav ul li a');
    links.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);

            window.scrollTo({
                top: targetSection.offsetTop - 50,
                behavior: 'smooth'
            });
        });
    });

    // Existing code for reveal sections on scroll
    const sections = document.querySelectorAll('section');
    const footer = document.querySelector('footer');
    const revealSections = () => {
        sections.forEach(section => {
            const sectionTop = section.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;

            if (sectionTop < windowHeight - 100) {
                section.classList.add('visible');
            }
        });

        const footerTop = footer.getBoundingClientRect().top;
        if (footerTop < windowHeight - 100) {
            footer.classList.add('visible');
        }
    };

    window.addEventListener('scroll', revealSections);
    revealSections(); // Initial check

    // Hide loading screen after page load
    window.addEventListener('load', () => {
        document.body.classList.add('loaded');
    });

    // Blog grid navigation
    const blogGrid = document.getElementById('blog-grid');
    const leftArrow = document.getElementById('left-arrow');
    const rightArrow = document.getElementById('right-arrow');

    leftArrow.addEventListener('click', () => {
        blogGrid.scrollBy({
            left: -blogGrid.clientWidth,
            behavior: 'smooth'
        });
    });

    rightArrow.addEventListener('click', () => {
        blogGrid.scrollBy({
            left: blogGrid.clientWidth,
            behavior: 'smooth'
        });
    });
});

function SendMail() {
    var params = {
        from_name: document.getElementById("name").value,
        from_email: document.getElementById("email").value,
        message: document.getElementById("message").value
    };
    document.getElementById("form-status").innerHTML = "Sending...";
    emailjs.send("service_692e32d", "template_n3h2m8o", params).then(function (res) {
        document.getElementById("form-status").innerHTML = "Message sent successfully!";
    }).catch(function (error) {
        document.getElementById("form-status").innerHTML = "There was an error sending your message. Please try again later.";
    });
}

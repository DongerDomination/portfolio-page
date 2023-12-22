window.addEventListener('DOMContentLoaded', (event) => {
    document.querySelectorAll('.skill-percentage').forEach((elem) => {
        const percentage = elem.getAttribute('data-percentage');
        elem.style.width = percentage;
    });
});

document.addEventListener('DOMContentLoaded', (event) => {
    // Berechnung für die Position der Skill-Prozentangaben
    document.querySelectorAll('.skill-percent').forEach((skillPercent) => {
        const percentage = parseFloat(skillPercent.previousElementSibling.getAttribute('data-percentage'));
        const parentWidth = skillPercent.parentNode.offsetWidth;
        const newPosition = (percentage / 100) * parentWidth;
        skillPercent.style.left = `${newPosition - skillPercent.offsetWidth}px`;
    });

    // Intersection Observer für Animationen beim Scrollen
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('in-view');
            } else {
                entry.target.classList.remove('in-view');
            }
        });
    }, {
        rootMargin: '0px',
        threshold: 0.15
    });

    document.querySelectorAll('.section').forEach(section => {
        observer.observe(section);
    });

    // Höhe des Headers
    const headerHeight = 70; // Höhe Ihres Headers

    const scrollToSection = (event) => {
        event.preventDefault();
        const sectionId = event.target.getAttribute('href').substring(1);
        const section = document.getElementById(sectionId);
        window.scrollTo({
            top: section.offsetTop - headerHeight,
            behavior: 'smooth'
        });
    };

    // Event-Listener für die Navigation
    document.querySelectorAll('nav ul li a').forEach(link => {
        const sectionId = link.getAttribute('href').substring(1);
        if (sectionId) {
            link.addEventListener('click', scrollToSection);
        }
    });

    const myWorksButton = document.querySelector('.my-works');

    // Add click event listener to 'My Works' button
    myWorksButton.addEventListener('click', function() {
        // Use 'scrollIntoView' to scroll to 'Projects' section
        document.getElementById('projects').scrollIntoView({
            behavior: 'smooth' // Smooth scroll
        });
    });

    const nav = document.querySelector('nav ul');
    const navLinks = document.querySelectorAll('nav ul li a');
    const burgerMenu = document.querySelector('.burger-menu');

    // Function to toggle the menu
    function toggleMenu() {
        nav.classList.toggle('nav-active');
        burgerMenu.classList.toggle('toggle');
    }

    // Event listener for burger menu click
    burgerMenu.addEventListener('click', toggleMenu);

    // Event listeners for nav item clicks
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (nav.classList.contains('nav-active')) {
                toggleMenu(); // This will close the burger menu when a link is clicked
            }
        });
    });
    
});

// Funktion zum Aktualisieren der Seite mit neuen Daten aus dem JSON-Objekt
function updatePageData(data) {
    document.querySelector('[data-image="logo"]').src = data.logo;
    document.querySelector('[data-image="profile"]').src = data.profileImage;
    
    // Assuming you have added data-image="favicon" to the link tag for favicon
    const faviconLink = document.querySelector('[data-image="favicon"]');
    if (faviconLink) {
        faviconLink.href = data.favicon; // 'data.favicon' should be the path to the new icon in your data
    }
    
    document.documentElement.style.setProperty('--dynamic-color', data.colorCode);
    
    document.querySelectorAll('[data-color="icon-color"]').forEach((icon) => {
        icon.querySelector('path').setAttribute('fill', data.colorCode);
    });
}


// Event-Listener für den "Hire Me" Button
document.querySelector('.button.hire-me').addEventListener('click', function() {
    fetch('http://localhost:3000/profiles')
    .then(response => response.json())
    .then(data => {
        const randomItem = data[Math.floor(Math.random() * data.length)];
        updatePageData(randomItem);
    })
    .catch(error => console.error('Error:', error));
});

// Laden von zufälligen Daten beim Start
document.addEventListener('DOMContentLoaded', function() {
    document.querySelector('.button.hire-me').click();
});

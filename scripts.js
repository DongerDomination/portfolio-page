window.addEventListener('DOMContentLoaded', (event) => {
    document.querySelectorAll('.skill-percentage').forEach((elem) => {
        const percentage = elem.getAttribute('data-percentage');
        elem.style.width = percentage;
    });
});

document.addEventListener('DOMContentLoaded', (event) => {
    // Iteriere über alle Skill-Prozente
    document.querySelectorAll('.skill-percent').forEach((skillPercent) => {
        // Lese den prozentualen Wert des zugehörigen skill-percentage
        const percentage = parseFloat(skillPercent.previousElementSibling.getAttribute('data-percentage'));
        
        // Berechne die neue Position basierend auf dem prozentualen Wert
        const parentWidth = skillPercent.parentNode.offsetWidth;
        const newPosition = (percentage / 100) * parentWidth;
        
        // Aktualisiere die Position des skill-percent Elements
        skillPercent.style.left = `${newPosition - skillPercent.offsetWidth}px`;
    });
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
        threshold: 0.1
    });

    document.querySelectorAll('.section').forEach(section => {
        observer.observe(section);
    });
});

document.addEventListener('DOMContentLoaded', (event) => {
    // Set up the Intersection Observer
    const observer = new IntersectionObserver((entries) => {
        // For each entry check if it is intersecting (visible)
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('in-view');
            } else {
                entry.target.classList.remove('in-view');
            }
        });
    }, {
        // Adjust the root margin as needed to control when the animation starts
        rootMargin: '0px',
        threshold: 0.1 // Trigger when at least 10% of the section is visible
    });

    // Target the sections you want to observe
    document.querySelectorAll('.section').forEach(section => {
        observer.observe(section);
    });
});




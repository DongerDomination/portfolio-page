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
});

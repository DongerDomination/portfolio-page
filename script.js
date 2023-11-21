document.addEventListener('DOMContentLoaded', function() {
    generateNewLogo();
});

function generateNewLogo() {
    fetch('http://localhost:5500/generate-logo')
        .then(response => response.json())
        .then(data => {
            if (data.logoUrl) {
                document.getElementById('logo-image').src = data.logoUrl;
            }
        })
        .catch(error => console.error('Error:', error));
}

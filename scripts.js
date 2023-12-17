window.addEventListener('scroll', () => {
    document.querySelectorAll('.skill-percentage').forEach((elem) => {
        if (elem.getBoundingClientRect().top < window.innerHeight) {
            elem.classList.add('visible');
        }
    });
});

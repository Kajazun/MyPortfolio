// Add hover effects or other interactivity if needed
document.querySelectorAll('.card').forEach(card => {
    card.addEventListener('mouseenter', () => {
        card.style.backgroundColor = '#333';
    });
    card.addEventListener('mouseleave', () => {
        card.style.backgroundColor = '#1f1f1f';
    });
});
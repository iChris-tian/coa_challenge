document.addEventListener('DOMContentLoaded', () => {
    const modal = document.querySelector('.modal');
    const modalImg = document.querySelector('#modal-img');
    const captionText = document.querySelector('.modal-caption');
    const closeBtn = document.querySelector('.close');

    document.querySelectorAll('.card').forEach(card => {
        card.addEventListener('click', () => {
            modal.style.display = 'flex';
            const img = card.querySelector('img');
            modalImg.src = img.src;
            captionText.innerHTML = card.querySelector('.info').innerHTML;
        });
    });

    closeBtn.addEventListener('click', () => {
        modal.style.display = 'none';
    });

    modal.addEventListener('click', (event) => {
        if (event.target === modal || event.target === modalImg) {
            modal.style.display = 'none';
        }
    });
});

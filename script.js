document.getElementById('btnNo').addEventListener('mouseover', function() {
    const btnNo = this;
    const container = btnNo.parentElement;
    const containerRect = container.getBoundingClientRect();
    const btnNoRect = btnNo.getBoundingClientRect();

    const maxX = containerRect.width - btnNoRect.width;
    const maxY = containerRect.height - btnNoRect.height;

    const randomX = Math.floor(Math.random() * maxX);
    const randomY = Math.floor(Math.random() * maxY);

    btnNo.style.position = 'absolute';
    btnNo.style.left = `${randomX}px`;
    btnNo.style.top = `${randomY}px`;
});
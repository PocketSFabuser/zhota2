const back = document.getElementById('backtomain');

window.onload = () => {
    back.addEventListener('click', () => {
        window.open('./index.html', '_self');
    });
}
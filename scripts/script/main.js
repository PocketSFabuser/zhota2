const str1btn = document.getElementById('strata1');
const str2btn = document.getElementById('strata2');

window.onload = () => {
    str1btn.addEventListener('click', () => {
        window.open('./strata1.html', '_self');
    });
    str2btn.addEventListener('click', () => {
        window.open('./strata2.html', '_self');
    });
}
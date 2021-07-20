let rus_btn = document.getElementById('rus-btn');
let eng_btn = document.getElementById('eng-btn');

rus_btn.addEventListener('click', () => {
    localStorage.setItem('choose_lang', 'rus');
    window.location.replace('http://127.0.0.1:8080/');
})

eng_btn.addEventListener('click', () => {
    localStorage.setItem('choose_lang', 'eng');
    window.location.replace('http://127.0.0.1:8080/EN');
})

let rus_btn = document.getElementById('rus-btn');
let eng_btn = document.getElementById('eng-btn');

rus_btn.addEventListener('click', () => {
    localStorage.setItem('choose_lang', 'rus');
    window.location.replace('/');
})

eng_btn.addEventListener('click', () => {
    localStorage.setItem('choose_lang', 'eng');
    window.location.replace('/EN');
})

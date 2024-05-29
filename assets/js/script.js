const btConversor = document.getElementById('btConversor');
const btQuiz = document.getElementById('btQuiz');

const abaConversor = document.querySelector('.aba-conversor');
const abaQuiz = document.querySelector('.aba-quiz');

btConversor.addEventListener('click', () => {
    btQuiz.classList.remove('active');
    btConversor.classList.add('active');

    abaQuiz.classList.add('hide');
    abaConversor.classList.remove('hide');
});

btQuiz.addEventListener('click', () => {
    btQuiz.classList.add('active');
    btConversor.classList.remove('active');

    abaQuiz.classList.remove('hide');
    abaConversor.classList.add('hide');
});
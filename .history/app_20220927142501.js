// step 2.1 record correct answers
const correctAnswers = ['B', 'A', 'A', 'A'];
// step 2.2 query quiz-form
const form = document.querySelector('.quiz-form')

// step 2.2 attach event listener
form.addEventListener('submit', e => {
    e.preventDefault(); // prevent it from submitting a form
    
    let score = 0;

    const userAnswers = [form.q1.value, form.q2.value, form.q3.value, form.q4.value];

    // step 2.3  check answers

    userAnswers
})
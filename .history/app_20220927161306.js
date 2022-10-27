// step 2.1 record correct answers
const correctAnswers = ['B', 'A', 'A', 'A'];
// step 2.2 query quiz-form
const form = document.querySelector('.quiz-form');
// step 3.2 query result section
const result = document.querySelector('.result');

// step 2.2 attach event listener
form.addEventListener('submit', e => {
    e.preventDefault(); // prevent it from submitting a form
    
    let score = 0;

    const userAnswers = [form.q1.value, form.q2.value, form.q3.value, form.q4.value];

    // step 2.3  check answers
    userAnswers.forEach((answer, index) => {
        if(answer === correctAnswers[index]){
            score += 25;
        }
    })

    // step 2.4 check if score is updating properly
    console.log(score)

    // step 3.4 scroll to the top
    scrollTo(0,0);
    // step 3.3.1 show result on page
    // remove when step 4.1 is completed
    // result.querySelector('span').textContent = `${score}%`;
    // step 3.3.2
    result.classList.remove('d-none');

    // step 4.1 animate score
    let output = 0;
    const timer = setInterval(()=>{
        result.querySelector('span').textContent = `${output}%`;
        if(output===score){
            clearInterval(timer);
        } else {
            output++;
        }
    }, 100)
})
// import functions and grab DOM elements

// let state

// set event listeners
// get user input
// use user input to update state
// update DOM to reflect the new state

const submit = document.getElementById('submit');
const questionInput = document.getElementById('question-input');
const questionContainer = document.getElementById('question-container');
const fortuneContainer = document.getElementById('fortune');
const result = document.getElementById('result');
const answers = [
    'Yes, definitely',
    'It is certain',
    'It is decidedly so',
    'Without a doubt',
    'You may rely on it',
    'As I see it, yes',
    'Most Likely',
    'Outlook good',
    'Signs point to yes',
    'Reply hazy, try again',
    'Ask again later',
    'Better not tell you now',
    'Cannot predict now',
    'Concentrate and ask again',
    'Don’t count on it',
    'My reply is no',
    'My sources say no',
    'Outlook not so good',
    'Very doubtful',
];

submit.addEventListener('click', handleSubmit);
questionInput.addEventListener('keypress', (event) => {
    if (event.key === 'Enter') {
        handleSubmit();
    }
});

function handleSubmit() {
    questionContainer.classList.toggle('hide');
    questionContainer.classList.add('fade-out');
    fortuneContainer.classList.toggle('hide');
    fortuneContainer.classList.add('fade-in');
    const randomNum = Math.floor(Math.random() * answers.length);
    const randomAnswer = answers[randomNum];
    console.log(randomAnswer);
    result.textContent = randomAnswer;
}

//submit.addEventListener('click', handleSubmit);
//questionInput.addEventListener('keypress', (event) => {
//console.log(event.key);
//if (event.key === 'Enter') {
//   handleSubmit();
//}
//}

//function handleSubmit() {
//questionContainer.classList.toggle('hide');
//fortuneContainer.classList.toggle('hide');
//const randomAnswer = answers[randNum];
// }

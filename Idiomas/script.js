const questionElement = document.getElementById('question');
const answerButtonsElement = document.getElementById('answer-buttons');
const startButton = document.getElementById('start-btn');
const nextButton = document.getElementById('next-btn');
const languageSelection = document.getElementById('language-selection');
const correctAudio = document.getElementById('correct-audio');

const languages = ['English','French', 'Japanese', 'Portuguese'];
const questionsPertLanguage = 10;
let currentLanguage = '';
let currentQuestionIndex = 0;

const questions ={
    'English':[
        {
            question:"Translate: 'Hello",
            answers:[
                {text:'Hola', correct:false},
                {text:'Bonjour', correct:false},
                {text:'Olá', correct:false},
                {text:'Hello', correct:true}
            ]
        },
        {
            question:"Translate the word 'Cachorro' to English",
            answers:[
                {text:'Dog', correct:true},
                {text:'Cat', correct:false},
                {text:'Fish', correct:false},
                {text:'Bird', correct:false}
            ],
        },
        {
            question: 'What is the capital of France?',
            answers: [
                {text: 'London', correct: false},
                {text: 'Madrid', correct: false},
                {text: 'Paris', correct: true},
                {text: 'Berlin', correct: false}
            ],
        },
        {
            question: 'What is the capital of Japan?',
            answers: [
                {text: 'Tokyo', correct: true},
                {text: 'Beijing', correct: false},
                {text: 'Seoul', correct: false},
                {text: 'Bangkok', correct: false}
            ]
        },
        {
            question: 'What is the capital of Brazil?',
            answers: [
                {text: 'Buenos Aires', correct: false},
                {text: 'Brasilia', correct: true},
                {text: 'Rio de Janeiro', correct: false},
                {text: 'Sao Paulo', correct: false}
            ]
        },
        {
            question: 'What is the capital of the United States?',
            answers: [
                {text: 'Washington D.C.', correct: true},
                {text: 'New York', correct: false},
                {text: 'Los Angeles', correct: false},
                {text: 'Chicago', correct: false}
            ]
        },
        {
            question: 'What is the capital of Canada?',
            answers: [
                {text: 'Toronto', correct: false},
                {text: 'Vancouver', correct: false},
                {text: 'Ottawa', correct: true},
                {text: 'Montreal', correct: false}
            ]
        },
        {
            question: 'What is the capital of Australia?',
            answers: [
                {text: 'Sydney', correct: false},
                {text: 'Melbourne', correct: false},
                {text: 'Canberra', correct: true},
                {text: 'Brisbane', correct: false}
            ]
        },
        {
            question: 'What is the capital of Italy?',
            answers: [
                {text: 'Rome', correct: true},
                {text: 'Milan', correct: false},
                {text: 'Florence', correct: false},
                {text: 'Venice', correct: false}
            ],
        },
    'French':[
    {
        question: 'Translate: "Bonjour"',
        answers: [
            {text: 'Hello', correct: true},
            {text: 'Goodbye', correct: false},
            {text: 'Good morning', correct: false},
            {text: 'Good night', correct: false}
        ],
    },
{
question:"translate: 'Thank you",
answers: [
    {text:'Merci', correct:true},
    {text:'Bonjour', correct:false},
    {text:'Olá', correct:false},
    {text:'Hello', correct:false}
]
},
{ question:"Translate: 'Good Morning",
answers:[
    {text:'Bonjour', correct:true},
    {text:'Goodbye', correct:false},
    {text:'Olá', correct:false},
    {text:'Hello', correct:false}
]
},
    'Japanese':[
        {
            question: 'Translate: "こんにちは"',
            answers: [
                {text: 'Hello', correct: false},
                {text: 'Goodbye', correct: false},
                {text: 'Good morning', correct: true},
                {text: 'Good night', correct: false}
            ]
        },
        {
            question: 'Translate: "ありがとう"',
            answers: [
                {text: 'Thank you', correct: true},
                {text: 'Hello', correct: false},
                {text: 'Good morning', correct: false},
                {text: 'Good night', correct: false}
            ]
        },
        {
            question: 'Translate: "おやすみ"',
            answers: [
                {text: 'Hello', correct: false},
                {text: 'Goodbye', correct: false},
                {text: 'Good morning', correct: false},
                {text: 'Good night', correct: true}
            ]
        }
    'Portuguese':[
        {
            question: 'Translate: "Olá"',
            answers: [
                {text: 'Hello', correct: false},
                {text: 'Goodbye', correct: false},
                {text: 'Good morning', correct: false},
                {text: 'Hi', correct: true}
            ]
        },
        {
            question: 'Translate: "Tchau"',
            answers: [
                {text: 'Hello', correct: false},
                {text: 'Goodbye', correct: true},
                {text: 'Good morning', correct: false},
                {text: 'Hi', correct: false}
            ]
        },
        {
            question: 'Translate: "Bom dia"',
            answers: [
                {text: 'Hello', correct: false},
                {text: 'Goodbye', correct: false},
                {text: 'Good morning', correct: true},
                {text: 'Hi', correct: false}
            ]
        }
};
function selectLanguage(language){
    currentLanguage = language;
    languageSelection.style.display('none');
    showQuestion();
}
function showQuestion(){
    if (currentLanguage < questionPerlLanguage){
        const question = questions[currentLanguage][currentQuestionIndex];
        questionElement.innerText = question.question;
        answerButtons.innerHTML = '';
        question.answers.forEach(answer =>{
            const button = document.createElement('button');
            button.innerText = answer.text;
            button.classList.add('btn');
            if(answer.correct){
                button.dataset.correct = answer.correct;
            }
            button.addEventListener('click', selectAnswer);
            answerButtonsElement.appendChild(button);
        ]);
    }else{
        alert('Quiz completed for' + currentLanguage + '!');
        currentLanguage = 0;
        languageSelection.style.display = 'block'; 
    }
}
function selectAnswer(selectedAnswer){
    const question = questions[currentLanguage][currentQuestionIndex];

    if(selectedAnswer === question.answers.correct[0]){
        playCorrectSonund();
        alert('Correct!');
    }else{
        alert('Incorrect!');
    }
}
currentQuestionIndex++;
showQuestion();
}
function playCorrectSound(){
    correctAudio.play();
}

    
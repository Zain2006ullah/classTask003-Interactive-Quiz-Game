
// var questions = [
//     {
//         question: "Which Pakistani cricketer recently retired from international cricket?",
//         choices: ["Misbah-ul-Haq", "Shahid Afridi", "Shoaib Malik", "Mohammad Hafeez"],
//         answer: 3
//     },
//     {
//         question: "Which of the following is Pakistan's largest export product?",
//         choices: ["Textiles", "Rice", "Fruits", "Surgical Instruments"],
//         answer: 0
//     },
//     {
//         question: "Which Pakistani actress won the Best Actress Award at the Lux Style Awards 2023?",
//         choices: ["Mahira Khan", "Sajal Aly", "Mehwish Hayat", "Yumna Zaidi"],
//         answer: 3
//     },
//     {
//         question: "In which year was the Pakistan Super League (PSL) founded?",
//         choices: ["2015", "2016", "2017", "2018"],
//         answer: 1
//     },
//     {
//         question: "Which city was most recently declared a metropolitan city in Pakistan?",
//         choices: ["Islamabad", "Lahore", "Faisalabad", "Gwadar"],
//         answer: 3
//     },
//     {
//         question: "Who is the current Prime Minister of Pakistan?",
//         choices: ["Imran Khan", "Shehbaz Sharif", "Asif Ali Zardari", "Bilawal Bhutto"],
//         answer: 1
//     },
//     {
//         question: "Which famous mountain range is located in northern Pakistan?",
//         answers: ["Himalayas", "Karakoram", "Hindu Kush", "Sulaiman"],
//         correct: 1
//     },
//     {
//         question: "Who is known as the 'Poet of the East' in Pakistan?",
//         answers: ["Allama Iqbal", "Faiz Ahmed Faiz", "Mirza Ghalib", "Ahmed Faraz"],
//         correct: 0 
//     },
//     {
//         question: "Who is the current Chief of Army Staff (COAS) of Pakistan?",
//         choices: ["Qamar Javed Bajwa", "Asim Munir", "Raheel Sharif", "Pervez Musharraf"],
//         answer: 1
//     },
//     {
//         question: "Which city is known as the 'City of Gardens' in Pakistan?",
//         answers: ["Karachi", "Lahore", "Islamabad", "Peshawar"],
//         correct: 1 
//     },
//     {
//         question: "Which city in Pakistan is known as the 'City of Gardens'?",
//         choices: ["Karachi", "Lahore", "Islamabad", "Multan"],
//         answer: 1
//     },
// ];


// var currentQuestionIndex = 0;
// var score = 0;

// var questionArea = document.getElementById('question-area');
// var answerButtons = document.querySelectorAll('.answer-btn');
// var scoreDisplay = document.getElementById('score');
// var nextButton = document.getElementById('next-btn');
// var resultMessage = document.getElementById('result-message');


// // Implemented answer checking and scoring ✅

// function loadQuestion() {
//     var currentQuestion = questions[currentQuestionIndex];
//     questionArea.innerText = currentQuestion.question;
//     answerButtons.forEach((button, index) => {
//         button.innerText = currentQuestion.choices[index];
//         button.classList.remove('correct', 'wrong');
//     });
//     resultMessage.innerText = '';
//     nextButton.style.display = 'none';
// }

// // Created "Next Question" button functionality ⏭️

// function handleAnswer(selectedIndex) {
//     var currentQuestion = questions[currentQuestionIndex];
//     if (selectedIndex === currentQuestion.answer) {
//         score++;
//         alert(resultMessage.innerText = "Correct!");
//     } else {
//         resultMessage.innerText = "Try Again!";
//     }
//     scoreDisplay.innerText = `Score: ${score}`;
//     answerButtons.forEach((button, index) => {
//         if (index === currentQuestion.answer) {
//             button.classList.add('correct');
//         } else {
//             button.classList.add('wrong');
//         }
//     });
//     nextButton.style.display = 'block';
// }

// answerButtons.forEach(button => {
//     button.addEventListener('click', () => {
//         var selectedIndex = parseInt(button.getAttribute('data-index'));
//         handleAnswer(selectedIndex);
//     });
// });

// // Handled keyboard input for quick answers ⌨️

// nextButton.addEventListener('click', () => {
//     currentQuestionIndex++;
//     if (currentQuestionIndex < questions.length) {
//         loadQuestion();
//     } else {
//         resultMessage.innerText = `Game Over! Your score is ${score}/${questions.length}.`;
//         nextButton.style.display = 'none';
//         resetGame();
//     }
// });

// // Added game reset and replay feature 🔄

// function resetGame() {
//     currentQuestionIndex = 0;
//     score = 0;
//     scoreDisplay.innerText = `Score: ${score}`;
//     nextButton.innerText = "Play Again";
//     nextButton.style.display = 'block';
//     nextButton.addEventListener('click', () => {
//         loadQuestion();
//         nextButton.style.display = 'none';
//     });
// }

// document.addEventListener('keydown', (event) => {
//     var key = event.key;
//     if (key >= 1 && key <= 4) {
//         var selectedIndex = key - 1;
//         handleAnswer(selectedIndex);
//     }
// });

// loadQuestion();
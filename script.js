const riddles = [
    { question: "(১) বিশ্বের সবচেয়ে বড় মহাসাগর কোনটি?", answer: "প্রশান্ত মহাসাগর" },
    { question: "(২)বাংলাদেশের জাতীয় ফুল কোনটি?", answer: "শাপলা" },
    { question: "(৩)বাংলাদেশের জল সম্পদের চাহিদা সবচেয়ে বেশি কোন খাতে", answer: "কৃষি" },
    { question: "(৪)বাংলাদেশের জাতীয় পশু কোনটি?", answer: "রয়েল বেঙ্গল টাইগার" },
];

let currentRiddleIndex = 0;
let score = 0;

const userAnswerInput = document.getElementById("user-answer");
const submitBtn = document.getElementById("submit-btn");
const resultElement = document.getElementById("result");
const nextBtn = document.getElementById("next-btn");
const scoreElement = document.getElementById("score");
const riddleQuestionElement = document.getElementById("riddle-question");
const playAgainBtn = document.getElementById("play-again-btn");

function showRiddle() {
    const currentRiddle = riddles[currentRiddleIndex];
    riddleQuestionElement.textContent = currentRiddle.question;
    userAnswerInput.value = '';
    resultElement.textContent = '';
    nextBtn.style.display = 'none';
    playAgainBtn.style.display = 'none'; // Hide Play Again button until all riddles are done
}

function checkAnswer() {
    const currentRiddle = riddles[currentRiddleIndex];
    const userAnswer = userAnswerInput.value.trim().toLowerCase();

    if (userAnswer === currentRiddle.answer.toLowerCase()) {
        score++;
        resultElement.textContent = "সঠিক উত্তর!";
    } else {
        resultElement.textContent = `ভুল উত্তর! সঠিক উত্তর ছিল: ${currentRiddle.answer}`;
    }
    scoreElement.textContent = `স্কোর: ${score}`;
    nextBtn.style.display = 'inline-block'; // Show next button after answer is checked
}

// Move to the next riddle
function nextRiddle() {
    currentRiddleIndex++;
    if (currentRiddleIndex < riddles.length) {
        showRiddle();
    } else {
        resultElement.textContent = `আপনি সব ধাঁধা শেষ করেছেন! আপনার মোট স্কোর: ${score}`;
        nextBtn.style.display = 'none'; // Hide next button when all riddles are answered
        playAgainBtn.style.display = 'inline-block'; // Show Play Again button
    }
}

// Reset the game
function playAgain() {
    currentRiddleIndex = 0;
    score = 0;
    scoreElement.textContent = `স্কোর: ${score}`;
    showRiddle();
}

// Event listeners
submitBtn.addEventListener("click", checkAnswer);
nextBtn.addEventListener("click", nextRiddle);
playAgainBtn.addEventListener("click", playAgain);

// Initial riddle display
showRiddle();

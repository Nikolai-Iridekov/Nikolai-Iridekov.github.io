const questions = [
    {
        question: "Как называлась река, возле которой проходила свадьба Вити и Светы?",
        answers: ["р. Протока", "р. Абакан", "р. Аскиз", "р. Бельтиры"],
        correct: 2,
        image: "img/question1.jpg",
        text: "Это была прикольная туса, тебе еще букет невесты вручили)",
        music: "song.mp3"
    },
  
];

let currentQuestion = 0;

function checkDate() {
    const inputDate = document.getElementById("weddingDate").value;
    const errorMessage = document.getElementById("errorMessage");

    if (inputDate === "23.07.22") {
        document.getElementById("authScreen").classList.add("hidden");
        document.getElementById("gameScreen").classList.remove("hidden");
        loadQuestion();
    } else {
        errorMessage.classList.remove("hidden");
        errorMessage.style.animation = "none";
        setTimeout(() => {
            errorMessage.style.animation = "shake 0.5s ease-in-out";
        }, 10);
    }
}

function loadQuestion() {
    const question = questions[currentQuestion];
    document.getElementById("questionText").textContent = question.question;
    document.getElementById("questionImage").style.backgroundImage = `url('${question.image}')`;
    const answersDiv = document.getElementById("answers");
    answersDiv.innerHTML = "";
    question.answers.forEach((answer, index) => {
        const button = document.createElement("div");
        button.classList.add("answer");
        button.textContent = answer;
        button.onclick = () => checkAnswer(index);
        answersDiv.appendChild(button);
    });
}

function checkAnswer(index) {
    const question = questions[currentQuestion];
    if (index === question.correct) {
        document.getElementById("resultImage").src = question.image;
        document.getElementById("resultText").textContent = question.text;
        document.getElementById("fullScreenImage").classList.remove("hidden");
    } else {
        const popup = document.getElementById("wrongAnswerPopup");
        popup.style.display = "block";
        setTimeout(() => { popup.style.display = "none"; }, 2000);
    }
}

function nextQuestion() {
    currentQuestion++;
    if (currentQuestion < questions.length) {
        document.getElementById("fullScreenImage").classList.add("hidden");
        loadQuestion();
    } else {
        // Показываем завершающее окошко
        document.getElementById("gameScreen").classList.add("hidden");
        document.getElementById("endScreen").classList.remove("hidden");
    }
}

function restartGame() {
    // Сбрасываем игру
    currentQuestion = 0;
    document.getElementById("endScreen").classList.add("hidden");
    document.getElementById("authScreen").classList.remove("hidden");
    document.getElementById("gameScreen").classList.add("hidden");
}

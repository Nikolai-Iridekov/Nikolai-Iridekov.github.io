const questions = [
    {
        question: "Как называлась река, возле которой проходила свадьба Вити и Светы?",
        answers: ["р. Протока", "р. Абакан", "р. Аскиз", "р. Бельтиры"],
        correct: 2,
        image: "img/question1.jpg",
        text: "Это была прикольная туса, тебе еще букет невесты вручили)",
        music: "song.mp3"
    },
    {
        question: "Где мы впервые познакомились с твоей сестренкой?",
        answers: ["В торговом центре", "В кафе", "В батутном центре", "У тебя дома"],
        correct: 2,
        image: "img/question2.jpg",
        text: "Злата говорила, что я летаю как птичка)",
        music: "song.mp3"
    },
    {
        question: "В какой день я сделал тебе предложение?",
        answers: ["7 июля", "2 июля", "23 июля", "30 июня"],
        correct: 0,
        image: "img/question3.jpg",
        text: "Это был незабываемый момент!",
        music: "song.mp3"
    },
    {
        question: "Какое озеро мы посетили с твоими друзьями в 2021 году?",
        answers: ["Потрошиловка", "Шира", "Тускарное", "Иткуль"],
        correct: 0,
        image: "img/question4.jpg",
        text: "Поездка на бабане было веселой)!",
        music: "song.mp3"
    },
    {
        question: "Что мы пытались найти недалеко от ГЭС и нашли этой зимой?",
        answers: ["Заброшенный тоннель", "Водопад", "Набережную", "Секретную тропу"],
        correct: 2,
        image: "img/question5.jpg",
        text: "Ну нашли же!",
        music: "song.mp3"
    },
    {
        question: "Наша свадьба. На какой марке машины нас возили?",
        answers: ["Ситроен", "Шкода", "Пижо", "Хендай"],
        correct: 2,
        image: "img/question6.jpg",
        text: "Жалко, что так и не поездили на ней зарулем(",
        music: "song.mp3"
    },
    {
        question: "Прошлым летом мы катались на лодке по Енисею. Сцену из какого фильма мы повторили?",
        answers: ["Титаник", "Достучаться до небес", "Пираты Карибского моря", "Ромео и Джульетта"],
        correct: 0,
        image: "img/question7.jpg",
        text: "О, как в Титанике!",
        music: "song.mp3"
    },
    {
        question: "Куда мы ездили отдыхать с моей семьей в новогодние праздники 2021 года?",
        answers: ["Озеро Белё", "Гладенькая", "Озеро Баланкуль", "Абакан"],
        correct: 2,
        image: "img/question8.jpg",
        text: "По моему, это был первый выезд с моми родственниками)",
        music: "song.mp3"
    },
    {
        question: "В каком году мы ездили на свадьбу Лёши и Насти?",
        answers: ["2019", "2020", "2021", "2022"],
        correct: 2,
        image: "img/question9.jpg",
        text: "Как это блоы давно...",
        music: "song.mp3"
    },
    {
        question: "На юбилее твоей мамы, в какой роли я там был?",
        answers: ["Фотограф", "Ведущий", "Танцор", "Официант"],
        correct: 1,
        image: "img/question10.jpg",
        text: "Я тогда еще почти не знал твоих родственников, но вроде неплохо справился)",
        music: "song.mp3"
    },
    {
        question: "При поездке в Аскиз, мы часто посещали пиццерию. Как она называлась?",
        answers: ["Большой Папа", "Сытый Бай", "Аскизский Папа", "Сытый Папа"],
        correct: 2,
        image: "img/question11.jpg",
        text: "Аскизский Папа — любимое местов Аскизе!",
        music: "song.mp3"
    }
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
        alert("Игра завершена!");
    }
}

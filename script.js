const questions = [
    {
        question: "What is the capital of the Indian state of Karnataka?",
        options: ["Bengaluru", "Mumbai", "Delhi", "Kolkata"],
        correctAnswer: "Bengaluru"
    },
    {
        question: "What is Bengaluru often referred to as due to its prominence in the IT industry?",
        options: ["Garden City of India", "Silicon Valley of India", "Pearl City", "Pearl City"],
        correctAnswer: "Silicon Valley of India"
    },
    {
        question: "Which famous garden in Bengaluru is known for its botanical variety and glasshouse?",
        options: ["Cubbon Park", "Lalbagh Botanical Garden", "Bannerghatta Biological Park", "Ulsoor Lake"],
        correctAnswer: "Lalbagh Botanical Garden"
    },
    {
        question: "Which international airport serves Bengaluru?",
        options: ["Chhatrapati Shivaji International Airport", "Indira Gandhi International Airport", "Kempegowda International Airport", "Rajiv Gandhi International Airport"],
        correctAnswer: "Kempegowda International Airport"
    },
    {
        question: "What is the popular food item associated with Bengaluru, a savory and crunchy snack often served with tea?",
        options: ["Samosa", "Biryani", "Dosa", "Fafda"],
        correctAnswer: "Dosa"
    },
    {
        question: "Which river flows near Bengaluru, contributing to the city's water supply?",
        options: ["Ganges", "Brahmaputra", "Yamuna", "Cauvery"],
        correctAnswer: "Cauvery"
    },
    {
        question: "Which iconic rock formation located in Bengaluru is a famous tourist attraction and offers panoramic views of the city?",
        options: ["Nandi Hills", "Chamundi Hill", "Lalbagh Rock", "Cubbon Park Rock"],
        correctAnswer: "Nandi Hills"
    },
    {
        question: "What is the popular traditional art form that involves intricate patterns created with rice flour or colored powders, especially during festivals in Bengaluru?",
        options: ["Rangoli", "Kuchipudi", "Bharatanatyam", "Yakshagana"],
        correctAnswer: "Rangoli"
    },
    {
        question: "The Indian Institute of Science (IISc) is one of India's premier research institutions and is located in Bengaluru. In which year was IISc founded?",
        options: ["1909", "1947", "1956", "2000"],
        correctAnswer: "1909"
    },
     
];

let currentQuestion = 0;
let score = 0;
const userResponses = [];

const questionTitleElement = document.getElementById("question-title");
const questionElement = document.getElementById("question");
const optionsElement = document.getElementById("options");
const scoreElement = document.getElementById("score");
const nextButton = document.getElementById("next-button");

nextButton.addEventListener("click", () => {
    currentQuestion++;
    if (currentQuestion < questions.length) {
        displayQuestion();
    } else {
        displaySummary();
    }
});

function displayQuestion() {
    questionTitleElement.textContent = `Question ${currentQuestion + 1}:`;
    questionElement.textContent = questions[currentQuestion].question;
    optionsElement.innerHTML = "";
    questions[currentQuestion].options.forEach(option => {
        const button = document.createElement("button");
        button.textContent = option;
        button.className = "option";
        button.addEventListener("click", () => checkAnswer(option));
        optionsElement.appendChild(button);
    });
    nextButton.style.display = "none";
}

function checkAnswer(selectedOption) {
    const correctAnswer = questions[currentQuestion].correctAnswer;
    userResponses.push({
        question: questions[currentQuestion].question,
        userAnswer: selectedOption,
        correctAnswer: correctAnswer
    });
    if (selectedOption === correctAnswer) {
        score++;
    }
    nextButton.style.display = "block";
}

function displaySummary() {
    questionTitleElement.textContent = "Quiz Completed!";
    questionElement.textContent = "";
    optionsElement.innerHTML = "";
    nextButton.style.display = "none";

    for (let i = 0; i < questions.length; i++) {
        const summaryElement = document.createElement("div");
        summaryElement.innerHTML = `
            <h3>Question ${i + 1}:</h3>
            <p><strong>Question:</strong> ${userResponses[i].question}</p>
            <p><strong>Your Answer:</strong> ${userResponses[i].userAnswer}</p>
            <p><strong>Correct Answer:</strong> ${userResponses[i].correctAnswer}</p>
        `;
        optionsElement.appendChild(summaryElement);
    }

    const summaryElement = document.createElement("div");
    summaryElement.innerHTML = `
        <h2>Quiz Summary</h2>
        <p>Total Questions: ${questions.length}</p>
        <p>Correct Answers: ${score}</p>
        <p>Incorrect Answers: ${questions.length - score}</p>
    `;

    scoreElement.textContent = score;
    optionsElement.appendChild(summaryElement);
}

displayQuestion();

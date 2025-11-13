document.addEventListener('DOMContentLoaded', () => {
    const startBtn = document.getElementById('start-btn');
    const nextBtn = document.getElementById('next-btn');
    const restartBtn = document.getElementById('restart-btn');
    const titlePage = document.getElementById('title-page');
    const quizContainer = document.getElementById('quiz-container');
    const resultsContainer = document.getElementById('results-container');
    const questionText = document.getElementById('question-text');
    const choicesContainer = document.getElementById('choices-container');
    const resultTitle = document.getElementById('result-title');
    const resultDescription = document.getElementById('result-description');

    let currentQuestionIndex = 0;
    // Object to store scores for each of the 8 possible results
    let scores = {
        resultA: 0, resultB: 0, resultC: 0, resultD: 0, 
        resultE: 0, resultF: 0, resultG: 0, resultH: 0
    };

    const questions = [
        {
            question: "Q1: What's your ideal weekend activity?",
            choices: [
                { text: "Reading a book at a cafe.", points: { resultA: 1, resultC: 1 } },
                { text: "Hiking in the mountains.", points: { resultB: 1, resultF: 1 } },
                { text: "Attending a coding workshop.", points: { resultE: 1, resultH: 1 } }
            ]
        },
        {
            question: "Q2: What is your preferred color palette?",
            choices: [
                { text: "Earthy tones (greens, browns).", points: { resultB: 1, resultD: 1 } },
                { text: "Pastels (pink, blue, lavender).", points: { resultC: 1, resultG: 1 } },
                { text: "Neon/Vibrant colors (cyan, magenta).", points: { resultE: 1, resultF: 1 } }
            ]
        },
        // Add 6 more questions here following the same structure
        // Example Q3:
        {
            question: "Q3: Pick a pet.",
            choices: [
                { text: "A sleek black cat.", points: { resultA: 1, resultD: 1 } },
                { text: "A fluffy golden retriever.", points: { resultB: 1, resultG: 1 } },
                { text: "A robotic dog.", points: { resultE: 1, resultH: 1 } }
            ]
        },
        // Q4 placeholder
         {
            question: "Q4: Your favorite season?",
            choices: [
                { text: "Spring, for the blossoms.", points: { resultC: 1, resultG: 1 } },
                { text: "Autumn, for the cozy vibes.", points: { resultA: 1, resultD: 1 } },
                { text: "Winter, for the crisp air.", points: { resultF: 1, resultH: 1 } }
            ]
        },
        // Q5 placeholder
         {
            question: "Q5: Ideal job title?",
            choices: [
                { text: "Librarian.", points: { resultA: 1, resultC: 1 } },
                { text: "Environmentalist.", points: { resultB: 1, resultF: 1 } },
                { text: "Data Scientist.", points: { resultE: 1, resultH: 1 } }
            ]
        },
        // Q6 placeholder
         {
            question: "Q6: Favorite type of music?",
            choices: [
                { text: "Classical/Jazz.", points: { resultA: 1, resultC: 1 } },
                { text: "Indie/Folk.", points: { resultB: 1, resultD: 1 } },
                { text: "Synthwave/Electronic.", points: { resultE: 1, resultF: 1, resultH: 1 } }
            ]
        },
        // Q7 placeholder
         {
            question: "Q7: A place you'd like to live?",
            choices: [
                { text: "A cabin in the woods.", points: { resultB: 1, resultF: 1 } },
                { text: "A bustling city apartment.", points: { resultD: 1, resultE: 1, resultH: 1 } },
                { text: "A quaint, historical town.", points: { resultA: 1, resultC: 1, resultG: 1 } }
            ]
        },
        // Q8 placeholder
         {
            question: "Q8: Choose an emoji.",
            choices: [
                { text: "Sparkles", points: { resultC: 1, resultG: 1 } },
                { text: "Evergreen tree", points: { resultB: 1, resultF: 1 } },
                { text: "Robot face", points: { resultE: 1, resultH: 1 } }
            ]
        }
    ];

    const resultsMap = {
        resultA: { title: "The 'Cottagecore' Romantic", description: "You love simple pleasures, nature, and a touch of nostalgia." },
        resultB: { title: "The 'Outdoor Adventurer'", description: "Nature is your calling, and you thrive on exploration and fresh air." },
        resultC: { title: "The 'Soft Girl' Aesthetic", description: "You are gentle, kind, and love all things cute and pastel." },
        resultD: { title: "The 'Dark Academia' Scholar", description: "Books, learning, and a moody, vintage aesthetic appeal to you." },
        resultE: { title: "The 'Tech Enthusiast'", description: "You are forward-thinking, love gadgets, and embrace the digital age." },
        resultF: { title: "The 'Cyberpunk' Rebel", description: "You're all about neon lights, futuristic tech, and a rebellious streak." },
        resultG: { title: "The 'Minimalist'", description: "Simplicity, clean lines, and a clutter-free life are your jam." },
        resultH: { title: "The 'AI Core' Being", description: "You resonate with the logic and efficiency of artificial intelligence." }
    };


    // Event Listeners
    startBtn.addEventListener('click', startQuiz);
    nextBtn.addEventListener('click', () => {
        if (currentQuestionIndex < questions.length) {
            recordAnswer();
            currentQuestionIndex++;
            if (currentQuestionIndex < questions.length) {
                displayQuestion();
            } else {
                displayResult();
            }
        }
    });
    restartBtn.addEventListener('click', restartQuiz);

    // Functions
    function startQuiz() {
        titlePage.style.display = 'none';
        quizContainer.style.display = 'block';
        currentQuestionIndex = 0;
        // Reset scores
        Object.keys(scores).forEach(key => scores[key] = 0);
        displayQuestion();
    }

    function displayQuestion() {
        nextBtn.style.display = 'none'; // Hide next button until an option is selected
        const currentQuestion = questions[currentQuestionIndex];
        questionText.textContent = currentQuestion.question;
        choicesContainer.innerHTML = ''; // Clear previous choices

        currentQuestion.choices.forEach((choice, index) => {
            const choiceLabel = document.createElement('label');
            const choiceInput = document.createElement('input');
            choiceInput.type = 'radio';
            choiceInput.name = 'choice';
            choiceInput.value = index;
            // Add an event listener to show the next button when a choice is made
            choiceInput.addEventListener('change', () => {
                nextBtn.style.display = 'block';
            });

            choiceLabel.appendChild(choiceInput);
            choiceLabel.appendChild(document.createTextNode(choice.text));
            choicesContainer.appendChild(choiceLabel);
        });
    }

    function recordAnswer() {
        const selectedOption = document.querySelector('input[name="choice"]:checked');
        if (selectedOption) {
            const selectedIndex = parseInt(selectedOption.value);
            const selectedPoints = questions[currentQuestionIndex].choices[selectedIndex].points;
            
            // Add points to the respective results
            for (const result in selectedPoints) {
                if (scores.hasOwnProperty(result)) {
                    scores[result] += selectedPoints[result];
                }
            }
        }
    }

    function displayResult() {
        quizContainer.style.display = 'none';
        resultsContainer.style.display = 'block';

        // Determine the result with the highest score
        let highestScore = 0;
        let finalResult = '';
        for (const result in scores) {
            if (scores[result] > highestScore) {
                highestScore = scores[result];
                finalResult = result;
            }
        }
        
        // Handle potential ties or no answers (fallback to a default or one of the options)
        if (!finalResult) {
            finalResult = 'resultA'; // Default fallback
        }

        const resultInfo = resultsMap[finalResult];
        resultTitle.textContent = resultInfo.title;
        resultDescription.textContent = resultInfo.description;
    }

    function restartQuiz() {
        resultsContainer.style.display = 'none';
        titlePage.style.display = 'block';
        currentQuestionIndex = 0;
        scores = {resultA: 0, resultB: 0, resultC: 0, resultD: 0, resultE: 0, resultF: 0, resultG: 0, resultH: 0};
    }
});


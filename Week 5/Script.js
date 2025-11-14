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
            question: "Q1: Pick a word.",
            choices: [
                { text: "Dream", points: { resultA: 1, resultC: 1 } },
                { text: "Lucid", points: { resultB: 1, resultF: 1 } },
                { text: "Hazy", points: { resultE: 1, resultH: 1 } }
            ]
        },
        {
            question: "Q2: Pick another word.",
            choices: [
                { text: "Foggy", points: { resultB: 1, resultD: 1 } },
                { text: "Dark", points: { resultC: 1, resultG: 1 } },
                { text: "Forest", points: { resultE: 1, resultF: 1 } }
            ]
        }, 
        {
            question: "Q3: Pick a cool color",
            choices: [
                { text: "Purple", points: { resultA: 1, resultD: 1 } },
                { text: "Blue", points: { resultB: 1, resultG: 1 } },
                { text: "Green", points: { resultE: 1, resultH: 1 } }
            ]
        }, 
         {
            question: "Q4: Now, pick a warm color!",
            choices: [
                { text: "Yellow", points: { resultC: 1, resultG: 1 } },
                { text: "Orange", points: { resultA: 1, resultD: 1 } },
                { text: "Red", points: { resultF: 1, resultH: 1 } }
            ]
        }, 
         {
            question: "Q5: Pick a character name (or names if there are two).",
            choices: [
                { text: "Leah and Lysander", points: { resultA: 1, resultC: 1 } },
                { text: "Aurora", points: { resultB: 1, resultF: 1 } },
                { text: "Daisy and Eli Bell", points: { resultE: 1, resultH: 1 } }
            ]
        }, 
         {
            question: "Q6: Pick another name (or names if there are two).",
            choices: [
                { text: "Oberon", points: { resultA: 1, resultC: 1 } },
                { text: "Sage and Rowan", points: { resultB: 1, resultD: 1 } },
                { text: "Willow", points: { resultE: 1, resultF: 1, resultH: 1 } }
            ]
        }, 
         {
            question: "Q7: Now, pick an item!",
            choices: [
                { text: "Microphone", points: { resultB: 1, resultF: 1 } },
                { text: "Curtain", points: { resultD: 1, resultE: 1, resultH: 1 } },
                { text: "Motorcycle", points: { resultA: 1, resultC: 1, resultG: 1 } }
            ]
        }, 
         {
            question: "Q8: Pick another item!",
            choices: [
                { text: "Guitar", points: { resultC: 1, resultG: 1 } },
                { text: "Anchor", points: { resultB: 1, resultF: 1 } },
                { text: "Swing-Set", points: { resultE: 1, resultH: 1 } }
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
        let highestScore = -1;
        let finalResult = '';
        for (const result in scores) {
            if (scores[result] > highestScore) {
                highestScore = scores[result];
                finalResult = result;
            } 
        
        // Handle potential ties or no answers (First result alphabetically will be chosen)
        else if (scores[result] === highestScore) {
                // If it's a tie, compare the result strings alphabetically.
                // JavaScript string comparison automatically handles alphabetical order.
                // If the current 'result' comes before the current 'finalResult' alphabetically, update the winner.
                if (finalResult === '' || result < finalResult) {
                    finalResult = result;
                }
            }
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


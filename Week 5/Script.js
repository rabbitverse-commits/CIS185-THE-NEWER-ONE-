document.addEventListener('DOMContentLoaded', () => {
    const questionTextElement = document.getElementById('question-text');
    const choiceButtonsElement = document.getElementById('choice-buttons');
    const nextButton = document.getElementById('next-btn');
    const quizContainer = document.getElementById('quiz-container');
    const resultsContainer = document.getElementById('results-container');
    const resultsTitle = document.getElementById('results-title');
    const resultsText = document.getElementById('results-text');
    const restartButton = document.getElementById('restart-btn');

    let currentQuestionIndex = 0;
    // Points accumulated for each of the 8 potential results (A-H)
    let resultPoints = { A: 0, B: 0, C: 0, D: 0, E: 0, F: 0, G: 0, H: 0 };
    let selectedChoice = null;

    // Define the quiz questions, choices, and the points each choice adds to a result
    const questions = [
        {
            question: "Q1: What environment do you prefer?",
            choices: [
                { text: "Forest", points: { A: 1, E: 1 } },
                { text: "Ocean", points: { B: 1, F: 1 } },
                { text: "Mountains", points: { C: 1, G: 1 } }
            ]
        },
        {
            question: "Q2: What is your primary tool?",
            choices: [
                { text: "Sword", points: { C: 1, A: 1 } },
                { text: "Magic", points: { D: 1, H: 1 } },
                { text: "Knowledge", points: { B: 1, E: 1 } }
            ]
        },
        // Add 6 more questions following the same structure. 
        // Ensure all 8 results (A-H) are reachable across the questions.
        // Below are placeholders to reach 8 questions.
        {
            question: "Q3: How do you face danger?",
            choices: [
                { text: "Head-on", points: { A: 1, C: 1 } },
                { text: "Strategically", points: { B: 1, D: 1 } },
                { text: "Avoid it", points: { G: 1, F: 1 } }
            ]
        },
        {
            question: "Q4: What's your favorite time of day?",
            choices: [
                { text: "Morning", points: { E: 1, G: 1 } },
                { text: "Afternoon", points: { C: 1, F: 1 } },
                { text: "Night", points: { B: 1, H: 1 } }
            ]
        },
        {
            question: "Q5: Choose an element.",
            choices: [
                { text: "Fire", points: { A: 1, D: 1 } },
                { text: "Water", points: { B: 1, F: 1 } },
                { text: "Earth", points: { E: 1, G: 1 } }
            ]
        },
        {
            question: "Q6: Which companion would you choose?",
            choices: [
                { text: "A dog", points: { A: 1, H: 1 } },
                { text: "A cat", points: { B: 1, D: 1 } },
                { text: "An owl", points: { C: 1, E: 1 } }
            ]
        },
        {
            question: "Q7: What treasure do you seek?",
            choices: [
                { text: "Gold", points: { F: 1, C: 1 } },
                { text: "A powerful artifact", points: { G: 1, H: 1 } },
                { text: "Hidden knowledge", points: { B: 1, E: 1 } }
            ]
        },
        {
            question: "Q8: What's your goal?",
            choices: [
                { text: "Become a hero", points: { A: 1, C: 1 } },
                { text: "Explore the world", points: { B: 1, F: 1 } },
                { text: "Live peacefully", points: { E: 1, G: 1 } }
            ]
        },
    ];

    // Define the results based on the points
    const results = {
        A: "You are a Brave Knight! You thrive on action and adventure.",
        B: "You are a Wise Scholar! Knowledge and strategy are your greatest strengths.",
        C: "You are a Mountain Guardian! Strong and stoic, you protect the high peaks.",
        D: "You are a Powerful Mage! You command the arcane arts.",
        E: "You are a Forest Ranger! At home among the trees and nature.",
        F: "You are a Deep Sea Explorer! The mysteries of the ocean call to you.",
        G: "You are a Peaceful Villager! You value community and a simple life.",
        H: "You are a Shadow Operative! You work in secret to achieve your goals."
    };


    // Function to start or restart the quiz
    function startQuiz() {
        currentQuestionIndex = 0;
        resultPoints = { A: 0, B: 0, C: 0, D: 0, E: 0, F: 0, G: 0, H: 0 };
        quizContainer.style.display = 'block';
        resultsContainer.style.display = 'none';
        showQuestion();
    }

    // Function to display the current question and choices
    function showQuestion() {
        resetState();
        const currentQuestion = questions[currentQuestionIndex];
        questionTextElement.innerText = currentQuestion.question;
        currentQuestion.choices.forEach((choice, index) => {
            const input = document.createElement('input');
            input.type = 'radio';
            input.id = `choice${index}`;
            input.name = 'choice';
            input.value = JSON.stringify(choice.points); // Store points data in the value
            
            const label = document.createElement('label');
            label.htmlFor = `choice${index}`;
            label.innerText = choice.text;
            label.classList.add('choice-label');

            const choiceWrapper = document.createElement('div');
            choiceWrapper.appendChild(input);
            choiceWrapper.appendChild(label);
            choiceButtonsElement.appendChild(choiceWrapper);

            input.addEventListener('change', onChoiceSelected);
        });
        nextButton.disabled = true;
    }

    // Function to clear previous choices
    function resetState() {
        while (choiceButtonsElement.firstChild) {
            choiceButtonsElement.removeChild(choiceButtonsElement.firstChild);
        }
    }

    // Handle choice selection
    function onChoiceSelected(event) {
        selectedChoice = event.target.value;
        nextButton.disabled = false;
    }

    // Handle the next button click
    nextButton.addEventListener('click', () => {
        if (selectedChoice) {
            // Add points to results
            const pointsToAdd = JSON.parse(selectedChoice);
            for (const result in pointsToAdd) {
                resultPoints[result] += pointsToAdd[result];
            }
            selectedChoice = null;
            currentQuestionIndex++;
            if (currentQuestionIndex < questions.length) {
                showQuestion();
            } else {
                showResults();
            }
        }
    });

    // Function to display the results
    function showResults() {
        quizContainer.style.display = 'none';
        resultsContainer.style.display = 'block';

        // Find the result with the maximum points
        let maxPoints = 0;
        let finalResultKey = '';
        for (const result in resultPoints) {
            if (resultPoints[result] > maxPoints) {
                maxPoints = resultPoints[result];
                finalResultKey = result;
            }
        }

        resultsTitle.innerText = "Your Result:";
        resultsText.innerText = results[finalResultKey] || "An unexpected outcome occurred. Try again!";
    }

    // Restart the quiz
    restartButton.addEventListener('click', startQuiz);

    // Initial call to start the quiz
    startQuiz();
});

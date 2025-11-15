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
            backgroundImage: `dreamyplace.jpg`,
            choices: [
                { text: "Dream", points: { resultD: 1, resultH: 1, resultE: 1 } },
                { text: "Lucid", points: { resultF: 1, resultC: 1, resultG: 1 } },
                { text: "Hazy", points: { resultA: 1, resultB: 1, resultG: 1 } }
            ]
        },
        {
            question: "Q2: Pick another word.",
            backgroundImage: `spookyforest.jpg`,
            choices: [
                { text: "Foggy", points: { resultE: 1, resultG: 1, resultB: 1 } },
                { text: "Dark", points: { resultA: 1, resultC: 1, resultE: 1 } },
                { text: "Forest", points: { resultE: 1, resultF: 1, resultH: 1 } }
            ]
        }, 
        {
            question: "Q3: Pick a cool color",
            backgroundImage: `coolcolors.jpg`,
            choices: [
                { text: "Purple", points: { resultD: 1, resultH: 1, resultB: 1 } },
                { text: "Blue", points: { resultB: 1, resultC: 1, resultH: 1 } },
                { text: "Green", points: { resultE: 1, resultF: 1, resultB: 1 } }
            ]
        }, 
         {
            question: "Q4: Now, pick a warm color!",
            backgroundImage: `warmcolors.jpg`,
            choices: [
                { text: "Yellow", points: { resultD: 1, resultG: 1, resultA: 1 } },
                { text: "Orange", points: { resultC: 1, resultF: 1, resultH: 1 } },
                { text: "Red", points: { resultA: 1, resultD: 1, resultG: 1 } }
            ]
        }, 
         {
            question: "Q5: Pick a character name (or names if there are two).",
            backgroundImage: `oldpaper.jpg`,
            choices: [
                { text: "Leah and Lysander", points: { resultA: 1, resultB: 1, resultD:1 } },
                { text: "Aurora", points: { resultA: 1, resultC: 1, resultD: 1 } },
                { text: "Daisy and Eli Bell", points: { resultD: 1, resultH: 1, resultA: 1 } }
            ]
        }, 
         {
            question: "Q6: Pick another name (or names if there are two).",
            backgroundImage: `vintagepaper.jpg`,
            choices: [
                { text: "Oberon", points: { resultE: 1, resultH: 1, resultG: 1 } },
                { text: "Sage and Rowan", points: { resultF: 1, resultG: 1, resultB: 1 } },
                { text: "Willow", points: { resultD: 1, resultH: 1, resultE: 1 } }
            ]
        }, 
         {
            question: "Q7: Now, pick an item!",
            backgroundImage: `darkroom.jpg`,
            choices: [
                { text: "Microphone", points: { resultC: 1, resultE: 1, resultH: 1 } },
                { text: "Curtain", points: { resultB: 1, resultF: 1, resultG: 1 } },
                { text: "Motorcycle", points: { resultA: 1, resultC: 1, resultE: 1 } }
            ]
        }, 
         {
            question: "Q8: Pick another item!",
            backgroundImage: `lightroom.jpg`,
            choices: [
                { text: "Guitar", points: { resultC: 1, resultF: 1, resultH: 1 } },
                { text: "Anchor", points: { resultB: 1, resultG: 1, resultH: 1 } },
                { text: "Swing", points: { resultD: 1, resultE: 1, resultF: 1 } }
            ]
        }
    ];

    const resultsMap = {
        resultA: { title: "Result 1: Motomari", description: `Wiki Link: https://aesthetics.fandom.com/wiki/Motomami

Which shares with the character Leah!

The main character in my story called RGAI: A Totally Normal Life!
She is the twin sister of Lysander, and the girlfriend to Aurora. Both her and Aurora share a house together and take care of the siblings Daisy and Eli Bell.

Gender: Female

Age: 34

"Fairytale symbolism": Red Riding Hood

Other aesthetics for Leah include: 
Vampire: https://aesthetics.fandom.com/wiki/Vampire#Gallery

Lo-Fi: https://aesthetics.fandom.com/wiki/Lo-fi_Art#Gallery

Neo-Tokyo: https://aesthetics.fandom.com/wiki/Neo-Tokyo#Gallery`
},
        resultB: { title: "Result 2: Vaporwave", description: `Wiki Link: https://aesthetics.fandom.com/wiki/Vaporwave

Which shares with the character Lysander!

A character in my story called RGAI: A Totally Normal Life!
He's the twin brother of Leah.

Gender: Male

Age: 34

"Fairytale symbolism": The Catepillar from Alice in Wonderland

Other aesthetics for Lysander include:
Mermaidcore: https://aesthetics.fandom.com/wiki/Mermaidcore

Neo-Chinese Style: https://aesthetics.fandom.com/wiki/Neo-Chinese_Style#Gallery

Guochao: https://aesthetics.fandom.com/wiki/Guochao#Gallery

Synthwave: https://aesthetics.fandom.com/wiki/Synthwave#References` 
},
        resultC: { title: "Result 3: Afrofuturism", description: `Wiki Link: https://aesthetics.fandom.com/wiki/Afrofuturism#Gallery

Which shares with the character Aurora!

A character in my story called RGAI: A Totally Normal Life!
She's the girlfriend to Leah. Both her and Leah share a house together and take care of the siblings Daisy and Eli Bell.

Gender: Female

Age: 35

"Fairytale symbolism": Cerebus

Other aesthetics for Aurora include:
Afropunk: https://aesthetics.fandom.com/wiki/Afropunk#Gallery

Fantasy Astronomy: https://aesthetics.fandom.com/wiki/Fantasy_Astronomy#Gallery`
},
        resultD: { title: "Result 4: Dreamcore and Kidcore", description: `Wiki Links:
(Daisy) Dreamcore: https://aesthetics.fandom.com/wiki/Dreamcore

(Eli) Kidcore: https://aesthetics.fandom.com/wiki/Kidcore

Which shares with the characters Daisy and Eli Bell!

A character in my story called RGAI: A Totally Normal Life!
They are siblings from another town, but they don't know where their parents are. Leah and Aurora take care of them in their home while they figure out where their parents are.

Daisy is the older sister, Eli is the younger brother

Gender: Female(Older Sister) and Male(Younger Brother)

Ages: 6(Eli) and 12(Daisy)

"Fairytale symbolism": Hansel and Gretal

Other aesthetics for the Bell siblings include:
(Daisy) Whimsicraft: https://aesthetics.fandom.com/wiki/Whimsicraft#Gallery

(Eli) Weirdcore: https://aesthetics.fandom.com/wiki/Weirdcore#Gallery` 
},
        resultE: { title: "Result 5: Fairygrunge", description: `Wiki Link: https://aesthetics.fandom.com/wiki/Fairy_Grunge

Which shares with the character Oberon!

A character in my story called RGAI: A Totally Normal Life!
He's the lead singer of a band that Daisy Bell likes. I haven't figured out the name yet.

Gender: Male

Age: 36

"Fairytale symbolism": Orpheus

Other aesthetics for Oberon include:
Forestpunk: https://aesthetics.fandom.com/wiki/Forestpunk#Gallery

Gloomcore: https://aesthetics.fandom.com/wiki/Gloomcore#Gallery` 
},
        resultF: { title: "Result 6: Goblincore", description: `Wiki Link: https://aesthetics.fandom.com/wiki/Goblincore

Which shares with the character Sage!

A character in my story called RGAI: A Totally Normal Life!
He's the bass player of the same band Oberon sings in that Daisy Bell likes. People think Rowan is their sibling, but neither Sage nor Rowan have confirmed it or denied it.

Gender: Male presenting

Age: 35

"Fairytale symbolism": Pan

Other aesthetics for Sage include:
Cottagegoth: https://aesthetics.fandom.com/wiki/Cottagegoth

Naturecore: https://aesthetics.fandom.com/wiki/Naturecore

Bloomcore: https://aesthetics.fandom.com/wiki/Bloomcore` 
},
        resultG: { title: "Result 7: Piratecore", description: `Wiki Link: https://aesthetics.fandom.com/wiki/Pirate

Which shares with the character Rowan!

A character in my story called RGAI: A Totally Normal Life!
He's the drummer of the same band group as Oberon and Sage that Daisy Bell likes. People think Sage is his sibling, but neither Sage nor Rowan have confirmed or denied it.

Gender: Male

Age: 36

"Fairytale symbolism": Captain John Silver

Other aesthetics for Rowan include:
Dark Nautical: https://aesthetics.fandom.com/wiki/Dark_Nautical#Gallery

Dark Fantasy: https://aesthetics.fandom.com/wiki/Dark_Fantasy#Gallery` 
},
        resultH: { title: "Result 8: Auroracore", description: `Wiki Link: https://aesthetics.fandom.com/wiki/Auroracore#Resources

(In case the page it deleted: https://aestheticsolan.com/auroracore-gallery/)

Which shares with the character Willow!

A character in my story called RGAI: A Totally Normal Life!
He's the lead guitarist in the same band Oberon, Sage, and Rowan are in that Daisy Bell likes.

Gender: Male

Age: 38

"Fairytale symbolism": Amalthea

Other aesthetics for Willow include:
Angelcore: https://aesthetics.fandom.com/wiki/Angelcore#Gallery

Holosexual (not a sexuality. Just for people who like holographic items): https://aesthetics.fandom.com/wiki/Holosexual#Gallery

Unicorns (but not the modern version of unicorns, the traditional version of unicorns).

Here is the link to the modern unicorn aesthetic if you wish to see what it is like: https://aesthetics.fandom.com/wiki/Unicorn_Trend
` 
}
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


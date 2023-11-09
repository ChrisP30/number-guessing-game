class numberGame {
    constructor() {
        this.currentScoreDisplay = document.querySelector('#current-score-display')
        this.highScoreDisplay = document.querySelector('#highscore-display')
        this.inputField = document.querySelector('#input-field')
        this.restartGameBtn = document.querySelector('#restart-btn')
        this.randomNumberDisplay = document.querySelector('.question-image')
        this.submitGuessBtn = document.querySelector('#submit-guess')
        this.body = document.querySelector('body')
        this.headingDisplay = document.querySelector('#header-heading')
        this.guessDisplay = document.querySelector('#guess-display')


        this.runGame(this.submitGuessBtn, this.restartGameBtn, this.currentScoreDisplay, this.highScoreDisplay, this.inputField, this.randomNumberDisplay, this.headingDisplay, this.guessDisplay)
    }

    runGame(submitGuessBtn, restartBtn, currentScoreDisplay, highScoreDisplay, inputField, randomNumberDisplay, heading, guessDisplay) {
        let tries = 20;
        let randomNumber = Math.floor(Math.random() * 20) + 1;
        let currentScore = 20;
        let highScore = 0;

        this.highScoreDisplay = `${highScore}`
    
        console.log(randomNumber);
        
        const checkGameOver = (randomNumber) => {
            if (tries <= 0) {
                submitGuessBtn.disabled = true;
                inputField.disabled = true;
                this.body.style.backgroundColor = 'red';
                heading.textContent = 'Game Over! No more tries left.';
                this.randomNumberDisplay.textContent = `${randomNumber}`
            }
        };

        submitGuessBtn.addEventListener('click', () => {
            let currentGuess = parseInt(inputField.value);
            
            if(currentGuess === randomNumber) {
                this.body.style.backgroundColor = 'green';
                guessDisplay.textContent = "That's Correct!"
                heading.textContent = 'You Win! Great Job!'
                submitGuessBtn.disabled = true;
                inputField.disabled = true;
                if (currentScore > highScore) {
                    highScore = currentScore;
                    highScoreDisplay.textContent = `${highScore}`;
                }
                randomNumberDisplay.textContent = `${randomNumber}`
            } else if(currentGuess < randomNumber) {
                tries -= 1;
                currentScore -= 1
                currentScoreDisplay.textContent = `${currentScore}`
                guessDisplay.textContent = 'Too Low!'
               checkGameOver(randomNumber)
            } else if(currentGuess > randomNumber) {
                tries -= 1;
                currentScore -= 1
                currentScoreDisplay.textContent = `${currentScore}`
                guessDisplay.textContent = 'Too High!'
               checkGameOver(randomNumber)
            }
        });
    
        restartBtn.addEventListener('click', () => {
            tries = 20;
            randomNumber = Math.floor(Math.random() * 20) + 1;
            currentScore = 20;
            submitGuessBtn.disabled = false; 
            inputField.disabled = false; 
            this.body.style.backgroundColor = '#696969'; 
            currentScoreDisplay.textContent = `${currentScore}`;
            randomNumberDisplay.textContent = '?'
            this.headingDisplay.textContent = 'Guess My Number!'
            this.guessDisplay.textContent = 'Start Guessing...'
            console.log(randomNumber);
        });
        checkGameOver(randomNumber)
    }
}

new numberGame();
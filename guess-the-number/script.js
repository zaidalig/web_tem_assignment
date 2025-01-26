$(document).ready(function () {
        let secretNumber;
        let attemptsLeft;

        // Initialize the game
        function initializeGame() {
                secretNumber = Math.floor(Math.random() * 100) + 1;
                attemptsLeft = 10;
                $('#feedback-text').text('').removeClass('visible');
                $('#attempts-remaining').text(`Attempts Remaining: ${attemptsLeft}`);
                $('#guess-input').val('');
                enableGame();
        }

        // Disable input and buttons when game is over
        function disableGame() {
                $('#submit-guess').prop('disabled', true);
                $('#guess-input').prop('disabled', true);
        }

        // Enable input and buttons when game starts or restarts
        function enableGame() {
                $('#submit-guess').prop('disabled', false);
                $('#guess-input').prop('disabled', false);
        }

        // Show feedback with animation
        function showFeedback(message, isVisible = true) {
                $('#feedback-text').text(message);
                if (isVisible) {
                        $('#feedback-text').addClass('visible');
                } else {
                        $('#feedback-text').removeClass('visible');
                }
        }

        // Handle guess submission
        $('#submit-guess').on('click', function () {
                const guess = Number($('#guess-input').val());

                // Validate input
                if (!guess || guess < 1 || guess > 100) {
                        showFeedback('Please enter a valid number between 1 and 100.');
                        return;
                }

                attemptsLeft--;
                $('#attempts-remaining').text(`Attempts Remaining: ${attemptsLeft}`);

                if (guess === secretNumber) {
                        showFeedback('Congratulations! You guessed the number!', true);
                        disableGame();
                } else if (guess < secretNumber) {
                        showFeedback('Too Low!');
                } else {
                        showFeedback('Too High!');
                }

                if (attemptsLeft === 0 && guess !== secretNumber) {
                        showFeedback(`Game Over! The number was ${secretNumber}.`, true);
                        disableGame();
                }

                $('#guess-input').val('').focus();
        });

        // Handle game restart
        $('#restart-game').on('click', function () {
                initializeGame();
        });

        // Initialize the game on page load
        initializeGame();
});

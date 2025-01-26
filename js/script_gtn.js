/* Guess the Number - script_gtn.js */

$(document).ready(function () {
    let secretNumber; // The randomly generated number to guess
    let attemptsLeft; // Number of attempts remaining

    /**
     * Initializes the game by generating a secret number and resetting attempts.
     */
    function initializeGame() {
        secretNumber = Math.floor(Math.random() * 100) + 1; // Generate number between 1 and 100
        attemptsLeft = 10; // Set initial attempts
        $('#gtn-feedback-text').text('').removeClass('visible'); // Clear feedback
        $('#gtn-attempts-remaining').text(`Attempts Remaining: ${attemptsLeft}`); // Update attempts display
        $('#gtn-guess-input').val(''); // Clear input field
        enableGame(); // Enable game controls
    }

    /**
     * Disables the input field and guess button when the game ends.
     */
    function disableGame() {
        $('#gtn-submit-guess').prop('disabled', true);
        $('#gtn-guess-input').prop('disabled', true);
    }

    /**
     * Enables the input field and guess button for gameplay.
     */
    function enableGame() {
        $('#gtn-submit-guess').prop('disabled', false);
        $('#gtn-guess-input').prop('disabled', false);
    }

    /**
     * Displays feedback messages with optional visibility.
     * @param {string} message - The message to display.
     * @param {boolean} isVisible - Determines if the message should fade in.
     */
    function showFeedback(message, isVisible = true) {
        $('#gtn-feedback-text').text(message);
        if (isVisible) {
            $('#gtn-feedback-text').addClass('visible');
        } else {
            $('#gtn-feedback-text').removeClass('visible');
        }
    }

    /**
     * Handles the guess submission event.
     */
    $('#gtn-submit-guess').on('click', function () {
        const guess = Number($('#gtn-guess-input').val()); // Retrieve and convert the user's guess to a number

        // Validate the input
        if (!guess || guess < 1 || guess > 100) {
            showFeedback('Please enter a valid number between 1 and 100.');
            return; // Exit the function if input is invalid
        }

        attemptsLeft--; // Decrement the number of attempts left
        $('#gtn-attempts-remaining').text(`Attempts Remaining: ${attemptsLeft}`); // Update attempts display

        // Determine the game outcome
        if (guess === secretNumber) {
            showFeedback('Congratulations! You guessed the number!', true); // User wins
            disableGame(); // Disable further input
        } else if (guess < secretNumber) {
            showFeedback('Too Low!'); // User's guess is too low
        } else {
            showFeedback('Too High!'); // User's guess is too high
        }

        // Check if the user has exhausted all attempts without guessing correctly
        if (attemptsLeft === 0 && guess !== secretNumber) {
            showFeedback(`Game Over! The number was ${secretNumber}.`, true); // User loses
            disableGame(); // Disable further input
        }

        $('#gtn-guess-input').val('').focus(); // Clear and focus the input field for the next guess
    });

    /**
     * Handles the game restart event.
     */
    $('#gtn-restart-game').on('click', function () {
        initializeGame(); // Reset the game to its initial state
    });

    // Initialize the game when the document is ready
    initializeGame();
});

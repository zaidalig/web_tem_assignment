/* Rock, Paper, Scissors - script_rps.js */

$(document).ready(function () {
    const choices = ['rock', 'paper', 'scissors'];

    // Event listener for choice buttons
    $('#rock-paper-scissors .choice').on('click', function () {
        const playerChoice = $(this).data('choice'); // Get player's choice
        const computerChoice = choices[Math.floor(Math.random() * 3)]; // Random computer choice
        determineWinner(playerChoice, computerChoice); // Determine game outcome
        animateChoices(playerChoice, computerChoice); // Animate choices
        highlightSelectedButton($(this)); // Highlight the selected button
    });

    /**
     * Determines the winner based on player and computer choices.
     * @param {string} player - The player's choice.
     * @param {string} computer - The computer's choice.
     */
    function determineWinner(player, computer) {
        if (player === computer) {
            $('#rps-result-text').text("It's a Tie!");
        } else if (
            (player === 'rock' && computer === 'scissors') ||
            (player === 'paper' && computer === 'rock') ||
            (player === 'scissors' && computer === 'paper')
        ) {
            $('#rps-result-text').text("Player Wins!");
        } else {
            $('#rps-result-text').text("Computer Wins!");
        }
    }

    /**
     * Animates the display of player and computer choices.
     * @param {string} player - The player's choice.
     * @param {string} computer - The computer's choice.
     */
    function animateChoices(player, computer) {
        // Set the source of the images to the corresponding choice
        $('#rps-player-choice').attr('src', `images/${player}.png`).addClass('active');
        $('#rps-computer-choice').attr('src', `images/${computer}.png`).addClass('active');

        // Remove the active class after 1 second to hide the images
        setTimeout(() => {
            $('#rps-player-choice').removeClass('active').attr('src', '');
            $('#rps-computer-choice').removeClass('active').attr('src', '');
        }, 1000);
    }

    /**
     * Highlights the selected button with animation.
     * @param {object} button - The jQuery object of the clicked button.
     */
    function highlightSelectedButton(button) {
        // Remove highlight from all buttons
        $('#rock-paper-scissors .choice').removeClass('selected animate-bounce');

        // Add highlight and animation to the clicked button
        button.addClass('selected animate-bounce');

        // Remove the highlight after the animation completes (0.5s)
        setTimeout(() => {
            button.removeClass('selected animate-bounce');
        }, 500);
    }
});

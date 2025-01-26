$(document).ready(function () {
        const choices = ['rock', 'paper', 'scissors'];

        $('.choice').on('click', function () {
                const playerChoice = $(this).data('choice');
                const computerChoice = choices[Math.floor(Math.random() * 3)];
                determineWinner(playerChoice, computerChoice);
                animateChoices(playerChoice, computerChoice);
        });

        function determineWinner(player, computer) {
                if (player === computer) {
                        $('#result-text').text("It's a Tie!");
                } else if (
                        (player === 'rock' && computer === 'scissors') ||
                        (player === 'paper' && computer === 'rock') ||
                        (player === 'scissors' && computer === 'paper')
                ) {
                        $('#result-text').text("Player Wins!");
                } else {
                        $('#result-text').text("Computer Wins!");
                }
        }

        function animateChoices(player, computer) {
                $('#player-choice').attr('src', `images/${player}.png`).addClass('active');
                $('#computer-choice').attr('src', `images/${computer}.png`).addClass('active');

                setTimeout(() => {
                        $('#player-choice').removeClass('active');
                        $('#computer-choice').removeClass('active');
                        $('#player-choice').attr('src', '');
                        $('#computer-choice').attr('src', '');
                }, 6000);
        }
});

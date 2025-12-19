const state = {
    wins: 0,
    losses: 0,
    ties: 0
};

function statReset() {
    state.wins = 0;
    state.losses = 0;
    state.ties = 0;
}

const style = ["rock", "paper", "scissors"];

function getMoves() {
    const randomIndex = Math.floor(Math.random() * style.length);
    return style[randomIndex];
}

function playOneRound(playerMove) {
    const computerMove = getMoves();
    let result;
    let message;

    if (playerMove === computerMove) {
        result = "tie";
        state.ties++;
        message = "It's a tie!";
    } else if (
        (playerMove === "rock" && computerMove === "scissors") ||
        (playerMove === "paper" && computerMove === "rock") ||
        (playerMove === "scissors" && computerMove === "paper")
    ) {
        result = "win";
        state.wins++;
        message = "You win!";
    } else {
        result = "lose";
        state.losses++;
        message = "You lose!";
    }

    return {
        playerMove,
        computerMove,
        result,
        message
    };
}

function mainMenu() {
    let running = true;

    while (running) {
        alert(
            "Main Menu:\n" +
            "1. Start Game\n" +
            "2. View Statistics\n" +
            "3. Reset Statistics\n" +
            "4. Quit"
        );

        let choice = prompt("Please select an option (1-4)");

        if (choice === "1") {
            let playerMove = prompt("Choose your move: rock, paper, or scissors");
            if (style.includes(playerMove)) {
                let result = playOneRound(playerMove);
                alert(`You chose: ${result.playerMove}\nComputer chose: ${result.computerMove}\n${result.message}`);
            } else {
                alert("Invalid move! Please choose rock, paper, or scissors.");
            }
        } else if (choice === "2") {
            alert(`Statistics:\nWins: ${state.wins}\nLosses: ${state.losses}\nTies: ${state.ties}`);
        } else if (choice === "3") {
            statReset();
            alert("Statistics have been reset!");
        } else if (choice === "4") {
            alert("Exiting the game. Thanks for playing!");
            running = false;
        } else {
            alert("INVALID CHOICE! Please select 1-4.");
        }
    }
}

mainMenu();

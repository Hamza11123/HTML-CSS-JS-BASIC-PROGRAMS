const compChs = document.getElementById("computerChoice"), usrCh = document.getElementById("userChoice"), disp = document.getElementById("result")
let uC;
const button = document.getElementsByTagName("button");

for (let i = 0; i < button.length; i++) {
    const chs = button[i];
    chs.addEventListener('click', e => {
        usrCh.innerHTML = e.target.id;
        let ranNum = generateComputerChoice();
        compChs.innerHTML = ranNum == 1 ? "Rock" : ranNum == 2 ? "Paper" : ranNum == 3 ? "Scissor" : ' ';
        console.log(ranNum);
        if (checkWin(usrCh.innerText, compChs.innerText) == -1) {
            disp.innerHTML = "Tie";

        }
        if (checkWin(usrCh.innerText, compChs.innerText) == 1) {
            disp.innerHTML = "User-Wins";

        }
        if (checkWin(usrCh.innerText, compChs.innerText) == 0) {
            disp.innerHTML = "Computer-Wins";

        }
    });
}
const generateComputerChoice = () => {
    return (Math.floor(Math.random() * (4 - 1)) + 1);
}

const checkWin = (userChoicePassedString, computerChoicePassedString) => {
    if (userChoicePassedString == computerChoicePassedString)
        return -1;
    if (userChoicePassedString == "Paper" && computerChoicePassedString == "Rock")
        return 1;
    if (userChoicePassedString == "Scissor" && computerChoicePassedString == "Paper")
        return 1;
    if (userChoicePassedString == "Rock" && computerChoicePassedString == "Scissor")
        return 1;
    if (userChoicePassedString == "Rock" && computerChoicePassedString == "Paper")
        return 0;
    if (userChoicePassedString == "Paper" && computerChoicePassedString == "Scissor")
        return 0;
    if (userChoicePassedString == "Scissor" && computerChoicePassedString == "Rock")
        return 0;
}






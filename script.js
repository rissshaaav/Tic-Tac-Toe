let gameBoardValues = ["","","","","","","","",""];

const cross = '<span class="material-symbols-outlined" style="color: #915917"> close </span>';
const circle = '<span class="material-symbols-outlined" style="color: #148992"> radio_button_unchecked </span>';
let isCrossTurn = false;

const updatePlayer = (x) => {
    if(x){
        document.getElementById('player').innerText = 'Cross';
        isCrossTurn = false;
    }
    else{
        document.getElementById('player').innerText = 'Circle';
        isCrossTurn = true;
    }
}
const checkWinner = () => {
    const winPattern = [[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];
    for(let i=0; i<winPattern.length; i++){
        let [a,b,c] = winPattern[i];
        if(gameBoardValues[a] && gameBoardValues[a]===gameBoardValues[b] && gameBoardValues[b]===gameBoardValues[c]){
            if(gameBoardValues[a]==='close'){
                return 'cross';
            }
            else if(gameBoardValues[a]==='radio_button_unchecked'){
                return 'circle';
            }
        }
    }
}
const checkTie = () => {
    let tie;
    for(let i = 0; i<9; i++){
        if(gameBoardValues[i]!==""){
            tie = 'tie';
        }
        else{
            tie = 'no tie';
            break;
        }
    }
    return tie;
}
const resetGame = () => {
    gameBoardValues = ["","","","","","","","",""];
    for(let i=0; i<9; i++){
        document.getElementById(i).innerHTML = "";
        document.getElementById(i).style.backgroundColor = '#fff';
    }

    updatePlayer(isCrossTurn);
}
const scoreIncrement = (winner) =>{
    if(winner==='cross'){
        alert('cross won');
        document.getElementById('cross-score').innerText = parseInt(document.getElementById('cross-score').innerText) + 1; 
    }
    else if(winner==='circle'){
        alert('circle won');
        document.getElementById('circle-score').innerText = parseInt(document.getElementById('circle-score').innerText) + 1;
    }
    else if(winner==='tie'){
        alert('Its a tie');
    }
    resetGame();
}

const marker = (index) => {
    if(gameBoardValues[index]===""){
        updatePlayer(isCrossTurn);
        document.getElementById(index).innerHTML = isCrossTurn ? cross : circle;
        document.getElementById(index).style.backgroundColor = isCrossTurn ? '#f38530' : '#68d1e7';
        gameBoardValues[index] = document.getElementById(index).innerText;
        if(checkWinner()){
            scoreIncrement(checkWinner());
        }
        else{
            if(checkTie()==='tie'){
                scoreIncrement(checkTie());
            }
        }
    }
}

let score_home = 0;
let score_guest = 0;
let Score_one = document.getElementById("score_one")
let Score_two = document.getElementById("score_two");


function scoreh1() {
    score_home += 1;
    Score_one = score_home;
    document.getElementById("scoreHomeDisplay").textContent = Score_one
}

function scoreh2() {
    score_home += 2;
    Score_one = score_home;
    document.getElementById("scoreHomeDisplay").textContent = Score_one
}

function scoreh3() {
    score_home += 3;
    Score_one = score_home;
    document.getElementById("scoreHomeDisplay").textContent = Score_one
}

function scoreg1() {
    score_guest +=1;
    Score_two= score_guest;
    document.getElementById("scoreGuest").textContent = Score_two;
    
}
function scoreg2() {
    score_guest +=2;
    Score_two= score_guest;
    document.getElementById("scoreGuest").textContent = Score_two;
    
}
function scoreg3() {
    score_guest +=3;
    Score_two= score_guest;
    document.getElementById("scoreGuest").textContent = Score_two;
    
}
function Restart(){
    score_home=0;
    score_guest=0;

    document.getElementById("scoreGuest").textContent = score_guest;
    document.getElementById("scoreHomeDisplay").textContent = score_home;
    document.getElementById("winner").textContent = "Winner : "
}
function win() {
    
    if(score_home>score_guest) {
        let winner = "Team Home";
        document.getElementById("winner").textContent += winner;
        
    }
    else if(score_home<score_guest) {
        let winner = "Team Guest"
        document.getElementById("winner").textContent += winner;
    }
    else {
        let winner = "Draw";
        document.getElementById("winner").textContent += winner;
    }
}


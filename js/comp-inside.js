let backgroundImg = './images/back-img-export.png';
let playerImages = new Array();
let buttons = new Array();
let casseteLight = './images/cassete-light.png';
let lr = './images/leftRight/LR.png';
let iP = 0;
let iS = 0;
let iB = 0;
let leftRight = new Array();


for (let i = 0; i < 9; i++){
    leftRight.push(`./images/leftRight/LR${i+1}.png`)
}

playerImages[0] = './images/cassete1.png'; 
playerImages[1] = './images/cassete2.png'; 


buttons[0] = './images/prev.png';
buttons[1] = './images/pause.png';
buttons[2] = './images/next.png';
buttons[3] = './images/control-folder.png';
buttons[4] = './images/play.png';
buttons[5] = './images/controls-panel.png';

function changeBack() {
    document.getElementById("loading").src = backgroundImg;
}

let player1 = document.getElementById("player1");
function playerVisible() {
    player1.src = playerImages[iP]; 
    if (audPlayed == 1) {
        iP++;
        if (iP == playerImages.length) {
            iP = 0;
        }
    }
        setTimeout("playerVisible()",500);
}
function casseteLightON() {
    document.getElementById("cassete-light").src = casseteLight; 
}
function lrON() {
    document.getElementById("left-right").src = lr; 
}

let stereo = document.getElementById("stereo");
function stereoVis() {
    
    stereo.src = leftRight[iS]; 
    if (audPlayed == 1){
        iS++;
        
        if (iS == leftRight.length) {
            iS = 0;
        }
    }
    setTimeout("stereoVis()",60);
}

function buttonsVis() {
    
    player1.src = playerImages[0]; 
    stereo.src = leftRight[0]; 
    stereo.src = leftRight[iS]; 
    document.getElementById("prevcss").src = buttons[0]; 
    document.getElementById("pausecss").src = buttons[1];
    document.getElementById("nextcss").src = buttons[2]; 
    document.getElementById("control-folder").src = buttons[3];
    document.getElementById("playcss").src = buttons[4];
    document.getElementById("controls-panel").src = buttons[5];

}
let backMobile = new Array();
let iBM = 0;

for (let i = 0; i < 3; i++){
    backMobile.push(`./mobile-images/back-mobile${i+1}.png`)
}

let mobileBackLet = document.getElementById('mobile-back');
function mobileBack() {
    mobileBackLet.src = backMobile[iBM]; 
    iBM++;
    if (iBM == backMobile.length) {
        iBM = 0;
    }
    setTimeout("mobileBack()",500);
    
}
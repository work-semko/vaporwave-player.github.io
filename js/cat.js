
    var images = new Array();
    var i = 0;
     
    images[0] = './images/cat1.png';
    images[1] = './images/cat2.png';
    let cat = document.getElementById("cat");
    function viewImages() {
        cat.src = images[i]; 
        i++;
        if (i == images.length) {
            i = 0;
        }
        setTimeout("viewImages()",500);
    }   
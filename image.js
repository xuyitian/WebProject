const cvs = document.getElementById("image");
const ctx = cvs.getContext("2d");

const BG_IMG = new Image();
BG_IMG.src = "grasswithsky.png";

function loop(){
    // CLEAR THE CANVAS
   
    ctx.drawImage(BG_IMG, 300,500);

        

    

}
loop();
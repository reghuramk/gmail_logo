var ctx;
var factorValue = 1;
var fontFamily = "65px 'Gill Sans Ultra Bold', sans-serif";

function init() {
    ctx = document.getElementById('canvas').getContext('2d');
    ctx.font = fontFamily;
    ctx.save();
    doLogo();
}

function doLogo() {
    // Drawing the HTML text
    var offsetY = 80;
    ctx.restore();
    ctx.save();
    ctx.clearRect(0, 0, 600, 400);
    ctx.scale(factorValue, factorValue);
    ctx.fillText("HTML", 31, 60);
    ctx.translate(0, offsetY);

    // drawing the 5 sided orange background
    ctx.fillStyle = "#E34C26";
    ctx.beginPath();
    ctx.moveTo(39, 250);
    ctx.lineTo(17, 0);
    ctx.lineTo(262, 0);
    ctx.lineTo(239,250);
    ctx.lineTo(139, 278);
    ctx.closePath();
    ctx.fill();

    // right hand, lighter orange part of the background
    ctx.fillStyle = "#F06529";
    ctx.beginPath();
    ctx.moveTo(139, 257);
    ctx.lineTo(220, 234);
    ctx.lineTo(239, 20);
    ctx.lineTo(139, 20);
    ctx.closePath();
    ctx.fill();

    // light gray, lef hand side part of the 5
    ctx.fillStyle = "#EBEBEB";
    ctx.beginPath()
    ctx.moveTo(139, 113);
    ctx.lineTo(98, 113);
    ctx.lineTo(96, 82);
    ctx.lineTo(139, 82);
    ctx.lineTo(139, 51);
    ctx.lineTo(62, 51);
    ctx.lineTo(70, 144);
    ctx.lineTo(139, 144);
    ctx.closePath();

    ctx.fill();

    ctx.beginPath();
    ctx.moveTo(139, 193);
    ctx.lineTo(105, 184);
    ctx.lineTo(103, 159);
    ctx.lineTo(72, 159);
    ctx.lineTo(76, 207);
    ctx.lineTo(139, 225);
    ctx.closePath();
    ctx.fill();

    // white, right hand side of the 5
    ctx.fillStyle = "#FFFFFF";
    ctx.beginPath();
    ctx.moveTo(139, 113);
    ctx.lineTo(139, 144);
    ctx.lineTo(177, 144);
    ctx.lineTo(173, 184);
    ctx.lineTo(139, 193);
    ctx.lineTo(139, 225);
    ctx.lineTo(202, 207);
    ctx.lineTo(210, 113);
    ctx.closePath();
    ctx.fill();

    ctx.beginPath();
    ctx.moveTo(139, 51); 
    ctx.lineTo(139, 82); 
    ctx.lineTo(213, 82); 
    ctx.lineTo(216, 51); 
    ctx.closePath(); 
    ctx.fill();
}

// The changeScale function, response to the user input
function changeScale(val) {
    factorValue = val / 10;

    doLogo();
}
import {Logo} from './logoClass.js';

let newCtx = document.getElementById('canvas').getContext('2d');
let myLogo = new Logo(newCtx);

let theSlider = document.getElementById('slider');
theSlider.addEventListener('change', onChangeScale);

function init() {
    let offsetY = 80;
    let logoBgColor = "#E34C26";
    myLogo.drawHtmlText(offsetY);
    myLogo.drawPentaGone(logoBgColor);
    myLogo.drawLighterSide("#F06529");
    myLogo.drawFive();
}

function onChangeScale(value) {
    myLogo.changeScale(theSlider.value);
    init();
}

init();
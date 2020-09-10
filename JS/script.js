const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');


//back rect

ctx.beginPath();
ctx.fillStyle = '#F5F5F5';
ctx.fillRect(0, 0, 300, 250);
ctx.closePath();

//triangle shadow

ctx.beginPath();
ctx.strokeStyle = "rgba(0, 0, 0, 0.2)";
ctx.fillStyle = "rgba(0, 0, 0, 0.4)";
ctx.moveTo(147,143);
ctx.lineTo(270, canvas.height);
ctx.lineTo(290,0);
ctx.fill();
ctx.stroke();
ctx.closePath();

//last part of M

ctx.beginPath();
ctx.strokeStyle = "#A00000";
ctx.lineWidth = 40;
ctx.moveTo(285,0);
ctx.lineTo(285, canvas.height);
ctx.stroke();
ctx.closePath();


// first part of M
ctx.beginPath();
ctx.strokeStyle = "#DF1515";
ctx.lineWidth = 40;
ctx.moveTo(15,canvas.height);
ctx.lineTo(15, 15);
ctx.lineTo(150,120);
ctx.lineTo(canvas.width,-7);
ctx.stroke();
ctx.closePath();

// line shadow
ctx.beginPath();
ctx.strokeStyle = "rgba(0, 0, 0, 0.2)";
ctx.lineWidth = 5;
ctx.moveTo(35, canvas.height);
ctx.lineTo(149,145);
ctx.stroke();
ctx.closePath();

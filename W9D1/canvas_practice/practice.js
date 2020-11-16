document.addEventListener("DOMContentLoaded", function(){
    const canvas = document.getElementById('mycanvas');
    const ctx = canvas.getContext('2d');

    // Square
    ctx.fillStyle = "red";
    ctx.fillRect(50, 50, 200, 200); 

    // Circle
    ctx.strokeStyle = "blue";
    ctx.lineWidth = 10;
    ctx.beginPath();
    ctx.arc(150, 150, 95, 50, 0, 360);
    ctx.stroke();
    ctx.fillStyle = "purple";
    ctx.fill();

    // Triangle
    ctx.strokeStyle = "green";
    ctx.lineWidth = 10;
    ctx.beginPath();
    ctx.moveTo(200, 200);
    ctx.lineTo(100, 200);
    ctx.lineTo(150, 100);
    ctx.closePath();
    ctx.stroke()
});

canvas= document.getElementById("myCanvas");

ctx = canvas.getContext("2d");

color_rec = "black";

ctx.beginPath();
ctx.strokeStyle= color_rec;
ctx.lineWidth= 2;
ctx.rect(150, 143, 500, 215);
ctx.stroke();

color_circle_1 = "blue";

ctx.beginPath();
ctx.strokeStyle=color_circle_1;
ctx.lineWidth=2;
ctx.arc(250, 210, 50, 0, 2*Math.PI);
ctx.stroke();  

ctx.beginPath();
ctx.strokeStyle=color_rec;
ctx.lineWidth=2;
ctx.arc(385, 210, 50, 0, 2*Math.PI);
ctx.stroke(); 

color_circle_3 = "red";

ctx.beginPath();
ctx.strokeStyle=color_circle_3;
ctx.lineWidth=2;
ctx.arc(515, 210, 50, 0, 2*Math.PI);
ctx.stroke();

color_circle_4 = "yellow";

ctx.beginPath();
ctx.strokeStyle=color_circle_4;
ctx.lineWidth=2;
ctx.arc(315, 270, 50, 0, 2*Math.PI);
ctx.stroke();

color_circle_5 = "green";

ctx.beginPath();
ctx.strokeStyle=color_circle_5;
ctx.lineWidth=2;
ctx.arc(450, 270, 50, 0, 2*Math.PI);
ctx.stroke();
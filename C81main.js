canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");
color="red";

canvas.addEventListener("mousedown",my_mousedown);

function my_mousedown(e){
    mousex=e.clientX-canvas.offsetLeft;
    mousey=e.clientY-canvas.offsetTop;
    console.log("X="+mousex+"y="+mousey);
    circle(mousex,mousey);

}


function circle(mousex,mousey){
    ctx.beginPath();
    ctx.strokeStyle=color;
    ctx.lineWidth=2;
    ctx.arc(mousex,mousey,40,0,2*Math.PI);
    ctx.stroke();





}

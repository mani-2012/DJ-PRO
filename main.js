derechaX=0;
derechaY=0;
izquierdaX=0;
izquierdaY=0;
function setup(){
    cuadro=createCanvas(400,400);
    cuadro.position(509,170);
    camara=createCapture(VIDEO);
    camara.hide();
    beauty=ml5.poseNet(camara,mouse);
    beauty.on('pose',ibiza);
}
function mouse(){
  console.log("LISTO ya esta lo que aparezca :) ");
}
function ibiza(resuelve){
if (resuelve) {
    console.log(resuelve);
    derechaX=resuelve[0].pose.rightWrist.x;
    derechaY=resuelve[0].pose.rightWrist.y;
    izquierdaX=resuelve[0].pose.leftWrist.x;
    izquierdaY=resuelve[0].pose.leftWrist.y;
}
}
function draw(){
 image(camara,0,0,400,400);
 fill("lightskyblue");
 stroke("darkblue");
circle(derechaX,derechaY,20);
circle(izquierdaX,izquierdaY,20);
if (izquierdaY>350) {
    sonido.setVolume(0);
    document.getElementById("Volume").innerHTML="VOLUMEN: 0";
}
else if (izquierdaY>300 && izquierdaY<350) {
    sonido.setVolume(1);
    document.getElementById("Volume").innerHTML="VOLUMEN: 1";
}
else if (izquierdaY>250 && izquierdaY<300) {
    sonido.setVolume(2);
    document.getElementById("Volume").innerHTML="VOLUMEN: 2";
}
else if (izquierdaY>200 && izquierdaY<250) {
    sonido.setVolume(3);
    document.getElementById("Volume").innerHTML="VOLUMEN: 3";
}
else if (izquierdaY>150 && izquierdaY<200) {
    sonido.setVolume(4);
    document.getElementById("Volume").innerHTML="VOLUMEN: 4";
}
else if (izquierdaY>100 && izquierdaY<150) {
    sonido.setVolume(5);
    document.getElementById("Volume").innerHTML="VOLUMEN: 5";
}
else if (izquierdaY>50 && izquierdaY<100) {
    sonido.setVolume(6);
    document.getElementById("Volume").innerHTML="VOLUMEN: 6";
}
else if (izquierdaY>0 && izquierdaY<50) {
    sonido.setVolume(7);
    document.getElementById("Volume").innerHTML="VOLUMEN: 7";
}

if (derechaY>350) {
    sonido.rate(0);
    document.getElementById("rate").innerHTML="VELOCIDAD: 0";
}
else if (derechaY>300 && derechaY<350) {
    sonido.rate(1);
    document.getElementById("rate").innerHTML="VELOCIDAD: 1";
}
else if (derechaY>250 && derechaY<300) {
    sonido.rate(2);
    document.getElementById("rate").innerHTML="VELOCIDAD: 2";
}
else if (derechaY>200 && derechaY<250) {
    sonido.rate(3);
    document.getElementById("rate").innerHTML="VELOCIDAD: 3";
}
else if (derechaY>150 && derechaY<200) {
    sonido.rate(4);
    document.getElementById("rate").innerHTML="VELOCIDAD: 4";
}
else if (derechaY>100 && derechaY<150) {
    sonido.rate(5);
    document.getElementById("rate").innerHTML="VELOCIDAD: 5";
}
else if (izquierdaY>50 && izquierdaY<100) {
    sonido.rate(6);
    document.getElementById("rate").innerHTML="VELOCIDAD: 6";
}
else if (izquierdaY>0 && izquierdaY<50) {
    sonido.rate(7);
    document.getElementById("rate").innerHTML="VELOCIDAD: 7";
}
}
function preload(){
    sonido=loadSound("music.mp3");
}
function play(){
    sonido.play();
    sonido.setVolume(1);
    sonido.rate(1);
}
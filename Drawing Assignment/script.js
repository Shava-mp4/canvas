//Canvas Setup
var cnv = document.getElementById("myCanvas");
var ctx = cnv.getContext("2d");
cnv.width = 600;
cnv.height = 400;

requestAnimationFrame(draw);

let frame = 0;

let phaseX = 180;
let phaseY = 80;
let phaseSize = 70;

let bgC1 = 290;
let bgCSpeed = 0.2;
let bgC2 = 200;

let cloudSpeed = 0.2;
let cloud2Speed = -0.5;

let cloud1C1 = 80;
let cloud1C2 = 120;
let cloud1C3 = 175;
let cloud1C4 = 230;
let cloud1C5 = 210;
let cloud1C6 = 140;
let cloud1C7 = 170;
let cloud1C8 = 80;
let cloud1C9 = 120;

let cloud2C1 = 370;
let cloud2C2 = 410;
let cloud2C3 = 465;
let cloud2C4 = 520;
let cloud2C5 = 470;
let cloud2C6 = 430;
let cloud2C7 = 480;
let cloud2C8 = 370;
let cloud2C9 = 410;
let cloud2c10 = 520;

let phaseColour = "rgb(29, 41, 79)";
let bgColour3 = "rgb(29, 41, 79)";
let bgColour1 = "rgb(21, 30, 59)";
let bgColour2 = "rgb(26, 37, 71)";
let starColour = "rgb(243, 245, 166)";
let sunColour = "rgb(243, 245, 166)";

function draw() {
  //Background

  ctx.fillStyle = bgColour1;
  ctx.fillRect(0, 0, 600, 500);

  frame++;

  //bg colours
  ctx.fillStyle = bgColour2;
  ctx.beginPath();
  ctx.arc(150, 100, bgC1, 0, 2 * Math.PI);
  ctx.fill();

  ctx.fillStyle = bgColour3;
  ctx.beginPath();
  ctx.arc(150, 100, bgC2, 0, 2 * Math.PI);
  ctx.fill();

  //Moon
  ctx.fillStyle = starColour;
  ctx.beginPath();
  ctx.arc(150, 100, 90, 0, 2 * Math.PI);
  ctx.fill();

  ctx.fillStyle = bgColour3;
  ctx.beginPath();
  ctx.arc(phaseX, phaseY, phaseSize, 0, 2 * Math.PI);
  ctx.fill();

  //Stars
  ctx.fillStyle = starColour;
  ctx.fillRect(330, 220, 3, 3);
  ctx.fillRect(40, 360, 3, 3);
  ctx.fillRect(370, 170, 3, 3);
  ctx.fillRect(500, 370, 3, 3);
  ctx.fillRect(550, 40, 3, 3);
  ctx.fillRect(278, 98, 3, 3);
  ctx.fillRect(33, 80, 3, 3);
  ctx.fillRect(519, 126, 3, 3);
  ctx.fillRect(547, 207, 3, 3);
  ctx.fillRect(585, 290, 3, 3);
  ctx.fillRect(302, 153, 3, 3);
  ctx.fillRect(390, 385, 3, 3);
  ctx.fillRect(573, 122, 3, 3);
  ctx.fillRect(213, 354, 3, 3);
  ctx.fillRect(13, 281, 3, 3);
  ctx.fillRect(33, 178, 3, 3);
  ctx.fillRect(325, 50, 3, 3);
  ctx.fillRect(48, 24, 3, 3);
  ctx.fillRect(149, 380, 3, 3);
  ctx.fillRect(277, 300, 3, 3);
  ctx.fillRect(468, 19, 3, 3);
  ctx.fillRect(572, 382, 3, 3);
  ctx.fillRect(450, 89, 3, 3);
  ctx.fillRect(460, 169, 3, 3);
  ctx.fillRect(309, 348, 3, 3);
  ctx.fillRect(123, 326, 3, 3);
  ctx.fillRect(250, 29, 3, 3);
  ctx.fillRect(402, 10, 3, 3);
  ctx.fillRect(149, 111, 3, 3);
  ctx.fillRect(124, 65, 3, 3);
  ctx.fillRect(248, 167, 3, 3);
  ctx.fillRect(207, 130, 3, 3);
  ctx.fillRect(194, 67, 3, 3);
  ctx.fillRect(260, 395, 3, 3);
  ctx.fillRect(380, 107, 3, 3);

  //Cloud 1
  ctx.fillStyle = "rgb(220, 225, 245)";
  ctx.beginPath();
  ctx.arc(cloud1C1, 225, 60, 0, 2 * Math.PI);
  ctx.fill();

  ctx.beginPath();
  ctx.arc(cloud1C2, 255, 40, 0, 2 * Math.PI);
  ctx.fill();

  ctx.beginPath();
  ctx.arc(cloud1C3, 245, 50, 0, 2 * Math.PI);
  ctx.fill();

  ctx.beginPath();
  ctx.arc(cloud1C4, 225, 50, 0, 2 * Math.PI);
  ctx.fill();

  ctx.fillStyle = "white";
  ctx.beginPath();
  ctx.arc(cloud1C5, 210, 50, 0, 2 * Math.PI);
  ctx.fill();

  ctx.beginPath();
  ctx.arc(cloud1C6, 200, 60, 0, 2 * Math.PI);
  ctx.fill();

  ctx.beginPath();
  ctx.arc(cloud1C7, 210, 50, 0, 2 * Math.PI);
  ctx.fill();

  ctx.beginPath();
  ctx.arc(cloud1C8, 210, 50, 0, 2 * Math.PI);
  ctx.fill();

  ctx.beginPath();
  ctx.arc(cloud1C9, 220, 50, 0, 2 * Math.PI);
  ctx.fill();

  //Cloud 2
  ctx.fillStyle = "rgb(220, 225, 245)";
  ctx.beginPath();
  ctx.arc(cloud2C1, 295, 60, 0, 2 * Math.PI);
  ctx.fill();

  ctx.beginPath();
  ctx.arc(cloud2C2, 325, 40, 0, 2 * Math.PI);
  ctx.fill();

  ctx.beginPath();
  ctx.arc(cloud2C3, 315, 50, 0, 2 * Math.PI);
  ctx.fill();

  ctx.beginPath();
  ctx.arc(cloud2C4, 295, 50, 0, 2 * Math.PI);
  ctx.fill();

  ctx.fillStyle = "white";
  ctx.beginPath();
  ctx.arc(cloud2C5, 295, 50, 0, 2 * Math.PI);
  ctx.fill();

  ctx.beginPath();
  ctx.arc(cloud2C6, 255, 50, 0, 2 * Math.PI);
  ctx.fill();

  ctx.beginPath();
  ctx.arc(cloud2C7, 270, 50, 0, 2 * Math.PI);
  ctx.fill();

  ctx.beginPath();
  ctx.arc(cloud2C8, 280, 50, 0, 2 * Math.PI);
  ctx.fill();

  ctx.beginPath();
  ctx.arc(cloud2C9, 300, 50, 0, 2 * Math.PI);
  ctx.fill();

  ctx.beginPath();
  ctx.arc(cloud2c10, 280, 40, 0, 2 * Math.PI);
  ctx.fill();

  //moon phase
  if (phaseSize <= 90) {
    phaseX = phaseX - 1.43;
    phaseY = phaseY + 0.95;
    phaseSize++;
  }

  if (phaseSize >= 90) {
    phaseX = phaseX - 1.43;
    phaseY = phaseY + 0.95;
    phaseSize--;
  }

  if (phaseY >= 200) {
    phaseX = 300;
    phaseY = 0;
    phaseSize = 20;
  }

  if (phaseY <= 80) {
    bgC1 = bgC1 - bgCSpeed;
  }

  if (phaseY >= 80) {
    bgC1 = bgC1 + bgCSpeed;
  }

  if (phaseY <= 80) {
    bgC2 = bgC2 - bgCSpeed;
  }

  if (phaseY >= 80) {
    bgC2 = bgC2 + bgCSpeed;
  }

  //Clouds
  cloud1C1 = cloud1C1 + cloudSpeed;
  cloud1C2 = cloud1C2 + cloudSpeed;
  cloud1C3 = cloud1C3 + cloudSpeed;
  cloud1C4 = cloud1C4 + cloudSpeed;
  cloud1C5 = cloud1C5 + cloudSpeed;
  cloud1C6 = cloud1C6 + cloudSpeed;
  cloud1C7 = cloud1C7 + cloudSpeed;
  cloud1C8 = cloud1C8 + cloudSpeed;
  cloud1C9 = cloud1C9 + cloudSpeed;

  if (cloud1C4 >= 300) {
    cloudSpeed = -0.5;
  }

  if (cloud1C4 <= 150) {
    cloudSpeed = 0.5;
  }

  cloud2C1 = cloud2C1 + cloud2Speed;
  cloud2C2 = cloud2C2 + cloud2Speed;
  cloud2C3 = cloud2C3 + cloud2Speed;
  cloud2C4 = cloud2C4 + cloud2Speed;
  cloud2C5 = cloud2C5 + cloud2Speed;
  cloud2C6 = cloud2C6 + cloud2Speed;
  cloud2C7 = cloud2C7 + cloud2Speed;
  cloud2C8 = cloud2C8 + cloud2Speed;
  cloud2C9 = cloud2C9 + cloud2Speed;
  cloud2c10 = cloud2c10 + cloud2Speed;

  if (cloud2C4 >= 620) {
    cloud2Speed = -0.5;
  }

  if (cloud2C1 <= 320) {
    cloud2Speed = 0.5;
  }

  ctx.font = "10px Georgia";
  ctx.fillText("Frame: " + frame, 20, 20);

  requestAnimationFrame(draw);
}

//Keyboard event
document.addEventListener("keypress", keyboardHandler);

function keyboardHandler(event) {
  if (event.code == "KeyD") {
    bgColour1 = "rgb(255, 133, 91)";
    bgColour2 = "rgb(255, 152, 83)";
    bgColour3 = "rgb(255, 162, 99)";
    starColour = "rgb(255, 177, 80)";
  }
}

//make the moon phase change
//during phase change have the background get darker
//stars twinkle
//clouds move slighly
//press a key and the scene with change to a sunny sky

//Text
// ctx.font = "10px Arial";
// ctx.fillStyle = "rgb(70, 82, 121)";
// ctx.fillText("Jenaya F", 560, 398);

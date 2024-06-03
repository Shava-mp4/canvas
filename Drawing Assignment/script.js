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
let phaseSpeed = 1;

let bgC1 = 290;
let bgCSpeed = -0.5;
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

let star1 = 330;
let star2 = 40;
let star3 = 370;
let star4 = 500;
let star5 = 550;
let star6 = 278;
let star7 = 33;
let star8 = 519;
let star9 = 547;
let star10 = 585;
let star11 = 302;
let star12 = 390;
let star13 = 573;
let star14 = 213;
let star15 = 13;
let star16 = 33;
let star17 = 325;
let star18 = 460;
let star19 = 149;
let star20 = 260;

let phaseColour = "rgb(29, 41, 79)";
let bgColour3 = "rgb(29, 41, 79)";
let bgColour1 = "rgb(21, 30, 59)";
let bgColour2 = "rgb(26, 37, 71)";
let starColour = "rgb(243, 245, 166)";
let moonColour = "rgb(243, 245, 166)";
let cloudColour1 = "white";
let cloudColour2 = "rgb(220, 225, 245)";

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
  ctx.fillStyle = moonColour;
  ctx.beginPath();
  ctx.arc(150, 100, 90, 0, 2 * Math.PI);
  ctx.fill();

  ctx.fillStyle = phaseColour;
  ctx.beginPath();
  ctx.arc(phaseX, phaseY, phaseSize, 0, 2 * Math.PI);
  ctx.fill();

  //Stars
  ctx.fillStyle = starColour;
  ctx.fillRect(star1, 220, 3, 3);
  ctx.fillRect(star2, 360, 3, 3);
  ctx.fillRect(star3, 170, 3, 3);
  ctx.fillRect(star4, 370, 3, 3);
  ctx.fillRect(star5, 40, 3, 3);
  ctx.fillRect(star6, 98, 3, 3);
  ctx.fillRect(star7, 80, 3, 3);
  ctx.fillRect(star8, 126, 3, 3);
  ctx.fillRect(star9, 207, 3, 3);
  ctx.fillRect(star10, 290, 3, 3);
  ctx.fillRect(star11, 153, 3, 3);
  ctx.fillRect(star12, 385, 3, 3);
  ctx.fillRect(star13, 122, 3, 3);
  ctx.fillRect(star14, 354, 3, 3);
  ctx.fillRect(star15, 281, 3, 3);
  ctx.fillRect(star16, 178, 3, 3);
  ctx.fillRect(star17, 50, 3, 3);
  ctx.fillRect(48, 24, 3, 3);
  ctx.fillRect(149, 380, 3, 3);
  ctx.fillRect(277, 300, 3, 3);
  ctx.fillRect(468, 19, 3, 3);
  ctx.fillRect(572, 382, 3, 3);
  ctx.fillRect(450, 89, 3, 3);
  ctx.fillRect(star18, 169, 3, 3);
  ctx.fillRect(309, 348, 3, 3);
  ctx.fillRect(123, 326, 3, 3);
  ctx.fillRect(250, 29, 3, 3);
  ctx.fillRect(402, 10, 3, 3);
  ctx.fillRect(star19, 111, 3, 3);
  ctx.fillRect(124, 65, 3, 3);
  ctx.fillRect(248, 167, 3, 3);
  ctx.fillRect(207, 130, 3, 3);
  ctx.fillRect(194, 67, 3, 3);
  ctx.fillRect(star20, 395, 3, 3);
  ctx.fillRect(380, 107, 3, 3);
  ctx.fillRect(350, 290, 3, 3);
  ctx.fillRect(260, 230, 3, 3);
  ctx.fillRect(80, 235, 3, 3);
  ctx.fillRect(200, 290, 3, 3);


  //Cloud 1
  ctx.fillStyle = cloudColour2;
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

  ctx.fillStyle = cloudColour1;
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
  ctx.fillStyle = cloudColour2;
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

  ctx.fillStyle = cloudColour1;
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
  phaseSize = phaseSize + phaseSpeed

  if (phaseSize <= 90) {
    phaseX = phaseX - 1.43;
    phaseY = phaseY + 0.95;
    phaseSpeed = 1;
  }

  if (phaseSize >= 90) {
    phaseX = phaseX - 1.43;
    phaseY = phaseY + 0.95;
    phaseSpeed = -1;
  }

  if (phaseY >= 200) {
    phaseX = 300;
    phaseY = 0;
    phaseSize = 20;
  }

  //Bg size change 
  bgC1 = bgC1 + bgCSpeed
  bgC2 = bgC2 + bgCSpeed

  if (phaseY <= 83) {
    bgCSpeed = -0.5;
  }

  if (phaseY >= 83) {
    bgCSpeed = 0.5;
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

  if (cloud1C4 >= 310) {
    cloudSpeed = -0.5;
  }

  if (cloud1C4 <= 160) {
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

  if (cloud2C4 >= 590) {
    cloud2Speed = -0.5;
  }

  if (cloud2C1 <= 350) {
    cloud2Speed = 0.5;
  }

  if (moonColour == "rgb(255, 239, 202)") {
    phaseSpeed = 0;
    bgCSpeed = 0;

  }

  //Stars
  if (frame % 20 == 0 ||frame % 19 == 0 || frame % 21 == 0 || frame % 18 == 0 || frame % 22 == 0 || frame % 17 == 0 || frame % 23 == 0 || frame % 25 == 0 || frame % 26 == 0 || frame % 27 == 0) {
    star1 = -20;
    star10 = -20;
    star13 = -20;
    star5 = -20;
    star9 = -20;
    star3 = -20;
    star11 = -20;
  } else if (frame % 13 == 0 || frame % 12 == 0 || frame % 14 == 0 || frame % 11 == 0 || frame % 15 == 0 || frame % 10 == 0 || frame % 33 == 16 || frame % 9 == 0 || frame % 8 == 0) {
    star17 = -20;
    star12 = -20;
    star8 = -20;
    star14 = -20;
    star2 = -20;
  } else if (frame % 31 == 0 || frame % 30 == 0 || frame % 32 == 0 || frame % 29 == 0 || frame % 33 == 0 || frame % 28 == 0 || frame % 34 == 0 || frame % 35 == 0 || frame % 36 == 0  || frame % 37 == 0  || frame % 38 == 0  || frame % 39 == 0  || frame % 40 == 0) {
    star4 = -20;
    star6 = -20;
    star19 = -20;
    star20 = -20;
    star18 = -20;
    star7 = -20;
    star15 = -20;
    star16 = -20;
  } else {
    star1 = 330;
    star2 = 40;
    star3 = 370;
    star4 = 500;
    star5 = 550;
    star6 = 278;
    star7 = 33;
    star8 = 519;
    star9 = 547;
    star10 = 585;
    star11 = 302;
    star12 = 390;
    star13 = 573;
    star14 = 213;
    star15 = 13;
    star16 = 33;
    star17 = 325;
    star18 = 460;
    star19 = 149;
    star20 = 260;
  }

  ctx.font = "10px Georgia";
  ctx.fillText("Frame: " + frame, 20, 20);

  requestAnimationFrame(draw);
}

//Keyboard event
document.addEventListener("keypress", keyboardHandler);

function keyboardHandler(event) {
  if (event.code == "KeyD") {
    moonColour = "rgb(255, 239, 202)"
    bgColour1 = "rgb(255, 158, 110)";
    bgColour2 = "rgb(255, 190, 121)";
    bgColour3 = "rgb(255, 220, 139)";
    starColour = "rgb(0, 0, 0, 0)";
    phaseColour = "rgb(0, 0, 0, 0)"
    cloudColour1 = "white"
    cloudColour2 = "rgb(255, 249, 234)"
    bgCSpeed = 0
    phaseSpeed = 0
  }
}

//Text
// ctx.font = "10px Arial";
// ctx.fillStyle = "rgb(70, 82, 121)";
// ctx.fillText("Jenaya F", 560, 398);

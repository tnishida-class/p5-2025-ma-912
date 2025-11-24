// 2D アニメーションゲームのようなインタラクション
let x, y;
let vx, vy;
const g = 1;

function setup(){
  createCanvas(windowWidth, windowHeight);
  x = width / 2;
  y = height / 2;
  vx = 0;
  vy = 2;
}

function windowResized(){
  resizeCanvas(windowWidth, windowHeight);
}

function draw(){
  background(160, 192, 255);
  

  // 地面を描く
  const groundY = height * 0.8;
  fill(64, 192, 64);
  rect(0, groundY, width, height - groundY);

  const size = height * 0.1; // キャラクターのサイズ

  // キャラクターを描く
  fill(0);
  ellipse(x, y, size, size);
  
  // 速くなりすぎないように制限
  vx = constrain(vx, -20, 20);
  vy = constrain(vy, -20, 20);

  // BLANK[1] キャラクターの左右移動
  const speed = 5;
  if(keyIsDown(LEFT_ARROW)){x -= speed; }
  if(keyIsDown(RIGHT_ARROW)){x += speed; }
  if(keyIsDown("A".charCodeAt(0)) && keyIsDown(LEFT_ARROW)){x -= speed; }
  if(keyIsDown("A".charCodeAt(0)) && keyIsDown(RIGHT_ARROW)){x += speed; }

  // BLANK[2] 重力とジャンプ
  vy += g;
  y += vy;
  if(y + size / 2 > groundY){
    y = groundY - size / 2 ;
    vy = 0;  
  }
  if(keyIsDown(" ".charCodeAt(0)) && y  == groundY - size / 2){ 
    vy = -20;
  }
}
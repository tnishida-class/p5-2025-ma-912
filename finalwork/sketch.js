let num = 10;        // 人数
let radius = 150;    // 円の半径
let angleOffset = 0; // 回転量
let speed = 0.5;     // 回転速度
let colors = [];     // 各人の体色



function setup() {
  createCanvas(500, 500);
  angleMode(DEGREES);

  // 一人ずつ違うパステルカラーを作る（配列）
  for (let i = 0; i < num; i++) {
    colors.push(color(
      random(180, 255),
      random(180, 255),
      random(180, 255)
    ));
  }
}

function draw() {
  
 background(220, 200, 255);  // パステル紫一色

 if (keyIsDown(LEFT_ARROW)){
  speed -= 0.3;
 }

  if (keyIsDown(RIGHT_ARROW)){
  speed += 0.3;
 }
  translate(width/2, height/2);

  rotate(angleOffset);
  angleOffset += speed;

  let pos = [];

  // 人の位置を計算して配列に入れる
  for (let i = 0; i < num; i++) {
    let angle = (360 / num) * i;
    let x = cos(angle) * radius;
    let y = sin(angle) * radius;
    pos.push({x, y, angle});
  }

  noStroke();

  // 人を描く（自作関数 drawPerson 使用）
  for (let i = 0; i < num; i++) {
    let p = pos[i];
    drawPerson(p.x, p.y, p.angle, colors[i]);
  }
}

// --------------------------------
// 人を描く関数（自作）
// --------------------------------
function drawPerson(x, y, angle, bodyColor) {
  push();
  translate(x, y);
  rotate(angle + 90);

  // 体
  fill(bodyColor);
  ellipse(0, 15, 30, 40);

  // 頭
  fill(255);
  ellipse(0, -10, 22);

  // 手と足
  stroke(255);
  strokeWeight(4);

  // 左手
  line(-10, 5, -45, 5);

  // 右手
  line(10, 5, 45, 5);

  // 足
  line(-8, 35, -8, 55);
  line(8, 35, 8, 55);

  pop();
}


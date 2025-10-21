// チェッカー
function setup() {
  createCanvas(200, 200);
  background(255);
  const size = width / 8; // マスの一辺の長さ
  noStroke();
  for(let i = 0; i < 8; i++){
    for(let j = 0; j < 8; j++){
      // BLANK[1] ヒント： rectのx座標は size * i, y座標は size * j
      if((i + j) % 2 == 1){
        fill(150);
      rect(size * i, size * j, size, size);
    }
      if(j < 3 && (i + j) % 2 == 1){
        fill(255, 0, 0);
        ellipse(size * 0.5 + size * i, size * 0.5 + size * j, size * 0.9, size * 0.9);
      }
      if(j > 4 && (i + j) % 2 == 1){
        fill(0);
        ellipse(size * 0.5 + size * i, size * 0.5 + size * j, size * 0.9, size * 0.9);
      }
    }
  }
}
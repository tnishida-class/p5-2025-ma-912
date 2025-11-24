// カレンダーを描画しよう
function setup(){
  createCanvas(200, 200);
  drawCalendar(2025, 10);
}

function drawCalendar(y, m){
  for(let i = 0; i < 7; i++){
    const x = i * width / 7;
    const y = 20;
    if(i != 0 && i != 6){ 
    text(dayOfWeekAsString(i), x, y);
    } else if(i == 0){
      push();
      fill(255, 0, 0);
      text(dayOfWeekAsString(i), x, y);
      pop();
    } else {
      push();
      fill(0, 0, 255);
      text(dayOfWeekAsString(i), x, y);
      pop();
    }
  }

  let dow = dayOfWeek(y, m, 1);
  let y_1 = 0;
  for(let d = 1; d <= daysInMonth(y, m); d++){
    // BLANK[3] まずは daysInYear, dayOfWeek を作ろう
    let x = dow * width / 7;
    if(dow == 0){
      y_1 = 20 + floor((d - 1) / 7) * 20;
    }
    if(dow != 0 && dow != 6){
      text(d, x, 40 + y_1);
    } else if(dow == 0){
      push();
      fill(255, 0, 0);
      text(d, x, 40 + y_1);
      pop();
    } else {
      push();
      fill(0, 0, 255);
      text(d, x, 40 + y_1);
      pop();
    }
    dow = (dow + 1) % 7;
  }
}

function isLeapYear(y){
  return (y % 4 == 0) && (y % 100 != 0) || (y % 400 == 0);
}

function daysInYear(y){
  // BLANK[1] hint: 閏年なら366日、そうでなければ365日
  return isLeapYear(y) ? 366 : 365;
}

function daysInMonth(y, m){
  if(m == 2){
    return isLeapYear(y) ? 29 : 28;
  }
  else if(m == 4 || m == 6 || m == 9 || m == 11){
    return 30;
  }
  else{
    return 31;
  }
}

function dayOfYear(y, m, d){
  let count = 0;
  for(let i = 1; i < m; i++){
    count += daysInMonth(y, i);
  }
  return count + d;
}

function dayOfWeek(y, m, d){
  // BLANK[2] hint: 曜日がわかる日からの経過日数を求め7の剰余を取る　たとえば1970年1月1日木曜日
  const baseYear = 1970;
  let totalDays = 0;
  for(let year = baseYear; year < y; year++){
    totalDays += daysInYear(year);
  }
  totalDays += dayOfYear(y, m, d) - 1;
  return (4 + totalDays) % 7;
}

function dayOfWeekAsString(dow){
  const a = ["日", "月", "火", "水", "木", "金", "土"];
  return a[dow];
}
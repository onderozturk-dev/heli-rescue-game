function updateTank() {
  if (!currentTank) return;
  let t = currentTank;

  if (isHeliInRange(t, helicopter)) {
    const tankCX = t.x + t.w/2;
    const heliCX = helicopter.x + helicopter.w/2;
    if (Math.abs(tankCX - heliCX) > 5) {
      t.speed = 2;
      if (skor > 4) t.speed=4;
      if (tankCX < heliCX) {
        t.x += t.speed;
        t.direction = "right";
      } else {
        t.x -= t.speed;
        t.direction = "left";
      }
    } else {
      t.speed = 0;
    }
  } else {
    t.speed = 0;
  }
}

function isHeliInRange(_, heli) {
  return (heli.y + heli.h) > canvas.height * 0.50;
}
function shootTankBullet(tank) {
  if (!isHeliInRange(tank, helicopter)) return;

  let tx = tank.x + tank.w/2;
  let ty = tank.y + tank.h/2;
  let hx = helicopter.x + helicopter.w/2;
  let hy = helicopter.y + helicopter.h/2;

  let dx = hx - tx;
  let dy = hy - ty;
  let mag = Math.sqrt(dx*dx + dy*dy);
  if (mag < 0.0001) return;

  dx /= mag;
  dy /= mag;

  let speed = 15;
  tankBullets.push({
    x: tx,
    y: ty,
    w: 6,
    h: 6,
    vx: dx * speed,
    vy: dy * speed
  });
}

function updateTankBullets() {
  for (let i = tankBullets.length - 1; i >= 0; i--) {
    let b = tankBullets[i];
    b.x += b.vx;
    b.y += b.vy;

    if (
      b.x < -50 || b.x > canvas.width + 50 ||
      b.y < -50 || b.y > canvas.height + 50
    ) {
      tankBullets.splice(i, 1);
      continue;
    }

    // Helikoptere çarptı mı
    if (isCollidingRect(b, helicopter)) {
      can--;
      document.getElementById("can").textContent = can;
      tankBullets.splice(i, 1);

      if (can <= 0) {
        alert("Oyun Bitti! Helikopter vuruldu...");
        window.location.reload();
      }
    }
  }
}

function shootHeliBullet() {
  if (!heliCanShoot) return; 
  if (mermiSayisi <= 0) return; // Mermi kalmadıysa ateş etme

  heliCanShoot = false;
  mermiSayisi--;
  document.getElementById("mermi").textContent = mermiSayisi;

  const bw = 6, bh = 10;
  let bullet = {
    w: bw,
    h: bh,
    speed: 12
  };

  if (currentImageIndex === 0) { 
    bullet.x = helicopter.x + helicopter.w - bw / 2;
    bullet.y = helicopter.y + helicopter.h / 2;
    bullet.vx = bullet.speed; 
    bullet.vy = 0;
  } else if (currentImageIndex === 2) {
    bullet.x = helicopter.x - bw / 2;
    bullet.y = helicopter.y + helicopter.h / 2;
    bullet.vx = -bullet.speed; 
    bullet.vy = 0;
  } else { 
    bullet.x = helicopter.x + helicopter.w / 2 - bw / 2;
    bullet.y = helicopter.y + helicopter.h;
    bullet.vx = 0;
    bullet.vy = bullet.speed;
  }

  heliBullets.push(bullet);
}

function updateHeliBullets() {
  for (let i = heliBullets.length - 1; i >= 0; i--) {
    let b = heliBullets[i];
    b.x += b.vx;
    b.y += b.vy;

    if (
      b.x < -50 || b.x > canvas.width + 50 ||
      b.y < -50 || b.y > canvas.height + 50
    ) {
      heliBullets.splice(i, 1);
      continue;
    }

    if (currentTank && isCollidingRect(b, currentTank)) {
      removeTank();
      heliBullets.splice(i, 1);
    }
  }
}

function gameLoop() {
  update();
  draw();
}

function update() {
  if (motorCalisti) {
    handleHeliMovement();
    if (helicopter.hasPerson && people[helicopter.personIndex]) {
      let p = people[helicopter.personIndex];
      p.x = helicopter.x + helicopter.w/2 - p.w/2;
      p.y = helicopter.y + helicopter.h - 5;
    }
    if (helicopter.hasPerson && isColliding(helicopter, baseArea)) {
      helicopter.hasPerson = false;
      people.splice(helicopter.personIndex, 1);
      helicopter.personIndex = -1;
      skor++;
      document.getElementById("skor").textContent = skor;

      if (skor % 10 === 0) {
        mermiSayisi += MERMI_ARTIS;      
        document.getElementById("mermi").textContent = mermiSayisi;
      }
    }

    updateTank();
    updateTankBullets();
    updateHeliBullets();
    checkPersonPickup();
  }
}

function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  ctx.fillStyle = "rgba(255, 0, 0, 0.5)";
  ctx.fillRect(baseArea.x, baseArea.y, baseArea.w, baseArea.h);

  for (let i = 0; i < people.length; i++) {
    if (helicopter.hasPerson && helicopter.personIndex === i) {
      continue;
    }
    let p = people[i];
    ctx.drawImage(humanImg, p.x, p.y, p.w, p.h);
  }

  if (currentTank) {
    if (currentTank.direction === "right") {
      ctx.drawImage(tankRightImg, currentTank.x, currentTank.y, currentTank.w, currentTank.h);
    } else {
      ctx.drawImage(tankLeftImg, currentTank.x, currentTank.y, currentTank.w, currentTank.h);
    }
  }

  ctx.fillStyle = "red";
  for (let b of tankBullets) {
    ctx.fillRect(b.x, b.y, b.w, b.h);
  }

  ctx.fillStyle = "red";
  for (let b of heliBullets) {
    ctx.fillRect(b.x, b.y, b.w, b.h);
  }

  ctx.save();
  const heliCX = helicopter.x + helicopter.w / 2;
  const heliCY = helicopter.y + helicopter.h / 2;
  ctx.translate(heliCX, heliCY);
  ctx.rotate(helicopter.currentAngle * Math.PI / 180);
  let heliImg = loadedHeliImages[currentImageIndex];
  if (heliImg.complete) {
    ctx.drawImage(heliImg, -helicopter.w/2, -helicopter.h/2, helicopter.w, helicopter.h);
  } else {
    ctx.fillStyle = "green";
    ctx.fillRect(-helicopter.w/2, -helicopter.h/2, helicopter.w, helicopter.h);
  }
  ctx.restore();
}

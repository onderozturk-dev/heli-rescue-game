function spawnPeople() {
  if (!motorCalisti) return;
  const howMany = Math.floor(Math.random() * 2) + 1;
  for (let i = 0; i < howMany; i++) {
    const size = 30;
    const rx = Math.random() * (canvas.width - size);
    people.push({
      x: rx,
      y: canvas.height - size,
      w: size,
      h: size
    });
  }
  checkGameOverByCrowd();
}

function spawnTank() {
  const tw = 90, th = 45;

  let fromLeft = Math.random() < 0.5; 
  if (fromLeft) {
    currentTank = {
      x: 20,
      y: canvas.height - th,
      w: tw,
      h: th,
      speed: 0,
      direction: "right"
    };
  } else {
    currentTank = {
      x: canvas.width - tw - 20,
      y: canvas.height - th,
      w: tw,
      h: th,
      speed: 0,
      direction: "left"
    };
  }

  if (tankShootInterval) clearInterval(tankShootInterval);
    tankShootInterval = setInterval(() => {
    if (currentTank && isHeliInRange(currentTank, helicopter)) {
      shootTankBullet(currentTank);
    }
  }, 2000);
}

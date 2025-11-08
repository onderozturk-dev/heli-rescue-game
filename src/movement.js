function handleHeliMovement() {
  if (keys.ArrowLeft && !keys.ArrowRight) {
    helicopter.desiredAngle = -30;
  } else if (keys.ArrowRight && !keys.ArrowLeft) {
    helicopter.desiredAngle = 30;
  } else {
    helicopter.desiredAngle = 0;
  }
  if (keys.ArrowLeft) {
    helicopter.x -= helicopter.speed;
    if (helicopter.x < 0) helicopter.x = 0;
  }
  if (keys.ArrowRight) {
    helicopter.x += helicopter.speed;
    if (helicopter.x > canvas.width - helicopter.w) {
      helicopter.x = canvas.width - helicopter.w;
    }
  }
  if (keys.ArrowUp) {
    helicopter.y -= helicopter.speed;
    if (helicopter.y < 0) helicopter.y = 0;
  }
  if (keys.ArrowDown) {
    helicopter.y += helicopter.speed;
    if (helicopter.y > canvas.height - helicopter.h) {
      helicopter.y = canvas.height - helicopter.h;
    }
  }
  let diff = helicopter.desiredAngle - helicopter.currentAngle;
  helicopter.currentAngle += diff * 0.1;
}

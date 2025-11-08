function isColliding(r1, r2) {
  let w2 = r2.w || 0;
  let h2 = r2.h || 0;
  return !(
    r1.x + r1.w < r2.x ||
    r1.x > r2.x + w2 ||
    r1.y + r1.h < r2.y ||
    r1.y > r2.y + h2
  );
}

function isCollidingRect(a, b) {
  return !(
    a.x + a.w < b.x ||
    a.x > b.x + b.w ||
    a.y + a.h < b.y ||
    a.y > b.y + b.h
  );
}

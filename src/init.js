function init() {
  audio = new Audio();
  audio.src = "assets/helises.ogg";
  audio.volume = 0.5;
  audio.loop = true;
  canvas = document.getElementById("myCanvas");
  ctx = canvas.getContext("2d");
  resizeCanvas();

  helicopter.y = canvas.height - helicopter.h;

  setInterval(gameLoop, 16);

  document.addEventListener("keydown", onKeyDown);
  document.addEventListener("keyup", onKeyUp);
  window.addEventListener("resize", resizeCanvas);
}

function resizeCanvas() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}

function onKeyDown(e) {
  if (e.code in keys) {
    keys[e.code] = true;
  }

  if ((e.code === "ShiftLeft" || e.code === "ShiftRight") && !motorCalisti) {
    motorCalisti = true;
    document.getElementById("motorDurumu").textContent = "Çalışıyor";
    audio.play().catch((error) => {
      console.error("Ses oynatılamadı: ", error);
      alert("Ses tarayıcı tarafından engellendi. Lütfen tarayıcı ayarlarını kontrol edin.");
    });
    setInterval(spawnPeople, 8000); 
    spawnTank(); 
  }

  if (e.code === "KeyC") {
    currentImageIndex = (currentImageIndex + 1) % helicopterImages.length;
  }

  if (e.code === "Space") {
    shootHeliBullet();
  }
}

function onKeyUp(e) {
  if (e.code in keys) {
    keys[e.code] = false;
  }
  if (e.code === "Space") {
    heliCanShoot = true;
  }
}

function removeTank() {
  currentTank = null;
  clearInterval(tankShootInterval);

  // 1sn sonra yeni tank
  setTimeout(spawnTank, 1000);
}

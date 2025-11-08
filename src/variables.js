let canvas, ctx;
let skor = 0;
let can = 3;
let motorCalisti = false;

let mermiSayisi = 5;
const MERMI_BASLANGIC = 20;
const MERMI_ARTIS = 5;

let heliCanShoot = true;

const TANK_RANGE = 150;

const helicopterImages = ["assets/right.png", "assets/front.png", "assets/left.png"];
let currentImageIndex = 0;
let loadedHeliImages = [];
for (let src of helicopterImages) {
  let img = new Image();
  img.src = src;
  loadedHeliImages.push(img);
}

const helicopter = {
  x: 100,
  y: 0,
  w: 120,
  h: 50,
  speed: 3.5,
  hasPerson: false,
  personIndex: -1,
  currentAngle: 0,
  desiredAngle: 0
};

const people = [];
let humanImg = new Image();
humanImg.src = "assets/human.png";

let currentTank = null;
let tankLeftImg = new Image();
tankLeftImg.src = "assets/tankleft.png";
let tankRightImg = new Image();
tankRightImg.src = "assets/tankright.png";

const tankBullets = [];
let tankShootInterval = null;

const heliBullets = [];

const baseArea = {
  x: 20,
  y: 120,
  w: 150,
  h: 20
};

let keys = {
  ArrowUp: false,
  ArrowDown: false,
  ArrowLeft: false,
  ArrowRight: false,
  ShiftLeft: false,
  ShiftRight: false,
  KeyC: false,
  Space: false
};
let audio;

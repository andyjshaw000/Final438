import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.17.2/firebase-app.js';
import { getFirestore, addDoc, collection, query, orderBy, limit, getDocs, onSnapshot } from 'https://www.gstatic.com/firebasejs/9.17.2/firebase-firestore.js';

// Project created by Andy Shaw for HCDE 438 at the University of Washington

const firebaseConfig = {
  apiKey: "AIzaSyCTX1d5j_PhFYCmfOJeWREeo9bVurJM9KQ",
  authDomain: "finalgame-d1901.firebaseapp.com",
  projectId: "finalgame-d1901",
  storageBucket: "finalgame-d1901.appspot.com",
  messagingSenderId: "713369379883",
  appId: "1:713369379883:web:9f486572415a15c167766e"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

function submitScore() {
  try {
      const docRef = addDoc(collection(db, "players"), {
        username: NAMEINPUT.value(),
        score: SCORE,
      });
  } catch (e) {
    console.error(e);
  }
}

async function getScore() {
  const q = query(collection(db, "players"), orderBy("score", "desc"), limit(5));
  const querySnapshot = await getDocs(q);
  const data = {allScores: []};
  querySnapshot.forEach((doc) => {
      data.allScores.push(doc.data());
  });
  if (LEADERS) {
    LEADERS.html("Leaderboard");
    let emptyli = createDiv("");
    emptyli.style("text-align", "left");
    emptyli.style("display", "flex");
    emptyli.style("padding-top", windowHeight / 40 + "px");
    emptyli.style("font-size", windowWidth / 60 + "px");
    let namediv = createDiv("Name");
    namediv.size(windowWidth / 3, windowHeight / 40);
    let scorediv = createDiv("Score");
    scorediv.size(windowWidth / 6, windowHeight / 40);
    emptyli.child(namediv);
    emptyli.child(scorediv);
    LEADERS.child(emptyli);
    data.allScores.forEach(({username, score}) => {
      let li = createDiv("");
      li.style("text-align", "left");
      li.style("display", "flex");
      li.style("padding-top", windowHeight / 40 + "px");
      li.style("font-size", windowWidth / 80 + "px");
      let liname = createDiv(username);
      liname.size(windowWidth / 3, windowHeight / 40);
      let liscore = createDiv(score);
      liscore.size(windowWidth / 6, windowHeight / 40);
      li.child(liname);
      li.child(liscore);
      LEADERS.child(li);
    });
  }
}

onSnapshot(
  collection(db, "players"),
  (snapshot) => {
    getScore();
  }, (e) => {
    console.error(e);
  }
);

document.onvisibilitychange = function() {
  if (document.visibilityState === "hidden") {
    noLoop();
    clearInterval(TIMERID);
    PAUSED = true;
    BGMUSIC.setVolume(.01);
    BOSSMUSIC.setVolume(.01);
  } else {
    startTime();
    loop();
    BGMUSIC.setVolume(.025);
    BOSSMUSIC.setVolume(.03);
    PAUSED = false;
  }
};

let DEBUG = false;
let NAMEINPUT;
let LEADERS;
let BOSSSTART;
let WEAPONCHOSEN;
let CHOSEORBS;
let CHOSESWORD;
let SWORDDAMAGE;
let BG;
let FIREIMG2;
let WATERIMG2;
let AIRIMG2;
let EARTHIMG2;
let SUNIMG2;
let DEFENSEIMG2;
let SPEEDIMG2;
let HEALTHIMG2;
let MOUSEIMG;
let WASDIMG;
let x1;
let y1;
let x2;
let y2;
let PLAYER;
let PLAYERHEALTH;
let SCORE;
let EXP;
let LVL;
let EXPPOINTS;
let ENEMIES;
let SHOOTENEMIES;
let FASTENEMIES;
let BOSSENEMIES;
let TIME;
let ORBS;
let SHADOWORBS;
let SWORDS;
let BOMBS;
let HEALTHS;
let PLAYERSPEED;
let BULLETDAMAGE;
let PLAYERMAXHEALTH;
let EARTH;
let EARTHON;
let AIR;
let AIRON;
let BOUNCESPEED;
let xdirection;
let ydirection;
let WATERON;
let WATER;
let FIRE;
let FIREON;
let FIRECT;
let WATERCT;
let AIRCT;
let EARTHCT;
let SUNCT;
let DEFENSECT;
let SPEEDCT;
let HEALTHCT;
let RESISTANCE;
let FIREBALLDAMAGE;
let WATERFIELDDAMAGE;
let BOUNCERDAMAGE;
let ROTATORDAMAGE;
let BGMUSIC;
let BOSSMUSIC;
let BOMBSOUND;
let HEALTHSOUND;
// let EXPERIENCESOUND;
// let SUNATKSOUND;
let UPGRADESOUND;
let SUNLVLUPSOUND;
let WATERLVLUPSOUND;
let FIRELVLUPSOUND;
let AIRLVLUPSOUND;
let EARTHLVLUPSOUND;
let SPEEDLVLUPSOUND;
let HEALTHLVLUPSOUND;
let DEFENSELVLUPSOUND;
let PLAYERRIGHTIMG;
let PLAYERLEFTIMG;
let ENEMYLEFTIMG;
let ENEMYRIGHTIMG;
let SHOOTENEMYLEFTIMG;
let SHOOTENEMYRIGHTIMG;
let FASTENEMYLEFTIMG;
let FASTENEMYRIGHTIMG;
let BOSSRIGHTIMG;
let BOSSLEFTIMG;
let FIREIMG;
let WATERIMG;
let AIRIMG;
let EARTHIMG;
let ORBIMG;
let SHADOWORBIMG;
let SWORDIMG_L;
let SWORDIMG_R;
let SWORDIMG_U;
let SWORDIMG_D;
let BOMBIMG;
let HEALTHIMG;
let EXPIMG;
let PLAYERSTANDLEFTIMG;
let PLAYERSTANDRIGHTIMG;
let FACING;
let TIMERID;
let LOSESOUND;
let PAUSED;
let PLAYEROLDX;
let PLAYEROLDY;
let PAUSE;
let UPGRADEDESC = {0:["Add a Fireball", "Fire burn through enemies dealing massive damage!"], 1:["Add an Earthwall", "Indestructible earth surround you, preventing enemies from getting near you. Enemies hit are permanently slowed."], 2:["Increase Speed", "Move faster to dodge and weave past enemies."], 3:["Increase Health", "More health makes you able to take more damage for longer and increase your vision."], 4:["Increase Defense", "Bolster your armor and take less damage from enemies."], 5:["Power up your Airball", "Enemies won't know when it's coming, but when it does, it's too late."], 6:["Increase Sun Damage", "Shadows try to avoid the sun as much as possible, as it does massive damage."], 7:["Power up your Waterfield", "Surround yourself in an endless whirlpool that slows enemies in the tide."]};

p5.disableFriendlyErrors = true;

window.preload = () => {
  PLAYERSTANDLEFTIMG = loadAnimation("images/left1.png");
  PLAYERSTANDRIGHTIMG = loadAnimation("images/right1.png");
  PLAYERRIGHTIMG = loadAnimation("images/right2.png", 3);
  PLAYERRIGHTIMG.frameDelay = 12;
  PLAYERLEFTIMG = loadAnimation("images/left2.png", 3);
  PLAYERLEFTIMG.frameDelay = 12;
  ENEMYRIGHTIMG = loadAnimation("images/enemy2.png");
  ENEMYLEFTIMG = loadAnimation("images/enemy.png");
  SHOOTENEMYRIGHTIMG = loadAnimation("images/shootenemy2.png");
  SHOOTENEMYLEFTIMG = loadAnimation("images/shootenemy.png");
  FASTENEMYRIGHTIMG = loadAnimation("images/runenemy2.png");
  FASTENEMYLEFTIMG = loadAnimation("images/runenemy.png");
  BOSSRIGHTIMG = loadAnimation("images/boss2.png");
  BOSSLEFTIMG = loadAnimation("images/boss.png");
  FIREIMG = loadAnimation("images/fire.png");
  WATERIMG = loadAnimation("images/water1.png", 9);
  WATERIMG.frameDelay = 8;
  AIRIMG = loadAnimation("images/air.png");
  EARTHIMG = loadAnimation("images/earth.png");
  ORBIMG = loadAnimation("images/sun.png");
  SHADOWORBIMG = loadAnimation("images/shadoworb.png");
  SWORDIMG_L = loadAnimation("images/sword2.png");
  SWORDIMG_R = loadAnimation("images/sword.png");
  SWORDIMG_U = loadAnimation("images/sword3.png");
  SWORDIMG_D = loadAnimation("images/sword4.png");
  BOMBIMG = loadAnimation("images/bomb.png");
  HEALTHIMG = loadAnimation("images/health.png");
  EXPIMG = loadAnimation("images/experience.png");
  let musicnumber = Math.ceil(Math.random() * 3);
  soundFormats("mp3");
  BGMUSIC = loadSound("music/background" + musicnumber + ".mp3");
  BOSSMUSIC = loadSound("music/boss.mp3");
  LOSESOUND = loadSound("music/lose");
  BOMBSOUND = loadSound("music/bomb");
  HEALTHSOUND = loadSound("music/health");
  // EXPERIENCESOUND = loadSound("music/experience");
  UPGRADESOUND = loadSound("music/selectability");
  // SUNATKSOUND = loadSound("music/sunorb");
  WATERLVLUPSOUND = loadSound("music/water");
  FIRELVLUPSOUND = loadSound("music/fireballs");
  AIRLVLUPSOUND = loadSound("music/air");
  EARTHLVLUPSOUND = loadSound("music/earth");
  SPEEDLVLUPSOUND = loadSound("music/speed");
  HEALTHLVLUPSOUND = loadSound("music/healthincrease");
  DEFENSELVLUPSOUND = loadSound("music/defense");
  SUNLVLUPSOUND = loadSound("music/sun");
};

window.setup = () => {
  initialize();
};

function initialize() {
  noSmooth();
  PAUSE = createButton("Pause");
  PAUSE.style("border-radius", windowWidth / 220 + "px");
  PAUSE.style("font-size", windowWidth / 120 + "px");
  PAUSE.style("border", "none");
  PAUSE.size(windowWidth / 20, windowHeight / 30);
  PAUSE.position(windowWidth / 35, windowHeight / 15);
  PAUSE.mousePressed(() => {
    if (!PAUSED) {
      PAUSE.html("Play");
      noLoop();
      clearInterval(TIMERID);
      PAUSED = true;
      BGMUSIC.setVolume(.01);
      BOSSMUSIC.setVolume(.01);
    } else {
      PAUSE.html("Pause");
      startTime();
      loop();
      BGMUSIC.setVolume(.025);
      BOSSMUSIC.setVolume(.03);
      PAUSED = false;
    }
  });
  PLAYER = new Sprite(windowWidth / 2, windowHeight / 2, 20, 40);
  startTime();
  resetStats();
  groupInit();
  physicsInit();
  visualInit();
  createCanvas(windowWidth, windowHeight);
	while (EXP.length < 30) {
    new EXP.Sprite();
    EXP.x = () => Math.random() * windowWidth;
    EXP.y = () => Math.random() * windowHeight;
	}
  overlapCheck();
  backgroundmusic();
}

function backgroundmusic() {
  BGMUSIC.play();
  BGMUSIC.loop();
  BGMUSIC.setVolume(.025);
  userStartAudio();
}

function visualInit() {
  let imagenumber = Math.ceil(Math.random() * 4);
  BG = loadImage("images/tile" + imagenumber + ".jpeg");
  FIREIMG2 = loadImage("images/fire.png");
  WATERIMG2 = loadImage("images/water1.png");
  AIRIMG2 = loadImage("images/air.png");
  EARTHIMG2 = loadImage("images/earth.png");
  SUNIMG2 = loadImage("images/sun.png");
  DEFENSEIMG2 = loadImage("images/defense.png");
  SPEEDIMG2 = loadImage("images/speed.png");
  HEALTHIMG2 = loadImage("images/healthup.png");
  MOUSEIMG = loadImage("images/mouse.png");
  WASDIMG = loadImage("images/wasd.png");
  ENEMIES.addAnimation("ENEMYLEFTIMG", ENEMYLEFTIMG);
  ENEMIES.addAnimation("ENEMYRIGHTIMG", ENEMYRIGHTIMG);
  SHOOTENEMIES.addAnimation("SHOOTENEMYLEFTIMG", SHOOTENEMYLEFTIMG);
  SHOOTENEMIES.addAnimation("SHOOTENEMYRIGHTIMG", SHOOTENEMYRIGHTIMG);
  FASTENEMIES.addAnimation("FASTENEMYLEFTIMG", FASTENEMYLEFTIMG);
  FASTENEMIES.addAnimation("FASTENEMYRIGHTIMG", FASTENEMYRIGHTIMG);
  BOSSENEMIES.addAnimation("BOSSLEFTIMG", BOSSLEFTIMG);
  BOSSENEMIES.addAnimation("BOSSRIGHTIMG", BOSSRIGHTIMG);
  WATER.addAnimation("WATERIMG", WATERIMG);
  PLAYER.addAnimation("right", PLAYERRIGHTIMG);
	PLAYER.addAnimation("left", PLAYERLEFTIMG);
  PLAYER.addAnimation("PLAYERSTANDRIGHTIMG", PLAYERSTANDRIGHTIMG);
	PLAYER.addAnimation("PLAYERSTANDLEFTIMG", PLAYERSTANDLEFTIMG);
  AIR.addAnimation("AIRIMG", AIRIMG);
  EARTH.addAnimation("EARTHIMG", EARTHIMG);
  FIRE.addAnimation("FIREIMG", FIREIMG);
  SHADOWORBS.addAnimation("SHADOWORBIMG", SHADOWORBIMG);
  ORBS.addAnimation("ORBIMG", ORBIMG);
  SWORDS.addAnimation("SWORDIMG_L", SWORDIMG_L);
  SWORDIMG_L.offset.x = -45;
  SWORDIMG_L.offset.y = -45;
  SWORDS.addAnimation("SWORDIMG_R", SWORDIMG_R);
  SWORDIMG_R.offset.x = 45;
  SWORDIMG_R.offset.y = 45;
  SWORDS.addAnimation("SWORDIMG_U", SWORDIMG_U);
  SWORDIMG_U.offset.x = 45;
  SWORDIMG_U.offset.y = -45;
  SWORDS.addAnimation("SWORDIMG_D", SWORDIMG_D);
  SWORDIMG_D.offset.x = -45;
  SWORDIMG_D.offset.y = 45;
  HEALTHS.addAnimation("HEALTHIMG", HEALTHIMG);
  BOMBS.addAnimation("BOMBIMG", BOMBIMG);
  EXP.addAnimation("EXPIMG", EXPIMG);
}

function resetStats() {
  PLAYEROLDX = PLAYER.x;
  PLAYEROLDY = PLAYER.y;
  BOSSSTART = false;
  WEAPONCHOSEN = false;
  CHOSEORBS = false;
  CHOSESWORD = false;
  FACING = "right";
  PAUSED = false;
  x1 = 0;
  y1 = 0;
  x2 = windowWidth;
  y2 = windowHeight;
  PLAYERHEALTH = 100;
  PLAYERMAXHEALTH = 100;
  SCORE = 0;
  EXPPOINTS = 10;
  LVL = 1;
  TIME = 1;
  if (DEBUG) {
    PLAYERHEALTH = 100000;
    // PLAYERHEALTH = 1;
    PLAYERMAXHEALTH = 100000;
    EXPPOINTS = 29;
    // TIME = 600;
    TIME = 280;
    // TIME = 180;
    // TIME = 35;
  }
  PLAYERSPEED = 3.25;
  BULLETDAMAGE = 840;
  SWORDDAMAGE = 540;
  EARTHON = false;
  AIRON = false;
  xdirection = 1;
  ydirection = 1;
  WATERON = false;
  FIREON = false;
  FIRECT = 0;
  WATERCT = 0;
  AIRCT = 0;
  EARTHCT = 0;
  SUNCT = 0;
  DEFENSECT = 0;
  SPEEDCT = 0;
  HEALTHCT = 0;
  RESISTANCE = 1;
  FIREBALLDAMAGE = 320;
  WATERFIELDDAMAGE = 4;
  BOUNCERDAMAGE = 1450;
  ROTATORDAMAGE = 520;
  BOUNCESPEED = 15;
}

function chooseWeapon() {
  noLoop();
  PAUSE.attribute("disabled", "");
  clearInterval(TIMERID);
  fill(0, 0, 0, 180);
  rect(0, 0, windowWidth, windowHeight);
  let optionsdescription = ["Orbs attack enemies from afar. Great for beginners", "Swords slash through multiple enemies at close range"];
  let options = ["Select Sun Orb", "Select Sun Sword"];
  for (let i = 0; i < 2; i++) {
    let buttonback = createButton(optionsdescription[i]);
    buttonback.style("border-radius", windowWidth / 80 + "px");
    buttonback.style("background-image", "radial-gradient(#FFD654 21%, #FFF054 80%)");
    buttonback.style("color", "#373737");
    buttonback.style("font-size", windowWidth / 50 + "px");
    buttonback.style("border", windowWidth / 200 + "px solid black");
    buttonback.size(windowWidth / 4, 2 * windowHeight / 3);
    buttonback.position(i * windowWidth / 3 + windowWidth / 26 + windowWidth / 6, windowHeight / 5);
    let button = createButton(options[i]);
    button.style("border-radius", windowWidth / 120 + "px");
    button.style("font-size", windowWidth / 80 + "px");
    button.style("background-color", "white");
    button.style("border", "1px solid");
    button.size(windowWidth / 10, windowHeight / 15);
    button.position(i * windowWidth / 3 + 3 * windowWidth / 26 + windowWidth / 6, 4 * windowHeight / 5 - 20);
    button.attribute = options[i];
    button.mousePressed(() => {
      WEAPONCHOSEN = true;
      if (button.attribute === "Select Sun Orb") {
        CHOSEORBS = true;
      } else if (button.attribute === "Select Sun Sword") {
        CHOSESWORD = true;
      }
      startTime();
      loop();
      PAUSE.removeAttribute("disabled");
      let buttons = selectAll("button");
      for (let i = 1; i < buttons.length; i++) {
        buttons[i].remove();
      }
    });
  }
}

function groupInit() {
  BOMBS = new Group();
  EARTH = new Group();
  HEALTHS = new Group();
  ORBS = new Group();
  SHADOWORBS = new Group();
  SWORDS = new Group();
  AIR = new Group();
  WATER = new Group();
  ENEMIES = new Group();
  SHOOTENEMIES = new ENEMIES.Group();
  FASTENEMIES = new ENEMIES.Group();
  BOSSENEMIES = new ENEMIES.Group();
	EXP = new Group();
  FIRE = new Group();
}

function physicsInit() {
  PLAYER.collider = "kinematic";
  SWORDS.collider = "kinematic";
  PLAYER.rotationLock = true;
  AIR.x = PLAYER.x;
  AIR.y = PLAYER.y;
  ENEMIES.rotationLock = true;
}

function overlapCheck() {
  PLAYER.overlaps(EXP, expCollect);
  ENEMIES.colliding(PLAYER, damagePlayer);
  PLAYER.overlaps(ORBS);
  PLAYER.overlaps(BOMBS, bombCollect);
  PLAYER.overlaps(HEALTHS, hpCollect);
  PLAYER.overlaps(EARTH);
  PLAYER.overlaps(FIRE);
  PLAYER.overlaps(WATER);
  PLAYER.overlaps(AIR);
  PLAYER.overlaps(SWORDS);
  SHADOWORBS.collides(PLAYER, damagePlayerOrb);
  BOSSENEMIES.collides(PLAYER, damagePlayerCharge);
  BOSSENEMIES.colliding(PLAYER, damagePlayer);

  EXP.overlaps(EXP);
  EXP.overlaps(ORBS);
  EXP.overlaps(ENEMIES);
  EXP.overlaps(BOMBS);
  EXP.overlaps(HEALTHS);
  EXP.overlaps(EARTH);
  EXP.overlaps(AIR);
  EXP.overlaps(WATER);
  EXP.overlaps(FIRE);
  EXP.overlaps(SWORDS);
  EXP.overlaps(SHADOWORBS);

  ENEMIES.collides(ENEMIES);
  ENEMIES.overlaps(BOMBS);
  ENEMIES.overlaps(HEALTHS);
  FIRE.overlapping(ENEMIES, fireballToEnemy);
  EARTH.collides(ENEMIES, earthToEnemy);
  AIR.overlaps(ENEMIES, airToEnemy);
  WATER.overlapping(ENEMIES, waterToEnemy);
  ORBS.collides(ENEMIES, orbToEnemy);
  SWORDS.collides(ENEMIES, swordToEnemy);
  ENEMIES.overlaps(SHADOWORBS);

  ORBS.overlaps(ORBS);
  ORBS.overlaps(BOMBS);
  ORBS.overlaps(HEALTHS);
  ORBS.overlaps(EARTH);
  ORBS.overlaps(AIR);
  ORBS.overlaps(WATER);
  ORBS.overlaps(FIRE);

  BOMBS.overlaps(BOMBS);
  BOMBS.overlaps(HEALTHS);
  BOMBS.overlaps(EARTH);
  BOMBS.overlaps(AIR);
  BOMBS.overlaps(WATER);
  BOMBS.overlaps(FIRE);

  HEALTHS.overlaps(HEALTHS);
  HEALTHS.overlaps(EARTH);
  HEALTHS.overlaps(AIR);
  HEALTHS.overlaps(WATER);
  HEALTHS.overlaps(FIRE);

  EARTH.overlaps(EARTH);
  EARTH.overlaps(AIR);
  EARTH.overlaps(WATER);
  EARTH.overlaps(FIRE);

  AIR.overlaps(WATER);
  AIR.overlaps(FIRE);

  WATER.overlaps(FIRE);

  FIRE.overlaps(FIRE);

  SWORDS.overlaps(ORBS);
  SWORDS.overlaps(SWORDS);
  SWORDS.overlaps(BOMBS);
  SWORDS.overlaps(HEALTHS);
  SWORDS.overlaps(EARTH);
  SWORDS.overlaps(AIR);
  SWORDS.overlaps(WATER);
  SWORDS.overlaps(FIRE);

  SHADOWORBS.overlaps(SHADOWORBS);
  SHADOWORBS.overlaps(ORBS);
  SHADOWORBS.overlaps(SWORDS);
  SHADOWORBS.overlaps(BOMBS);
  SHADOWORBS.overlaps(HEALTHS);
  SHADOWORBS.overlaps(EARTH);
  SHADOWORBS.overlaps(AIR);
  SHADOWORBS.overlaps(WATER);
  SHADOWORBS.overlaps(FIRE);
}

function startTime() {
  TIMERID = setInterval(function() {
    TIME += 1;
  }, 1000);
}

function expCollect(PLAYER, EXP) {
  // EXPERIENCESOUND.play();
  // EXPERIENCESOUND.setVolume(.05);
  EXP.remove();
  EXPPOINTS += 1;
  checkLevel();
}

function bombCollect(PLAYER, bomb) {
  BOMBSOUND.play();
  BOMBSOUND.setVolume(.25);
  fill(255, 255, 255, 160);
  rect(0, 0, windowWidth, windowHeight);
  bomb.remove();
  for (let i = 0; i < ENEMIES.length; i++) {
    bombToEnemy(bomb, ENEMIES[i]);
  }
}

function hpCollect(PLAYER, health) {
  HEALTHSOUND.play();
  HEALTHSOUND.setVolume(.25);
  health.remove();
  PLAYERHEALTH = PLAYERMAXHEALTH;
}

function damagePlayer(PLAYER) {
  PLAYERHEALTH -= RESISTANCE * TIME / 1000;
  fill(255, 0, 0, 25);
  rect(0, 0, windowWidth, windowHeight);
}

function damagePlayerOrb(shadoworb) {
  PLAYERHEALTH -= RESISTANCE * TIME / 100;
  shadoworb.remove();
  fill(255, 0, 0, 25);
  rect(0, 0, windowWidth, windowHeight);
}

function damagePlayerCharge(charge) {
  PLAYERHEALTH -= RESISTANCE * TIME / 220;
  fill(255, 0, 0, 100);
  rect(0, 0, windowWidth, windowHeight);
}

function orbToEnemy(weapon, enemy) {
  enemy.life -= BULLETDAMAGE;
  enemyDeadUpdate(enemy);
  weapon.remove();
}

function swordToEnemy(weapon, enemy) {
  enemy.life -= SWORDDAMAGE;
  enemyDeadUpdate(enemy);
}

function fireballToEnemy(weapon, enemy) {
  enemy.life -= FIREBALLDAMAGE;
  enemyDeadUpdate(enemy);
}

function waterToEnemy(weapon, enemy) {
  enemy.life -= WATERFIELDDAMAGE;
  if (enemy.drag != -2 && WATERON) {
    enemy.drag = -1;
  }
  enemyDeadUpdate(enemy);
}

function airToEnemy(weapon, enemy) {
  enemy.life -= BOUNCERDAMAGE;
  enemyDeadUpdate(enemy);
}

function earthToEnemy(weapon, enemy) {
  enemy.life -= ROTATORDAMAGE;
  enemy.drag = -2;
  enemyDeadUpdate(enemy);
}

function bombToEnemy(weapon, enemy) {
  enemy.life -= 1300;
  enemyDeadUpdate(enemy);
}

function enemyDeadUpdate(enemy) {
  if (enemy.life <= 0) {
    if (BOSSENEMIES.includes(enemy)) {
      for (let i = 0; i < 50; i++) {
        new EXP.Sprite(PLAYER.x, PLAYER.y);
      }
      TIME += 1;
      startTime();
      BOSSSTART = false;
      BOSSMUSIC.stop();
      BGMUSIC.play();
    } else {
      new EXP.Sprite(enemy.x, enemy.y);
    }
    if (Math.random() * 1000 > 998.5) {
      new BOMBS.Sprite(enemy.x - 10, enemy.y - 10);
    }
    if (Math.random() * 1000 > 998.25) {
      new HEALTHS.Sprite(enemy.x + 10, enemy.y - 10);
    }
    enemy.remove();
    SCORE += Math.ceil(500 * TIME / windowWidth);
  }
}

function checkLevel() {
  if (EXPPOINTS < 268) {
    LVL = EXPPOINTS / 10;
  } else {
    LVL = Math.pow(EXPPOINTS, 1 / 1.7);
  }
  if (EXPPOINTS % 30 === 0 && EXPPOINTS < 240 || EXPPOINTS === 250 || EXPPOINTS === 324 || EXPPOINTS === 421 || EXPPOINTS === 529 || EXPPOINTS === 646 || EXPPOINTS === 773 || EXPPOINTS === 909 || EXPPOINTS === 1054 || EXPPOINTS === 1207 || EXPPOINTS === 1370 || EXPPOINTS === 1540 || EXPPOINTS === 1719 || EXPPOINTS === 1905 || EXPPOINTS === 2100 || EXPPOINTS === 2303 || EXPPOINTS === 2512 || EXPPOINTS === 2729 || EXPPOINTS === 2953 || EXPPOINTS === 3185 || EXPPOINTS === 3424 || EXPPOINTS === 3670 || EXPPOINTS === 3923 || EXPPOINTS === 4183 || EXPPOINTS === 4450 || EXPPOINTS === 4724 || EXPPOINTS === 5004) {
    redraw();
    UPGRADESOUND.play();
    UPGRADESOUND.setVolume(.1);
    generateUpgrades();
  }
}

function generateUpgrades() {
  noLoop();
  PAUSE.attribute("disabled", "");
  clearInterval(TIMERID);
  fill(0, 0, 0, 180);
  rect(0, 0, windowWidth, windowHeight);
  let option1 = Math.floor(Math.random() * 8);
  let option2 = Math.floor(Math.random() * 8);
  let option3 = Math.floor(Math.random() * 8);
  while (option2 === option1) {
    option2 = Math.floor(Math.random() * 8);
  }
  while (option3 === option1 || option3 === option2) {
    option3 = Math.floor(Math.random() * 8);
  }
  let options = [option1, option2, option3];
  for (let i = 0; i < 3; i++) {
    let buttonback = createButton(UPGRADEDESC[options[i]][1]);
    buttonback.style("border-radius", windowWidth / 80 + "px");
    if (options[i] === 0) {
      buttonback.style("background-image", "radial-gradient(#FDFF7A 21%, #FF4040 80%)");
    } else if (options[i] === 1) {
      buttonback.style("background-image", "radial-gradient(#B0B0B0 21%, #8C5400 80%)");
    } else if (options[i] === 2) {
      buttonback.style("background-image", "radial-gradient(#F4FF00 21%, #FF0000 80%)");
    } else if (options[i] === 3) {
      buttonback.style("background-image", "radial-gradient(#FFE6E6 21%, #FF1515 80%)");
    } else if (options[i] === 4) {
      buttonback.style("background-image", "radial-gradient(#C8C8C8 21%, #333333 80%)");
    } else if (options[i] === 5) {
      buttonback.style("background-image", "radial-gradient(#DDFFFD 21%, #54FFF5 90%)");
    } else if (options[i] === 6) {
      buttonback.style("background-image", "radial-gradient(#FFD654 21%, #FFF054 80%)");
    } else if (options[i] === 7) {
      buttonback.style("background-image", "radial-gradient(#5BB5D6 21%, #548AFF 80%)");
    }
    buttonback.style("color", "#373737");
    buttonback.style("font-size", windowWidth / 50 + "px");
    buttonback.style("border", windowWidth / 200 + "px solid black");
    buttonback.size(windowWidth / 4, 2 * windowHeight / 3);
    buttonback.position(i * windowWidth / 3 + windowWidth / 26, windowHeight / 5);
    let button = createButton(UPGRADEDESC[options[i]][0]);
    button.style("border-radius", windowWidth / 120 + "px");
    button.style("font-size", windowWidth / 80 + "px");
    button.style("background-color", "white");
    button.style("border", "1px solid");
    button.size(windowWidth / 10, windowHeight / 15);
    button.position(i * windowWidth / 3 + 3 * windowWidth / 26, 4 * windowHeight / 5 - 20);
    button.attribute = options[i];
    button.mousePressed(() => {
    if (button.attribute === 0) {
      if (!FIREON) {
        FIREON = true;
      }
      FIRECT += 1;
      FIREBALLDAMAGE += 50;
      FIRELVLUPSOUND.play();
      FIRELVLUPSOUND.setVolume(.3);
    } else if (button.attribute === 1) {
      EARTHCT += 1;
      EARTHON = true;
      new EARTH.Sprite();
      ROTATORDAMAGE += 25;
      EARTHLVLUPSOUND.play();
      EARTHLVLUPSOUND.setVolume(.08);
    } else if (button.attribute === 2) {
      SPEEDCT += 1;
      PLAYERSPEED += .25;
      SPEEDLVLUPSOUND.play();
      SPEEDLVLUPSOUND.setVolume(.2);
    } else if (button.attribute === 3) {
      HEALTHCT += 1;
      let healthgained = PLAYERMAXHEALTH / 2;
      PLAYERMAXHEALTH += healthgained;
      PLAYERHEALTH += healthgained;
      HEALTHLVLUPSOUND.play();
      HEALTHLVLUPSOUND.setVolume(.3);
    } else if (button.attribute === 4) {
      DEFENSECT += 1;
      RESISTANCE *= .96;
      DEFENSELVLUPSOUND.play();
      DEFENSELVLUPSOUND.setVolume(.2);
    } else if (button.attribute === 5) {
      AIRCT += 1;
      if (!AIRON) {
        new AIR.Sprite();
        AIRON = true;
      } else {
        BOUNCESPEED += 1;
        BOUNCERDAMAGE += 300;
      }
      AIRLVLUPSOUND.play();
      AIRLVLUPSOUND.setVolume(.25);
    } else if (button.attribute === 6) {
      SUNCT += 1;
      BULLETDAMAGE += 300;
      SWORDDAMAGE += 200;
      SUNLVLUPSOUND.play();
      SUNLVLUPSOUND.setVolume(.1);
    } else if (button.attribute === 7) {
      if (!WATERON) {
        new WATER.Sprite();
        WATER.layer = 0;
        WATERON = true;
      } else {
        WATERFIELDDAMAGE += .6;
      }
      WATERCT += 1;
      WATERLVLUPSOUND.play();
      WATERLVLUPSOUND.setVolume(.2);
    }
    startTime();
    loop();
    PAUSE.removeAttribute("disabled");
    let buttons = selectAll("button");
    for (let i = 1; i < buttons.length; i++) {
      buttons[i].remove();
    }
  });

  }
}

function spawnEnemy() {
  let enemy;
  if (TIME > 180) {
    let randomnum = Math.random() * 2;
    if (randomnum > (1.88 + 15 / TIME)) {
      enemy = new SHOOTENEMIES.Sprite();
      enemy.life = 100 + Math.pow(TIME, 1.25);
    } else if (randomnum > (1.78 + 15 / TIME)) {
      enemy = new FASTENEMIES.Sprite();
      enemy.life = 100 + TIME;
    } else {
      enemy = new ENEMIES.Sprite();
      enemy.life = 100 + Math.pow(TIME, 1.35);
    }
  } else {
    enemy = new ENEMIES.Sprite();
    enemy.life = 100 + Math.pow(TIME, 1.35);
  }
  if (Math.random() * 2 > 1) {
    if (Math.random() * 2 > 1) {
      enemy.x = Math.random() * (PLAYER.x + windowWidth / 2);
      enemy.y = PLAYER.y - windowHeight / 2;
    } else {
      enemy.x = Math.random() * (PLAYER.x + windowWidth / 2);
      enemy.y = PLAYER.y + windowHeight / 2;
    }
  } else {
    if (Math.random() * 2 > 1) {
      enemy.x = PLAYER.x - windowWidth / 2;
      enemy.y = Math.random() * (PLAYER.y + windowHeight / 2);
    } else {
      enemy.x = PLAYER.x + windowWidth / 2;
      enemy.y = Math.random() * (PLAYER.y + windowHeight / 2);
    }
  }
}

window.mousePressed = () => {
  if (CHOSEORBS) {
    // SUNATKSOUND.play();
    // SUNATKSOUND.setVolume(.2);
    let orb = new ORBS.Sprite(PLAYER.x, PLAYER.y, 15, 15);
    orb.moveTowards(mouse.x + PLAYER.mouse.x, mouse.y + PLAYER.mouse.y);
    orb.speed = 20;
  } else if (CHOSESWORD && SWORDS.length < 1) {
    // SUNATKSOUND.play();
    // SUNATKSOUND.setVolume(.2);
    let sword = new SWORDS.Sprite([[PLAYER.x, PLAYER.y], [mouse.x + PLAYER.mouse.x, mouse.y + PLAYER.mouse.y]]);
    if (PLAYER.x > mouse.x + PLAYER.mouse.x) {
      if (PLAYER.y > mouse.y + PLAYER.mouse.y) {
        sword.ani = "SWORDIMG_L";
      } else {
        sword.ani = "SWORDIMG_D";
      }
    } else {
      if (PLAYER.y > mouse.y + PLAYER.mouse.y) {
        sword.ani = "SWORDIMG_U";
      } else {
        sword.ani = "SWORDIMG_R";
      }
    }
    sword.width = 80;
    sword.height = 80;
    sword.rotate(90, 4.6).then(() => {
      SWORDS.remove();
    });
  }
};

// window.windowResized = () => {
//   resizeCanvas(windowWidth, windowHeight);
// }

window.draw = () => {
  if (Math.floor(PLAYERHEALTH) <= 0) {
    noLoop();
    PAUSE.attribute("disabled", "");
    clearInterval(TIMERID);
    BGMUSIC.stop();
    BOSSMUSIC.stop();
    LOSESOUND.play();
    LOSESOUND.loop();
    LOSESOUND.setVolume(.3);
    let buttonback = createButton("");
    buttonback.style("border-radius", windowWidth / 60 + "px");
    buttonback.style("background-image", "radial-gradient(red 21%, black 80%)");
    buttonback.style("border", "none");
    buttonback.size(windowWidth / 2, 2 * windowHeight / 3);
    buttonback.position(windowWidth / 6 + 2 / 24 * windowWidth, windowHeight / 5);
    let div = createDiv("Your Score: " + SCORE);
    div.style("color", "black");
    div.style("font-size", windowWidth / 60 + "px");
    div.size(windowWidth / 6, windowHeight / 15);
    div.style("text-align","center");
    div.position(windowWidth / 3 + 3 * windowWidth / 26 - 2 * windowWidth / 70, 7 * windowHeight / 11);
    LEADERS = createDiv("Leaderboard");
    LEADERS.style("color", "white");
    LEADERS.style("font-size", windowWidth / 45 + "px");
    LEADERS.size(windowWidth / 3, windowHeight / 15);
    LEADERS.style("text-align","center");
    LEADERS.position(windowWidth / 3 + windowWidth / 26 - 2 * windowWidth / 70, windowHeight / 5 + 60);
    NAMEINPUT = createInput("");
    NAMEINPUT.position(windowWidth / 3 + 2 * windowWidth / 26, 4 * windowHeight / 5 - 80);
    NAMEINPUT.style("border-radius", windowWidth / 280 + "px");
    NAMEINPUT.style("background-color", "white");
    NAMEINPUT.style("color", "red");
    NAMEINPUT.style("border", "black 2px solid");
    NAMEINPUT.size(windowWidth / 10, windowHeight / 20);
    let submitButton = createButton("Submit Score");
    submitButton.position(windowWidth / 3 + 5 * windowWidth / 26, 4 * windowHeight / 5 - 80);
    submitButton.style("border-radius", windowWidth / 280 + "px");
    submitButton.style("background-color", "white");
    submitButton.style("color", "red");
    submitButton.style("border", "black 2px solid");
    submitButton.style("font-size", windowWidth / 120 + "px");
    submitButton.size(windowWidth / 15, windowHeight / 17);
    submitButton.mousePressed(function() {
      submitScore();
      submitButton.remove();
      NAMEINPUT.remove();
    });
    getScore();
    let playagain = createButton("Play Again");
    playagain.style("border-radius", windowWidth / 280 + "px");
    playagain.style("background-color", "black");
    playagain.style("color", "white");
    playagain.style("border", "none");
    playagain.size(windowWidth / 10, windowHeight / 15);
    playagain.position(windowWidth / 3 + 3 * windowWidth / 26, 4 * windowHeight / 5 - 20);
    playagain.mousePressed(() => {
      allSprites.remove();
      clear();
      LOSESOUND.stop();
      initialize();
      TIME = 30;
      loop();
      PAUSE.removeAttribute("disabled");
      buttonback.remove();
      div.remove();
      playagain.remove();
      LEADERS.remove();
      NAMEINPUT.remove();
      submitButton.remove();
    });
  }
  if (frameCount % 120 === 0) {
    for (let i = 0; i < ORBS.length; i ++) {
      if (ORBS[i].x > PLAYER.x + 2 * windowWidth / 3 || ORBS[i].y > PLAYER.y + 2 * windowHeight / 3 || ORBS[i].x < PLAYER.x - 2 * windowWidth / 3 || ORBS[i].y < PLAYER.y - 2 * windowHeight / 3) {
        ORBS[i].remove();
      }
    }
    for (let i = 0; i < SHADOWORBS.length; i ++) {
      if (SHADOWORBS[i].x > PLAYER.x + 2 * windowWidth / 3 || SHADOWORBS[i].y > PLAYER.y + 2 * windowHeight / 3 || SHADOWORBS[i].x < PLAYER.x - 2 * windowWidth / 3 || SHADOWORBS[i].y < PLAYER.y - 2 * windowHeight / 3) {
        SHADOWORBS[i].remove();
      }
    }
  }
  clear();
  image(BG, x1, y1, windowWidth + 8, windowHeight + 8);
  image(BG, x2, y2, windowWidth + 8, windowHeight + 8);
  image(BG, x1, y2, windowWidth + 8, windowHeight + 8);
  image(BG, x2, y1, windowWidth + 8, windowHeight + 8);
  image(MOUSEIMG, windowWidth / 60, 18.2 * windowHeight / 20, windowWidth / 40, windowHeight / 20);
  image(WASDIMG, windowWidth / 60, 16.5 * windowHeight / 20, windowWidth / 35, windowHeight / 15);
  fill(65, 65, 65, TIME / 1 - PLAYERHEALTH * 2);
  rect(0, 0, windowWidth, windowHeight);
  if (x1 < -windowWidth){
    x1 = windowWidth;
  } else if (x1 > windowWidth) {
    x1 = -windowWidth;
  }
  if (x2 < -windowWidth){
    x2 = windowWidth;
  } else if (x2 > windowWidth) {
    x2 = -windowWidth;
  }
  if (y1 < -windowHeight){
    y1 = windowHeight;
  } else if (y1 > windowHeight) {
    y1 = -windowHeight;
  }
  if (y2 < -windowHeight){
    y2 = windowHeight;
  } else if (y2 > windowHeight) {
    y2 = -windowHeight;
  }
  if (frameCount % 230 === 0 && TIME > 20 && !BOSSSTART) {
    for (let i = 0; i < TIME * Math.pow(windowWidth, 2) / 20000000; i++) {
      if (ENEMIES.length < Math.pow(windowWidth, 2) / 20000) {
        spawnEnemy();
      }
    }
  }
  for (let i = 0; i < ENEMIES.length; i++) {
    if (!BOSSSTART && ENEMIES[i].x > PLAYER.x + 2 * windowWidth / 3 || !BOSSSTART && ENEMIES[i].y > PLAYER.y + 2 * windowHeight / 3 || !BOSSSTART && ENEMIES[i].x < PLAYER.x - 2 * windowWidth / 3 || !BOSSSTART && ENEMIES[i].y < PLAYER.y - 2 * windowHeight / 3) {
      ENEMIES[i].remove();
      spawnEnemy();
    }
    let enemydirection = Math.atan2(PLAYER.y - ENEMIES[i].y, PLAYER.x - ENEMIES[i].x) * 180 / Math.PI;
    ENEMIES[i].direction = enemydirection;
    ENEMIES[i].life += 1;
    if (FASTENEMIES.includes(ENEMIES[i])) {
      ENEMIES[i].speed = 2 + TIME / 100;
      if (ENEMIES[i].x < PLAYER.x) {
        ENEMIES[i].ani = "FASTENEMYRIGHTIMG";
      } else {
        ENEMIES[i].ani = "FASTENEMYLEFTIMG";
      }
    } else if (SHOOTENEMIES.includes(ENEMIES[i])) {
      if (frameCount % 360 === 0) {
        let shadoworb = new SHADOWORBS.Sprite(ENEMIES[i].x, ENEMIES[i].y, 15, 15);
        shadoworb.moveTowards(PLAYER.x, PLAYER.y);
        shadoworb.speed = TIME / 60;
      }
      ENEMIES[i].speed = 2 + TIME / 1000;
      if (ENEMIES[i].x < PLAYER.x) {
        ENEMIES[i].ani = "SHOOTENEMYRIGHTIMG";
      } else {
        ENEMIES[i].ani = "SHOOTENEMYLEFTIMG";
      }
    } else {
      ENEMIES[i].speed = 2 + TIME / 250;
      if (ENEMIES[i].x < PLAYER.x) {
        ENEMIES[i].ani = "ENEMYRIGHTIMG";
      } else {
        ENEMIES[i].ani = "ENEMYLEFTIMG";
      }
    }
    if (ENEMIES[i].drag === -1) {
      ENEMIES[i].speed = .25 * (2 + TIME / 250);
      ENEMIES[i].drag = 0;
    } else if (ENEMIES[i].drag === -2) {
      ENEMIES[i].speed = .5 * (2 + TIME / 250);
    }
  }
  if (kb.pressing("down") && kb.pressing("left")) {
    PLAYER.ani = "left";
    FACING = "left";
    PLAYER.move(PLAYERSPEED * 1.5, 135, PLAYERSPEED - 1);
    y1 -= PLAYERSPEED - 1;
    y2 -= PLAYERSPEED - 1;
    x1 += PLAYERSPEED - 1;
    x2 += PLAYERSPEED - 1;
	} else if (kb.pressing("down") && kb.pressing("right")) {
    PLAYER.ani = "right";
    FACING = "right";
    PLAYER.move(PLAYERSPEED * 1.5, 45, PLAYERSPEED - 1);
    y1 -= PLAYERSPEED - 1;
    y2 -= PLAYERSPEED - 1;
    x1 -= PLAYERSPEED - 1;
    x2 -= PLAYERSPEED - 1;
	} else if (kb.pressing("up") && kb.pressing("left")) {
    PLAYER.ani = "left";
    FACING = "left";
    PLAYER.move(PLAYERSPEED * 1.5, 225, PLAYERSPEED - 1);
    y1 += PLAYERSPEED - 1;
    y2 += PLAYERSPEED - 1;
    x1 += PLAYERSPEED - 1;
    x2 += PLAYERSPEED - 1;
	} else if (kb.pressing("up") && kb.pressing("right")) {
    PLAYER.ani = "right";
    FACING = "right";
    x1 -= PLAYERSPEED - 1;
    x2 -= PLAYERSPEED - 1;
    y1 += PLAYERSPEED - 1;
    y2 += PLAYERSPEED - 1;
    PLAYER.move(PLAYERSPEED * 1.5, 315, PLAYERSPEED - 1);
	} else if (kb.pressing("right")) {
    PLAYER.ani = "right";
    FACING = "right";
    x1 -= PLAYERSPEED;
    x2 -= PLAYERSPEED;
		PLAYER.move(PLAYERSPEED * 1.5, "right", PLAYERSPEED);
	} else if (kb.pressing("left")) {
    PLAYER.ani = "left";
    FACING = "left";
    x1 += PLAYERSPEED;
    x2 += PLAYERSPEED;
    PLAYER.move(PLAYERSPEED * 1.5, "left", PLAYERSPEED);
  } else if (kb.pressing("up")) {
    y1 += PLAYERSPEED;
    y2 += PLAYERSPEED;
    PLAYER.move(PLAYERSPEED * 1.5, "up", PLAYERSPEED);
	} else if (kb.pressing("down")) {
    PLAYER.move(PLAYERSPEED * 1.5, "down", PLAYERSPEED);
    y1 -= PLAYERSPEED;
    y2 -= PLAYERSPEED;
	} else {
    if (FACING === "right") {
      PLAYER.ani = "PLAYERSTANDRIGHTIMG";
    } else {
      PLAYER.ani = "PLAYERSTANDLEFTIMG";
    }
  }
  if (TIME <= 32) {
    let texttutorial = ["Fight against the shadow warriors who are plotting to attack the Sun.",
        "Be careful not to get near the shadows.", "Move around with WASD and dodge their necrotic attacks.", "Attack with your LMB and use abilities to defeat them.",
        "As you defeat more shadows, they'll drop sun souls.", "Use these souls to level up and become stronger.",
        "As you collect souls, you'll gain powers.",
        "Help save the Sun from danger. Good luck!"];
    fill("white");
    textSize(windowWidth / 50);
    textAlign(CENTER);
    text(texttutorial[Math.floor(TIME / 4)], windowWidth / 2, windowHeight / 4);
  }
  textAlign(CENTER);
  noFill();
  rect(windowWidth * 3 / 10, windowHeight / 10, windowWidth * 2 / 5, windowHeight / 20);
  rect(windowWidth * 97 / 200, windowHeight / 1.8, windowWidth * 3 / 100, windowHeight / 60);
  fill("green");
  rect(windowWidth * 3 / 10, windowHeight / 10, map(LVL - Math.floor(LVL), 0, 1, 0, windowWidth * 2 / 5), windowHeight / 20);
  fill("red");
  rect(windowWidth * 97 / 200, windowHeight / 1.8, map(PLAYERHEALTH, 0, PLAYERMAXHEALTH, 0, windowWidth * 3 / 100), windowHeight / 60);
  fill("white");
  stroke(45, 45, 45);
  strokeWeight(2.5);
  textSize(windowWidth / 70);
  text("Score: " + SCORE, windowWidth * 11 / 13, windowHeight / 20);
  let minutes = Math.floor(TIME / 60);
  let extraSeconds = TIME % 60;
  minutes = minutes < 10 ? "0" + minutes : minutes;
  extraSeconds = extraSeconds < 10 ? "0" + extraSeconds : extraSeconds;
  text("Time: " + minutes + ":" + extraSeconds, windowWidth / 15, windowHeight / 20);
  text(": Attack", windowWidth / 12.4, 18.9 * windowHeight / 20);
  text(": Move", windowWidth / 11.8, 17.4 * windowHeight / 20);
  text("Health: " + Math.floor(PLAYERHEALTH) + "/" + PLAYERMAXHEALTH, windowWidth * 10 / 13, windowHeight * 2 / 15);
  textSize(windowWidth / 60);
  text("Level: " + Math.floor(LVL), windowWidth / 2, windowHeight / 11);
  if (EARTHON) {
    for (let i = 1; i < EARTH.length + 1; i++) {
      let spacing = (i * 2 * Math.PI / EARTH.length);
      let circularx = Math.cos(frameCount / 20) * Math.cos((spacing));
      let circulary = Math.sin(frameCount / 20) * Math.sin((spacing));
      EARTH[i - 1].x = PLAYER.x + 150 * circularx;
      EARTH[i - 1].y = PLAYER.y + 150 * circulary;
    }
    for (let i = EARTHCT; i > 0; i--) {
      image(EARTHIMG2, 21 * windowWidth / 25, 19 * windowHeight / 20 - i  * windowHeight / 50, windowWidth / 50, windowWidth / 50);
    }
  }
  while (EXP.length > 200) {
    EXP[0].remove();
  }
  if (AIRON) {
    AIR.x = constrain(AIR.x, PLAYER.x - windowWidth / 2, PLAYER.x + windowWidth / 2);
    AIR.y = constrain(AIR.y, PLAYER.y - windowHeight / 2, PLAYER.y + windowHeight / 2);
    AIR.x += BOUNCESPEED * xdirection;
    AIR.y += BOUNCESPEED * ydirection;
    if (AIR.x > PLAYER.x + windowWidth / 2 || AIR.x < PLAYER.x - windowWidth / 2) {
      xdirection *= -1;
    }
    if (AIR.y > PLAYER.y + windowHeight / 2 || AIR.y < PLAYER.y - windowHeight / 2) {
      ydirection *= -1;
    }
    for (let i = AIRCT; i > 0; i--) {
      image(AIRIMG2, 22 * windowWidth / 25, 19 * windowHeight / 20 - i * windowHeight / 50, windowWidth / 50, windowWidth / 50);
    }
  }
  if (WATERON) {
    WATER.x = PLAYER.x;
    WATER.y = PLAYER.y;
    for (let i = WATERCT; i > 0; i--) {
      image(WATERIMG2, 23 * windowWidth / 25, 19 * windowHeight / 20 - i * windowHeight / 50, windowWidth / 50, windowWidth / 50);
    }
  }
  if (SWORDS[0]) {
    SWORDS[0].x = PLAYER.x;
    SWORDS[0].y = PLAYER.y;
  }
  camera.x = PLAYER.x;
  camera.y = PLAYER.y;
  if (FIREON && frameCount % 130 === 0) {
    for (let i = 0; i < FIRECT; i++) {
      let fireball = new FIRE.Sprite();
      fireball.x = PLAYER.x;
      fireball.y = PLAYER.y;
      fireball.speed = 20;
      let spacing = (i * 2 * Math.PI / FIRECT) + Math.PI / 2;
      fireball.moveTowards(PLAYER.x + 200 * Math.cos(spacing), PLAYER.y + 200 * Math.sin(spacing));
      if (FIRE[i].x > PLAYER.x + 2 * windowWidth / 3 || FIRE[i].y > PLAYER.y + 2 * windowHeight / 3 || FIRE[i].x < PLAYER.x - 2 * windowWidth / 3 || FIRE[i].y < PLAYER.y - 2 * windowHeight / 3) {
        FIRE[i].remove();
      }
    }
  }
  for (let i = FIRECT; i > 0; i--) {
    image(FIREIMG2, 24 * windowWidth / 25, 19 * windowHeight / 20 - i * windowHeight / 50, windowWidth / 50, windowWidth / 50);
  }
  for (let i = SUNCT; i > 0; i--) {
    image(SUNIMG2, 20 * windowWidth / 25, 19 * windowHeight / 20 - i * windowHeight / 50, windowWidth / 50, windowWidth / 50);
  }
  for (let i = DEFENSECT; i > 0; i--) {
    image(DEFENSEIMG2, 19 * windowWidth / 25, 19 * windowHeight / 20 - i * windowHeight / 50 - 2, windowWidth / 45, windowWidth / 45);
  }
  for (let i = HEALTHCT; i > 0; i--) {
    image(HEALTHIMG2, 18 * windowWidth / 25, 19 * windowHeight / 20 - i * windowHeight / 50, windowWidth / 55, windowWidth / 55);
  }
  for (let i = SPEEDCT; i > 0; i--) {
    image(SPEEDIMG2, 17 * windowWidth / 25, 19 * windowHeight / 20 - i * windowHeight / 50, windowWidth / 55, windowWidth / 55);
  }
  if (TIME > 15 && !WEAPONCHOSEN) {
    redraw();
    UPGRADESOUND.play();
    UPGRADESOUND.setVolume(.1);
    chooseWeapon();
  }
  if (DEBUG) {
    text("Frame Rate: " + Math.floor(getFrameRate()), windowWidth - 340, windowHeight / 20);
    text("Enemies: " + ENEMIES.length, windowWidth - 640, windowHeight / 20);
    text("EXP: " + EXP.length, windowWidth - 940, windowHeight / 20);
    text("All Sprites: " + allSprites.length, windowWidth - 1240, windowHeight / 20);
  }
  if (TIME % 300 === 0) {
    if (!BOSSSTART) {
      ENEMIES.remove();
    }
    BOSSSTART = true;
    clearInterval(TIMERID);
    if (ENEMIES.length < 1) {
      let enemy = new BOSSENEMIES.Sprite(PLAYER.x + windowWidth / 2, PLAYER.y);
      enemy.life = TIME * 200;
      BGMUSIC.stop();
      BOSSMUSIC.play();
      BOSSMUSIC.loop();
      BOSSMUSIC.setVolume(.03);
    }
    if (frameCount % 120 === 0) {
      PLAYEROLDX = PLAYER.x;
      PLAYEROLDY = PLAYER.y;
    }
    BOSSENEMIES[0].moveTowards(PLAYEROLDX, PLAYEROLDY);
    if (frameCount % 300 < 30) {
      BOSSENEMIES[0].speed = 1.5;
    } else {
      BOSSENEMIES[0].speed = 16 + TIME / 250;
    }
    if (BOSSENEMIES[0].x < PLAYER.x) {
      BOSSENEMIES[0].ani = "BOSSRIGHTIMG";
    } else {
      BOSSENEMIES[0].ani = "BOSSLEFTIMG";
    }
  }
};

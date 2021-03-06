var balX = 50;
var balY = 50;
var speedX = 2;
var speedY = 2;

/**
 * setup
 * de code in deze functie wordt één keer uitgevoerd door
 * de p5 library, zodra het spel geladen is in de browser
 */

function setup() {
  // Maak een canvas (rechthoek) waarin je je speelveld kunt tekenen
  createCanvas(1280, 720);
}

/**
 * draw
 * de code in deze functie wordt meerdere keren per seconde
 * uitgevoerd door de p5 library, nadat de setup functie klaar is
 */

function draw() {
   // maak de achtergrond blauw
   background('blue');

  // stel vulkleur in
  fill(255, 100, 255);

  // teken een cirkel
  ellipse(balX,balY,80,80);

  // beweeg de bal diagonaal
  balX = balX + speedX;
  balY = balY + speedY;

  // voorwaarden stellen voor randen
  if(balX => 1240) {
      speedX = speedX * -1;
  }

  if(balY => 680) {
      speedY = speedY * -1;
  }

  if(balX =< 40) {
      speedX = speedX * 1;
  }

  if(balY =< 40) {
      speedY = speedY * 1;
  }
}
var fixedRect, movingRect;

var game1, game2, game3, game4;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;
  game1 = createSprite(100,100,50,50);
  game2 = createSprite(200,100,50,50);
  game3 = createSprite(200,800,50,50);
  game4 = createSprite(400,100,50,50);

  game2.velocityY=5;
  game3.velocityY=-5;

  game1.shapeColor = "green";
  game2.shapeColor = "green";
  game3.shapeColor = "green";
  game4.shapeColor = "green";

  game1.debug = true;
  game2.debug = true;
  game3.debug = true;
  game4.debug = true;
}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

  isTouching(movingRect,game1);
  bounceOff(game2,game3);

  drawSprites();
}


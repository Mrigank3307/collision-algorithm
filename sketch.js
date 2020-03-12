var moving , fixed;

function setup() {
  createCanvas(800,400);
  moving = createSprite(400, 200, 50, 50);
  moving.debug = true;
moving.shapeColor = "green";

  fixed = createSprite (200,200,50,50);
  fixed.debug = true;
  fixed.shapeColor = "green";
}

function draw() {
  background(0);  

moving.x = World.mouseX;
moving.y = World.mouseY;

if (fixed.x - moving.x < fixed.width/2 + moving.width/2 && moving.x - fixed.x < fixed.width/2 + moving.width/2 && 
  moving.y - fixed.y < fixed.height/2 + moving.height/2 && fixed.y - moving.y < fixed.height/2 + moving.height/2){
    fixed.shapeColor = "white";
    moving.shapeColor = "red";   
  }

  else {
    fixed.shapeColor = "green";
    moving.shapeColor = "green";
  }

  drawSprites();
}
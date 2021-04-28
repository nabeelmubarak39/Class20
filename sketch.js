var moving, fixed;



function setup() {
  createCanvas(800,400);

   moving = createSprite(400, 200, 50, 50);
   fixed = createSprite(200, 200, 30, 20);

   moving.shapeColor = "green";
   fixed.shapeColor = "green";
}

function draw() {
  background(255,255,255);

 moving.x = World.mouseX;
 moving.y = World.mouseY;

 console.log(moving.y - fixed.y);

 if (moving.x - fixed.x < moving.width/2 + fixed.width/2 && fixed.x - moving.x < moving.width/2 + fixed.width/2 &&
  moving.y - fixed.y < moving.height/2 + fixed.height/2 && fixed.y - moving.y < moving.height/2 + fixed.height/2 ) {
  moving.shapeColor = "yellow";
  fixed.shapeColor = "yellow";
 }
 else{
  moving.shapeColor = "green";
  fixed.shapeColor = "green";

 }

  drawSprites();
}